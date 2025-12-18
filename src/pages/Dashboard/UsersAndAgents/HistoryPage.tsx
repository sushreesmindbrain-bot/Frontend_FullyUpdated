//  import React from "react";
// import {
//   Box,
//   Typography,
//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   Grid,
//   Paper,
//   Button,
//   Avatar,
//   Tabs,
//   Tab,
// } from "@mui/material";
// import { CheckCircle, Groups, Person, Verified } from "@mui/icons-material";

// interface HistoryItem {
//   title: string;
//   description: string;
//   date: string;
//   icon: React.ReactNode;
//   tag: string;
//   tagColor: string;
// }

// interface HistoryPageProps {
//   agent: unknown;
//   onBack: () => void;
//   onTabChange: (tab: string) => void;
//   onEditProfile: () => void;
// }

// const HistoryPage: React.FC<HistoryPageProps> = ({
//   agent,
//   onBack,
//   onTabChange,
//   onEditProfile,
// }) => {
//   const historyData: HistoryItem[] = [
//     {
//       title: "Commission Payout",
//       description: "Weekly commission of ₹12,450 credited to wallet successfully",
//       date: "2025-10-28 18:30",
//       icon: <CheckCircle sx={{ color: "green" }} />,
//       tag: "commission",
//       tagColor: "green",
//     },
//     {
//       title: "New Team Member",
//       description: "AGT-8901 joined under left leg",
//       date: "2025-10-27 14:20",
//       icon: <Groups sx={{ color: "#0091ff" }} />,
//       tag: "team",
//       tagColor: "#0091ff",
//     },
//     {
//       title: "Profile Updated",
//       description: "Phone number and email address updated",
//       date: "2025-10-26 16:30",
//       icon: <Person sx={{ color: "#8E44AD" }} />,
//       tag: "profile",
//       tagColor: "#8E44AD",
//     },
//     {
//       title: "Bank Account Verified",
//       description: "Bank account verification completed successfully",
//       date: "2025-10-27 14:20",
//       icon: <Verified sx={{ color: "green" }} />,
//       tag: "bank",
//       tagColor: "green",
//     },
//   ];

//   return (
//     <Box
//       sx={{
//         width: "100%",
//         p: 2,
//         overflow: "hidden",
//         height: "750px", 
//         display: "flex",
//         flexDirection: "column",
//         gap: 2,
//       }}
//     >
//       {/* HEADER */}
//       <Box sx={{ display: "flex", alignItems: "center" }}>
//         <Avatar src={agent?.avatar} sx={{ width: 60, height: 60, mr: 1.5 }} />
//         <Box>
//           <Typography sx={{ fontWeight: 700, fontSize: "17px" }}>
//             {agent?.name}
//           </Typography>
//           <Typography sx={{ fontSize: "12px", color: "#666" }}>
//             {agent?.id} • Joined {agent?.joinDate}
//           </Typography>
//         </Box>
//       </Box>

//       {/* TABS */}
//       <Tabs
//         value="history"
//         TabIndicatorProps={{ style: { display: "none" } }}
//         sx={{
//           "& .MuiTab-root": {
//             textTransform: "none",
//             borderRadius: "8px",
//             px: 2,
//             py: 0.7,
//             fontSize: "13px",
//             fontWeight: 600,
//             color: "#555",
//             background: "#f0f2f5",
//             mx: 0.5,
//             minHeight: "34px",
//           },
//           "& .Mui-selected": {
//             background: "#0b5cad !important",
//             color: "white !important",
//           },
//         }}
//       >
//         <Tab label="Overview" onClick={() => onTabChange("overview")} />
//         <Tab label="KYC & Bank" onClick={() => onTabChange("kyc")} />
//         <Tab label="Team" onClick={() => onTabChange("team")} />
//         <Tab label="Earnings" onClick={() => onTabChange("earnings")} />
//         <Tab label="History" value="history" />
//       </Tabs>

