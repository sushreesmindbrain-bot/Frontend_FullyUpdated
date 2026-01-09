// import React, { useState } from "react";
// import {
//   Box,
//   Paper,
//   Typography,
//   Button,
//   Table,
//   TableHead,
//   TableRow,
//   TableCell,
//   TableBody,
//   IconButton,
//   Pagination,
//   Stack,
//   TextField,
//   MenuItem,
//   Chip,
// } from "@mui/material";
// import AddIcon from "@mui/icons-material/Add";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";

// import AddPaymentGateway from "./AppPaymentGateway";
// import type { Page } from "./MainParent";

// /* ================= TYPES ================= */

// interface Gateway {
//   name: string;
//   type: string;
//   merchantId: string;
//   status: "Active" | "Inactive";
// }

// interface Props {
//   onTabChange: (tab: Page) => void;
// }

// interface AddGatewayData {
//   gatewayName?: string;
//   gatewayType?: string;
//   merchantId?: string;
//   active?: boolean;
// }

// type RefundPolicy = "immediate" | "7days";

// /* ================= DATA ================= */

// const initialGateways: Gateway[] = [
//   {
//     name: "Razorpay",
//     type: "UPI, Cards, Net Banking",
//     merchantId: "rzp_test_123456",
//     status: "Active",
//   },
//   {
//     name: "PayPal",
//     type: "International Cards",
//     merchantId: "paypal_biz_789",
//     status: "Active",
//   },
//   {
//     name: "Paytm",
//     type: "Wallet, UPI",
//     merchantId: "paytm_merchant_456",
//     status: "Active",
//   },
// ];

// /* ================= COMPONENT ================= */

// const Payment: React.FC<Props> = ({ onTabChange }) => {
//   const [gateways, setGateways] = useState<Gateway[]>(initialGateways);
//   const [refundPolicy, setRefundPolicy] =
//     useState<RefundPolicy>("immediate");
//   const [openAdd, setOpenAdd] = useState<boolean>(false);

//   const handleAddGateway = (data: AddGatewayData) => {
//     setGateways((prev) => [
//       ...prev,
//       {
//         name: data.gatewayName ?? "New Gateway",
//         type: data.gatewayType ?? "-",
//         merchantId: data.merchantId ?? "-",
//         status: data.active ? "Active" : "Inactive",
//       },
//     ]);
//   };

//   return (
//     <Box sx={{ p: 3, bgcolor: "#f6f8fb", minHeight: "100vh" }}>
//       {/* TOP TABS */}
//       <Paper sx={{ p: 1.5, mb: 3 }}>
//         <Stack direction="row" spacing={1}>
//           <Button onClick={() => onTabChange("gst")}>GST & Taxes</Button>
//           <Button onClick={() => onTabChange("shipping")}>
//             Shipping & COD
//           </Button>
//           <Button variant="contained">Payment Gateways</Button>
//           <Button onClick={() => onTabChange("payout")}>Payout Bank</Button>
//           <Button disabled>Legal Content</Button>
//           <Button disabled>Localization</Button>
//         </Stack>
//       </Paper>

//       {/* PAYMENT GATEWAY CONFIGURATION */}
//       <Paper sx={{ p: 3, mb: 3 }}>
//         <Box display="flex" justifyContent="space-between" mb={2}>
//           <Typography fontWeight={600}>
//             Payment Gateway Configuration
//           </Typography>
//           <Button
//             variant="contained"
//             startIcon={<AddIcon />}
//             onClick={() => setOpenAdd(true)}
//           >
//             Add Gateway
//           </Button>
//         </Box>

//         <Table>
//           <TableHead sx={{ bgcolor: "#245e95" }}>
//             <TableRow>
//               {["Gateway", "Type", "Merchant ID", "Status", "Actions"].map(
//                 (h) => (
//                   <TableCell
//                     key={h}
//                     sx={{ color: "white", fontWeight: 500 }}
//                   >
//                     {h}
//                   </TableCell>
//                 )
//               )}
//             </TableRow>
//           </TableHead>

