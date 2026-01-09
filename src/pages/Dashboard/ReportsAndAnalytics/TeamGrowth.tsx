 
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
//   Divider,
//   Pagination,
//   PaginationItem,
// } from "@mui/material";
// import DownloadIcon from "@mui/icons-material/Download";
// import type { Page } from "./PageType";

// /* ---------- PROPS ---------- */
// interface Props {
//   onTabChange: (page: Page) => void;
// }

// /* ---------- DATA ---------- */
// const rows = [
//   { month: "June 2024", newA: "+45", active: 167, inactive: 20, total: 245, growth: "+25.9%" },
//   { month: "July 2024", newA: "+52", active: 189, inactive: 26, total: 297, growth: "+14.2%" },
//   { month: "August 2024", newA: "+48", active: 201, inactive: 50, total: 345, growth: "+7.5%" },
//   { month: "September 2024", newA: "+61", active: 223, inactive: 25, total: 406, growth: "+12.1%" },
//   { month: "October 2024", newA: "+58", active: 245, inactive: 10, total: 464, growth: "+12.1%" },
//   { month: "November 2024", newA: "+50", active: 220, inactive: 30, total: 500, growth: "+10.2%" },
//   { month: "December 2024", newA: "+55", active: 230, inactive: 28, total: 520, growth: "+11.0%" },
// ];

// /* ---------- HEADER CELL ---------- */
// const SimpleArrows = ({ label }: { label: string }) => (
//   <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
//     <Typography sx={{ fontWeight: 600, color: "#fff" }}>{label}</Typography>
//     <Box>
//       <Typography sx={{ fontSize: 11, lineHeight: 1, color: "#fff" }}>↑</Typography>
//       <Typography sx={{ fontSize: 11, lineHeight: 1, color: "#fff" }}>↓</Typography>
//     </Box>
//   </Box>
// );

// const TeamGrowth: React.FC<Props> = ({ onTabChange }) => {
//   /* ---------- PAGINATION ---------- */
//   const [page, setPage] = useState(1);
//   const rowsPerPage = 5;
//   const totalPages = Math.ceil(rows.length / rowsPerPage);

//   const visibleRows = rows.slice(
//     (page - 1) * rowsPerPage,
//     page * rowsPerPage
//   );

//   return (
//     <Box sx={{ p: 3, backgroundColor: "#f7f9fc", minHeight: "100vh" }}>
//       {/* ================= TABS ================= */}
//       <Paper sx={{ p: 1.5, mb: 3 }}>
//         <Box display="flex" gap={1}>
//           <Button onClick={() => onTabChange("salesBv")} sx={{ textTransform: "none", color: "#000" }}>
//             Sales & BV
//           </Button>

//           <Button
//             variant="contained"
//             sx={{
//               bgcolor: "#26619A",
//               textTransform: "none",
//               fontWeight: 600,
//               "&:hover": { bgcolor: "#26619A" },
//             }}
//           >
//             Team Growth
//           </Button>

//           <Button onClick={() => onTabChange("packageDistribution")} sx={{ textTransform: "none", color: "#000" }}>
//             Package Distribution
//           </Button>

//           <Button onClick={() => onTabChange("coinsCoupons")} sx={{ textTransform: "none", color: "#000" }}>
//             Coins & Coupons
//           </Button>

//           <Button onClick={() => onTabChange("taxGst")} sx={{ textTransform: "none", color: "#000" }}>
//             Tax / GST
//           </Button>
//         </Box>
//       </Paper>

//       {/* ================= MAIN CARD ================= */}
//       <Paper sx={{ borderRadius: 2, p: 3 }}>
//         <Typography fontSize={20} fontWeight={500}>
//           Team Growth Analytics
//         </Typography>

//         {/* 🔹 Horizontal line after heading */}
//         <Divider sx={{ my: 2 }} />

//         <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
//           <Select size="small" defaultValue="6">
//             <MenuItem value="6">Last 6 Months</MenuItem>
//             <MenuItem value="12">Last 12 Months</MenuItem>
//           </Select>

//           <Button
//             variant="contained"
//             startIcon={<DownloadIcon />}
//             sx={{ textTransform: "none", bgcolor: "#26619A", "&:hover": { bgcolor: "#26619A" } }}
//           >
//             Export
//           </Button>
//         </Box>

//         <TableContainer>
//           <Table>
//             <TableHead>
//               <TableRow sx={{ backgroundColor: "#26619A" }}>
//                 <TableCell><SimpleArrows label="Month" /></TableCell>
//                 <TableCell><SimpleArrows label="New Agents" /></TableCell>
//                 <TableCell><SimpleArrows label="Active Agents" /></TableCell>
//                 <TableCell><SimpleArrows label="Inactive Agents" /></TableCell>
//                 <TableCell><SimpleArrows label="Total Agents" /></TableCell>
//                 <TableCell><SimpleArrows label="Active %" /></TableCell>
//               </TableRow>
//             </TableHead>

//             <TableBody>
//               {visibleRows.map(row => (
//                 <TableRow key={row.month}>
//                   <TableCell>{row.month}</TableCell>
//                   <TableCell>{row.newA}</TableCell>
//                   <TableCell>{row.active}</TableCell>
//                   <TableCell>{row.inactive}</TableCell>
//                   <TableCell>{row.total}</TableCell>
//                   <TableCell sx={{ color: "#70BF45", fontWeight: 500 }}>
//                     {row.growth}
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>

