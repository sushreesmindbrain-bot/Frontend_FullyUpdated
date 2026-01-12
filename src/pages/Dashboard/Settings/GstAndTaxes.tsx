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
  PaginationItem,
  Divider,
  Stack,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import AddCategory from "./AddCategory";
import type { Page } from "./MainParent";

interface CategoryGST {
  category: string;
  rate: number;
}

interface Props {
  onTabChange: React.Dispatch<React.SetStateAction<Page>>;
}

const GstAndTaxes: React.FC<Props> = ({ onTabChange }) => {
  const [inclusive, setInclusive] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const [activeTab, setActiveTab] = useState<Page>("gst");
  const [page, setPage] = useState(1); // pagination page

  const [categories, setCategories] = useState<CategoryGST[]>([
    { category: "Health Supplements", rate: 18 },
    { category: "Personal Care", rate: 18 },
    { category: "Health Devices", rate: 12 },
  ]);

  const handleAddCategory = (data: CategoryGST) => {
    setCategories((prev) => [...prev, data]);
  };

  const tabs: { label: string; key: Page }[] = [
    { label: "GST & Taxes", key: "gst" },
    { label: "Shipping & COD", key: "shipping" },
    { label: "Payment Gateways", key: "payment" },
    { label: "Payout Bank", key: "payout" },
    { label: "Legal Content", key: "legal" },
    { label: "Localization", key: "localization" },
  ];

  return (
    <Box sx={{ p: 3, bgcolor: "#f6f8fb", minHeight: "100vh" }}>
      {/* ================= TOP TABS (Payout-style) ================= */}
      <Paper
        sx={{
          px: 1,
          py: 1,
          mb: 3,
          width: "fit-content",
          display: "inline-flex",
          borderRadius: "12px",
        }}
      >
        <Stack direction="row" spacing={1}>
          {tabs.map((tab) => (
            <Button
              key={tab.key}
              onClick={() => {
                setActiveTab(tab.key);
                onTabChange(tab.key);
              }}
              variant={activeTab === tab.key ? "contained" : "text"}
              sx={{
                bgcolor: activeTab === tab.key ? "#26619A" : "transparent",
                color: activeTab === tab.key ? "#fff" : "#000",
                textTransform: "none",
                "&:hover": {
                  bgcolor: activeTab === tab.key ? "#26619A" : "#f0f0f0",
                },
              }}
            >
              {tab.label}
            </Button>
          ))}
        </Stack>
      </Paper>

      {/* ================= TAX CONFIG ================= */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography fontWeight={600} mb={2} color="#26619A">
          Tax & GST Configuration
        </Typography>

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
            <TextField fullWidth value={9} size="small" />
          </Box>

          <Box>
            <Typography mb={0.5}>SGST Rate (%)</Typography>
            <TextField fullWidth value={0} size="small" />
          </Box>

          <Box>
            <Typography mb={0.5}>IGST Rate (%)</Typography>
            <TextField fullWidth value={5} size="small" />
          </Box>

          <Box>
            <Typography mb={0.5}>CESS Rate (%)</Typography>
            <TextField fullWidth value={10} size="small" />
          </Box>
        </Box>

        <Box mt={3}>
          <Typography fontWeight={600} mb={1} color="#000">
            Tax Inclusive Pricing
          </Typography>

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
              color: "#6B7280",
              borderColor: "#D1D5DB",
              textTransform: "none",
              "&:hover": { borderColor: "#D1D5DB", bgcolor: "#f3f4f6" },
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
              "&:hover": { bgcolor: "#1f4f7a" },
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
              "&:hover": { bgcolor: "#1f4f7a" },
            }}
          >
            Add Category GST
          </Button>
        </Box>

        <Table>
          <TableHead>
            <TableRow sx={{ bgcolor: "#26619A" }}>
              <TableCell sx={{ color: "#fff", fontWeight: 600 }}>
                Category{" "}
                <ArrowUpwardIcon sx={{ fontSize: 16, color: "#fff" }} />
                <ArrowDownwardIcon sx={{ fontSize: 16, color: "#fff" }} />
              </TableCell>
              <TableCell sx={{ color: "#fff", fontWeight: 600 }}>
                Tax Rate (%){" "}
                <ArrowUpwardIcon sx={{ fontSize: 16, color: "#fff" }} />
                <ArrowDownwardIcon sx={{ fontSize: 16, color: "#fff" }} />
              </TableCell>
              <TableCell sx={{ color: "#fff", fontWeight: 600 }}>Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {categories.map((row, i) => (
              <TableRow key={i}>
                <TableCell>{row.category}</TableCell>
                <TableCell>{row.rate}</TableCell>
                <TableCell>
                  <IconButton
                    sx={{
                      bgcolor: "#E1F0D5",
                      "&:hover": { bgcolor: "#D1E7BD" },
                    }}
                  >
                    <EditIcon sx={{ color: "#70BF45" }} />
                  </IconButton>
                  <IconButton
                    sx={{
                      bgcolor: "#FEE2E2",
                      "&:hover": { bgcolor: "#FECACA" },
                      ml: 1,
                    }}
                  >
                    <DeleteIcon sx={{ color: "#EF4444" }} />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* ================= PAGINATION ================= */}
        <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
          <Pagination
            count={10}
            page={page}
            onChange={(_, v) => setPage(v)}
            renderItem={(item) => (
              <PaginationItem
                {...item}
                slots={{
                  previous: () => <span>&lt; Previous</span>,
                  next: () => <span>Next &gt;</span>,
                }}
                sx={{
                  border: "1px solid #DCDCDC",
                  borderRadius: "6px",
                  minWidth: 36,
                  mx: 0.5,
                  fontWeight: item.selected ? 600 : 400,
                }}
              />
            )}
          />
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


 