//           <TableBody>
//             {gateways.map((g, i) => (
//               <TableRow key={i}>
//                 <TableCell>{g.name}</TableCell>
//                 <TableCell>{g.type}</TableCell>
//                 <TableCell>{g.merchantId}</TableCell>
//                 <TableCell>
//                   <Chip
//                     label={g.status}
//                     color={g.status === "Active" ? "success" : "default"}
//                     size="small"
//                   />
//                 </TableCell>
//                 <TableCell>
//                   <IconButton color="success">
//                     <EditIcon />
//                   </IconButton>
//                   <IconButton color="error">
//                     <DeleteIcon />
//                   </IconButton>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>

//         <Box display="flex" justifyContent="center" mt={2}>
//           <Pagination count={14} shape="rounded" />
//         </Box>
//       </Paper>

//       {/* PAYMENT SETTINGS */}
//       <Paper sx={{ p: 3 }}>
//         <Typography fontWeight={600} mb={2}>
//           Payment Settings
//         </Typography>

//         <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
//           <Box sx={{ flex: "1 1 300px" }}>
//             <TextField
//               fullWidth
//               label="Payment Timeout (minutes)"
//               defaultValue={15}
//             />
//           </Box>

//           <Box sx={{ flex: "1 1 300px" }}>
//             <TextField
//               fullWidth
//               select
//               label="Auto-refund Failed Payments"
//               value={refundPolicy}
//               onChange={(e) =>
//                 setRefundPolicy(e.target.value as RefundPolicy)
//               }
//             >
//               <MenuItem value="immediate">Yes, immediately</MenuItem>
//               <MenuItem value="7days">After 7 Days</MenuItem>
//             </TextField>
//           </Box>
//         </Box>

//         <Box display="flex" justifyContent="flex-end" mt={3}>
//           <Button variant="contained" sx={{ bgcolor: "#245e95" }}>
//             Save Changes
//           </Button>
//         </Box>
//       </Paper>

//       {/* ADD PAYMENT GATEWAY MODAL */}
//       <AddPaymentGateway
//         open={openAdd}
//         onClose={() => setOpenAdd(false)}
//         onSave={handleAddGateway}
//       />
//     </Box>
//   );
// };

// export default Payment;

import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Pagination,
  Stack,
  TextField,
  MenuItem,
  Chip,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import AddPaymentGateway from "./AppPaymentGateway";
import type { Page } from "./MainParent";

/* ================= TYPES ================= */

interface Gateway {
  name: string;
  type: string;
  merchantId: string;
  status: "Active" | "Inactive";
}

interface Props {
  onTabChange: (tab: Page) => void;
}

interface AddGatewayData {
  gatewayName?: string;
  gatewayType?: string;
  merchantId?: string;
  active?: boolean;
}

type RefundPolicy = "immediate" | "7days";

/* ================= DATA ================= */

const initialGateways: Gateway[] = [
  {
    name: "Razorpay",
    type: "UPI, Cards, Net Banking",
    merchantId: "rzp_test_123456",
    status: "Active",
  },
  {
    name: "PayPal",
    type: "International Cards",
    merchantId: "paypal_biz_789",
    status: "Active",
  },
  {
    name: "Paytm",
    type: "Wallet, UPI",
    merchantId: "paytm_merchant_456",
    status: "Active",
  },
];

/* ================= COMPONENT ================= */