//       {/* CONTENT WRAPPER */}
//       <Box
//         sx={{
//           flexGrow: 1,
//           display: "flex",
//           flexDirection: "column",
//           overflow: "hidden",
//         }}
//       >
//         <Paper
//           sx={{
//             p: 3,
//             borderRadius: "14px",
//             border: "1px solid #c9d8f0",
//             background: "#fff",
//             flexGrow: 1,
//             display: "flex",
//             flexDirection: "column",
//             overflow: "hidden",
//           }}
//         >
//           <Typography
//             sx={{
//               color: "#0b5cad",
//               fontWeight: 700,
//               fontSize: "16px",
//               mb: 2,
//             }}
//           >
//             Activity History
//           </Typography>

           
//           <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
//             {historyData.map((item, index) => (
//               <Box key={index} sx={{ display: "flex", gap: 2 }}>
//                 {/* ICON + DOTTED LINE */}
//                 <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
//                   {item.icon}

//                   {index < historyData.length - 1 && (
//                     <Box
//                       sx={{
//                         width: "2px",
//                         height: "50px",
//                         backgroundImage:
//                           "linear-gradient(to bottom, #bcbcbc 33%, rgba(0,0,0,0) 0%)",
//                         backgroundSize: "2px 8px",
//                         backgroundRepeat: "repeat-y",
//                         mt: 0.6,
//                       }}
//                     />
//                   )}
//                 </Box>

//                 {/* TEXT */}
//                 <Box sx={{ flexGrow: 1 }}>
//                   <Typography
//                     sx={{
//                       fontWeight: 700,
//                       fontSize: "15px",
//                       color: "#0b5cad",
//                       mb: 0.2,
//                     }}
//                   >
//                     {item.title}
//                   </Typography>

//                   <Typography sx={{ fontSize: "13px", color: "#444" }}>
//                     {item.description}
//                   </Typography>

//                   <Typography
//                     sx={{
//                       fontSize: "12px",
//                       fontWeight: 500,
//                       color: item.tagColor,
//                       mt: 0.6,
//                     }}
//                   >
//                     {item.tag}
//                   </Typography>
//                 </Box>

//                 {/* DATE */}
//                 <Typography
//                   sx={{
//                     fontSize: "12px",
//                     color: "#777",
//                     whiteSpace: "nowrap",
//                     mt: "2px",
//                   }}
//                 >
//                   {item.date}
//                 </Typography>
//               </Box>
//             ))}
//           </Box>
//         </Paper>

//         {/* FOOTER BUTTONS */}
//         <Box sx={{ display: "flex", justifyContent: "center", gap: 1.5, mt: 2 }}>
//           <Button variant="outlined" sx={{ width: 100 }} onClick={onBack}>
//             Close
//           </Button>
//           <Button variant="contained" color="error" sx={{ width: 100 }}>
//             Suspend
//           </Button>
//           <Button
//             variant="contained"
//             sx={{ width: 100, background: "#0d47a1" }}
//             onClick={onEditProfile}
//           >
//             Edit
//           </Button>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default HistoryPage;


import React from "react";
import {
  Box,
  Typography,
  Paper,
  Button,
  Avatar,
  Tabs,
  Tab
} from "@mui/material";
import { CheckCircle, Groups, Person, Verified } from "@mui/icons-material";

import type { Agent } from "./types";

/* ================= TAB TYPE ================= */

type AgentTab =
  | "overview"
  | "kyc"
  | "team"
  | "earnings"
  | "history";

/* ================= TYPES ================= */

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
  onTabChange: (tab: AgentTab) => void;
  onEditProfile: () => void;
}

/* ================= COMPONENT ================= */

