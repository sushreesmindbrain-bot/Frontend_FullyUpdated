// File: TaxGst.tsx

import React from "react";
import {
  Box,
  Typography,
  Paper,
  Tabs,
  Tab,
  Button,
  Select,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Pagination
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import type { Page } from "./PageType";

/* ---------- PROPS ---------- */
interface Props {
  onTabChange: (page: Page) => void;
}

/* ---------- TAB STYLES ---------- */
const inactiveTabStyle = {
  textTransform: "none",
  borderRadius: "8px",
  minHeight: 32,
  px: 2.5,
  backgroundColor: "#ffffff",
  color: "#555",
  border: "1px solid #e0e0e0",
  "&:hover": { backgroundColor: "#f5f7fa" }
};

const activeTabStyle = {
  textTransform: "none",
  borderRadius: "8px",
  minHeight: 32,
  px: 2.5,
  backgroundColor: "#2f80ed",
  color: "#fff",
  fontWeight: 600
};

/* ---------- SAME ARROW STYLE AS TEAM GROWTH ---------- */
const SimpleArrows = ({ label }: { label: string }) => (
  <Box sx={{ display: "flex", alignItems: "center", gap: 0.6 }}>
    <Typography sx={{ fontWeight: 600 }}>{label}</Typography>
    <Box sx={{ display: "flex", gap: 0.3 }}>
      <Typography sx={{ color: "#fff", fontSize: "12px" }}>↑</Typography>
      <Typography sx={{ color: "#fff", fontSize: "12px" }}>↓</Typography>
    </Box>
  </Box>
);

/* ---------- TABLE DATA ---------- */
const rows = [
  {
    month: "June 2024",
    sales: "₹12,45,890",
    taxable: "₹10,58,007",
    gst: "₹52,900",
    tds: "₹12,289"
  },
  {
    month: "July 2024",
    sales: "₹11,23,450",
    taxable: "₹9,54,932",
    gst: "₹47,747",
    tds: "₹11,090"
  },
  {
    month: "August 2024",
    sales: "₹10,87,650",
    taxable: "₹9,24,502",
    gst: "₹46,225",
    tds: "₹10,725"
  }
];

const TaxGst: React.FC<Props> = ({ onTabChange }) => {
  return (
    <Box sx={{ p: 3, backgroundColor: "#f7f9fc", minHeight: "100vh" }}>
      {/* ================= TABS ================= */}
      <Paper sx={{ mb: 3, p: 1, backgroundColor: "transparent", boxShadow: "none" }}>
        <Tabs
          value={4}
          variant="scrollable"
          scrollButtons="auto"
          TabIndicatorProps={{ style: { display: "none" } }}
          sx={{ "& .MuiTabs-flexContainer": { gap: 1 } }}
        >
          <Tab label="Sales & BV" onClick={() => onTabChange("salesBv")} sx={inactiveTabStyle} />
          <Tab label="Team Growth" onClick={() => onTabChange("teamGrowth")} sx={inactiveTabStyle} />
          <Tab
            label="Package Distribution"
            onClick={() => onTabChange("packageDistribution")}
            sx={inactiveTabStyle}
          />
          <Tab
            label="Coins & Coupons"
            onClick={() => onTabChange("coinsCoupons")}
            sx={inactiveTabStyle}
          />
          <Tab label="Tax/GST" sx={activeTabStyle} />
        </Tabs>
      </Paper>

      {/* ================= MAIN CARD ================= */}
      <Paper sx={{ borderRadius: 2, p: 3 }}>
        <Typography fontWeight={600} mb={2}>
          Tax/GST Report
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          <Select size="small" defaultValue="6">
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
              <TableRow sx={{ backgroundColor: "#245c91" }}>
                <TableCell sx={{ color: "#fff" }}>
                  <SimpleArrows label="Month" />
                </TableCell>
                <TableCell sx={{ color: "#fff" }}>
                  <SimpleArrows label="Total Sales" />
                </TableCell>
                <TableCell sx={{ color: "#fff" }}>
                  <SimpleArrows label="Taxable Amount" />
                </TableCell>
                <TableCell sx={{ color: "#fff" }}>
                  <SimpleArrows label="GST (5%)" />
                </TableCell>
                <TableCell sx={{ color: "#fff" }}>
                  <SimpleArrows label="TDS (5%)" />
                </TableCell>
                <TableCell sx={{ color: "#fff", fontWeight: 600 }}>
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {rows.map((r) => (
                <TableRow key={r.month}>
                  <TableCell>{r.month}</TableCell>
                  <TableCell>{r.sales}</TableCell>
                  <TableCell>{r.taxable}</TableCell>
                  <TableCell>{r.gst}</TableCell>
                  <TableCell>{r.tds}</TableCell>
                  <TableCell>
                    <Button size="small" variant="contained">
                      Export
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
          <Pagination count={10} shape="rounded" />
        </Box>
      </Paper>
    </Box>
  );
};

export default TaxGst;
