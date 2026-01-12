import React, { useState } from "react";
import { Box, Avatar, Typography, Paper, Button } from "@mui/material";
import type { Agent, AgentTab } from "./types";
import EarningPage from "./EarningPage";
import HistoryPage from "./HistoryPage";

interface Props {
  agent: Agent;
  onClose: () => void;
  onKYCView: () => void;
  onTeamView: () => void;
  onEarningsView: () => void;
  onHistoryView: () => void;
  onEditProfile: () => void;
  onUpgrade: () => void;
}

const BLUE = "#26619A"; // Primary color
// const GRAY = "#A3AED0"; // Close/Cancel color (updated per request)

const AgentDetailsPage: React.FC<Props> = ({
  agent,
  onClose,
  onKYCView,
  onTeamView,
  onEarningsView,
  onHistoryView,
  onEditProfile,
  onUpgrade,
}) => {
  const [activeTab, setActiveTab] = useState<AgentTab>("overview");

  const handleTabClick = (tab: AgentTab) => {
    setActiveTab(tab);
    if (tab === "kyc") return onKYCView();
    if (tab === "team") return onTeamView();
    if (tab === "earnings") return onEarningsView();
    if (tab === "history") return onHistoryView();
  };

  return (
    <Paper
      elevation={4}
      sx={{
        width: "90%",
        maxWidth: "1100px",
        maxHeight: "92vh",
        borderRadius: "12px",
        overflow: "hidden",
        mx: "auto",
        display: "flex",
        flexDirection: "column",
        background: "#F9FAFC",
      }}
    >
      <Box
        sx={{
          flex: 1,
          overflowY: "auto",
          p: 3,
          "::-webkit-scrollbar": { display: "none" },
          scrollbarWidth: "none",
          "-ms-overflow-style": "none",
        }}
      >
        {/* HEADER */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
          <Avatar src={agent.avatar} sx={{ width: 56, height: 56 }} />
          <Box>
            <Typography fontWeight={700}>{agent.name}</Typography>
            <Typography variant="body2" color="text.secondary">
              {agent.code} • Joined {agent.joinDate}
            </Typography>
          </Box>
        </Box>

        {/* TABS */}
        <Paper sx={{ p: 1, mb: 3, borderRadius: "12px", background: "#F9FAFC" }}>
          <Box sx={{ display: "flex", width: "100%" }}>
            {(["overview", "kyc", "team", "earnings", "history"] as AgentTab[]).map(
              (tab) => (
                <Button
                  key={tab}
                  onClick={() => handleTabClick(tab)}
                  sx={{
                    flex: 1,
                    minWidth: 0,
                    textTransform: "none",
                    fontWeight: 500,
                    color: activeTab === tab ? "#fff" : "#000",
                    bgcolor: activeTab === tab ? BLUE : "transparent",
                    "&:hover": {
                      bgcolor: activeTab === tab ? BLUE : "transparent",
                    },
                    py: 0.6,
                    minHeight: "38px",
                    fontSize: "14px",
                    textAlign: "center",
                  }}
                >
                  {tab === "overview"
                    ? "Overview"
                    : tab === "kyc"
                    ? "KYC & Bank"
                    : tab === "team"
                    ? "Team"
                    : tab === "earnings"
                    ? "Earnings"
                    : "History"}
                </Button>
              )
            )}
          </Box>
        </Paper>

        {/* OVERVIEW */}
        {activeTab === "overview" && (
          <Box>
            {/* STATS */}
            {/* STATS */}
<Box sx={{ display: "flex", gap: 2, mb: 3 }}>
  {[
    {
      title: "Team Members",
      value: "45",
      border: "#3D42DF",
      titleColor: "#3D42DF",
      bg: "#3D42DF",
    },
    {
      title: "Total BV",
      value: "12450",
      border: "#9121E0",
      titleColor: "#9121E0",
      bg: "#9121E0",
    },
    {
      title: "Total Earnings",
      value: "₹1,45,600",
      border: "#70BF45",
      titleColor: "#70BF45",
      bg: "#70BF45",
    },
    {
      title: "Current Month BV",
      value: "2340",
      border: "#DC7751",
      titleColor: "#DC7751",
      bg: "#DC7751",
    },
  ].map((s) => (
    <Box
      key={s.title}
      sx={{
        flex: 1,
        p: 2,
        borderRadius: 3,
        border: `1.5px solid ${s.border}`,
        textAlign: "center",
        background: `linear-gradient(
          135deg,
          ${s.bg}1A 0%,
          ${s.bg}33 100%
        )`, // faded background
      }}
    >
      <Typography fontSize={22} fontWeight={700} color="#000000">
        {s.value}
      </Typography>

      <Typography fontSize={13} fontWeight={500} color={s.titleColor}>
        {s.title}
      </Typography>
    </Box>
  ))}
</Box>

            {/* CONTACT INFO */}
            <Box sx={{ p: 2, mb: 2, borderRadius: "12px", border: `2px solid ${BLUE}`, background: "#ffffff" }}>
              <Typography fontWeight={600} mb={2} color={BLUE}>
                Contact Information
              </Typography>

              {[
                ["Phone", agent.phone || "+91 98765 43210"],
                ["Email", agent.email || "rajesh.kumar@email.com"],
                ["Join Date", agent.joinDate],
                ["Last Active", agent.lastActive || "2025-10-28 14:32"],
              ].map(([label, value]) => (
                <Box key={label} sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                  <Typography fontWeight={500}>{label}</Typography>
                  <Typography>{value}</Typography>
                </Box>
              ))}
            </Box>

            {/* PACKAGE INFO */}
            <Box sx={{ p: 3, mb: 2, borderRadius: "12px", border: `2px solid ${BLUE}`, background: "#ffffff" }}>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography fontWeight={600} color={BLUE}>
                  Package Information
                </Typography>
                <Button
                  variant="contained"
                  onClick={onUpgrade}
                  sx={{
                    borderRadius: 2,
                    textTransform: "none",
                    bgcolor: "#70BF45",
                    "&:hover": { bgcolor: "#70BF45" },
                  }}
                >
                  Upgrade
                </Button>
              </Box>
              <Box sx={{ mt: 1, display: "flex", justifyContent: "space-between" }}>
                <Box>
                  <Typography fontWeight={500}>Silver Package</Typography>
                  <Typography fontSize={13} color="text.secondary">
                    Package Value: ₹5,000
                  </Typography>
                </Box>
                <Typography fontWeight={500}>Purchased on 15/8/2024</Typography>
              </Box>
            </Box>

            {/* NETWORK POSITION */}
            <Box
              sx={{
                p: 2,
                mb: 2,
                borderRadius: "12px",
                border: `2px solid ${BLUE}`,
              }}
            >
              <Typography fontWeight={600} mb={2} color={BLUE}>
                Network Position
              </Typography>

              {/* Sponsor + Left Leg side-by-side */}
              <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
                <Box sx={{ flex: 1, maxWidth: 320, p: 2, borderRadius: 2, background: "#F9FAFB", border: "1px solid #e0e0e0", textAlign: "center" }}>
                  <Typography fontSize={12} color="text.secondary" mb={1}>
                    Sponsor
                  </Typography>
                  <Box
                    sx={{
                      border: "1px solid #d5dae3",
                      borderRadius: 2,
                      py: 0.6,
                      px: 1,
                      fontSize: 13,
                      textAlign: "center",
                      maxWidth: 140,
                      mx: "auto",
                    }}
                  >
                    AGT-0023
                  </Box>
                </Box>

                <Box sx={{ flex: 1, maxWidth: 320, p: 2, borderRadius: 2, background: "#F9FAFB", border: "1px solid #e0e0e0", textAlign: "center" }}>
                  <Typography fontSize={12} color="text.secondary" mb={1}>
                  
                    AGT-0023
                  </Typography>
                  <Box
                    sx={{
                      border: "1px solid #d5dae3",
                      borderRadius: 2,
                      py: 0.6,
                      px: 1,
                      fontSize: 13,
                      textAlign: "center",
                      maxWidth: 140,
                      mx: "auto",
                    }}
                  >
                    Left Leg
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        )}

        {activeTab === "earnings" && <EarningPage agent={agent} onTabChange={handleTabClick} />}

        {activeTab === "history" && (
          <HistoryPage
            agent={agent}
            onBack={onClose}
            onTabChange={handleTabClick}
            onEditProfile={onEditProfile}
          />
        )}
      </Box>

      {/* FOOTER */}
      <Box
        sx={{
          p: 2,
          borderTop: "1px solid #A3AED0",
          display: "flex",
          justifyContent: "center",
          gap: 2,
        }}
      >
        <Button
          variant="contained"
          onClick={onClose}
          sx={{
            background: "#A3AED0",
            color: "white",
            px: 3,
            textTransform: "none",
            fontSize: "13px",
            "&:hover": { background: "#CACFE1" },
          }}
        >
          Close
        </Button>

        <Button variant="contained" color="error" sx={{ borderRadius: 2 , textTransform: "none",bgcolor: "#FF0000"}}>
           Suspend
        </Button>

        <Button
          variant="contained"
          onClick={onEditProfile}
          sx={{
            textTransform: "none",
            borderRadius: 2,
            bgcolor: BLUE,
            "&:hover": { bgcolor: BLUE },
          }}
        >
          Edit
        </Button>
      </Box>
    </Paper>
  );
};

export default AgentDetailsPage;



 