const HistoryPage: React.FC<HistoryPageProps> = ({
  agent,
  onBack,
  onTabChange,
  onEditProfile
}) => {
  const historyData: HistoryItem[] = [
    {
      title: "Commission Payout",
      description: "Weekly commission of ₹12,450 credited to wallet successfully",
      date: "2025-10-28 18:30",
      icon: <CheckCircle sx={{ color: "green" }} />,
      tag: "commission",
      tagColor: "green"
    },
    {
      title: "New Team Member",
      description: "AGT-8901 joined under left leg",
      date: "2025-10-27 14:20",
      icon: <Groups sx={{ color: "#0091ff" }} />,
      tag: "team",
      tagColor: "#0091ff"
    },
    {
      title: "Profile Updated",
      description: "Phone number and email address updated",
      date: "2025-10-26 16:30",
      icon: <Person sx={{ color: "#8E44AD" }} />,
      tag: "profile",
      tagColor: "#8E44AD"
    },
    {
      title: "Bank Account Verified",
      description: "Bank account verification completed successfully",
      date: "2025-10-27 14:20",
      icon: <Verified sx={{ color: "green" }} />,
      tag: "bank",
      tagColor: "green"
    }
  ];

  return (
    <Box sx={{ width: "100%", p: 2, height: 750, display: "flex", flexDirection: "column", gap: 2 }}>
      {/* HEADER */}
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Avatar src={agent.avatar} sx={{ width: 60, height: 60, mr: 1.5 }} />
        <Box>
          <Typography fontWeight={700} fontSize={17}>
            {agent.name}
          </Typography>
          <Typography fontSize={12} color="#666">
            {agent.code} • Joined {agent.joinDate}
          </Typography>
        </Box>
      </Box>

      {/* TABS */}
      <Tabs
        value="history"
        onChange={(_, value: AgentTab) => onTabChange(value)}
        TabIndicatorProps={{ style: { display: "none" } }}
        sx={{
          "& .MuiTab-root": {
            textTransform: "none",
            borderRadius: "8px",
            px: 2,
            py: 0.7,
            fontSize: "13px",
            fontWeight: 600,
            background: "#f0f2f5",
            mx: 0.5
          },
          "& .Mui-selected": {
            background: "#0b5cad",
            color: "#fff"
          }
        }}
      >
        <Tab label="Overview" value="overview" />
        <Tab label="KYC & Bank" value="kyc" />
        <Tab label="Team" value="team" />
        <Tab label="Earnings" value="earnings" />
        <Tab label="History" value="history" />
      </Tabs>

      {/* CONTENT */}
      <Paper sx={{ p: 3, flexGrow: 1, borderRadius: 3, border: "1px solid #c9d8f0" }}>
        <Typography fontWeight={700} color="#0b5cad" mb={2}>
          Activity History
        </Typography>

        <Box display="flex" flexDirection="column" gap={3}>
          {historyData.map((item, index) => (
            <Box key={index} display="flex" gap={2}>
              <Box display="flex" flexDirection="column" alignItems="center">
                {item.icon}
                {index < historyData.length - 1 && (
                  <Box
                    sx={{
                      width: 2,
                      height: 50,
                      backgroundImage:
                        "linear-gradient(to bottom, #bcbcbc 33%, rgba(0,0,0,0) 0%)",
                      backgroundSize: "2px 8px",
                      backgroundRepeat: "repeat-y",
                      mt: 0.6
                    }}
                  />
                )}
              </Box>

              <Box flexGrow={1}>
                <Typography fontWeight={700} fontSize={15} color="#0b5cad">
                  {item.title}
                </Typography>
                <Typography fontSize={13}>{item.description}</Typography>
                <Typography fontSize={12} fontWeight={500} color={item.tagColor}>
                  {item.tag}
                </Typography>
              </Box>

              <Typography fontSize={12} color="#777">
                {item.date}
              </Typography>
            </Box>
          ))}
        </Box>
      </Paper>

      {/* FOOTER */}
      <Box display="flex" justifyContent="center" gap={1.5}>
        <Button variant="outlined" onClick={onBack}>
          Close
        </Button>
        <Button variant="contained" color="error">
          Suspend
        </Button>
        <Button variant="contained" onClick={onEditProfile}>
          Edit
        </Button>
      </Box>
    </Box>
  );
};

export default HistoryPage;
