// export interface Agent {
//   id: string;
//   code: string;

//   name: string;
//   email: string;
//   phone: string;
//   avatar?: string;

//   /* TABLE FIELDS */
//   type: "Agent" | "Customer";
//   kyc: "Approved" | "Pending" | "Rejected" | "-";
//   package: "Silver" | "Gold" | "Platinum" | "-";
//   joinDate: string;
//   status: "Active" | "Inactive" | "Pending KYC";
// }

// types.ts

// Tabs used in AgentDetailsPage and HistoryPage
export type AgentTab = "overview" | "kyc" | "team" | "earnings" | "history";

// Agent interface used throughout all pages
export interface Agent {
  id: string;
  code: string;
  name: string;
  email: string;
  phone: string;
  avatar?: string;

  /* TABLE FIELDS */
  type: "Agent" | "Customer";
  kyc: "Approved" | "Pending" | "Rejected" | "-";
  package: "Silver" | "Gold" | "Platinum" | "-";
  joinDate: string;
  status: "Active" | "Inactive" | "Pending KYC";

  /* OPTIONAL FIELDS USED IN DETAILS */
  lastActive?: string;
  sponsor?: string;
  leftLeg?: string;
  networkPosition?: string;

  /* Optional alternate naming used in popups */
  fullName?: string;
  agentCode?: string;
  currentPackageName?: string;
  currentBV?: number;

  /* Optional bank details */
  bankHolderName?: string;
  bankName?: string;
  bankAccountNumber?: string;
  bankIFSC?: string;
}



