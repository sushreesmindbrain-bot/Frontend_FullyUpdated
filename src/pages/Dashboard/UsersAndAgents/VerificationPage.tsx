// import React, { useState } from "react";
// import {
//   Box,
//   Avatar,
//   Typography,
//   Tabs,
//   Tab,
//   Button,
//   Paper,
// } from "@mui/material";

// import ReviewKyc from "./ReviewKyc";    

// interface Props {
//   agent?: any;
//   onClose: () => void;
//   onBack?: () => void;
// }

// const VerificationPage: React.FC<Props> = ({ agent, onClose, onBack }) => {
//   const [tab, setTab] = useState(1);  
//   const [openReview, setOpenReview] = useState(false); 

//   return (
//     <>
//       {/*   KYC REVIEW MODAL */}
//       <ReviewKyc
//         open={openReview}
//         onClose={() => setOpenReview(false)}
//         onApprove={() => {
//           console.log("KYC APPROVED");
//           setOpenReview(false);
//         }}
//         onReject={(reason) => {
//           console.log("KYC REJECTED: ", reason);
//           setOpenReview(false);
//         }}
//         agentName={agent?.fullName}
//         agentCode={agent?.agentCode}
//       />

//       {/*  MAIN VERIFICATION PAGE */}
//       <Box
//         sx={{
//           width: "500px",
//           background: "white",
//           borderRadius: "12px",
//           border: "2px solid #1E569C",
//           p: 3,
//           mx: "auto",
//           my: "40px",
//           display: "flex",
//           flexDirection: "column",
//         }}
//       >
//         {/* HEADER */}
//         <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
//           <Avatar
//             src={agent?.photo}
//             sx={{ width: 55, height: 55, border: "2px solid #eee" }}
//           />
//           <Box sx={{ ml: 2 }}>
//             <Typography sx={{ fontWeight: 700, fontSize: "16px" }}>
//               {agent?.fullName || "Rajesh Kumar"}
//             </Typography>
//             <Typography sx={{ fontSize: "12px", color: "#6b7280" }}>
//               {agent?.agentCode || "AGT-1045"} • Joined{" "}
//               {agent?.joinDate || "15/8/2024"}
//             </Typography>
//           </Box>
//         </Box>

//         {/* TABS */}
//         <Tabs
//           value={tab}
//           onChange={(_e, v) => setTab(v)}
//           TabIndicatorProps={{ style: { display: "none" } }}
//           sx={{
//             mb: 3,
//             "& .MuiTab-root": {
//               textTransform: "none",
//               fontWeight: 600,
//               borderRadius: "8px",
//               px: 2,
//               py: 1,
//               minHeight: "36px",
//               mx: 0.5,
//             },
//             "& .Mui-selected": {
//               color: "white !important",
//               background: "#1E569C",
//             },
//           }}
//         >
//           <Tab label="Overview" />
//           <Tab label="KYC & Bank" />
//           <Tab label="Team" />
//           <Tab label="Earnings" />
//           <Tab label="History" />
//         </Tabs>

        
//         {tab === 1 && (
//           <>
//             {/* KYC SECTION */}
//             <Paper
//               sx={{
//                 borderRadius: "10px",
//                 p: 2,
//                 border: "1px solid #d0d7e2",
//                 mb: 2,
//               }}
//             >
//               <Box
//                 sx={{
//                   display: "flex",
//                   justifyContent: "space-between",
//                   mb: 1,
//                 }}
//               >
//                 <Typography sx={{ fontWeight: 700, fontSize: "15px" }}>
//                   KYC Verification
//                 </Typography>

//                 <Box
//                   sx={{
//                     display: "flex",
//                     alignItems: "center",
//                     background: "#FFF4E5",
//                     border: "1px solid #FFBF70",
//                     px: 1,
//                     py: "2px",
//                     borderRadius: "20px",
//                     fontSize: "12px",
//                     fontWeight: 700,
//                     color: "#E67E22",
//                   }}
//                 >
//                   ⓘ PENDING
//                 </Box>
//               </Box>

//               {/*   CLICK TO OPEN REVIEW KYC MODAL */}
//               <Button
//                 variant="contained"
//                 onClick={() => setOpenReview(true)}  
//                 sx={{
//                   textTransform: "none",
//                   mt: 1,
//                   background: "#1E569C",
//                   "&:hover": { background: "#164679" },
//                 }}
//               >
//                 Review KYC Documents
//               </Button>
//             </Paper>

//             {/* BANK SECTION */}
//             <Paper
//               sx={{
//                 borderRadius: "10px",
//                 p: 2,
//                 border: "1px solid #d0d7e2",
//               }}
//             >
//               <Box
//                 sx={{
//                   display: "flex",
//                   justifyContent: "space-between",
//                   mb: 1,
//                 }}
//               >
//                 <Typography sx={{ fontWeight: 700, fontSize: "15px" }}>
//                   Bank Account Verification
//                 </Typography>

