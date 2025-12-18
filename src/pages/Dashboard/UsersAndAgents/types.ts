export interface Agent {
  avatar: string | undefined;
  joinDate: ReactNode;
  id: string;
  name: string;
  code: string;
  joiningDate: string;
  phone: string;
  email: string;
  status: "Active" | "Inactive" | "Suspended";
}
