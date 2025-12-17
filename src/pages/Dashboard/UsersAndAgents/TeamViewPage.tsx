import React, { useState } from "react";
import {
  Box,
  Avatar,
  Typography,
  Tabs,
  Tab,
  Paper,
  Grid,
  Button,
} from "@mui/material";
import type { Agent } from "./types";

interface Props {
  agent: Agent;
  onBack: () => void;
  onTabChange: (tab: number) => void;
}

const TeamViewPage: React.FC<Props> = ({
  agent,
  onBack,
  onTabChange,
}) => {
  
  const [tab, setTab] = useState(2);  

  const handleChange = (_: any, newValue: number) => {
    setTab(newValue);
    onTabChange(newValue);  
  };

  return (
    <Box sx={{ p: 3 }}>
      {/* Header */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
        <Avatar src={agent.avatar} sx={{ width: 56, height: 56 }} />
        <Box>
          <Typography sx={{ fontWeight: 700 }}>{agent.name}</Typography>
          <Typography variant="body2" color="text.secondary">
            {agent.code} • Joined {agent.joinDate}
          </Typography>
        </Box>
      </Box>

      {/* ✅ Tabs */}
      <Tabs
        value={tab}
        onChange={handleChange}
        TabIndicatorProps={{ style: { display: "none" } }}
        centered
        sx={{
          mb: 2,
          "& .MuiTab-root": {
            textTransform: "none",
            borderRadius: "8px",
            minHeight: 32,
            px: 2,
            mx: 0.5,
            fontWeight: 600,
            background: "#f4f6f8",
            color: "#475467",
            border: "1px solid #e5e7eb",
            fontSize: "14px",
          },
          "& .Mui-selected": {
            background: "#1976d2",
            color: "white",
            borderColor: "#1976d2",
          },
        }}
      >
        <Tab label="Overview" />
        <Tab label="KYC & Bank" />
        <Tab label="Team" />
        <Tab label="Earnings" />
        <Tab label="History" />
      </Tabs>

      {/* ================= TEAM CONTENT ================= */}
      <Paper sx={{ p: 2, border: "1px solid #dfe8ff", mb: 2 }}>
        <Typography sx={{ fontWeight: 600, mb: 1 }}>
          Team Structure
        </Typography>

        <Box sx={{ border: "1px solid #d6deff", p: 2, borderRadius: 2 }}>
          <Paper sx={{ p: 2, mb: 2, background: "#f7f9ff" }}>
            <Grid container>
              <Grid item xs={8}>
                <Typography fontWeight={600}>Left Leg</Typography>
                <Typography color="text.secondary">23 members</Typography>
              </Grid>
              <Grid item xs={4} textAlign="right">
                <Typography fontWeight={700} color="#2c7bff">
                  6,240 BV
                </Typography>
                <Typography variant="caption">Total BV</Typography>
              </Grid>
            </Grid>
          </Paper>

          <Paper sx={{ p: 2, background: "#f7f9ff" }}>
            <Grid container>
              <Grid item xs={8}>
                <Typography fontWeight={600}>Right Leg</Typography>
                <Typography color="text.secondary">22 members</Typography>
              </Grid>
              <Grid item xs={4} textAlign="right">
                <Typography fontWeight={700} color="#2c7bff">
                  6,210 BV
                </Typography>
                <Typography variant="caption">Total BV</Typography>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Paper>

      {/* Footer */}
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 3 }}>
        <Button variant="outlined" onClick={onBack}>
          Close
        </Button>
        <Button variant="contained" color="error">
          Suspend
        </Button>
        <Button variant="contained">Edit</Button>
      </Box>
    </Box>
  );
};

export default TeamViewPage;