//                 <Box
//                   sx={{
//                     display: "flex",
//                     alignItems: "center",
//                     background: "#FFF4E5",
//                     border: "1px solid #FFBF70",
//                     px: 1,
//                     py: "2px",
//                     borderRadius: "20px",
//                     fontSize: "12px",
//                     fontWeight: 700,
//                     color: "#E67E22",
//                   }}
//                 >
//                   ⓘ PENDING
//                 </Box>
//               </Box>

//               <Button
//                 variant="contained"
//                 sx={{
//                   textTransform: "none",
//                   mt: 1,
//                   background: "#1E569C",
//                   "&:hover": { background: "#164679" },
//                 }}
//               >
//                 Verify Bank Account
//               </Button>
//             </Paper>
//           </>
//         )}

//         {/* FOOTER */}
//         <Box sx={{ textAlign: "right", mt: 3 }}>
//           <Button
//             variant="contained"
//             onClick={onBack || onClose}
//             sx={{
//               background: "#CACFE1",
//               color: "white",
//               px: 4,
//               textTransform: "none",
//               "&:hover": { background: "#b5bbd2" },
//             }}
//           >
//             Close
//           </Button>
//         </Box>
//       </Box>
//     </>
//   );
// };

// export default VerificationPage;


// import React, { useState } from "react";
// import {
//   Box,
//   Avatar,
//   Typography,
//   Button,
//   Paper,
// } from "@mui/material";

// import ReviewKyc from "./ReviewKyc";

// interface Props {
//   agent?: any;
//   onClose: () => void;
//   onBack?: () => void;
// }

// const BLUE = "#26619A";

// const VerificationPage: React.FC<Props> = ({ agent, onClose, onBack }) => {
//   const [tab, setTab] = useState(1);  
//   const [openReview, setOpenReview] = useState(false); 

//   const tabs = ["Overview", "KYC & Bank", "Team", "Earnings", "History"];

//   const handleTabClick = (index: number) => {
//     setTab(index);
//   };

//   return (
//     <>
//       {/* KYC REVIEW MODAL */}
//       <ReviewKyc
//         open={openReview}
//         onClose={() => setOpenReview(false)}
//         onApprove={() => {
//           console.log("KYC APPROVED");
//           setOpenReview(false);
//         }}
//         onReject={(reason) => {
//           console.log("KYC REJECTED: ", reason);
//           setOpenReview(false);
//         }}
//         agentName={agent?.fullName}
//         agentCode={agent?.agentCode}
//       />

//       {/* MAIN VERIFICATION PAGE */}
//       <Box
//         sx={{
//           maxWidth: "370px",   // max width of box
//           width: "100%",       // shrink if screen smaller
//           background: "white",
//           borderRadius: "12px",
//           border: "2px solid #1E569C",
//           p: 2,                // padding inside
//           mx: "auto",          // center horizontally
//           my: "10px",          // reduced vertical margin
//           display: "flex",
//           flexDirection: "column",
//         }}
//       >
//         {/* HEADER */}
//         <Box sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
//           <Avatar
//             src={agent?.photo}
//             sx={{ width: 50, height: 50, border: "2px solid #eee" }}
//           />
//           <Box sx={{ ml: 1.5 }}>
//             <Typography sx={{ fontWeight: 700, fontSize: "15px" }}>
//               {agent?.fullName || "Rajesh Kumar"}
//             </Typography>
//             <Typography sx={{ fontSize: "11px", color: "#6b7280" }}>
//               {agent?.agentCode || "AGT-1045"} • Joined{" "}
//               {agent?.joinDate || "15/8/2024"}
//             </Typography>
//           </Box>
//         </Box>

//         {/* TABS */}
//         <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
//           {tabs.map((label, index) => (
//             <Button
//               key={label}
//               onClick={() => handleTabClick(index)}
//               sx={{
//                 textTransform: "none",
//                 fontWeight: 500,
//                 color: tab === index ? "#fff" : "#000",
//                 bgcolor: tab === index ? BLUE : "transparent",
//                 "&:hover": { bgcolor: tab === index ? BLUE : "transparent" },
//                 borderRadius: tab === index ? "4px" : "0px",
//                 px: 1.5,
//                 py: 0.4,
//                 fontSize: "13px",
//                 minHeight: 26,
//                 boxShadow: "none",
//               }}
//             >
//               {label}
//             </Button>
//           ))}
//         </Box>

