// import React, { useState } from "react";
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

// interface Props {
//   onTabChange: (page: Page) => void;
// }

// const rows = [
//   { month: "June 2024", sales: "₹1,245,000", bv: "185,000 BV", growth: "+25.9%" },
//   { month: "July 2024", sales: "₹1,567,000", bv: "234,000 BV", growth: "+14.2%" },
//   { month: "August 2024", sales: "₹1,790,000", bv: "267,000 BV", growth: "+7.5%" },
//   { month: "September 2024", sales: "₹1,923,000", bv: "289,000 BV", growth: "+12.1%" },
//   { month: "October 2024", sales: "₹2,156,000", bv: "323,000 BV", growth: "+12.1%" }
// ];

// const SimpleArrows = ({ label }: { label: string }) => (
//   <Box sx={{ display: "flex", alignItems: "center", gap: 0.6 }}>
//     {label}
//     <Box sx={{ display: "flex", gap: 0.3 }}>
//       <Typography sx={{ color: "white", fontSize: 12 }}>↑</Typography>
//       <Typography sx={{ color: "white", fontSize: 12 }}>↓</Typography>
//     </Box>
//   </Box>
// );

// const SalesAndBv: React.FC<Props> = ({ onTabChange }) => {
//   const [tabValue, setTabValue] = useState<Page>("salesBv");

//   const handleTabChange = (_: React.SyntheticEvent, newValue: Page) => {
//     setTabValue(newValue);
//     onTabChange(newValue);
//   };

//   /* ================= TAB STYLES ================= */

//   const activeTabStyle = {
//     textTransform: "none",
//     borderRadius: "8px",
//     minHeight: 32,
//     px: 2.5,
//     fontWeight: 600,
//     color: "#FDFDFD",         
//     backgroundColor: "#26619A"
//   };

//   const inactiveTabStyle = {
//     textTransform: "none",
//     borderRadius: "8px",
//     minHeight: 32,
//     px: 2.5,
//     fontWeight: 500,
//     color: "#000000",        // ✅ black text
//     backgroundColor: "#FFFFFF",
//     border: "1px solid #e0e0e0",
//     "&:hover": {
//       backgroundColor: "#f5f7fa"
//     }
//   };

//   return (
//     <Box sx={{ p: 3, backgroundColor: "#f7f9fc", minHeight: "100vh" }}>
//       {/* ================= TABS ================= */}
//       <Paper sx={{ mb: 2, p: 1, backgroundColor: "transparent", boxShadow: "none" }}>
//         <Tabs
//           value={tabValue}
//           onChange={handleTabChange}
//           TabIndicatorProps={{ style: { display: "none" } }}
//           sx={{ "& .MuiTabs-flexContainer": { gap: 1 } }}
//         >
//           <Tab
//             label="Sales & BV"
//             value="salesBv"
//             sx={tabValue === "salesBv" ? activeTabStyle : inactiveTabStyle}
//           />
//           <Tab
//             label="Team Growth"
//             value="teamGrowth"
//             sx={tabValue === "teamGrowth" ? activeTabStyle : inactiveTabStyle}
//           />
//           <Tab
//             label="Package Distribution"
//             value="packageDistribution"
//             sx={tabValue === "packageDistribution" ? activeTabStyle : inactiveTabStyle}
//           />
//           <Tab
//             label="Coins & Coupons"
//             value="coinsCoupons"
//             sx={tabValue === "coinsCoupons" ? activeTabStyle : inactiveTabStyle}
//           />
//           <Tab
//             label="Tax/GST"
//             value="taxGst"
//             sx={tabValue === "taxGst" ? activeTabStyle : inactiveTabStyle}
//           />
//         </Tabs>
//       </Paper>

//       {/* ================= CARD ================= */}
//       <Paper sx={{ border: "2px solid #DCDCDC", borderRadius: 2, p: 2 }}>
//         <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
//           Sales & BV Analysis
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
//                   <SimpleArrows label="Total Sales" />
//                 </TableCell>
//                 <TableCell sx={{ color: "white", fontWeight: 600 }}>
//                   <SimpleArrows label="Total BV" />
//                 </TableCell>
//                 <TableCell sx={{ color: "white", fontWeight: 600 }}>
//                   <SimpleArrows label="Growth" />
//                 </TableCell>
//               </TableRow>
//             </TableHead>

//             <TableBody>
//               {rows.map(row => (
//                 <TableRow key={row.month}>
//                   <TableCell>{row.month}</TableCell>
//                   <TableCell>{row.sales}</TableCell>
//                   <TableCell>{row.bv}</TableCell>
//                   <TableCell sx={{ color: "green", fontWeight: 500 }}>
//                     {row.growth}
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </Paper>
//     </Box>
//   );
// };