//        {/* ================= PAGINATION ================= */}
//                <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
//                  <Pagination
//                    count={5}
//                    page={page}
//                    onChange={(_, value) => setPage(value)}
//                    shape="rounded"
//                    renderItem={(item) => (
//                      <PaginationItem
//                        {...item}
//                        slots={{
//                          previous: () => <Box sx={{ px: 1 }}>{'< Previous'}</Box>,
//                          next: () => <Box sx={{ px: 1 }}>{'Next >'}</Box>,
//                        }}
//                        sx={{
//                          border: "1px solid #DCDCDC",
//                          borderRadius: "6px",
//                          fontWeight: item.selected ? 600 : 400,
//                          bgcolor: item.selected ? "#26619A" : "transparent",
//                          color: item.selected ? "#fff" : "#000",
//                          minWidth: 32,
//                          mx: 0.5,
//                        }}
//                      />
//                    )}
//                  />
//                </Box>
//       </Paper>
//     </Box>
//   );
// };

// export default TeamGrowth;

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
  Divider,
  Pagination,
  PaginationItem,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import type { Page } from "./PageType";

/* ---------- PROPS ---------- */
interface Props {
  onTabChange: (page: Page) => void;
}

/* ---------- DATA ---------- */
const rows = [
  { month: "June 2024", newA: "+45", active: 167, inactive: 20, total: 245, growth: "+25.9%" },
  { month: "July 2024", newA: "+52", active: 189, inactive: 26, total: 297, growth: "+14.2%" },
  { month: "August 2024", newA: "+48", active: 201, inactive: 50, total: 345, growth: "+7.5%" },
  { month: "September 2024", newA: "+61", active: 223, inactive: 25, total: 406, growth: "+12.1%" },
  { month: "October 2024", newA: "+58", active: 245, inactive: 10, total: 464, growth: "+12.1%" },
  { month: "November 2024", newA: "+50", active: 220, inactive: 30, total: 500, growth: "+10.2%" },
  { month: "December 2024", newA: "+55", active: 230, inactive: 28, total: 520, growth: "+11.0%" },
];

/* ---------- HEADER CELL ---------- */
const SimpleArrows = ({ label }: { label: string }) => (
  <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
    <Typography sx={{ fontWeight: 600, color: "#fff" }}>{label}</Typography>
    <Box>
      <Typography sx={{ fontSize: 11, lineHeight: 1, color: "#fff" }}>↑</Typography>
      <Typography sx={{ fontSize: 11, lineHeight: 1, color: "#fff" }}>↓</Typography>
    </Box>
  </Box>
);

const TeamGrowth: React.FC<Props> = ({ onTabChange }) => {
  /* ---------- PAGINATION ---------- */
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;

  const totalPages = Math.ceil(rows.length / rowsPerPage);

  const visibleRows = rows.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  return (
    <Box sx={{ p: 3, backgroundColor: "#f7f9fc", minHeight: "100vh" }}>
      {/* ================= TABS ================= */}
      <Paper sx={{ p: 1.5, mb: 3 }}>
        <Box display="flex" gap={1}>
          <Button onClick={() => onTabChange("salesBv")} sx={{ textTransform: "none", color: "#000" }}>
            Sales & BV
          </Button>

          <Button
            variant="contained"
            sx={{
              bgcolor: "#26619A",
              textTransform: "none",
              fontWeight: 600,
              "&:hover": { bgcolor: "#26619A" },
            }}
          >
            Team Growth
          </Button>

          <Button onClick={() => onTabChange("packageDistribution")} sx={{ textTransform: "none", color: "#000" }}>
            Package Distribution
          </Button>

          <Button onClick={() => onTabChange("coinsCoupons")} sx={{ textTransform: "none", color: "#000" }}>
            Coins & Coupons
          </Button>

          <Button onClick={() => onTabChange("taxGst")} sx={{ textTransform: "none", color: "#000" }}>
            Tax / GST
          </Button>
        </Box>
      </Paper>

      {/* ================= MAIN CARD ================= */}
      <Paper sx={{ borderRadius: 2, p: 3 }}>
        <Typography fontSize={20} fontWeight={500}>
          Team Growth Analytics
        </Typography>

        {/* Horizontal divider */}
        <Divider sx={{ my: 2 }} />

        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          <Select size="small" defaultValue="6">
            <MenuItem value="6">Last 6 Months</MenuItem>
            <MenuItem value="12">Last 12 Months</MenuItem>
          </Select>

          <Button
            variant="contained"
            startIcon={<DownloadIcon />}
            sx={{ textTransform: "none", bgcolor: "#26619A", "&:hover": { bgcolor: "#26619A" } }}
          >
            Export
          </Button>
        </Box>

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: "#26619A" }}>
                <TableCell><SimpleArrows label="Month" /></TableCell>
                <TableCell><SimpleArrows label="New Agents" /></TableCell>
                <TableCell><SimpleArrows label="Active Agents" /></TableCell>
                <TableCell><SimpleArrows label="Inactive Agents" /></TableCell>
                <TableCell><SimpleArrows label="Total Agents" /></TableCell>
                <TableCell><SimpleArrows label="Active %" /></TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {visibleRows.map((row) => (
                <TableRow key={row.month}>
                  <TableCell>{row.month}</TableCell>
                  <TableCell>{row.newA}</TableCell>
                  <TableCell>{row.active}</TableCell>
                  <TableCell>{row.inactive}</TableCell>
                  <TableCell>{row.total}</TableCell>
                  <TableCell sx={{ color: "#70BF45", fontWeight: 500 }}>
                    {row.growth}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* ================= PAGINATION ================= */}
        <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
          <Pagination
            count={totalPages}
            page={page}
            onChange={(_, value) => setPage(value)}
            shape="rounded"
            renderItem={(item) => (
              <PaginationItem
                {...item}
                slots={{
                  previous: () => <Box sx={{ px: 1 }}>{'< Previous'}</Box>,
                  next: () => <Box sx={{ px: 1 }}>{'Next >'}</Box>,
                }}
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

export default TeamGrowth;
