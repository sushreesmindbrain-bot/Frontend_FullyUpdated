import React from "react";
import {
  Box,
  Paper,
  Typography,
  Grid,
  Tabs,
  Tab,
  Select,
  MenuItem
} from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import type { Page } from "./PageType";

interface Props {
  onTabChange: (page: Page) => void;
}

/* ================= DATA ================= */

const coinsData = [
  { month: "Jan", issued: 12000, redeemed: 9000 },
  { month: "Feb", issued: 15000, redeemed: 11000 },
  { month: "Mar", issued: 17000, redeemed: 14000 },
  { month: "Apr", issued: 9000, redeemed: 6000 },
  { month: "May", issued: 7000, redeemed: 5000 },
  { month: "Jun", issued: 18000, redeemed: 13000 },
  { month: "Jul", issued: 10000, redeemed: 7000 },
  { month: "Aug", issued: 14000, redeemed: 8000 },
  { month: "Sep", issued: 16000, redeemed: 9000 }
];

const couponsData = [
  { month: "Jan", issued: 10000, redeemed: 8000 },
  { month: "Feb", issued: 13000, redeemed: 10000 },
  { month: "Mar", issued: 16000, redeemed: 13000 },
  { month: "Apr", issued: 8000, redeemed: 5000 },
  { month: "May", issued: 6000, redeemed: 4000 },
  { month: "Jun", issued: 17000, redeemed: 12000 },
  { month: "Jul", issued: 9000, redeemed: 6000 },
  { month: "Aug", issued: 12000, redeemed: 7000 },
  { month: "Sep", issued: 15000, redeemed: 8500 }
];

/* ================= STYLES ================= */

const tabInactive = {
  textTransform: "none",
  borderRadius: "8px",
  px: 2.5,
  minHeight: 32,
  fontSize: 14,
  backgroundColor: "#ffffff",
  color: "#4f4f4f",
  border: "1px solid #e0e0e0"
};

const tabActive = {
  ...tabInactive,
  backgroundColor: "#2f80ed",
  color: "#ffffff",
  fontWeight: 600,
  border: "none"
};

const summaryCard = {
  height: 110,
  borderRadius: "12px",
  border: "1.5px solid #3b6ef6",
  px: 3,
  backgroundColor: "#fff",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center"
};

const chartContainer = {
  borderRadius: "14px",
  border: "1px solid #e6e9f0",
  backgroundColor: "#fff",
  p: 3
};

/* ================= COMPONENT ================= */

const CoinsAndCoupons: React.FC<Props> = ({ onTabChange }) => {
  return (
    <Box sx={{ width: "100%", backgroundColor: "#f6f8fc", minHeight: "100vh" }}>
      {/* TABS */}
      <Box sx={{ px: 3, pt: 3 }}>
        <Tabs
          value={3}
          TabIndicatorProps={{ style: { display: "none" } }}
          sx={{ mb: 3, "& .MuiTabs-flexContainer": { gap: 1 } }}
        >
          <Tab label="Sales & BV" sx={tabInactive} onClick={() => onTabChange("salesBv")} />
          <Tab label="Team Growth" sx={tabInactive} onClick={() => onTabChange("teamGrowth")} />
          <Tab label="Package Distribution" sx={tabInactive} onClick={() => onTabChange("packageDistribution")} />
          <Tab label="Coins & Coupons" sx={tabActive} />
          <Tab label="Tax/GST" sx={tabInactive} onClick={() => onTabChange("taxGst")} />
        </Tabs>
      </Box>
{/* SUMMARY */}
{/* SUMMARY */}
<Box sx={{ px: 3, mb: 4, display: "flex", gap: 2 }}>
  <Paper sx={{ ...summaryCard, flex: 1 }}>
    <Typography fontSize={14} color="#3b6ef6">
      Total Coins Issued
    </Typography>
    <Typography fontSize={30} fontWeight={700}>
      54,800
    </Typography>
  </Paper>

  <Paper sx={{ ...summaryCard, flex: 1 }}>
    <Typography fontSize={14} color="#3b6ef6">
      Total Coupons Issued
    </Typography>
    <Typography fontSize={30} fontWeight={700}>
      18,420
    </Typography>
  </Paper>

  <Paper sx={{ ...summaryCard, flex: 1 }}>
    <Typography fontSize={14} color="#3b6ef6">
      Breakage Rate
    </Typography>
    <Typography fontSize={30} fontWeight={700}>
      25%
    </Typography>
    <Typography fontSize={13} color="text.secondary">
      13,700 unredeemed
    </Typography>
  </Paper>
</Box>
      {/* CHARTS */}
      <Box sx={{ px: 3, mb: 4 }}>
        <Paper sx={chartContainer}>
          <ChartHeader title="Coins Issued vs Redeemed" />
          <BarGraph data={coinsData} />
        </Paper>
      </Box>

      <Box sx={{ px: 3 }}>
        <Paper sx={chartContainer}>
          <ChartHeader title="Coupons Issued vs Redeemed" />
          <BarGraph data={couponsData} />
        </Paper>
      </Box>
    </Box>
  );
};

export default CoinsAndCoupons;

/* ================= HELPERS ================= */

const ChartHeader = ({ title }: { title: string }) => (
  <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
    <Typography fontWeight={600}>{title}</Typography>
    <Select size="small" value="2023-2024">
      <MenuItem value="2023-2024">2023-2024</MenuItem>
    </Select>
  </Box>
);

const BarGraph = ({ data }: { data: unknown[] }) => (
  <Box sx={{ height: 260 }}>
    <ResponsiveContainer>
      <BarChart data={data} barGap={6}>
        <XAxis dataKey="month" tick={{ fontSize: 12 }} />
        <YAxis tick={{ fontSize: 12 }} />
        <Tooltip />
        <Bar dataKey="issued" fill="#1f4fd8" radius={[4, 4, 0, 0]} />
        <Bar dataKey="redeemed" fill="#6cc04a" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  </Box>
);


 