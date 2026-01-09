// import React, { useState } from "react";
// import {
//   Box,
//   Paper,
//   Typography,
//   TextField,
//   Switch,
//   Button,
//   Table,
//   TableHead,
//   TableRow,
//   TableCell,
//   TableBody,
//   IconButton,
//   Pagination,
//   Stack
// } from "@mui/material";

// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";
// import AddIcon from "@mui/icons-material/Add";
// import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
// import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

// import AddCategory from "./AddCategory";
// import type { Page } from "./MainParent";

// /* ---------- TYPES ---------- */
// interface CategoryGST {
//   category: string;
//   rate: number;
// }

// /* ---------- PROPS (FIXED) ---------- */
// interface Props {
//   onTabChange: React.Dispatch<React.SetStateAction<Page>>;
// }

// const GstAndTaxes: React.FC<Props> = ({ onTabChange }) => {
//   const [inclusive, setInclusive] = useState(false);
//   const [openAdd, setOpenAdd] = useState(false);

//   const [categories, setCategories] = useState<CategoryGST[]>([
//     { category: "Health Supplements", rate: 18 },
//     { category: "Personal Care", rate: 18 },
//     { category: "Health Devices", rate: 12 }
//   ]);

//   const handleAddCategory = (data: CategoryGST) => {
//     setCategories((prev) => [...prev, data]);
//   };

//   return (
//     <Box sx={{ p: 3, bgcolor: "#f6f8fb", minHeight: "100vh" }}>
//       {/* ================= TOP TABS ================= */}
//       <Paper sx={{ p: 1.5, mb: 3 }}>
//         <Stack direction="row" spacing={1}>
//           <Button variant="contained" sx={{ bgcolor: "#26619A" }}>
//             GST & Taxes
//           </Button>
//           <Button onClick={() => onTabChange("shipping")}>
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

//       {/* ================= TAX CONFIG ================= */}
//       <Paper sx={{ p: 3, mb: 3 }}>
//         <Typography fontWeight={600} mb={2} sx={{ color: "#26619A" }}>
//           Tax & GST Configuration
//         </Typography>

//         <Box
//           sx={{
//             display: "grid",
//             gridTemplateColumns: "repeat(2, 1fr)",
//             gap: 4
//           }}
//         >
//           <Box>
//             <Typography mb={0.5}>CGST Rate (%)</Typography>
//             <TextField fullWidth value={9} />
//           </Box>

//           <Box>
//             <Typography mb={0.5}>SGST Rate (%)</Typography>
//             <TextField fullWidth value={0} />
//           </Box>

//           <Box>
//             <Typography mb={0.5}>IGST Rate (%)</Typography>
//             <TextField fullWidth value={5} />
//           </Box>

//           <Box>
//             <Typography mb={0.5}>CESS Rate (%)</Typography>
//             <TextField fullWidth value={10} />
//           </Box>
//         </Box>

//         <Box mt={2} display="flex" alignItems="center">
//           <Switch
//             checked={inclusive}
//             onChange={(e) => setInclusive(e.target.checked)}
//           />
//           <Typography fontSize={14}>
//             Show prices inclusive of tax
//           </Typography>
//         </Box>

//         <Box display="flex" justifyContent="flex-end" gap={1} mt={3}>
//           <Button variant="outlined">Clear</Button>
//           <Button variant="contained" sx={{ bgcolor: "#26619A" }}>
//             Save Tax Settings
//           </Button>
//         </Box>
//       </Paper>

//       {/* ================= CATEGORY TABLE ================= */}
//       <Paper sx={{ p: 3 }}>
//         <Box display="flex" justifyContent="space-between" mb={2}>
//           <Typography fontWeight={600}>
//             GST Rates by Category
//           </Typography>

//           <Button
//             variant="contained"
//             startIcon={<AddIcon />}
//             sx={{ bgcolor: "#26619A" }}
//             onClick={() => setOpenAdd(true)}
//           >
//             Add Category GST
//           </Button>
//         </Box>

//         <Table>
//           <TableHead>
//             <TableRow sx={{ bgcolor: "#26619A" }}>
//               <TableCell sx={{ color: "#fff" }}>
//                 Category <ArrowUpwardIcon sx={{ fontSize: 16 }} />
//                 <ArrowDownwardIcon sx={{ fontSize: 16 }} />
//               </TableCell>
//               <TableCell sx={{ color: "#fff" }}>
//                 Tax Rate (%)
//               </TableCell>
//               <TableCell sx={{ color: "#fff" }}>
//                 Actions
//               </TableCell>
//             </TableRow>
//           </TableHead>

//           <TableBody>
//             {categories.map((row, i) => (
//               <TableRow key={i}>
//                 <TableCell>{row.category}</TableCell>
//                 <TableCell>{row.rate}</TableCell>
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
//           <Pagination count={5} />
//         </Box>
//       </Paper>

//       {/* ================= ADD MODAL ================= */}
//       <AddCategory
//         open={openAdd}
//         onClose={() => setOpenAdd(false)}
//         onSave={handleAddCategory}
//       />
//     </Box>
//   );
// };

