import React, { useState } from "react";
import {
  Box,
  Avatar,
  Typography,
  Tabs,
  Tab,
  Button,
  Paper,
} from "@mui/material";

import ReviewKyc from "./ReviewKyc";    

interface Props {
  agent?: any;
  onClose: () => void;
}

const VerificationPage: React.FC<Props> = ({ agent, onClose }) => {
  const [tab, setTab] = useState(1);  
  const [openReview, setOpenReview] = useState(false); 

  return (
    <>
      {/*   KYC REVIEW MODAL */}
      <ReviewKyc
        open={openReview}
        onClose={() => setOpenReview(false)}
        onApprove={() => {
          console.log("KYC APPROVED");
          setOpenReview(false);
        }}
        onReject={(reason) => {
          console.log("KYC REJECTED: ", reason);
          setOpenReview(false);
        }}
        agentName={agent?.fullName}
        agentCode={agent?.agentCode}
      />

      {/*  MAIN VERIFICATION PAGE */}
      <Box
        sx={{
          width: "500px",
          background: "white",
          borderRadius: "12px",
          border: "2px solid #1E569C",
          p: 3,
          mx: "auto",
          my: "40px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* HEADER */}
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <Avatar
            src={agent?.photo}
            sx={{ width: 55, height: 55, border: "2px solid #eee" }}
          />
          <Box sx={{ ml: 2 }}>
            <Typography sx={{ fontWeight: 700, fontSize: "16px" }}>
              {agent?.fullName || "Rajesh Kumar"}
            </Typography>
            <Typography sx={{ fontSize: "12px", color: "#6b7280" }}>
              {agent?.agentCode || "AGT-1045"} • Joined{" "}
              {agent?.joinDate || "15/8/2024"}
            </Typography>
          </Box>
        </Box>

        {/* TABS */}
        <Tabs
          value={tab}
          onChange={(e, v) => setTab(v)}
          TabIndicatorProps={{ style: { display: "none" } }}
          sx={{
            mb: 3,
            "& .MuiTab-root": {
              textTransform: "none",
              fontWeight: 600,
              borderRadius: "8px",
              px: 2,
              py: 1,
              minHeight: "36px",
              mx: 0.5,
            },
            "& .Mui-selected": {
              color: "white !important",
              background: "#1E569C",
            },
          }}
        >
          <Tab label="Overview" />
          <Tab label="KYC & Bank" />
          <Tab label="Team" />
          <Tab label="Earnings" />
          <Tab label="History" />
        </Tabs>

        
        {tab === 1 && (
          <>
            {/* KYC SECTION */}
            <Paper
              sx={{
                borderRadius: "10px",
                p: 2,
                border: "1px solid #d0d7e2",
                mb: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mb: 1,
                }}
              >
                <Typography sx={{ fontWeight: 700, fontSize: "15px" }}>
                  KYC Verification
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    background: "#FFF4E5",
                    border: "1px solid #FFBF70",
                    px: 1,
                    py: "2px",
                    borderRadius: "20px",
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "#E67E22",
                  }}
                >
                  ⓘ PENDING
                </Box>
              </Box>

              {/*   CLICK TO OPEN REVIEW KYC MODAL */}
              <Button
                variant="contained"
                onClick={() => setOpenReview(true)}  
                sx={{
                  textTransform: "none",
                  mt: 1,
                  background: "#1E569C",
                  "&:hover": { background: "#164679" },
                }}
              >
                Review KYC Documents
              </Button>
            </Paper>

            {/* BANK SECTION */}
            <Paper
              sx={{
                borderRadius: "10px",
                p: 2,
                border: "1px solid #d0d7e2",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mb: 1,
                }}
              >
                <Typography sx={{ fontWeight: 700, fontSize: "15px" }}>
                  Bank Account Verification
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    background: "#FFF4E5",
                    border: "1px solid #FFBF70",
                    px: 1,
                    py: "2px",
                    borderRadius: "20px",
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "#E67E22",
                  }}
                >
                  ⓘ PENDING
                </Box>
              </Box>

              <Button
                variant="contained"
                sx={{
                  textTransform: "none",
                  mt: 1,
                  background: "#1E569C",
                  "&:hover": { background: "#164679" },
                }}
              >
                Verify Bank Account
              </Button>
            </Paper>
          </>
        )}

        {/* FOOTER */}
        <Box sx={{ textAlign: "right", mt: 3 }}>
          <Button
            variant="contained"
            onClick={onClose}
            sx={{
              background: "#CACFE1",
              color: "white",
              px: 4,
              textTransform: "none",
              "&:hover": { background: "#b5bbd2" },
            }}
          >
            Close
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default VerificationPage;
