import React from "react";
import { Box, Avatar, Typography, Tabs, Tab, Paper, Grid, Button } from "@mui/material";
import type { Agent } from "./types";

interface Props {
  agent: Agent;
  onBack: () => void;
}

const KYCViewPage: React.FC<Props> = ({ agent, onBack }) => {
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

      {/* Button Tabs */}
      <Tabs
        value="kyc"
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

      {/* KYC Section */}
      <Paper sx={{ p: 2, border: "1px solid #dfe8ff", mb: 2 }}>
        <Typography sx={{ fontWeight: 600, mb: 1 }}>KYC Verification</Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="caption">Aadhaar Number</Typography>
              <Typography sx={{ fontWeight: 700 }}>XXXX XXXX 4521</Typography>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="caption">PAN Number</Typography>
              <Typography sx={{ fontWeight: 700 }}>ABCDE1234F</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Paper>

      {/* Bank Section */}
      <Paper sx={{ p: 2, border: "1px solid #dfe8ff" }}>
        <Typography sx={{ fontWeight: 600, mb: 1 }}>Bank Account Verification</Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="caption">Account Holder</Typography>
              <Typography sx={{ fontWeight: 700 }}>Rajesh Kumar</Typography>
            </Paper>
          </Grid>

          <Grid item xs={6}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="caption">Bank Name</Typography>
              <Typography sx={{ fontWeight: 700 }}>State Bank of India</Typography>
            </Paper>
          </Grid>

          <Grid item xs={6}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="caption">Account Number</Typography>
              <Typography sx={{ fontWeight: 700 }}>XXXXXXXX4521</Typography>
            </Paper>
          </Grid>

          <Grid item xs={6}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="caption">IFSC Code</Typography>
              <Typography sx={{ fontWeight: 700 }}>SBIN0001234</Typography>
            </Paper>
          </Grid>
        </Grid>

        <Typography variant="caption" sx={{ mt: 2, display: "block" }}>
          Verified on 15/8/2024
        </Typography>
      </Paper>

      {/* Footer Buttons */}
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 3 }}>
        <Button variant="outlined" onClick={onBack}>Close</Button>
        <Button variant="contained" color="error">Suspend</Button>
        <Button variant="contained">Edit</Button>
      </Box>
    </Box>
  );
};

export default KYCViewPage;