//         {/* CONTENT */}
//         {tab === 1 && (
//           <>
//             {/* KYC SECTION */}
//             <Paper
//               sx={{
//                 borderRadius: "10px",
//                 p: 1.5,
//                 border: "1px solid #d0d7e2",
//                 mb: 1.5,
//               }}
//             >
//               <Box
//                 sx={{
//                   display: "flex",
//                   justifyContent: "space-between",
//                   mb: 0.8,
//                 }}
//               >
//                 <Typography sx={{ fontWeight: 700, fontSize: "14px" }}>
//                   KYC Verification
//                 </Typography>

//                 <Box
//                   sx={{
//                     display: "flex",
//                     alignItems: "center",
//                     background: "#FFF4E5",
//                     border: "1px solid #FFBF70",
//                     px: 0.8,
//                     py: "2px",
//                     borderRadius: "20px",
//                     fontSize: "11px",
//                     fontWeight: 700,
//                     color: "#E67E22",
//                   }}
//                 >
//                   ⓘ PENDING
//                 </Box>
//               </Box>

//               <Button
//                 variant="contained"
//                 onClick={() => setOpenReview(true)}
//                 sx={{
//                   textTransform: "none",
//                   mt: 0.8,
//                   background: BLUE,
//                   "&:hover": { background: "#1b4a78" },
//                   fontSize: "13px",
//                   py: 0.5,
//                 }}
//               >
//                 Review KYC Documents
//               </Button>
//             </Paper>

//             {/* BANK SECTION */}
//             <Paper
//               sx={{
//                 borderRadius: "10px",
//                 p: 1.5,
//                 border: "1px solid #d0d7e2",
//               }}
//             >
//               <Box
//                 sx={{
//                   display: "flex",
//                   justifyContent: "space-between",
//                   mb: 0.8,
//                 }}
//               >
//                 <Typography sx={{ fontWeight: 700, fontSize: "14px" }}>
//                   Bank Account Verification
//                 </Typography>

//                 <Box
//                   sx={{
//                     display: "flex",
//                     alignItems: "center",
//                     background: "#FFF4E5",
//                     border: "1px solid #FFBF70",
//                     px: 0.8,
//                     py: "2px",
//                     borderRadius: "20px",
//                     fontSize: "11px",
//                     fontWeight: 700,
//                     color: "#E67E22",
//                   }}
//                 >
//                   ⓘ PENDING
//                 </Box>
//               </Box>

//               <Button
//                 variant="contained"
//                 sx={{
//                   textTransform: "none",
//                   mt: 0.8,
//                   background: BLUE,
//                   "&:hover": { background: "#1b4a78" },
//                   fontSize: "13px",
//                   py: 0.5,
//                 }}
//               >
//                 Verify Bank Account
//               </Button>
//             </Paper>
//           </>
//         )}

//         {/* FOOTER */}
//         <Box sx={{ textAlign: "right", mt: 2 }}>
//           <Button
//             variant="contained"
//             onClick={onBack || onClose}
//             sx={{
//               background: "#CACFE1",
//               color: "white",
//               px: 3,
//               textTransform: "none",
//               fontSize: "13px",
//               "&:hover": { background: "#b5bbd2" },
//             }}
//           >
//             Close
//           </Button>
//         </Box>
//       </Box>
//     </>
//   );
// };

// export default VerificationPage;
import React, { useState } from "react";
import { Box, Avatar, Typography, Button, Paper } from "@mui/material";
import ReviewKyc from "./ReviewKyc";

interface Agent {
  fullName?: string;
  agentCode?: string;
  photo?: string;
  joinDate?: string;
}

interface Props {
  agent?: Agent;
  onClose: () => void;
  onBack?: () => void;
  onNavigate?: (page: "overview" | "kyc" | "team" | "earnings" | "history") => void;
}

const BLUE = "#26619A";

