import React from "react";
import { Box, Avatar, Typography, Tabs, Tab, Paper, Grid, Button } from "@mui/material";
import type { Agent } from "./types";

interface Props {
  agent: Agent;
  onBack: () => void;
}

const TeamViewPage: React.FC<Props> = ({ agent, onBack }) => {
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

      {/* Button-style Tabs */}
      <Tabs
        value="team"
        TabIndicatorProps={{ style: { display: "none" } }}
        centered
        sx={{
          mb: 2,
          "& .MuiTab-root": {
            textTransform: "none",
            borderRadius: "8px",
            minHeight: 36,
            px: 2.5,
            mx: 0.7,
            fontWeight: 600,
            background: "#f4f6f8",
            color: "#475467",
            border: "1px solid #e5e7eb",
            transition: "0.2s",
          },
          "& .MuiTab-root.Mui-selected": {
            background: "#1976d2",
            color: "white",
            borderColor: "#1976d2",
          },
          "& .MuiTab-root:hover": {
            background: "#e8ecf1",
          },
        }}
      >
        <Tab label="Overview" value="overview" onClick={onBack} />
        <Tab label="KYC & Bank" value="kyc" />
        <Tab label="Team" value="team" />
        <Tab label="Earnings" value="earnings" />
        <Tab label="History" value="history" />
      </Tabs>

      {/* Team Structure */}
      <Paper sx={{ p: 2, border: "1px solid #dfe8ff", mb: 2 }}>
        <Typography sx={{ fontWeight: 600, mb: 1 }}>Team Structure</Typography>

        <Box sx={{ border: "1px solid #d6deff", p: 2, borderRadius: 2 }}>
          {/* Left Leg */}
          <Paper
            sx={{
              p: 2,
              mb: 2,
              border: "1px solid #cbd6ff",
              background: "#f7f9ff",
            }}
          >
            <Grid container>
              <Grid item xs={8}>
                <Typography fontWeight={600}>Left Leg</Typography>
                <Typography color="text.secondary">23 members</Typography>
              </Grid>
              <Grid item xs={4} sx={{ textAlign: "right" }}>
                <Typography fontWeight={700} color="#2c7bff">
                  6,240 BV
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Total BV
                </Typography>
              </Grid>
            </Grid>
          </Paper>

          {/* Right Leg */}
          <Paper
            sx={{
              p: 2,
              border: "1px solid #cbd6ff",
              background: "#f7f9ff",
            }}
          >
            <Grid container>
              <Grid item xs={8}>
                <Typography fontWeight={600}>Right Leg</Typography>
                <Typography color="text.secondary">22 members</Typography>
              </Grid>
              <Grid item xs={4} sx={{ textAlign: "right" }}>
                <Typography fontWeight={700} color="#2c7bff">
                  6,210 BV
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Total BV
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Paper>

      {/* Footer Buttons */}
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