// export default SalesAndBv;

import React, { useState } from "react";
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
  TableRow,
  Stack
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import type { Page } from "./PageType";

interface Props {
  onTabChange: (page: Page) => void;
}

const rows = [
  { month: "June 2024", sales: "₹1,245,000", bv: "185,000 BV", growth: "+25.9%" },
  { month: "July 2024", sales: "₹1,567,000", bv: "234,000 BV", growth: "+14.2%" },
  { month: "August 2024", sales: "₹1,790,000", bv: "267,000 BV", growth: "+7.5%" },
  { month: "September 2024", sales: "₹1,923,000", bv: "289,000 BV", growth: "+12.1%" },
  { month: "October 2024", sales: "₹2,156,000", bv: "323,000 BV", growth: "+12.1%" }
];

const SimpleArrows = ({ label }: { label: string }) => (
  <Box sx={{ display: "flex", alignItems: "center", gap: 0.6 }}>
    {label}
    <Box sx={{ display: "flex", gap: 0.3 }}>
      <Typography sx={{ color: "white", fontSize: 12 }}>↑</Typography>
      <Typography sx={{ color: "white", fontSize: 12 }}>↓</Typography>
    </Box>
  </Box>
);

const SalesAndBv: React.FC<Props> = ({ onTabChange }) => {
  const [activeTab, setActiveTab] = useState<Page>("salesBv");

  const handleTabClick = (tab: Page) => {
    setActiveTab(tab);
    onTabChange(tab);
  };

  return (
    <Box sx={{ p: 3, bgcolor: "#f7f9fc", minHeight: "100vh" }}>
      {/* ================= TOP TABS (GST STYLE) ================= */}
      <Paper sx={{ p: 1.5, mb: 3 }}>
        <Stack direction="row" spacing={1}>
          <Button
            variant={activeTab === "salesBv" ? "contained" : "text"}
            sx={{ bgcolor: activeTab === "salesBv" ? "#26619A" : "transparent" }}
            onClick={() => handleTabClick("salesBv")}
          >
            Sales & BV
          </Button>

          <Button
            variant={activeTab === "teamGrowth" ? "contained" : "text"}
            sx={{ bgcolor: activeTab === "teamGrowth" ? "#26619A" : "transparent" }}
            onClick={() => handleTabClick("teamGrowth")}
          >
            Team Growth
          </Button>

          <Button
            variant={activeTab === "packageDistribution" ? "contained" : "text"}
            sx={{
              bgcolor:
                activeTab === "packageDistribution" ? "#26619A" : "transparent"
            }}
            onClick={() => handleTabClick("packageDistribution")}
          >
            Package Distribution
          </Button>

          <Button
            variant={activeTab === "coinsCoupons" ? "contained" : "text"}
            sx={{ bgcolor: activeTab === "coinsCoupons" ? "#26619A" : "transparent" }}
            onClick={() => handleTabClick("coinsCoupons")}
          >
            Coins & Coupons
          </Button>

          <Button
            variant={activeTab === "taxGst" ? "contained" : "text"}
            sx={{ bgcolor: activeTab === "taxGst" ? "#26619A" : "transparent" }}
            onClick={() => handleTabClick("taxGst")}
          >
            Tax / GST
          </Button>
        </Stack>
      </Paper>

      {/* ================= CARD ================= */}
      <Paper sx={{ border: "2px solid #DCDCDC", borderRadius: 2, p: 2 }}>
        <Typography variant="h6" fontWeight={600} mb={2}>
          Sales & BV Analysis
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
              <TableRow sx={{ bgcolor: "#245c91" }}>
                <TableCell sx={{ color: "#fff", fontWeight: 600 }}>
                  <SimpleArrows label="Month" />
                </TableCell>
                <TableCell sx={{ color: "#fff", fontWeight: 600 }}>
                  <SimpleArrows label="Total Sales" />
                </TableCell>
                <TableCell sx={{ color: "#fff", fontWeight: 600 }}>
                  <SimpleArrows label="Total BV" />
                </TableCell>
                <TableCell sx={{ color: "#fff", fontWeight: 600 }}>
                  <SimpleArrows label="Growth" />
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {rows.map(row => (
                <TableRow key={row.month}>
                  <TableCell>{row.month}</TableCell>
                  <TableCell>{row.sales}</TableCell>
                  <TableCell>{row.bv}</TableCell>
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

export default SalesAndBv;

