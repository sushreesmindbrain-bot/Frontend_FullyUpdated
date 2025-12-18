 
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
  TableRow
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

import type { Page } from "./PageType";

interface Props {
  onTabChange: (page: Page) => void;
}

const inactiveTabStyle = {
  textTransform: "none",
  borderRadius: "8px",
  minHeight: 32,
  px: 2.5,
  backgroundColor: "#ffffff",
  color: "#555",
  border: "1px solid #e0e0e0",
  "&:hover": {
    backgroundColor: "#f5f7fa"
  }
};

const rows = [
  { month: "June 2024", sales: "₹1,245,000", bv: "185,000 BV", growth: "+25.9%" },
  { month: "July 2024", sales: "₹1,567,000", bv: "234,000 BV", growth: "+14.2%" },
  { month: "August 2024", sales: "₹1,790,000", bv: "267,000 BV", growth: "+7.5%" },
  { month: "September 2024", sales: "₹1,923,000", bv: "289,000 BV", growth: "+12.1%" },
  { month: "October 2024", sales: "₹2,156,000", bv: "323,000 BV", growth: "+12.1%" }
];

/* SAME ARROW STYLE AS AgentListPage */
const SimpleArrows = ({ label }: { label: string }) => (
  <Box sx={{ display: "flex", alignItems: "center", gap: 0.6 }}>
    {label}
    <Box sx={{ display: "flex", alignItems: "center", gap: 0.3 }}>
      <Typography sx={{ color: "white", fontSize: "12px" }}>↑</Typography>
      <Typography sx={{ color: "white", fontSize: "12px" }}>↓</Typography>
    </Box>
  </Box>
);

const SalesAndBv: React.FC<Props> = ({ onTabChange }) => {
  return (
    <Box sx={{ p: 3, backgroundColor: "#f7f9fc", minHeight: "100vh" }}>
      {/* ================= TABS ================= */}
      <Paper sx={{ mb: 2, p: 1, backgroundColor: "transparent", boxShadow: "none" }}>
        <Tabs
          value="salesBv"
          TabIndicatorProps={{ style: { display: "none" } }}
          sx={{ "& .MuiTabs-flexContainer": { gap: 1 } }}
        >
          <Tab
            label="Sales & BV"
            sx={{
              textTransform: "none",
              borderRadius: "8px",
              minHeight: 32,
              px: 2.5,
              backgroundColor: "#2f80ed",
              color: "#fff",
              fontWeight: 600
            }}
          />

          <Tab
            label="Team Growth"
            onClick={() => onTabChange("teamGrowth")}
            sx={inactiveTabStyle}
          />

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

          <Tab
            label="Tax/GST"
            onClick={() => onTabChange("taxGst")}
            sx={inactiveTabStyle}
          />
        </Tabs>
      </Paper>

      {/* ================= CARD ================= */}
      <Paper sx={{ border: "2px solid #DCDCDC", borderRadius: 2, p: 2 }}>
        <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
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
              <TableRow sx={{ backgroundColor: "#245c91" }}>
                <TableCell sx={{ color: "white", fontWeight: 600 }}>
                  <SimpleArrows label="Month" />
                </TableCell>
                <TableCell sx={{ color: "white", fontWeight: 600 }}>
                  <SimpleArrows label="Total Sales" />
                </TableCell>
                <TableCell sx={{ color: "white", fontWeight: 600 }}>
                  <SimpleArrows label="Total BV" />
                </TableCell>
                <TableCell sx={{ color: "white", fontWeight: 600 }}>
                  <SimpleArrows label="Growth" />
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {rows.map((row) => (
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

        <Box sx={{ display: "flex", justifyContent: "center", mt: 2, gap: 1 }}>
          <Button size="small">Previous</Button>
          <Button size="small" variant="outlined">1</Button>
          <Button size="small">2</Button>
          <Button size="small">3</Button>
          <Button size="small">Next</Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default SalesAndBv;


 