import React from "react";
import { Box, Typography, Paper, Button, Avatar } from "@mui/material";
import { CheckCircle, Groups, Person, Verified } from "@mui/icons-material";
import type { Agent, AgentTab } from "./types"; // <- use AgentTab from types.ts

interface HistoryItem {
  title: string;
  description: string;
  date: string;
  icon: React.ReactNode;
  tag: string;
  tagColor: string;
}

interface HistoryPageProps {
  agent: Agent;
  onBack: () => void;
  onTabChange: (tab: AgentTab) => void; // <- use the same AgentTab
  onEditProfile: () => void;
}

const BLUE = "#26619A";

const HistoryPage: React.FC<HistoryPageProps> = ({
  agent,
  onBack,
  onTabChange,
  onEditProfile,
}) => {
  const historyData: HistoryItem[] = [
    {
      title: "Commission Payout",
      description: "Weekly commission of ₹12,450 credited to wallet successfully",
      date: "2025-10-28 18:30",
      icon: <CheckCircle sx={{ color: "green" }} />,
      tag: "commission",
      tagColor: "green",
    },
    {
      title: "New Team Member",
      description: "AGT-8901 joined under left leg",
      date: "2025-10-27 14:20",
      icon: <Groups sx={{ color: "#0091ff" }} />,
      tag: "team",
      tagColor: "#0091ff",
    },
    {
      title: "Profile Updated",
      description: "Phone number and email address updated",
      date: "2025-10-26 16:30",
      icon: <Person sx={{ color: "#8E44AD" }} />,
      tag: "profile",
      tagColor: "#8E44AD",
    },
    {
      title: "Bank Account Verified",
      description: "Bank account verification completed successfully",
      date: "2025-10-27 14:20",
      icon: <Verified sx={{ color: "green" }} />,
      tag: "bank",
      tagColor: "green",
    },
  ];

  const tabs: { label: string; value: AgentTab }[] = [
    { label: "Overview", value: "overview" },
    { label: "KYC & Bank", value: "kyc" },
    { label: "Team", value: "team" },
    { label: "Earnings", value: "earnings" },
    { label: "History", value: "history" },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        p: 2,
        overflow: "hidden",
        height: "750px",
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      {/* HEADER */}
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Avatar src={agent?.avatar} sx={{ width: 60, height: 60, mr: 1.5 }} />
        <Box>
          <Typography sx={{ fontWeight: 700, fontSize: "17px" }}>
            {agent?.name}
          </Typography>
          <Typography sx={{ fontSize: "12px", color: "#666" }}>
            {agent?.id} • Joined {agent?.joinDate}
          </Typography>
        </Box>
      </Box>

      {/* TABS */}
      <Paper sx={{ p: 1, mb: 2, borderRadius: "12px", background: "#F9FAFC" }}>
        <Box sx={{ display: "flex", width: "100%" }}>
          {tabs.map((tab) => (
            <Button
              key={tab.value}
              onClick={() => onTabChange(tab.value)}
              sx={{
                flex: 1,
                minWidth: 0,
                textTransform: "none",
                fontWeight: 500,
                color: tab.value === "history" ? "#fff" : "#000",
                bgcolor: tab.value === "history" ? BLUE : "transparent",
                "&:hover": { bgcolor: tab.value === "history" ? BLUE : "transparent" },
                borderRadius: tab.value === "history" ? "4px" : "0px",
                py: 0.5,                minHeight: "38px",                fontSize: "14px",
                boxShadow: "none",
                textAlign: "center",
              }}
            >
              {tab.label}
            </Button>
          ))}
        </Box>
      </Paper>

      {/* CONTENT WRAPPER */}
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <Paper
          sx={{
            p: 3,
            borderRadius: "12px",
            border: `2px solid ${BLUE}`,
            background: "#fff",
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          <Typography
            sx={{
              color: BLUE,
              fontWeight: 700,
              fontSize: "16px",
              mb: 2,
            }}
          >
            Activity History
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            {historyData.map((item, index) => (
              <Box key={index} sx={{ display: "grid", gridTemplateColumns: "56px 1fr 110px", alignItems: "start", gap: 2 }}>
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  {item.icon}
                  {index < historyData.length - 1 && (
                    <Box
                      sx={{
                        width: "2px",
                        flexGrow: 1,
                        backgroundImage:
                          "linear-gradient(to bottom, #bcbcbc 33%, rgba(0,0,0,0) 0%)",
                        backgroundSize: "2px 8px",
                        backgroundRepeat: "repeat-y",
                        mt: 0.6,
                        alignSelf: "stretch",
                      }}
                    />
                  )}
                </Box>

                <Box>
                  <Typography sx={{ fontWeight: 700, fontSize: "15px", color: "#0b5cad", mb: 0.5 }}>
                    {item.title}
                  </Typography>
                  <Typography sx={{ fontSize: "13px", color: "#444", mb: 0.6 }}>{item.description}</Typography>
                  <Typography sx={{ fontSize: "12px", fontWeight: 500, color: item.tagColor }}>
                    {item.tag}
                  </Typography>
                </Box>

                <Box sx={{ textAlign: "right", color: "#777", fontSize: "12px", whiteSpace: "nowrap" }}>
                  {item.date}
                </Box>
              </Box>
            ))}
          </Box>
        </Paper>

        {/* FOOTER BUTTONS */}
        <Box sx={{ borderTop: "1px solid #A3AED0", pt: 2, display: "flex", justifyContent: "center", gap: 1.5, mt: 2 }}>
          <Button
                variant="contained"
                onClick={onBack}
                sx={{
                  textTransform: "none",
                  bgcolor: "#A3AED0",
                  color: "#ffffff",
                  "&:hover": { bgcolor: "#A3AED0" },
                }}
              >
                Close
              </Button>
          <Button variant="contained" color="error" sx={{ width: 100,textTransform: "none", }}>
            Suspend
          </Button>
          <Button variant="contained" sx={{ width: 100, background: BLUE ,textTransform: "none",}} onClick={onEditProfile}>
            Edit
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default HistoryPage;