// export default GstAndTaxes;
import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Switch,
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Pagination,
  Stack,
  Divider,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import AddCategory from "./AddCategory";
import type { Page } from "./MainParent";

/* ---------- TYPES ---------- */
interface CategoryGST {
  category: string;
  rate: number;
}

/* ---------- PROPS ---------- */
interface Props {
  onTabChange: React.Dispatch<React.SetStateAction<Page>>;
}

const GstAndTaxes: React.FC<Props> = ({ onTabChange }) => {
  const [inclusive, setInclusive] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);

  const [categories, setCategories] = useState<CategoryGST[]>([
    { category: "Health Supplements", rate: 18 },
    { category: "Personal Care", rate: 18 },
    { category: "Health Devices", rate: 12 },
  ]);

  const handleAddCategory = (data: CategoryGST) => {
    setCategories((prev) => [...prev, data]);
  };

  return (
    <Box sx={{ p: 3, bgcolor: "#f6f8fb", minHeight: "100vh" }}>
      {/* ================= TOP TABS ================= */}
      <Paper sx={{ p: 1.5, mb: 3 }}>
        <Stack direction="row" spacing={1}>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#26619A",
              color: "#fff",
              textTransform: "none",
              "&:hover": { bgcolor: "#26619A" },
            }}
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
            onClick={() => onTabChange("payment")}
            sx={{ textTransform: "none", color: "#000" }}
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

      {/* ================= TAX CONFIG ================= */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography fontWeight={600} mb={2} color="#26619A">
          Tax & GST Configuration
        </Typography>

        {/* Divider line with color #CBD5E0 */}
        <Divider sx={{ mb: 2, bgcolor: "#CBD5E0", height: 2 }} />

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 4,
          }}
        >
          <Box>
            <Typography mb={0.5}>CGST Rate (%)</Typography>
            <TextField fullWidth value={9} />
          </Box>

          <Box>
            <Typography mb={0.5}>SGST Rate (%)</Typography>
            <TextField fullWidth value={0} />
          </Box>

          <Box>
            <Typography mb={0.5}>IGST Rate (%)</Typography>
            <TextField fullWidth value={5} />
          </Box>

          <Box>
            <Typography mb={0.5}>CESS Rate (%)</Typography>
            <TextField fullWidth value={10} />
          </Box>
        </Box>

        {/* ================= TAX INCLUSIVE PRICING ================= */}
        <Box mt={3}>
          {/* Heading in black */}
          <Typography fontWeight={600} mb={1} color="#000">
            Tax Inclusive Pricing
          </Typography>

          {/* Switch with label */}
          <Box display="flex" alignItems="center">
            <Switch
              checked={inclusive}
              onChange={(e) => setInclusive(e.target.checked)}
            />
            <Typography fontSize={14}>Show prices inclusive of tax</Typography>
          </Box>
        </Box>

        <Box display="flex" justifyContent="flex-end" gap={1} mt={3}>
          <Button
            variant="outlined"
            sx={{
              color: "#26619A",
              borderColor: "#26619A",
              textTransform: "none",
              "&:hover": { borderColor: "#26619A", bgcolor: "transparent" },
            }}
          >
            Clear
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
            Save Tax Settings
          </Button>
        </Box>
      </Paper>

      {/* ================= CATEGORY TABLE ================= */}
      <Paper sx={{ p: 3 }}>
        <Box display="flex" justifyContent="space-between" mb={2}>
          <Typography fontWeight={600}>GST Rates by Category</Typography>

          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => setOpenAdd(true)}
            sx={{
              bgcolor: "#26619A",
              color: "#fff",
              textTransform: "none",
              "&:hover": { bgcolor: "#26619A" },
            }}
          >
            Add Category GST
          </Button>
        </Box>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                Category <ArrowUpwardIcon sx={{ fontSize: 16 }} />
                <ArrowDownwardIcon sx={{ fontSize: 16 }} />
              </TableCell>
              <TableCell>Tax Rate (%)</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {categories.map((row, i) => (
              <TableRow key={i}>
                <TableCell>{row.category}</TableCell>
                <TableCell>{row.rate}</TableCell>
                <TableCell>
                  <IconButton
                    sx={{ bgcolor: "#E1F0D5", "&:hover": { bgcolor: "#E1F0D5" } }}
                  >
                    <EditIcon sx={{ color: "#70BF45" }} />
                  </IconButton>
                  <IconButton
                    sx={{ bgcolor: "#E1F0D5", "&:hover": { bgcolor: "#E1F0D5" } }}
                  >
                    <DeleteIcon sx={{ color: "#EF4444" }} />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <Box display="flex" justifyContent="center" mt={2}>
          <Pagination count={5} />
        </Box>
      </Paper>

      {/* ================= ADD MODAL ================= */}
      <AddCategory
        open={openAdd}
        onClose={() => setOpenAdd(false)}
        onSave={handleAddCategory}
      />
    </Box>
  );
};

export default GstAndTaxes;

