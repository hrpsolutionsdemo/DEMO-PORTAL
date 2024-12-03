import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SLICE_BASE_NAME } from "./constants.ts";
import { apiCompanies } from "../../../services/CommonServices.ts";
import { BaseRootState } from "../../storeSetup.ts";

export interface SessionState {
  signedIn: boolean;
  token: string | null;
  bcToken: string | null;
  companyId: string;
  companies: any[];
  isLoading: boolean;
  error: string | null;
  preferredCompanyId: string;
  allowCompanyChange: boolean;
}

const initialState: SessionState = {
  signedIn: false,
  bcToken: null,
  token: null,
  companies: [],
  companyId: "",
  isLoading: false,
  error: null,
  preferredCompanyId: "",
  allowCompanyChange: false,
  // companyId:'0a8f9887-59e6-ee11-a200-6045bdac9e2f'
  //! development companyId
  // companyId: "ea47417e-805f-ef11-bfe4-6045bd43ea3c",
  //! test companyId
  // companyId: "ce611980-8097-ef11-8a6d-6045bd42628a",
  //! production companyId
  // companyId: "5219704f-f889-ef11-ac23-002248136f86",
};
export const fetchCompanies = createAsyncThunk(
  `${SLICE_BASE_NAME}/companies`,
  async (_, { rejectWithValue, getState }) => {
    try {
      const response = await apiCompanies();
      const state = getState() as BaseRootState;

      console.log(response.data);
      return { data: response.data, state };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const sessionSlice = createSlice({
  name: `${SLICE_BASE_NAME}/session`,
  initialState,
  reducers: {
    signInSuccess(state, action: PayloadAction<string>) {
      state.signedIn = true;
      state.token = action.payload;
      // state.bcToken = action.payload.bcToken;
    },
    bcTokenSuccess(state, action: PayloadAction<string>) {
      state.bcToken = action.payload;
    },
    setCompany(state, action: PayloadAction<string>) {
      state.companyId = action.payload;
    },
    setAllowCompanyChange(state, action: PayloadAction<boolean>) {
      state.allowCompanyChange = action.payload;
    },
    signOutSuccess() {
      // state.signedIn = false;
      // state.token = null;
      // state.bcToken = null;
      // state.companyId = initialState.companyId;
      return { ...initialState };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCompanies.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCompanies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.companies = action.payload.data.value;
        // If there's a preferred company and it exists in the companies list, use it
        if (
          state.preferredCompanyId &&
          action.payload.data.value.some(
            (company) => company.id === state.preferredCompanyId
          )
        ) {
          state.companyId = state.preferredCompanyId;
        }
        // Otherwise, set to first company if available
        else if (action.payload.data.value.length > 0) {
          // how can i get state in User  slice ( i want to ge the email )
          // if emai is shrp@reachoutmbuya.org the use
          const rootState = action.payload.state;
          if (rootState.auth.user.email === "shrp@reachoutmbuya.org") {
            state.companyId = action.payload.data.value[1].id;
            state.preferredCompanyId = action.payload.data.value[1].id;
          } else {
            state.companyId = action.payload.data.value[0].id;
            state.preferredCompanyId = action.payload.data.value[0].id;
          }
        }
      })
      .addCase(fetchCompanies.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});
export const {
  signInSuccess,
  signOutSuccess,
  bcTokenSuccess,
  setCompany,
  setAllowCompanyChange,
} = sessionSlice.actions;
export default sessionSlice.reducer;
