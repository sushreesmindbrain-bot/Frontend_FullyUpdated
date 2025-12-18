import React from "react";
import {
  Box,
  Avatar,
  Typography,
  Tabs,
  Tab,
  Paper,
  Button,
} from "@mui/material";

import type { Agent } from "./types";
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
  const [tab, setTab] = React.useState<string>("overview");

  const handleTabChange = (_: any, value: string) => {
    if (value === "kyc") return onKYCView();
    if (value === "team") return onTeamView();
    if (value === "earnings") return onEarningsView();
    if (value === "history") return onHistoryView();
    setTab(value);
  };

  const handleHistoryTabChange = (nextTab: string) => {
    if (nextTab === "kyc") return onKYCView();
    if (nextTab === "team") return onTeamView();
    if (nextTab === "earnings") return onEarningsView();
    if (nextTab === "history") return onHistoryView();
    setTab(nextTab);
  };

  return (
    <Paper
      elevation={4}
      sx={{
        width: "90%",
        maxWidth: "1100px",
        maxHeight: "92vh",
        borderRadius: "16px",
        overflow: "hidden",
        mx: "auto",
        display: "flex",
        flexDirection: "column",
        background: "white",
      }}
    >
      {/* SCROLL AREA */}
      <Box
        sx={{
          flex: 1,
          overflowY: "auto",
          p: 3,
          "&::-webkit-scrollbar": { display: "none" },
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {/* HEADER */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
          <Avatar src={agent.avatar} sx={{ width: 56, height: 56 }} />
          <Box>
            <Typography sx={{ fontWeight: 700 }}>{agent.name}</Typography>
            <Typography variant="body2" color="text.secondary">
              {agent.code} • Joined {agent.joinDate}
            </Typography>
          </Box>
        </Box>

        {/* TABS */}
        <Tabs
          value={tab}
          onChange={handleTabChange}
          centered
          TabIndicatorProps={{ style: { display: "none" } }}
          sx={{
            mb: 2,
            "& .MuiTab-root": {
              textTransform: "none",
              borderRadius: 2,
              px: 3,
              mx: 0.5,
              fontWeight: 600,
              background: "#f4f6f8",
              border: "1px solid #e5e7eb",
              color: "#475467",
            },
            "& .Mui-selected": {
              background: "#1976d2",
              color: "#fff",
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

        {/* OVERVIEW */}
        {tab === "overview" && (
          <Box sx={{ maxWidth: "1100px", width: "100%", mx: "auto" }}>
            {/* STATS CARDS */}
            <Box
              sx={{
                width: "100%",
                px: 2,
                display: "flex",
                justifyContent: "space-between",
                gap: 2,
                mb: 3,
              }}
            >
              {[
                {
                  title: "Team Members",
                  value: "45",
                  border: "#6a9eff",
                  labelColor: "#2b67d3",
                },
                {
                  title: "Total BV",
                  value: "12450",
                  border: "#b37bff",
                  labelColor: "#8b42e9",
                },
                {
                  title: "Total Earnings",
                  value: "₹1,45,600",
                  border: "#6ac27b",
                  labelColor: "#2b8e42",
                },
                {
                  title: "Current Month BV",
                  value: "2340",
                  border: "#ffad7a",
                  labelColor: "#e66c2b",
                },
              ].map((s) => (
                <Paper
                  key={s.title}
                  sx={{
                    flex: 1,
                    p: 2,
                    borderRadius: 2,
                    background: "#ffffff",
                    border: `2px solid ${s.border}`,
                    boxShadow: "0px 2px 6px rgba(0,0,0,0.08)",
                  }}
                >
                  <Typography sx={{ fontSize: "22px", fontWeight: 700 }}>
                    {s.value}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 600,
                      color: s.labelColor,
                    }}
                  >
                    {s.title}
                  </Typography>
                </Paper>
              ))}
            </Box>

            {/* WRAPPER */}
            <Box sx={{ width: "100%", maxWidth: "1100px", mx: "auto" }}>
              {/* CONTACT INFORMATION */}
              <Paper
                sx={{
                  width: "100%",
                  p: 2,
                  mb: 2,
                  border: "1px solid #d0d7de",
                  borderRadius: "8px",
                  background: "#fff",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "15px",
                    fontWeight: 600,
                    color: "#1a73e8",
                    mb: 1.5,
                  }}
                >
                  Contact Information
                </Typography>

                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    rowGap: "12px",
                    columnGap: "60px",
                  }}
                >
                  <Box>
                    <Typography sx={{ fontWeight: 500 }}>Phone</Typography>
                    <Typography sx={{ fontSize: "13px" }}>
                      {agent.phone}
                    </Typography>
                  </Box>

                  <Box>
                    <Typography sx={{ fontWeight: 500 }}>Join Date</Typography>
                    <Typography sx={{ fontSize: "13px" }}>
                      {agent.joinDate}
                    </Typography>
                  </Box>

                  <Box>
                    <Typography sx={{ fontWeight: 500 }}>Email</Typography>
                    <Typography sx={{ fontSize: "13px" }}>
                      {agent.email}
                    </Typography>
                  </Box>

                  <Box>
                    <Typography sx={{ fontWeight: 500 }}>
                      Last Active
                    </Typography>
                    <Typography sx={{ fontSize: "13px" }}>
                      2025-10-28 14:32
                    </Typography>
                  </Box>
                </Box>
              </Paper>

              {/* PACKAGE INFORMATION */}
              <Paper
                sx={{
                  p: 2,
                  mb: 2,
                  border: "1px solid #b4ccf8",
                  borderRadius: "10px",
                  background: "#fff",
                  width: "100%",
                }}
              >
                {/* HEADER */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 1,
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 600,
                      color: "#1a73e8",
                      fontSize: "15px",
                    }}
                  >
                    Package Information
                  </Typography>

                  <Button
                    variant="contained"
                    onClick={onUpgrade}
                    sx={{
                      backgroundColor: "#6ccf5f",
                      "&:hover": { backgroundColor: "#55b84a" },
                      borderRadius: "6px",
                      padding: "4px 14px",
                      minHeight: "28px",
                      textTransform: "none",
                      fontSize: "13px",
                      boxShadow: "none",
                    }}
                  >
                    Upgrade
                  </Button>
                </Box>

                {/* CONTENT */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mt: 1,
                    px: 1,
                  }}
                >
                  <Box>
                    <Typography sx={{ fontWeight: 600 }}>
                      Silver Package
                    </Typography>
                    <Typography sx={{ fontSize: "12px", color: "#555" }}>
                      Package Value: ₹5,000
                    </Typography>
                  </Box>

                  <Box sx={{ textAlign: "right" }}>
                    <Typography sx={{ fontWeight: 600 }}>
                      Purchased on
                    </Typography>
                    <Typography sx={{ fontSize: "13px", color: "#555" }}>
                      15/8/2024
                    </Typography>
                  </Box>
                </Box>
              </Paper>

              {/* NETWORK POSITION */}
              <Paper
                sx={{
                  p: 2,
                  border: "1px solid #d0d7de",
                  borderRadius: "10px",
                  background: "#fff",
                  mt: 2,
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: "15px",
                    color: "#1a73e8",
                    mb: 1.5,
                  }}
                >
                  Network Position
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    flexWrap: "wrap",
                  }}
                >
                  {/* SPONSOR BOX */}
                  <Paper
                    sx={{
                      p: 2,
                      flex: "1",
                      minWidth: "200px",
                      borderRadius: "10px",
                      background: "#f9fafb",
                      boxShadow: "0px 1px 3px rgba(0,0,0,0.06)",
                    }}
                  >
                    <Typography sx={{ fontWeight: 600, mb: 1 }}>
                      Sponsor
                    </Typography>

                    <Box
                      sx={{
                        display: "inline-block",
                        border: "1px solid #c4cdda",
                        borderRadius: "6px",
                        px: 1.5,
                        py: 0.2,
                        fontSize: "12px",
                        background: "#fff",
                      }}
                    >
                      AGT-0023
                    </Box>
                  </Paper>

                  {/* LEFT LEG BOX */}
                  <Paper
                    sx={{
                      p: 2,
                      flex: "1",
                      minWidth: "200px",
                      borderRadius: "10px",
                      background: "#f9fafb",
                      boxShadow: "0px 1px 3px rgba(0,0,0,0.06)",
                    }}
                  >
                    <Typography sx={{ fontWeight: 600, mb: 1 }}>
                      AGT-0023
                    </Typography>

                    <Box
                      sx={{
                        display: "inline-block",
                        border: "1px solid #c4cdda",
                        borderRadius: "6px",
                        px: 1.5,
                        py: 0.2,
                        fontSize: "12px",
                        background: "#fff",
                      }}
                    >
                      Left Leg
                    </Box>
                  </Paper>
                </Box>
              </Paper>
            </Box>
          </Box>
        )}

        {tab === "earnings" && (
          <EarningPage agent={agent} onTabChange={() => onEarningsView()} />
        )}
        {tab === "history" && (
          <HistoryPage
            agent={agent}
            onBack={onClose}
            onTabChange={handleHistoryTabChange}
            onEditProfile={onEditProfile}
          />
        )}
      </Box>

      {/* FOOTER */}
      <Box
        sx={{
          p: 2,
          borderTop: "1px solid #eee",
          display: "flex",
          justifyContent: "center",
          gap: 2,
        }}
      >
        <Button variant="outlined" onClick={onClose}>
          Close
        </Button>
        <Button variant="contained" color="error">
          Suspend
        </Button>
        <Button variant="contained" onClick={onEditProfile}>
          Edit
        </Button>
      </Box>
    </Paper>
  );
};

export default AgentDetailsPage;
