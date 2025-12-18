// import React from "react";
// import {
//   Box,
//   Typography,
//   Paper,
//   Tabs,
//   Tab,
//   Button,
//   Select,
//   MenuItem,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow
// } from "@mui/material";
// import DownloadIcon from "@mui/icons-material/Download";
// import type { Page } from "./PageType";

// /* ---------- PROPS ---------- */
// interface Props {
//   onTabChange: (page: Page) => void;
// }

// /* ---------- TAB STYLES ---------- */
// const inactiveTabStyle = {
//   textTransform: "none",
//   borderRadius: "8px",
//   minHeight: 32,
//   px: 2.5,
//   backgroundColor: "#ffffff",
//   color: "#555",
//   border: "1px solid #e0e0e0",
//   "&:hover": { backgroundColor: "#f5f7fa" }
// };

// /* ---------- TABLE DATA ---------- */
// const rows = [
//   { month: "June 2024", newA: "+45", active: 167, inactive: 20, total: 245, growth: "+25.9%" },
//   { month: "July 2024", newA: "+52", active: 189, inactive: 26, total: 297, growth: "+14.2%" },
//   { month: "August 2024", newA: "+48", active: 201, inactive: 50, total: 345, growth: "+7.5%" },
//   { month: "September 2024", newA: "+61", active: 223, inactive: 25, total: 406, growth: "+12.1%" },
//   { month: "October 2024", newA: "+58", active: 245, inactive: 10, total: 464, growth: "+12.1%" }
// ];

// /* ---------- SAME ARROW COMPONENT ---------- */
// const SimpleArrows = ({ label }: { label: string }) => (
//   <Box sx={{ display: "flex", alignItems: "center", gap: 0.6 }}>
//     {label}
//     <Box sx={{ display: "flex", alignItems: "center", gap: 0.3 }}>
//       <Typography sx={{ color: "white", fontSize: "12px" }}>↑</Typography>
//       <Typography sx={{ color: "white", fontSize: "12px" }}>↓</Typography>
//     </Box>
//   </Box>
// );

// const TeamGrowth: React.FC<Props> = ({ onTabChange }) => {
//   return (
//     <Box sx={{ p: 3, backgroundColor: "#f7f9fc", minHeight: "100vh" }}>
//       {/* ================= TABS ================= */}
//       <Paper sx={{ mb: 2, p: 1, backgroundColor: "transparent", boxShadow: "none" }}>
//         <Tabs
//           value={1}
//           variant="scrollable"
//           scrollButtons="auto"
//           TabIndicatorProps={{ style: { display: "none" } }}
//           sx={{ "& .MuiTabs-flexContainer": { gap: 1 } }}
//         >
//           <Tab
//             label="Sales & BV"
//             onClick={() => onTabChange("salesBv")}
//             sx={inactiveTabStyle}
//           />

//           <Tab
//             label="Team Growth"
//             sx={{
//               textTransform: "none",
//               borderRadius: "8px",
//               minHeight: 32,
//               px: 2.5,
//               backgroundColor: "#2f80ed",
//               color: "#fff",
//               fontWeight: 600
//             }}
//           />

//           <Tab
//             label="Package Distribution"
//             onClick={() => onTabChange("packageDistribution")}
//             sx={inactiveTabStyle}
//           />

//           <Tab
//             label="Coins & Coupons"
//             onClick={() => onTabChange("coinsCoupons")}
//             sx={inactiveTabStyle}
//           />

//           <Tab
//             label="Tax/GST"
//             onClick={() => onTabChange("taxGst")}
//             sx={inactiveTabStyle}
//           />
//         </Tabs>
//       </Paper>

//       {/* ================= MAIN CARD ================= */}
//       <Paper sx={{ border: "1px solid #e0e0e0", borderRadius: 2, p: 2 }}>
//         <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
//           Team Growth Analytics
//         </Typography>

//         <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
//           <Select size="small" defaultValue="6">
//             <MenuItem value="6">Last 6 Months</MenuItem>
//             <MenuItem value="12">Last 12 Months</MenuItem>
//           </Select>

//           <Button
//             variant="contained"
//             startIcon={<DownloadIcon />}
//             sx={{ textTransform: "none" }}
//           >
//             Export
//           </Button>
//         </Box>

//         <TableContainer>
//           <Table>
//             <TableHead>
//               <TableRow sx={{ backgroundColor: "#245c91" }}>
//                 <TableCell sx={{ color: "white", fontWeight: 600 }}>
//                   <SimpleArrows label="Month" />
//                 </TableCell>
//                 <TableCell sx={{ color: "white", fontWeight: 600 }}>
//                   <SimpleArrows label="New Agents" />
//                 </TableCell>
//                 <TableCell sx={{ color: "white", fontWeight: 600 }}>
//                   <SimpleArrows label="Active Agents" />
//                 </TableCell>
//                 <TableCell sx={{ color: "white", fontWeight: 600 }}>
//                   <SimpleArrows label="Inactive Agents" />
//                 </TableCell>
//                 <TableCell sx={{ color: "white", fontWeight: 600 }}>
//                   <SimpleArrows label="Total Agents" />
//                 </TableCell>
//                 <TableCell sx={{ color: "white", fontWeight: 600 }}>
//                   <SimpleArrows label="Active %" />
//                 </TableCell>
//               </TableRow>
//             </TableHead>

