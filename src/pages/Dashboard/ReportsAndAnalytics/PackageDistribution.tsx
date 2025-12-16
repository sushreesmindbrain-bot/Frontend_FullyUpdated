import React from "react";
import {
  Box,
  Typography,
  Paper,
  Tabs,
  Tab,
  Grid,
  Divider
} from "@mui/material";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer
} from "recharts";

import type { Page } from "./PageType";

interface Props {
  onTabChange: (page: Page) => void;
}

/* ---------------- TAB STYLES ---------------- */

const inactiveTabStyle = {
  textTransform: "none",
  borderRadius: "8px",
  minHeight: 34,
  px: 2.5,
  backgroundColor: "#ffffff",
  color: "#555",
  border: "1px solid #e0e0e0",
  fontSize: 14
};

const activeTabStyle = {
  ...inactiveTabStyle,
  backgroundColor: "#2f80ed",
  color: "#fff",
  fontWeight: 600,
  border: "none"
};

/* ---------------- DATA ---------------- */

// Order for PIE (as image)
const pieData = [
  { name: "Silver", value: 85, color: "#7C7CF4" },
  { name: "Gold", value: 35, color: "#00C49F" },
  { name: "Star", value: 8, color: "#FF5A5A" },
  { name: "IBO", value: 120, color: "#FFC107" }
];

// Order for STATISTICS (as image)
const statsData = [
  { name: "IBO", value: 120, color: "#FFC107" },
  { name: "Silver", value: 85, color: "#7C7CF4" },
  { name: "Gold", value: 35, color: "#00C49F" },
  { name: "Star", value: 8, color: "#FF5A5A" }
];

const total = pieData.reduce((s, d) => s + d.value, 0);

/* ---------------- COMPONENT ---------------- */

const PackageDistribution: React.FC<Props> = ({ onTabChange }) => {
  return (
    <Box sx={{ p: 3, backgroundColor: "#f7f9fc", minHeight: "100vh" }}>

      {/* ================= TABS ================= */}
      <Paper sx={{ mb: 3, p: 1, backgroundColor: "transparent", boxShadow: "none" }}>
        <Tabs
          value={2}
          TabIndicatorProps={{ style: { display: "none" } }}
          sx={{ "& .MuiTabs-flexContainer": { gap: 1 } }}
        >
          <Tab label="Sales & BV" onClick={() => onTabChange("salesBv")} sx={inactiveTabStyle} />
          <Tab label="Team Growth" onClick={() => onTabChange("teamGrowth")} sx={inactiveTabStyle} />
          <Tab label="Package Distribution" sx={activeTabStyle} />
          <Tab label="Coins & Coupons" onClick={() => onTabChange("coinsCoupons")} sx={inactiveTabStyle} />
          <Tab label="Tax/GST" onClick={() => onTabChange("taxGst")} sx={inactiveTabStyle} />
        </Tabs>
      </Paper>

      {/* ================= CONTENT ================= */}
      <Grid container spacing={3}>

        {/* LEFT : PACKAGE DISTRIBUTION */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, borderRadius: 3, height: 480 }}>
            <Typography fontSize={20} fontWeight={600} color="#1f5fae" mb={1}>
              Package Distribution
            </Typography>

            <Divider sx={{ mb: 3 }} />

            <Box sx={{ width: "100%", height: 330 }}>
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={pieData}
                    dataKey="value"
                    cx="50%"
                    cy="50%"
                    outerRadius={165}
                  >
                    {pieData.map((item, index) => (
                      <Cell key={index} fill={item.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </Box>

            {/* LEGEND */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 3,
                mt: 2,
                flexWrap: "wrap"
              }}
            >
              {pieData.map((item) => (
                <Box
                  key={item.name}
                  sx={{ display: "flex", alignItems: "center", gap: 1 }}
                >
                  <Box
                    sx={{
                      width: 14,
                      height: 14,
                      borderRadius: "50%",
                      backgroundColor: item.color
                    }}
                  />
                  <Typography fontSize={16} color="#5f5f8c">
                    {item.name}: {item.value}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Paper>
        </Grid>

        {/* RIGHT : PACKAGE STATISTICS */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, borderRadius: 3, height: 480 }}>
            <Typography fontSize={20} fontWeight={600} color="#1f5fae" mb={1}>
              Package Statistics
            </Typography>

            <Divider sx={{ mb: 4 }} />

            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              {statsData.map((d) => (
                <Box
                  key={d.name}
                  sx={{
                    backgroundColor: "#f8fafc",
                    borderRadius: 3,
                    px: 3,
                    py: 2.5,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Box
                      sx={{
                        width: 28,
                        height: 28,
                        borderRadius: 1,
                        backgroundColor: d.color
                      }}
                    />
                    <Typography fontSize={17} color="#1f5fae">
                      {d.name}
                    </Typography>
                  </Box>

                  <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
                    <Typography fontSize={16}>
                      {d.value} agents
                    </Typography>
                    <Typography fontSize={15} color="#7a8194">
                      {((d.value / total) * 100).toFixed(1)}%
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Paper>
        </Grid>

      </Grid>
    </Box>
  );
};

export default PackageDistribution;


 