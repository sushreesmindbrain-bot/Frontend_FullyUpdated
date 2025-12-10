export interface Agent {
  id: string;
  name: string;
  code: string;
  joiningDate: string;
  phone: string;
  email: string;
  status: "Active" | "Inactive" | "Suspended";
}