const Payment: React.FC<Props> = ({ onTabChange }) => {
  const [gateways, setGateways] = useState<Gateway[]>(initialGateways);
  const [refundPolicy, setRefundPolicy] =
    useState<RefundPolicy>("immediate");
  const [openAdd, setOpenAdd] = useState<boolean>(false);

  const handleAddGateway = (data: AddGatewayData) => {
    setGateways((prev) => [
      ...prev,
      {
        name: data.gatewayName ?? "New Gateway",
        type: data.gatewayType ?? "-",
        merchantId: data.merchantId ?? "-",
        status: data.active ? "Active" : "Inactive",
      },
    ]);
  };

  return (
    <Box sx={{ p: 3, bgcolor: "#f6f8fb", minHeight: "100vh" }}>
      {/* ================= TOP TABS ================= */}
      <Paper sx={{ p: 1.5, mb: 3 }}>
        <Stack direction="row" spacing={1}>
          <Button
            onClick={() => onTabChange("gst")}
            sx={{ textTransform: "none", color: "#000" }}
          >
            GST & Taxes
          </Button>
          <Button
            onClick={() => onTabChange("shipping")}
            sx={{ textTransform: "none", color: "#000" }}
          >
            Shipping & COD
          </Button>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#26619A",
              color: "#fff",
              textTransform: "none",
              "&:hover": { bgcolor: "#26619A" },
            }}
          >
            Payment Gateways
          </Button>
          <Button
            onClick={() => onTabChange("payout")}
            sx={{ textTransform: "none", color: "#000" }}
          >
            Payout Bank
          </Button>
          <Button
            onClick={() => onTabChange("legal")}
            sx={{ textTransform: "none", color: "#000" }}
          >
            Legal Content
          </Button>
          <Button
            onClick={() => onTabChange("localization")}
            sx={{ textTransform: "none", color: "#000" }}
          >
            Localization
          </Button>
        </Stack>
      </Paper>

      {/* PAYMENT GATEWAY CONFIGURATION */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Box display="flex" justifyContent="space-between" mb={2}>
          <Typography fontWeight={600}>
            Payment Gateway Configuration
          </Typography>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => setOpenAdd(true)}
            sx={{ bgcolor: "#26619A", "&:hover": { bgcolor: "#1f4f7a" } }}
          >
            Add Gateway
          </Button>
        </Box>

        <Table>
          <TableHead sx={{ bgcolor: "#26619A" }}>
            <TableRow>
              {["Gateway", "Type", "Merchant ID", "Status", "Actions"].map(
                (h) => (
                  <TableCell
                    key={h}
                    sx={{ color: "white", fontWeight: 500 }}
                  >
                    {h}
                  </TableCell>
                )
              )}
            </TableRow>
          </TableHead>

          <TableBody>
            {gateways.map((g, i) => (
              <TableRow key={i}>
                <TableCell>{g.name}</TableCell>
                <TableCell>{g.type}</TableCell>
                <TableCell>{g.merchantId}</TableCell>
                <TableCell>
                  {g.status === "Active" ? (
                    <Chip
                      label="Active"
                      sx={{
                        bgcolor: "#E1F0D5",
                        color: "#70BF45",
                        fontWeight: 600,
                        height: 24,
                      }}
                      size="small"
                    />
                  ) : (
                    <Chip label="Inactive" size="small" />
                  )}
                </TableCell>
                <TableCell>
                  <Stack direction="row" spacing={1}>
                    <IconButton
                      sx={{
                        bgcolor: "#E1F0D5",
                        "&:hover": { bgcolor: "#D0E8C9" },
                      }}
                    >
                      <EditIcon sx={{ color: "#70BF45" }} />
                    </IconButton>
                    <IconButton
                      sx={{
                        bgcolor: "#E1F0D5",
                        "&:hover": { bgcolor: "#FCDADA" },
                      }}
                    >
                      <DeleteIcon sx={{ color: "#EF4444" }} />
                    </IconButton>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <Box display="flex" justifyContent="center" mt={2}>
          <Pagination count={14} shape="rounded" />
        </Box>
      </Paper>

      {/* PAYMENT SETTINGS */}
      <Paper sx={{ p: 3 }}>
        <Typography fontWeight={600} mb={2}>
          Payment Settings
        </Typography>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
          <Box sx={{ flex: "1 1 300px" }}>
            <TextField
              fullWidth
              label="Payment Timeout (minutes)"
              defaultValue={15}
            />
          </Box>

          <Box sx={{ flex: "1 1 300px" }}>
            <TextField
              fullWidth
              select
              label="Auto-refund Failed Payments"
              value={refundPolicy}
              onChange={(e) =>
                setRefundPolicy(e.target.value as RefundPolicy)
              }
            >
              <MenuItem value="immediate">Yes, immediately</MenuItem>
              <MenuItem value="7days">After 7 Days</MenuItem>
            </TextField>
          </Box>
        </Box>

        <Box display="flex" justifyContent="flex-end" mt={3}>
          <Button
            variant="contained"
            sx={{ bgcolor: "#26619A", "&:hover": { bgcolor: "#1f4f7a" } }}
          >
            Save Changes
          </Button>
        </Box>
      </Paper>

      {/* ADD PAYMENT GATEWAY MODAL */}
      <AddPaymentGateway
        open={openAdd}
        onClose={() => setOpenAdd(false)}
        onSave={handleAddGateway}
      />
    </Box>
  );
};

export default Payment;


