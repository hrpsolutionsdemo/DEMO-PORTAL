import { Routes } from "../../@types/routes.dto.ts";
import { lazy } from "react";

const appRoutes: Routes = [
    {
        key: "app-setup",
        path: "/app-setup",
        // component: lazy(() => import('../../pages/settings/AppSetup.tsx')),
        component: lazy(() => import('../../pages/setup/Setup.js')),
    },
    {
        key: "dashboard",
        path: "/dashboard",
        component: lazy(() => import('../../pages/dashboard/Dashboard.tsx')),
    },
    {
        key: "purchase-requisitions",
        path: "/purchase-requisitions",
        component: lazy(() => import('../../pages/purchases/PurchaseRequisition.tsx'))

    },

    {
        key: "add-purchase-requisitions",
        path: "/add-purchase-requisition",
        component: lazy(() => import('../../pages/purchases/AddPurchaseRequisition.tsx')),
    },
    {
        key: "purchase-requisition-detail",
        path: "/purchase-requisition-details/:id",
        component: lazy(() => import('../../pages/purchases/PurchaseRequisitionDetail.tsx')),
    },
    // ---------------------  payment requisitions -----------------------------------------
    {
        key: "payment-requisitions",
        path: "/payment-requisitions",
        component: lazy(() => import('../../pages/payment/PaymentRequisition.tsx'))
    },
    {
        key: "payment-requisitions",
        path: "/add-payment-requisition",
        component: lazy(() => import('../../pages/payment/AddPaymentRequisition.tsx'))
    },
    {
        key: "payment-requisition-detail",
        path: "/payment-requisition-details/:id",
        component: lazy(() => import('../../pages/payment/PaymentRequisitionDetail.tsx'))
    },


    // ---------------------  travel requisitions -----------------------------------------
    {
        key: "travel-requests",
        path: "/travel-requests",
        component: lazy(() => import('../../pages/travel/TravelRequsts.tsx')),
    },
    {
        key: "add-travel-request",
        path: "/add-travel-request",
        component: lazy(() => import('../../pages/travel/AddTravelRequest.tsx')),
    },
    {
        key: "travel-request-detail",
        path: "/travel-request-details/:id",
        component: lazy(() => import('../../pages/travel/TravelRequestDetails.tsx')),
    },

    // ----------------------------- leave -----------------------------------------
    {
        key: "leave-plans",
        path: "/leave-plans",
        component: lazy(() => import('../../pages/leave/LeavePlan.tsx'))
    }, {
        key: "add-leave-plan",
        path: "/add-leave-plan",
        component: lazy(() => import("../../pages/leave/AddLeavePlan.tsx"))
    },
    {
        key: "leave-plan-details",
        path: "/leave-plan-details/:id",
        component: lazy(() => import("../../pages/leave/LeavePlanDetails.tsx"))
    },

    // ---------------------------  stores --------------------------------
    {
        key: "stores-requests",
        path: "/stores-requests",
        component: lazy(() => import("../../pages/stores/StoresRequisitions.tsx"))
    },
    {
        key: "add-store-request",
        path: "/add-store-request",
        component: lazy(() => import("../../pages/stores/AddStoreRequests.tsx"))
    },
    {
        key: "store-request-details",
        path: "/store-request-details/:id",
        component: lazy(() => import("../../pages/stores/StoreRequestDetail.tsx"))
    },

    // ------------------------- approval ----------------------------------------
    {
        key: 'approvals',
        path: '/approvals',
        component: lazy(() => import("../../pages/approvals/Approval.tsx"))

    },
    {
        key: 'approve-purchase-requisition',
        path: '/approve-purchase-requisition/:documentNo',
        component: lazy(() => import("../../pages/purchases/ApprovePurchaseRequisition.tsx"))
    },
    {
        key: 'approve-payment-requisition',
        path: '/approve-payment-requisition/:documentNo',
        component: lazy(() => import("../../pages/payment/ApprovePaymentRequisition.tsx"))
    },
    // ------------------------ HR SECTION ----------------------------------------
    {
        key: 'bio-data',
        path: '/bio-data',
        component: lazy(() => import("../../pages/bio-data/BioData.tsx"))
    },

    // ------------------------ Time Sheets ----------------------------------------
    {
        key: 'time-sheets',
        path: '/time-sheets',
        component: lazy(() => import("../../pages/time-sheets/TimeSheets.tsx"))
    },
    {
        key: "time-sheet-details",
        path: "/time-sheet-details/:id",
        component: lazy(() => import("../../pages/time-sheets/TimeSheetDetails.tsx"))
    },

    {
        key: "approved-time-sheets",
        path: "/approved-time-sheets/:id",
        component: lazy(() => import("../../pages/time-sheets/ApproveTimeSheet.tsx"))
    }
    // {
    //     key: 'approved-time-sheets',
    //     path: '/approved-time-sheets',
    //     component: lazy(() => import("../../pages/time-sheets/ApprovedTimeSheets.tsx"))
    // }





]

export default appRoutes;