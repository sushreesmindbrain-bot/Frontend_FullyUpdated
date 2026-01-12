// // import React, { useState } from "react";
// // import {
// //   Box,
// //   Typography,
// //   Paper,
// //   Button,
// //   Select,
// //   MenuItem,
// //   Table,
// //   TableBody,
// //   TableCell,
// //   TableContainer,
// //   TableHead,
// //   TableRow,
// //   Stack
// // } from "@mui/material";
// // import DownloadIcon from "@mui/icons-material/Download";
// // import type { Page } from "./PageType";

// // interface Props {
// //   onTabChange: (page: Page) => void;
// // }

// // const rows = [
// //   { month: "June 2024", sales: "₹1,245,000", bv: "185,000 BV", growth: "+25.9%" },
// //   { month: "July 2024", sales: "₹1,567,000", bv: "234,000 BV", growth: "+14.2%" },
// //   { month: "August 2024", sales: "₹1,790,000", bv: "267,000 BV", growth: "+7.5%" },
// //   { month: "September 2024", sales: "₹1,923,000", bv: "289,000 BV", growth: "+12.1%" },
// //   { month: "October 2024", sales: "₹2,156,000", bv: "323,000 BV", growth: "+12.1%" }
// // ];

// // const SimpleArrows = ({ label }: { label: string }) => (
// //   <Box sx={{ display: "flex", alignItems: "center", gap: 0.6 }}>
// //     {label}
// //     <Box sx={{ display: "flex", gap: 0.3 }}>
// //       <Typography sx={{ color: "white", fontSize: 12 }}>↑</Typography>
// //       <Typography sx={{ color: "white", fontSize: 12 }}>↓</Typography>
// //     </Box>
// //   </Box>
// // );

// // const SalesAndBv: React.FC<Props> = ({ onTabChange }) => {
// //   const [activeTab, setActiveTab] = useState<Page>("salesBv");

// //   const handleTabClick = (tab: Page) => {
// //     setActiveTab(tab);
// //     onTabChange(tab);
// //   };

// //   return (
// //     <Box sx={{ p: 3, bgcolor: "#f7f9fc", minHeight: "100vh" }}>
// //       {/* ================= TOP TABS (GST STYLE) ================= */}
// //       <Paper sx={{ p: 1.5, mb: 3 }}>
// //         <Stack direction="row" spacing={1}>
// //           <Button
// //             variant={activeTab === "salesBv" ? "contained" : "text"}
// //             sx={{ bgcolor: activeTab === "salesBv" ? "#26619A" : "transparent" }}
// //             onClick={() => handleTabClick("salesBv")}
// //           >
// //             Sales & BV
// //           </Button>

// //           <Button
// //             variant={activeTab === "teamGrowth" ? "contained" : "text"}
// //             sx={{ bgcolor: activeTab === "teamGrowth" ? "#26619A" : "transparent" }}
// //             onClick={() => handleTabClick("teamGrowth")}
// //           >
// //             Team Growth
// //           </Button>

// //           <Button
// //             variant={activeTab === "packageDistribution" ? "contained" : "text"}
// //             sx={{
// //               bgcolor:
// //                 activeTab === "packageDistribution" ? "#26619A" : "transparent"
// //             }}
// //             onClick={() => handleTabClick("packageDistribution")}
// //           >
// //             Package Distribution
// //           </Button>

// //           <Button
// //             variant={activeTab === "coinsCoupons" ? "contained" : "text"}
// //             sx={{ bgcolor: activeTab === "coinsCoupons" ? "#26619A" : "transparent" }}
// //             onClick={() => handleTabClick("coinsCoupons")}
// //           >
// //             Coins & Coupons
// //           </Button>

// //           <Button
// //             variant={activeTab === "taxGst" ? "contained" : "text"}
// //             sx={{ bgcolor: activeTab === "taxGst" ? "#26619A" : "transparent" }}
// //             onClick={() => handleTabClick("taxGst")}
// //           >
// //             Tax / GST
// //           </Button>
// //         </Stack>
// //       </Paper>

// //       {/* ================= CARD ================= */}
// //       <Paper sx={{ border: "2px solid #DCDCDC", borderRadius: 2, p: 2 }}>
// //         <Typography variant="h6" fontWeight={600} mb={2}>
// //           Sales & BV Analysis
// //         </Typography>

// //         <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
// //           <Select size="small" defaultValue="6">
// //             <MenuItem value="6">Last 6 Months</MenuItem>
// //             <MenuItem value="12">Last 12 Months</MenuItem>
// //           </Select>

// //           <Button
// //             variant="contained"
// //             startIcon={<DownloadIcon />}
// //             sx={{ textTransform: "none" }}
// //           >
// //             Export
// //           </Button>
// //         </Box>