const VerificationPage: React.FC<Props> = ({ agent, onClose,  onNavigate }) => {
  // Default tab = 1 to show KYC & Bank on load
  const [tab, setTab] = useState<number>(1);
  const [openReview, setOpenReview] = useState<boolean>(false);

  const tabs = ["Overview", "KYC & Bank", "Team", "Earnings", "History"];

  const handleTabClick = (index: number) => {
    setTab(index);
    const mapping: ("overview" | "kyc" | "team" | "earnings" | "history")[] = [
      "overview",
      "kyc",
      "team",
      "earnings",
      "history",
    ];
    if (onNavigate) onNavigate(mapping[index]);
  };

  const renderTabContent = () => {
    switch (tab) {
      case 0:
        return (
          <Typography sx={{ fontSize: "14px", color: "#555" }}>
            Overview content for {agent?.fullName ?? "the agent"}.
          </Typography>
        );
      case 1:
        return (
          <>
            {/* KYC Section */}
            <Paper sx={{ borderRadius: "12px", p: 1.5, border: `2px solid ${BLUE}`, mb: 1.5, background: "#ffffff" }}>
              <Box sx={{ display: "flex", justifyContent: "space-between", mb: 0.8 }}>
                <Typography sx={{ fontWeight: 700, fontSize: "14px" }}>KYC Verification</Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    background: "#FFF4E5",
                    border: "1px solid #FFBF70",
                    px: 0.8,
                    py: "2px",
                    borderRadius: "20px",
                    fontSize: "11px",
                    fontWeight: 700,
                    color: "#E67E22",
                  }}
                >
                  ⓘ PENDING
                </Box>
              </Box>
              <Button
                variant="contained"
                onClick={() => setOpenReview(true)}
                sx={{
                  textTransform: "none",
                  mt: 0.8,
                  background: BLUE,
                  "&:hover": { background: "#1b4a78" },
                  fontSize: "13px",
                  py: 0.5,
                }}
              >
                Review KYC Documents
              </Button>
            </Paper>

            {/* Bank Section */}
            <Paper sx={{ borderRadius: "12px", p: 1.5, border: `2px solid ${BLUE}`, background: "#ffffff" }}>
              <Box sx={{ display: "flex", justifyContent: "space-between", mb: 0.8 }}>
                <Typography sx={{ fontWeight: 700, fontSize: "14px" }}>Bank Account Verification</Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    background: "#FFF4E5",
                    border: "1px solid #FFBF70",
                    px: 0.8,
                    py: "2px",
                    borderRadius: "20px",
                    fontSize: "11px",
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
                  mt: 0.8,
                  background: BLUE,
                  "&:hover": { background: "#1b4a78" },
                  fontSize: "13px",
                  py: 0.5,
                }}
              >
                Verify Bank Account
              </Button>
            </Paper>
          </>
        );
      case 2:
        return (
          <Typography sx={{ fontSize: "14px", color: "#555" }}>
            Team information for {agent?.fullName ?? "the agent"} will appear here.
          </Typography>
        );
      case 3:
        return (
          <Typography sx={{ fontSize: "14px", color: "#555" }}>
            Earnings data for {agent?.fullName ?? "the agent"} will appear here.
          </Typography>
        );
      case 4:
        return (
          <Typography sx={{ fontSize: "14px", color: "#555" }}>
            History logs for {agent?.fullName ?? "the agent"} will appear here.
          </Typography>
        );
      default:
        return null;
    }
  };

  return (
    <>
      {/* KYC Review Modal */}
      <ReviewKyc
        open={openReview}
        onClose={() => setOpenReview(false)}
        onApprove={() => {
          console.log("KYC APPROVED");
          setOpenReview(false);
        }}
        onReject={(reason) => {
          console.log("KYC REJECTED:", reason);
          setOpenReview(false);
        }}
        agentName={agent?.fullName}
        agentCode={agent?.agentCode}
      />

      {/* Main Container */}
      <Box
        sx={{
          maxWidth: "560px",
          width: "100%",
          background: "white",
          borderRadius: "12px",
          border: "2px solid #1E569C",
          p: 2,
          mx: "auto",
          my: 0,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Header */}
        <Box sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
          <Avatar src={agent?.photo} sx={{ width: 50, height: 50, border: "2px solid #eee" }} />
          <Box sx={{ ml: 1.5 }}>
            <Typography sx={{ fontWeight: 700, fontSize: "15px" }}>
              {agent?.fullName ?? "Rajesh Kumar"}
            </Typography>
            <Typography sx={{ fontSize: "11px", color: "#6b7280" }}>
              {agent?.agentCode ?? "AGT-1045"} • Joined {agent?.joinDate ?? "15/8/2024"}
            </Typography>
          </Box>
        </Box>

        {/* Tabs */}
        <Paper sx={{ p: 1, mb: 2, borderRadius: "12px", background: "#F9FAFC" }}>
          <Box sx={{ display: "flex", width: "100%" }}>
            {tabs.map((label, index) => (
              <Button
                key={label}
                variant="text"
                onClick={() => handleTabClick(index)}
                sx={{
                  flex: 1,
                  minWidth: 0,
                  textTransform: "none",
                  fontWeight: 500,
                  color: tab === index ? "#fff" : "#000",
                  bgcolor: tab === index ? BLUE : "transparent !important",
                  "&:hover": { bgcolor: tab === index ? BLUE : "transparent !important" },
                  borderRadius: tab === index ? "4px" : "0px",
                  py: 1,
                  minHeight: "38px",
                  fontSize: "13px",
                  boxShadow: "none",
                  textAlign: "center",
                }}
              >
                {label}
              </Button>
            ))}
          </Box>
        </Paper>

        {/* Tab Content */}
        {renderTabContent()}

        {/* Footer */}
        <Box sx={{ textAlign: "right", mt: 2 }}>
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
        </Box>
      </Box>
    </>
  );
};

export default VerificationPage;


