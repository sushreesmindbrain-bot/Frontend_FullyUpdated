import React, { useState } from "react";
import {
  Box,
  Avatar,
  Typography,
  Tabs,
  Tab,
  Button
} from "@mui/material";

import type { Agent } from "./types";

interface Props {
  agent: Agent;
  onBack: () => void;
  onTeamView: () => void;
  onEarningsView: () => void;
  onHistoryView: () => void;
  onVerificationView: () => void;
}

const KYCViewPage: React.FC<Props> = ({
  agent,
  onBack,
  onTeamView,
  onEarningsView,
  onHistoryView,
  onVerificationView
}) => {

   const [tab, setTab] = useState("overview");

   const handleChange = (_: unknown, newValue: string) => {
    setTab(newValue);

    if (newValue === "overview") onBack();
    if (newValue === "team") onTeamView();
    if (newValue === "earnings") onEarningsView();
    if (newValue === "history") onHistoryView();
  };

  return (
    <Box
      sx={{
        p: 2,
        height: "95vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        
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
          <Tab label="Overview" value="overview" />
          <Tab label="KYC & Bank" value="kyc" />
          <Tab label="Team" value="team" />
          <Tab label="Earnings" value="earnings" />
          <Tab label="History" value="history" />
        </Tabs>

        {/* ===================== KYC SECTION ===================== */}
        <Box
          sx={{
            border: "2px solid #1A73E8",
            borderRadius: "12px",
            p: 2,
            mt: 1,
            background: "#ffffff",
          }}
        >
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
            <Typography sx={{ fontWeight: 700, fontSize: "16px", color: "#1A73E8" }}>
              KYC Verification
            </Typography>

            <Button
              variant="outlined"
              sx={{
                borderColor: "#2ECC71",
                color: "#2ECC71",
                fontWeight: 600,
                borderRadius: "8px",
                px: 2,
                py: "2px",
                fontSize: "13px",
              }}
              onClick={onVerificationView}
            >
              Verified
            </Button>
          </Box>

          <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gap={1.5}>
            <Box p={2} borderRadius={2} bgcolor="#f5f5f5" boxShadow={1}>
              <Typography variant="body2">Aadhaar Number</Typography>
              <Typography variant="h6" fontWeight="bold" fontSize="16px">
                XXXX XXXX 4521
              </Typography>
            </Box>

            <Box p={2} borderRadius={2} bgcolor="#f5f5f5" boxShadow={1}>
              <Typography variant="body2">PAN Number</Typography>
              <Typography variant="h6" fontWeight="bold" fontSize="16px">
                ABCDE1234F
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* ===================== BANK SECTION ===================== */}
        <Box
          sx={{
            border: "2px solid #1A73E8",
            borderRadius: "12px",
            p: 2,
            mt: 1.5,
            background: "#ffffff",
          }}
        >
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
            <Typography sx={{ fontWeight: 700, fontSize: "16px", color: "#1A73E8" }}>
              Bank Account Verification
            </Typography>

            <Button
              variant="outlined"
              sx={{
                borderColor: "#2ECC71",
                color: "#2ECC71",
                fontWeight: 600,
                borderRadius: "8px",
                px: 2,
                py: "2px",
                fontSize: "13px",
              }}
              onClick={onVerificationView}
            >
              Verified
            </Button>
          </Box>

          <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gap={1.5}>
            <Box p={2} borderRadius={2} bgcolor="#f5f5f5" boxShadow={1}>
              <Typography variant="body2">Account Holder</Typography>
              <Typography variant="h6" fontWeight="bold" fontSize="16px">
                Rajesh Kumar
              </Typography>
            </Box>

            <Box p={2} borderRadius={2} bgcolor="#f5f5f5" boxShadow={1}>
              <Typography variant="body2">Bank Name</Typography>
              <Typography variant="h6" fontWeight="bold" fontSize="16px">
                State Bank of India
              </Typography>
            </Box>

            <Box p={2} borderRadius={2} bgcolor="#f5f5f5" boxShadow={1}>
              <Typography variant="body2">Account Number</Typography>
              <Typography variant="h6" fontWeight="bold" fontSize="16px">
                XXXXXXXX4521
              </Typography>
            </Box>

            <Box p={2} borderRadius={2} bgcolor="#f5f5f5" boxShadow={1}>
              <Typography variant="body2">IFSC Code</Typography>
              <Typography variant="h6" fontWeight="bold" fontSize="16px">
                SBIN0001234
              </Typography>
            </Box>
          </Box>

          <Typography variant="caption" sx={{ mt: 1, display: "block" }}>
            Verified on 15/8/2024
          </Typography>
        </Box>
      </Box>

      {/* Footer */}
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 1 }}>
        <Button variant="outlined" onClick={onBack}>Close</Button>
        <Button variant="contained" color="error">Suspend</Button>
        <Button variant="contained">Edit</Button>
      </Box>
    </Box>
  );
};

export default KYCViewPage;