//             <TableBody>
//               {rows.map((row) => (
//                 <TableRow key={row.month}>
//                   <TableCell>{row.month}</TableCell>
//                   <TableCell>{row.newA}</TableCell>
//                   <TableCell>{row.active}</TableCell>
//                   <TableCell>{row.inactive}</TableCell>
//                   <TableCell>{row.total}</TableCell>
//                   <TableCell sx={{ color: "green", fontWeight: 500 }}>
//                     {row.growth}
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>

//         <Box sx={{ display: "flex", justifyContent: "center", mt: 2, gap: 1 }}>
//           <Button size="small">Previous</Button>
//           <Button size="small" variant="outlined">1</Button>
//           <Button size="small">2</Button>
//           <Button size="small">3</Button>
//           <Button size="small">Next</Button>
//         </Box>
//       </Paper>
//     </Box>
//   );
// };

// export default TeamGrowth;

import React from "react";
import {
  Box,
  Typography,
  Paper,
  Button,
  Select,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import type { Page } from "./PageType";

/* ---------- PROPS ---------- */
interface Props {
  onTabChange: (page: Page) => void;
}

/* ---------- TABLE DATA ---------- */
const rows = [
  {
    month: "June 2024",
    newA: "+45",
    active: 167,
    inactive: 20,
    total: 245,
    growth: "+25.9%"
  },
  {
    month: "July 2024",
    newA: "+52",
    active: 189,
    inactive: 26,
    total: 297,
    growth: "+14.2%"
  },
  {
    month: "August 2024",
    newA: "+48",
    active: 201,
    inactive: 50,
    total: 345,
    growth: "+7.5%"
  },
  {
    month: "September 2024",
    newA: "+61",
    active: 223,
    inactive: 25,
    total: 406,
    growth: "+12.1%"
  },
  {
    month: "October 2024",
    newA: "+58",
    active: 245,
    inactive: 10,
    total: 464,
    growth: "+12.1%"
  }
];

/* ---------- ARROWS ---------- */
const SimpleArrows = ({ label }: { label: string }) => (
  <Box sx={{ display: "flex", alignItems: "center", gap: 0.6 }}>
    {label}
    <Box sx={{ display: "flex", gap: 0.3 }}>
      <Typography sx={{ color: "white", fontSize: 12 }}>↑</Typography>
      <Typography sx={{ color: "white", fontSize: 12 }}>↓</Typography>
    </Box>
  </Box>
);

const TeamGrowth: React.FC<Props> = ({ onTabChange }) => {
  return (
    <Box sx={{ p: 3, backgroundColor: "#f7f9fc", minHeight: "100vh" }}>
      {/* ================= TOP TABS (GST STYLE) ================= */}
      <Paper sx={{ p: 1.5, mb: 3 }}>
        <Box display="flex" gap={1}>
          <Button
            variant="text"
            sx={{ textTransform: "none", fontWeight: 500 }}
            onClick={() => onTabChange("salesBv")}
          >
            Sales & BV
          </Button>

          <Button
            variant="contained"
            sx={{
              bgcolor: "#26619A",
              textTransform: "none",
              fontWeight: 600
            }}
          >
            Team Growth
          </Button>

          <Button
            variant="text"
            sx={{ textTransform: "none", fontWeight: 500 }}
            onClick={() => onTabChange("packageDistribution")}
          >
            Package Distribution
          </Button>

          <Button
            variant="text"
            sx={{ textTransform: "none", fontWeight: 500 }}
            onClick={() => onTabChange("coinsCoupons")}
          >
            Coins & Coupons
          </Button>

          <Button
            variant="text"
            sx={{ textTransform: "none", fontWeight: 500 }}
            onClick={() => onTabChange("taxGst")}
          >
            Tax / GST
          </Button>
        </Box>
      </Paper>

      {/* ================= MAIN CARD ================= */}
      <Paper sx={{ border: "1px solid #e0e0e0", borderRadius: 2, p: 2 }}>
        <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
          Team Growth Analytics
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          <Select size="small" defaultValue="6">
            <MenuItem value="6">Last 6 Months</MenuItem>
            <MenuItem value="12">Last 12 Months</MenuItem>
          </Select>

          <Button
            variant="contained"
            startIcon={<DownloadIcon />}
            sx={{ textTransform: "none" }}
          >
            Export
          </Button>
        </Box>

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: "#245c91" }}>
                <TableCell sx={{ color: "white", fontWeight: 600 }}>
                  <SimpleArrows label="Month" />
                </TableCell>
                <TableCell sx={{ color: "white", fontWeight: 600 }}>
                  <SimpleArrows label="New Agents" />
                </TableCell>
                <TableCell sx={{ color: "white", fontWeight: 600 }}>
                  <SimpleArrows label="Active Agents" />
                </TableCell>
                <TableCell sx={{ color: "white", fontWeight: 600 }}>
                  <SimpleArrows label="Inactive Agents" />
                </TableCell>
                <TableCell sx={{ color: "white", fontWeight: 600 }}>
                  <SimpleArrows label="Total Agents" />
                </TableCell>
                <TableCell sx={{ color: "white", fontWeight: 600 }}>
                  <SimpleArrows label="Active %" />
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {rows.map(row => (
                <TableRow key={row.month}>
                  <TableCell>{row.month}</TableCell>
                  <TableCell>{row.newA}</TableCell>
                  <TableCell>{row.active}</TableCell>
                  <TableCell>{row.inactive}</TableCell>
                  <TableCell>{row.total}</TableCell>
                  <TableCell sx={{ color: "green", fontWeight: 500 }}>
                    {row.growth}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default TeamGrowth;
