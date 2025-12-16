import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  Grid,
  TextField,
  Switch,
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Stack,
  Divider,
  Pagination
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import AddShippingZone from "./AddShippingZone";
import type { ShippingZoneForm } from "./AddShippingZone";
import type { Page } from "./MainParent";

interface Props {
  onTabChange: (tab: Page) => void;
}

const initialZones: ShippingZoneForm[] = [
  {
    zone: "North Zone",
    states: "Delhi, Haryana, Punjab",
    baseRate: 60,
    additionalRate: 10,
    deliveryDays: "3-5",
    codAvailable: "Yes"
  },
  {
    zone: "South Zone",
    states: "Tamil Nadu, Karnataka",
    baseRate: 80,
    additionalRate: 15,
    deliveryDays: "4-6",
    codAvailable: "Yes"
  },
  {
    zone: "East Zone",
    states: "Maharashtra, Karnataka",
    baseRate: 90,
    additionalRate: 15,
    deliveryDays: "5-7",
    codAvailable: "Yes"
  }
];

const Shipping: React.FC<Props> = ({ onTabChange }) => {
  const [zones, setZones] = useState(initialZones);
  const [openAdd, setOpenAdd] = useState(false);
  const [codEnabled, setCodEnabled] = useState(true);

  const handleAdd = (data: ShippingZoneForm) => {
    setZones((prev) => [...prev, data]);
  };

  return (
    <Box sx={{ p: 3, bgcolor: "#f6f8fb", minHeight: "100vh" }}>
      {/* 🔹 TOP TABS */}
      <Paper sx={{ p: 1.5, mb: 3 }}>
        <Stack direction="row" spacing={1}>
          <Button onClick={() => onTabChange("gst")}>GST & Taxes</Button>
          <Button variant="contained">Shipping & COD</Button>
          <Button onClick={() => onTabChange("payment")}>
            Payment Gateways
          </Button>
          <Button onClick={() => onTabChange("payout")}>
            Payout Bank
          </Button>
          <Button onClick={() => onTabChange("legal")}>
            Legal Content
          </Button>
          <Button onClick={() => onTabChange("localization")}>
            Localization
          </Button>
        </Stack>
      </Paper>

      {/* 🔹 SHIPPING SETTINGS */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography fontWeight={600} mb={2}>
          Shipping Zones & COD Rules
        </Typography>

        <Grid container spacing={3}>
          {/* Free Shipping */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography fontSize={13} mb={0.5}>
              Free Shipping Threshold (₹)
            </Typography>
            <TextField fullWidth defaultValue={999} />
          </Grid>

          {/* COD Toggle */}
          <Grid size={12}>
            <Typography fontWeight={500} mb={1}>
              Enable Cash on Delivery (COD)
            </Typography>
            <Switch
              checked={codEnabled}
              onChange={(e) => setCodEnabled(e.target.checked)}
            />
          </Grid>

          {/* COD Max */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography fontSize={13} mb={0.5}>
              COD Maximum Order Value (₹)
            </Typography>
            <TextField fullWidth defaultValue={5000} />
          </Grid>

          {/* COD Charge */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography fontSize={13} mb={0.5}>
              COD Additional Charge (₹)
            </Typography>
            <TextField fullWidth defaultValue={50} />
          </Grid>
        </Grid>

        <Divider sx={{ my: 3 }} />

        <Box display="flex" justifyContent="flex-end" gap={1}>
          <Button variant="contained" color="inherit">
            Clear
          </Button>
          <Button variant="contained">
            Save Shipping Setting
          </Button>
        </Box>
      </Paper>

      {/* 🔹 SHIPPING ZONES TABLE */}
      <Paper sx={{ p: 3 }}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <Typography fontWeight={600}>
            Shipping Zones & Rates
          </Typography>

          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => setOpenAdd(true)}
            sx={{ bgcolor: "#1f5fa7" }}
          >
            Add Shipping Zone
          </Button>
        </Box>

        <Table>
          <TableHead>
            <TableRow sx={{ bgcolor: "#1f5fa7" }}>
              {[
                "Zone Name",
                "States",
                "Base Rate (₹)",
                "Additional Rate (₹)",
                "Delivery Days",
                "COD Available",
                "Actions"
              ].map((head) => (
                <TableCell key={head} sx={{ color: "#fff", fontSize: 13 }}>
                  <Box display="flex" alignItems="center" gap={0.5}>
                    {head}
                    {head !== "Actions" && (
                      <>
                        <ArrowUpwardIcon sx={{ fontSize: 14 }} />
                        <ArrowDownwardIcon sx={{ fontSize: 14 }} />
                      </>
                    )}
                  </Box>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {zones.map((row, i) => (
              <TableRow key={i}>
                <TableCell>{row.zone}</TableCell>
                <TableCell>{row.states}</TableCell>
                <TableCell>{row.baseRate}</TableCell>
                <TableCell>{row.additionalRate}</TableCell>
                <TableCell>{row.deliveryDays}</TableCell>
                <TableCell>{row.codAvailable}</TableCell>
                <TableCell>
                  <Stack direction="row" spacing={1}>
                    <IconButton
                      size="small"
                      sx={{ bgcolor: "#e8f5e9", color: "#2e7d32" }}
                    >
                      <EditIcon fontSize="small" />
                    </IconButton>
                    <IconButton
                      size="small"
                      sx={{ bgcolor: "#fdecea", color: "#d32f2f" }}
                    >
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <Box display="flex" justifyContent="center" mt={2} gap={1}>
          <Button size="small" variant="outlined">
            Previous
          </Button>
          <Pagination count={14} shape="rounded" />
          <Button size="small" variant="outlined">
            Next
          </Button>
        </Box>
      </Paper>

      <AddShippingZone
        open={openAdd}
        onClose={() => setOpenAdd(false)}
        onSave={handleAdd}
      />
    </Box>
  );
};

export default Shipping;


 
// import React, { useState } from "react";
// import {
//   Box,
//   Paper,
//   Typography,
//   Grid,
//   TextField,
//   Switch,
//   Button,
//   Table,
//   TableHead,
//   TableRow,
//   TableCell,
//   TableBody,
//   IconButton,
//   Stack,
//   Divider,
//   Pagination
// } from "@mui/material";

// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";
// import AddIcon from "@mui/icons-material/Add";

// import AddShippingZone from "./AddShippingZone";
// import type { ShippingZoneForm } from "./AddShippingZone";
// import type { Page } from "./MainParent";

// interface Props {
//   onTabChange: (tab: Page) => void;
// }

// const initialZones: ShippingZoneForm[] = [
//   {
//     zone: "North Zone",
//     states: "Delhi, Haryana, Punjab",
//     baseRate: 60,
//     additionalRate: 10,
//     deliveryDays: "3-5",
//     codAvailable: "Yes"
//   },
//   {
//     zone: "South Zone",
//     states: "Tamil Nadu, Karnataka",
//     baseRate: 80,
//     additionalRate: 15,
//     deliveryDays: "4-6",
//     codAvailable: "Yes"
//   }
// ];

// const Shipping: React.FC<Props> = ({ onTabChange }) => {
//   const [zones, setZones] = useState(initialZones);
//   const [openAdd, setOpenAdd] = useState(false);
//   const [codEnabled, setCodEnabled] = useState(true);

//   const handleAdd = (data: ShippingZoneForm) => {
//     setZones((prev) => [...prev, data]);
//   };

//   return (
//     <Box sx={{ p: 3, bgcolor: "#f6f8fb", minHeight: "100vh" }}>
//       {/* 🔹 TOP TABS */}
//       <Paper sx={{ p: 1.5, mb: 3 }}>
//         <Stack direction="row" spacing={1}>
//           <Button onClick={() => onTabChange("gst")}>
//             GST & Taxes
//           </Button>

//           <Button variant="contained">
//             Shipping & COD
//           </Button>

//           <Button onClick={() => onTabChange("payment")}>
//             Payment Gateways
//           </Button>

//           <Button onClick={() => onTabChange("payout")}>
//             Payout Bank
//           </Button>

//           <Button onClick={() => onTabChange("legal")}>
//             Legal Content
//           </Button>

//           <Button onClick={() => onTabChange("localization")}>
//             Localization
//           </Button>
//         </Stack>
//       </Paper>

//       {/* 🔹 SHIPPING SETTINGS */}
//       <Paper sx={{ p: 3, mb: 3 }}>
//         <Typography fontWeight={600} mb={2}>
//           Shipping Zones & COD Rules
//         </Typography>

//         <Grid container spacing={3}>
//           <Grid size={{ xs: 12, md: 6 }}>
//             <TextField
//               fullWidth
//               label="Free Shipping Threshold (₹)"
//               defaultValue={999}
//             />
//           </Grid>

//           <Grid size={12}>
//             <Typography fontWeight={500} mb={1}>
//               Enable Cash on Delivery (COD)
//             </Typography>
//             <Switch
//               checked={codEnabled}
//               onChange={(e) => setCodEnabled(e.target.checked)}
//             />
//           </Grid>

//           <Grid size={{ xs: 12, md: 6 }}>
//             <TextField
//               fullWidth
//               label="COD Maximum Order Value (₹)"
//               defaultValue={5000}
//             />
//           </Grid>

//           <Grid size={{ xs: 12, md: 6 }}>
//             <TextField
//               fullWidth
//               label="COD Additional Charge (₹)"
//               defaultValue={50}
//             />
//           </Grid>
//         </Grid>

//         <Divider sx={{ my: 3 }} />

//         <Box display="flex" justifyContent="flex-end" gap={1}>
//           <Button variant="contained" color="inherit">
//             Clear
//           </Button>
//           <Button variant="contained">
//             Save Shipping Setting
//           </Button>
//         </Box>
//       </Paper>

//       {/* 🔹 SHIPPING ZONES TABLE */}
//       <Paper sx={{ p: 3 }}>
//         <Box display="flex" justifyContent="space-between" mb={2}>
//           <Typography fontWeight={600}>
//             Shipping Zones & Rates
//           </Typography>

//           <Button
//             variant="contained"
//             startIcon={<AddIcon />}
//             onClick={() => setOpenAdd(true)}
//           >
//             Add Shipping Zone
//           </Button>
//         </Box>

//         <Table>
//           <TableHead>
//             <TableRow>
//               {[
//                 "Zone",
//                 "States",
//                 "Base Rate",
//                 "Additional Rate",
//                 "Delivery Days",
//                 "COD",
//                 "Actions"
//               ].map((h) => (
//                 <TableCell key={h}>{h}</TableCell>
//               ))}
//             </TableRow>
//           </TableHead>

//           <TableBody>
//             {zones.map((z, i) => (
//               <TableRow key={i}>
//                 <TableCell>{z.zone}</TableCell>
//                 <TableCell>{z.states}</TableCell>
//                 <TableCell>{z.baseRate}</TableCell>
//                 <TableCell>{z.additionalRate}</TableCell>
//                 <TableCell>{z.deliveryDays}</TableCell>
//                 <TableCell>{z.codAvailable}</TableCell>
//                 <TableCell>
//                   <IconButton><EditIcon /></IconButton>
//                   <IconButton color="error"><DeleteIcon /></IconButton>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>

//         <Box display="flex" justifyContent="center" mt={2}>
//           <Pagination count={5} />
//         </Box>
//       </Paper>

//       <AddShippingZone
//         open={openAdd}
//         onClose={() => setOpenAdd(false)}
//         onSave={handleAdd}
//       />
//     </Box>
//   );
// };

// export default Shipping;

 
// import React, { useState } from "react";
// import {
//   Box,
//   Paper,
//   Typography,
//   Grid,
//   TextField,
//   Switch,
//   Button,
//   Table,
//   TableHead,
//   TableRow,
//   TableCell,
//   TableBody,
//   IconButton,
//   Stack,
//   Divider,
//   Pagination
// } from "@mui/material";

// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";
// import AddIcon from "@mui/icons-material/Add";

// import AddShippingZone from "./AddShippingZone";
// import type { ShippingZoneForm } from "./AddShippingZone";
// import type { Page } from "./MainParent";

// interface Props {
//   onTabChange: (tab: Page) => void;
// }

// const initialZones: ShippingZoneForm[] = [
//   {
//     zone: "North Zone",
//     states: "Delhi, Haryana, Punjab",
//     baseRate: 60,
//     additionalRate: 10,
//     deliveryDays: "3-5",
//     codAvailable: "Yes"
//   },
//   {
//     zone: "South Zone",
//     states: "Tamil Nadu, Karnataka",
//     baseRate: 80,
//     additionalRate: 15,
//     deliveryDays: "4-6",
//     codAvailable: "Yes"
//   }
// ];

// const Shipping: React.FC<Props> = ({ onTabChange }) => {
//   const [zones, setZones] = useState(initialZones);
//   const [openAdd, setOpenAdd] = useState(false);
//   const [codEnabled, setCodEnabled] = useState(true);

//   const handleAdd = (data: ShippingZoneForm) => {
//     setZones((prev) => [...prev, data]);
//   };

//   return (
//     <Box sx={{ p: 3, bgcolor: "#f6f8fb", minHeight: "100vh" }}>
//       {/* 🔹 TOP TABS */}
//       <Paper sx={{ p: 1.5, mb: 3 }}>
//         <Stack direction="row" spacing={1}>
//           <Button onClick={() => onTabChange("gst")}>
//             GST & Taxes
//           </Button>

//           <Button variant="contained">
//             Shipping & COD
//           </Button>

//           <Button onClick={() => onTabChange("payment")}>
//             Payment Gateways
//           </Button>

//           <Button onClick={() => onTabChange("payout")}>
//             Payout Bank
//           </Button>

//           <Button onClick={() => onTabChange("legal")}>
//             Legal Content
//           </Button>

//           <Button onClick={() => onTabChange("localization")}>
//             Localization
//           </Button>
//         </Stack>
//       </Paper>

//       {/* 🔹 SHIPPING SETTINGS */}
//       <Paper sx={{ p: 3, mb: 3 }}>
//         <Typography fontWeight={600} mb={2}>
//           Shipping Zones & COD Rules
//         </Typography>

//         <Grid container spacing={3}>
//           <Grid size={{ xs: 12, md: 6 }}>
//             <TextField
//               fullWidth
//               label="Free Shipping Threshold (₹)"
//               defaultValue={999}
//             />
//           </Grid>

//           <Grid size={12}>
//             <Typography fontWeight={500} mb={1}>
//               Enable Cash on Delivery (COD)
//             </Typography>
//             <Switch
//               checked={codEnabled}
//               onChange={(e) => setCodEnabled(e.target.checked)}
//             />
//           </Grid>

//           <Grid size={{ xs: 12, md: 6 }}>
//             <TextField
//               fullWidth
//               label="COD Maximum Order Value (₹)"
//               defaultValue={5000}
//             />
//           </Grid>

//           <Grid size={{ xs: 12, md: 6 }}>
//             <TextField
//               fullWidth
//               label="COD Additional Charge (₹)"
//               defaultValue={50}
//             />
//           </Grid>
//         </Grid>

//         <Divider sx={{ my: 3 }} />

//         <Box display="flex" justifyContent="flex-end" gap={1}>
//           <Button variant="contained" color="inherit">
//             Clear
//           </Button>
//           <Button variant="contained">
//             Save Shipping Setting
//           </Button>
//         </Box>
//       </Paper>

//       {/* 🔹 SHIPPING ZONES TABLE */}
//       <Paper sx={{ p: 3 }}>
//         <Box display="flex" justifyContent="space-between" mb={2}>
//           <Typography fontWeight={600}>
//             Shipping Zones & Rates
//           </Typography>

//           <Button
//             variant="contained"
//             startIcon={<AddIcon />}
//             onClick={() => setOpenAdd(true)}
//           >
//             Add Shipping Zone
//           </Button>
//         </Box>

//         <Table>
//           <TableHead>
//             <TableRow>
//               {[
//                 "Zone",
//                 "States",
//                 "Base Rate",
//                 "Additional Rate",
//                 "Delivery Days",
//                 "COD",
//                 "Actions"
//               ].map((h) => (
//                 <TableCell key={h}>{h}</TableCell>
//               ))}
//             </TableRow>
//           </TableHead>

//           <TableBody>
//             {zones.map((z, i) => (
//               <TableRow key={i}>
//                 <TableCell>{z.zone}</TableCell>
//                 <TableCell>{z.states}</TableCell>
//                 <TableCell>{z.baseRate}</TableCell>
//                 <TableCell>{z.additionalRate}</TableCell>
//                 <TableCell>{z.deliveryDays}</TableCell>
//                 <TableCell>{z.codAvailable}</TableCell>
//                 <TableCell>
//                   <IconButton><EditIcon /></IconButton>
//                   <IconButton color="error"><DeleteIcon /></IconButton>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>

//         <Box display="flex" justifyContent="center" mt={2}>
//           <Pagination count={5} />
//         </Box>
//       </Paper>

//       <AddShippingZone
//         open={openAdd}
//         onClose={() => setOpenAdd(false)}
//         onSave={handleAdd}
//       />
//     </Box>
//   );
// };

// export default Shipping;