// //         <TableContainer>
// //           <Table>
// //             <TableHead>
// //               <TableRow sx={{ bgcolor: "#245c91" }}>
// //                 <TableCell sx={{ color: "#fff", fontWeight: 600 }}>
// //                   <SimpleArrows label="Month" />
// //                 </TableCell>
// //                 <TableCell sx={{ color: "#fff", fontWeight: 600 }}>
// //                   <SimpleArrows label="Total Sales" />
// //                 </TableCell>
// //                 <TableCell sx={{ color: "#fff", fontWeight: 600 }}>
// //                   <SimpleArrows label="Total BV" />
// //                 </TableCell>
// //                 <TableCell sx={{ color: "#fff", fontWeight: 600 }}>
// //                   <SimpleArrows label="Growth" />
// //                 </TableCell>
// //               </TableRow>
// //             </TableHead>

// //             <TableBody>
// //               {rows.map(row => (
// //                 <TableRow key={row.month}>
// //                   <TableCell>{row.month}</TableCell>
// //                   <TableCell>{row.sales}</TableCell>
// //                   <TableCell>{row.bv}</TableCell>
// //                   <TableCell sx={{ color: "green", fontWeight: 500 }}>
// //                     {row.growth}
// //                   </TableCell>
// //                 </TableRow>
// //               ))}
// //             </TableBody>
// //           </Table>
// //         </TableContainer>
// //       </Paper>
// //     </Box>
// //   );
// // };

// // export default SalesAndBv;

// import React, { useState } from "react";
// import {
//   Box,
//   Typography,
//   Paper,
//   Button,
//   Select,
//   MenuItem,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Stack,
//   Pagination,
//   PaginationItem,
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
//   { month: "October 2024", sales: "₹2,156,000", bv: "323,000 BV", growth: "+12.1%" },
// ];

// const SimpleArrows = ({ label }: { label: string }) => (
//   <Box sx={{ display: "flex", alignItems: "center", gap: 0.6 }}>
//     <Typography sx={{ fontWeight: 600, color: "#fff" }}>{label}</Typography>
//     <Box sx={{ display: "flex", gap: 0.3 }}>
//       <Typography sx={{ color: "#fff", fontSize: 12 }}>↑</Typography>
//       <Typography sx={{ color: "#fff", fontSize: 12 }}>↓</Typography>
//     </Box>
//   </Box>
// );

// const SalesAndBv: React.FC<Props> = ({ onTabChange }) => {
//   const [activeTab, setActiveTab] = useState<Page>("salesBv");
//   const [page, setPage] = useState<number>(1);

//   const handleTabClick = (tab: Page) => {
//     setActiveTab(tab);
//     onTabChange(tab);
//   };

//   return (
//     <Box sx={{ p: 3, bgcolor: "#f7f9fc", minHeight: "100vh" }}>
//       {/* ================= TOP TABS ================= */}
//       <Paper sx={{ p: 1.5, mb: 3 }}>
//         <Stack direction="row" spacing={1}>
//           {["salesBv", "teamGrowth", "packageDistribution", "coinsCoupons", "taxGst"].map((tab) => (
//             <Button
//               key={tab}
//               onClick={() => handleTabClick(tab as Page)}
//               sx={{
//                 textTransform: "none",
//                 fontWeight: 500,
//                 color: activeTab === tab ? "#fff" : "#000",
//                 bgcolor: activeTab === tab ? "#26619A" : "transparent",
//               }}
//             >
//               {tab === "salesBv"
//                 ? "Sales & BV"
//                 : tab === "teamGrowth"
//                 ? "Team Growth"
//                 : tab === "packageDistribution"
//                 ? "Package Distribution"
//                 : tab === "coinsCoupons"
//                 ? "Coins & Coupons"
//                 : "Tax / GST"}
//             </Button>
//           ))}
//         </Stack>
//       </Paper>

//       {/* ================= CARD ================= */}
//       <Paper sx={{ border: "2px solid #DCDCDC", borderRadius: 2, p: 2 }}>
//         <Typography variant="h6" fontWeight={400} mb={1}>
//           Sales vs BV Analysis
//         </Typography>

//         {/* ---------------- horizontal line ---------------- */}
//         <Box sx={{ height: "1px", bgcolor: "#DCDCDC", mb: 2 }} />

//         <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
//           <Select
//             size="small"
//             defaultValue="6"
//             sx={{ minWidth: 120, px: 0.5 }}
//           >
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
//               <TableRow sx={{ bgcolor: "#245c91" }}>
//                 <TableCell>
//                   <SimpleArrows label="Month" />
//                 </TableCell>
//                 <TableCell>
//                   <SimpleArrows label="Total Sales" />
//                 </TableCell>
//                 <TableCell>
//                   <SimpleArrows label="Total BV" />
//                 </TableCell>
//                 <TableCell>
//                   <SimpleArrows label="Growth" />
//                 </TableCell>
//               </TableRow>
//             </TableHead>

//             <TableBody>
//               {rows.map((row) => (
//                 <TableRow key={row.month}>
//                   <TableCell>{row.month}</TableCell>
//                   <TableCell>{row.sales}</TableCell>
//                   <TableCell>{row.bv}</TableCell>
//                   <TableCell sx={{ color: "#70BF45", fontWeight: 500 }}>
//                     {row.growth}
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>

