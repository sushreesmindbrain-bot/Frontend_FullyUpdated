import React, { useState } from "react";
import {
  Box,
  Avatar,
  Typography,
  Tabs,
  Tab,
  Button,
} from "@mui/material";

interface EarningPageProps {
  agent?: any;
  onTabChange: (tab: number) => void;
  onClose?: () => void;
  onSuspend?: () => void;
  onEdit?: () => void;
}

const EarningPage: React.FC<EarningPageProps> = ({
  agent = {},
  onTabChange,
  onClose = () => {},
  onSuspend = () => {},
  onEdit = () => {},
}) => {
  const [tab, setTab] = useState(3);  

  const handleTabChange = (_: any, newValue: number) => {
    setTab(newValue);
    onTabChange(newValue);  
  };

  return (
    <Box
      sx={{
        width: 680,
        mx: "auto",
        mt: 2,
        background: "#fff",
        borderRadius: "12px",
        p: 3,
        boxShadow: "0 4px 25px rgba(0,0,0,0.15)",
      }}
    >
      {/* HEADER */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
        <Avatar src={agent.avatar} sx={{ width: 50, height: 50 }} />
        <Box>
          <Typography fontWeight={700}>
            {agent.name || "Rajesh Kumar"}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {agent.code || "AGT-10456"} • Joined{" "}
            {agent.joinDate || "15/02/2024"}
          </Typography>
        </Box>
      </Box>

      {/* ✅ WORKING TABS */}
      <Tabs
        value={tab}
        onChange={handleTabChange}
        centered
        TabIndicatorProps={{ style: { display: "none" } }}
        sx={{
          mb: 3,
          "& .MuiTab-root": {
            textTransform: "none",
            fontWeight: 600,
            px: 3,
            mx: 0.5,
            borderRadius: "8px",
            background: "#f4f6f8",
            color: "#475467",
            border: "1px solid #e5e7eb",
          },
          "& .Mui-selected": {
            background: "#1976d2",
            color: "#fff",
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

      {/* CONTENT */}
      <Box
        sx={{
          border: "2px solid #1A73E8",
          borderRadius: "12px",
          p: 3,
          background: "#fff",
        }}
      >
        <Typography fontWeight={700} color="#1A73E8" mb={2}>
          Earnings Summary
        </Typography>

        <Box display="grid" gridTemplateColumns="repeat(2,1fr)" gap={2}>
          {[
            ["Total Earnings", "₹1,45,600"],
            ["Current Month", "₹23,400"],
            ["Last Payout", "₹12,450"],
            ["Pending Payout", "₹8,300"],
          ].map(([label, value]) => (
            <Box key={label} p={2} borderRadius={2} bgcolor="#f5f5f5">
              <Typography variant="body2">{label}</Typography>
              <Typography fontWeight="bold">{value}</Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* FOOTER */}
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 3 }}>
        <Button variant="outlined" onClick={onClose}>
          Close
        </Button>
        <Button variant="contained" color="error" onClick={onSuspend}>
          Suspend
        </Button>
        <Button variant="contained" onClick={onEdit}>
          Edit
        </Button>
      </Box>
    </Box>
  );
};

export default EarningPage;