//         {/* ================= PAGINATION ================= */}
//         <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
//           <Pagination
//             count={5}
//             page={page}
//             onChange={(_, value) => setPage(value)}
//             shape="rounded"
//             renderItem={(item) => (
//               <PaginationItem
//                 {...item}
//                 slots={{
//                   previous: () => <Box sx={{ px: 1 }}>{'< Previous'}</Box>,
//                   next: () => <Box sx={{ px: 1 }}>{'Next >'}</Box>,
//                 }}
//                 sx={{
//                   border: "1px solid #DCDCDC",
//                   borderRadius: "6px",
//                   fontWeight: item.selected ? 600 : 400,
//                   bgcolor: item.selected ? "#26619A" : "transparent",
//                   color: item.selected ? "#fff" : "#000",
//                   minWidth: 32,
//                   mx: 0.5,
//                 }}
//               />
//             )}
//           />
//         </Box>
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
  Stack,
  Pagination,
  PaginationItem,
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
  { month: "October 2024", sales: "₹2,156,000", bv: "323,000 BV", growth: "+12.1%" },
];

const SimpleArrows = ({ label }: { label: string }) => (
  <Box sx={{ display: "flex", alignItems: "center", gap: 0.6 }}>
    <Typography sx={{ fontWeight: 600, color: "#fff" }}>{label}</Typography>
    <Box sx={{ display: "flex", gap: 0.3 }}>
      <Typography sx={{ color: "#fff", fontSize: 12 }}>↑</Typography>
      <Typography sx={{ color: "#fff", fontSize: 12 }}>↓</Typography>
    </Box>
  </Box>
);

const SalesAndBv: React.FC<Props> = ({ onTabChange }) => {
  const [activeTab, setActiveTab] = useState<Page>("salesBv");
  const [page, setPage] = useState<number>(1);

  const handleTabClick = (tab: Page) => {
    setActiveTab(tab);
    onTabChange(tab);
  };

  return (
    <Box sx={{ p: 3, bgcolor: "#f7f9fc", minHeight: "100vh" }}>

      {/* ================= TOP TABS ================= */}
      <Paper
        sx={{
          px: 1,
          py: 1,
          mt: 2,
          mb: 3,
          width: "fit-content",
          display: "inline-flex",
          borderRadius: "12px",
        }}
      >
        <Stack direction="row" spacing={1}>
          {[
            { key: "salesBv", label: "Sales & BV" },
            { key: "teamGrowth", label: "Team Growth" },
            { key: "packageDistribution", label: "Package Distribution" },
            { key: "coinsCoupons", label: "Coins & Coupons" },
            { key: "taxGst", label: "Tax / GST" },
          ].map((tab) => (
            <Button
              key={tab.key}
              onClick={() => handleTabClick(tab.key as Page)}
              sx={{
                textTransform: "none",
                fontWeight: 500,
                borderRadius: "8px",
                color: activeTab === tab.key ? "#fff" : "#000",
                bgcolor: activeTab === tab.key ? "#26619A" : "transparent",
                "&:hover": {
                  bgcolor: activeTab === tab.key ? "#26619A" : "#f1f1f1",
                },
              }}
            >
              {tab.label}
            </Button>
          ))}
        </Stack>
      </Paper>

      {/* ================= CARD ================= */}
      <Paper sx={{ border: "2px solid #DCDCDC", borderRadius: 2, p: 2 }}>
        <Typography variant="h6" fontWeight={400} mb={1}>
          Sales vs BV Analysis
        </Typography>

        <Box sx={{ height: "1px", bgcolor: "#DCDCDC", mb: 2 }} />

        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          <Select size="small" defaultValue="6" sx={{ minWidth: 120, px: 0.5 }}>
            <MenuItem value="6">Last 6 Months</MenuItem>
            <MenuItem value="12">Last 12 Months</MenuItem>
          </Select>

          <Button variant="contained" startIcon={<DownloadIcon />} sx={{ textTransform: "none" }}>
            Export
          </Button>
        </Box>

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow sx={{ bgcolor: "#245c91" }}>
                <TableCell><SimpleArrows label="Month" /></TableCell>
                <TableCell><SimpleArrows label="Total Sales" /></TableCell>
                <TableCell><SimpleArrows label="Total BV" /></TableCell>
                <TableCell><SimpleArrows label="Growth" /></TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.month}>
                  <TableCell>{row.month}</TableCell>
                  <TableCell>{row.sales}</TableCell>
                  <TableCell>{row.bv}</TableCell>
                  <TableCell sx={{ color: "#70BF45", fontWeight: 500 }}>
                    {row.growth}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
          <Pagination
            count={5}
            page={page}
            onChange={(_, value) => setPage(value)}
            shape="rounded"
            renderItem={(item) => (
              <PaginationItem
                {...item}
                sx={{
                  border: "1px solid #DCDCDC",
                  borderRadius: "6px",
                  fontWeight: item.selected ? 600 : 400,
                  bgcolor: item.selected ? "#26619A" : "transparent",
                  color: item.selected ? "#fff" : "#000",
                  minWidth: 32,
                  mx: 0.5,
                }}
              />
            )}
          />
        </Box>
      </Paper>
    </Box>
  );
};

export default SalesAndBv;
