// import React from "react";
// import {
//   Box,
//   Avatar,
//   Typography,
//   Tabs,
//   Tab,
//   Grid,
//   Paper,
//   Button,
// } from "@mui/material";
// import type { Agent } from "./types";

// interface Props {
//   agent: Agent;
//   onClose: () => void;
//   onKYCView: () => void;
//   onTeamView: () => void;
// }

// const AgentDetailsPage: React.FC<Props> = ({ agent, onClose, onKYCView, onTeamView }) => {
//   const [tab, setTab] = React.useState<string>("overview");

//   return (
//     <Box sx={{ width: "100%", p: 3 }}>
//       {/* Header (Figma exact) */}
//       <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
//         <Avatar src={agent.avatar} sx={{ width: 56, height: 56 }} />
//         <Box>
//           <Typography sx={{ fontWeight: 700 }}>{agent.name}</Typography>
//           <Typography variant="body2" color="text.secondary">
//             {agent.code} • Joined {agent.joinDate}
//           </Typography>
//         </Box>
//       </Box>

//       {/* Tabs */}
//       <Tabs
//         value={tab}
//         onChange={(e, v) => setTab(v)}
//         sx={{
//           mb: 2,
//           "& .MuiTab-root": {
//             textTransform: "none",
//             borderRadius: 2,
//             minHeight: 36,
//           },
//         }}
//         centered
//       >
//         <Tab label="Overview" value="overview" />
//         <Tab label="KYC & Bank" value="kyc" onClick={onKYCView} />
//         <Tab label="Team" value="team" onClick={onTeamView} />
//         <Tab label="Earnings" value="earnings" />
//         <Tab label="History" value="history" />
//       </Tabs>

//       {/* Body */}
//       {tab === "overview" && (
//         <Box>
//           {/* Stats row */}
//           <Grid container spacing={2} sx={{ mb: 2 }}>
//             {[
//               { title: "Team Members", value: "45", bg: "#f2f6ff" },
//               { title: "Total BV", value: "12450", bg: "#fff5f8" },
//               { title: "Total Earnings", value: "₹1,45,600", bg: "#f3fff4" },
//               { title: "Current Month BV", value: "2340", bg: "#fff7f3" },
//             ].map((s) => (
//               <Grid item xs={6} sm={3} key={s.title}>
//                 <Paper sx={{ p: 2, borderRadius: 2, background: s.bg }}>
//                   <Typography sx={{ fontWeight: 700 }}>{s.value}</Typography>
//                   <Typography variant="caption">{s.title}</Typography>
//                 </Paper>
//               </Grid>
//             ))}
//           </Grid>

//           {/* Contact info card */}
//           <Paper sx={{ p: 2, mb: 2, border: "1px solid #dfe8ff", borderRadius: 2 }}>
//             <Grid container spacing={2}>
//               <Grid item xs={6}>
//                 <Typography variant="caption">Phone</Typography>
//                 <Typography>+91 98765 43210</Typography>
//               </Grid>
//               <Grid item xs={6}>
//                 <Typography variant="caption">Join Date</Typography>
//                 <Typography>{agent.joinDate}</Typography>
//               </Grid>
//               <Grid item xs={6}>
//                 <Typography variant="caption">Email</Typography>
//                 <Typography>rajesh.kumar@email.com</Typography>
//               </Grid>
//               <Grid item xs={6}>
//                 <Typography variant="caption">Last Active</Typography>
//                 <Typography>2025-10-28 14:32</Typography>
//               </Grid>
//             </Grid>
//           </Paper>

//           {/* Package card */}
//           <Paper sx={{ p: 2, mb: 2, border: "1px solid #dfe8ff", borderRadius: 2 }}>
//             <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//               <Box>
//                 <Typography sx={{ fontWeight: 600 }}>Package Information</Typography>
//                 <Typography>Silver Package</Typography>
//                 <Typography variant="caption">Package Value: ₹5,000</Typography>
//               </Box>
//               <Button variant="contained" size="small">Upgrade</Button>
//             </Box>
//           </Paper>

//           {/* Network position */}
//           <Paper sx={{ p: 2, border: "1px solid #dfe8ff", borderRadius: 2 }}>
//             <Typography sx={{ fontWeight: 600, mb: 1 }}>Network Position</Typography>
//             <Grid container spacing={2}>
//               <Grid item xs={6}>
//                 <Paper sx={{ p: 1, textAlign: "center", borderRadius: 1 }}>
//                   <Typography variant="caption">Sponsor</Typography>
//                   <Typography sx={{ fontWeight: 700 }}>AGT-0023</Typography>
//                 </Paper>
//               </Grid>
//               <Grid item xs={6}>
//                 <Paper sx={{ p: 1, textAlign: "center", borderRadius: 1 }}>
//                   <Typography variant="caption">Left Leg</Typography>
//                   <Typography sx={{ fontWeight: 700 }}>AGT-0023</Typography>
//                 </Paper>
//               </Grid>
//             </Grid>
//           </Paper>

//           {/* footer buttons */}
//           <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 3 }}>
//             <Button variant="outlined" onClick={onClose}>Close</Button>
//             <Button variant="contained" color="error">Suspend</Button>
//             <Button variant="contained">Edit</Button>
//           </Box>
//         </Box>
//       )}

//       {/* Earnings / History placeholders */}
//       {tab === "earnings" && <Typography> Earnings content </Typography>}
//       {tab === "history" && <Typography> History content </Typography>}
//     </Box>
//   );
// };

// export default AgentDetailsPage;


import React from "react";
import {
  Box,
  Avatar,
  Typography,
  Tabs,
  Tab,
  Grid,
  Paper,
  Button,
} from "@mui/material";
import type { Agent } from "./types";

interface Props {
  agent: Agent;
  onClose: () => void;
  onKYCView: () => void;
  onTeamView: () => void;
}

const AgentDetailsPage: React.FC<Props> = ({ agent, onClose, onKYCView, onTeamView }) => {
  const [tab, setTab] = React.useState<string>("overview");

  return (
    <Box sx={{ width: "100%", p: 3 }}>
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

      {/* Tabs with Button Style */}
      <Tabs
        value={tab}
        onChange={(e, v) => setTab(v)}
        centered
        TabIndicatorProps={{ style: { display: "none" } }} // hide underline
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
        <Tab label="Overview" value="overview" />
        <Tab label="KYC & Bank" value="kyc" onClick={onKYCView} />
        <Tab label="Team" value="team" onClick={onTeamView} />
        <Tab label="Earnings" value="earnings" />
        <Tab label="History" value="history" />
      </Tabs>

      {/* Body */}
      {tab === "overview" && (
        <Box>
          {/* Stats row */}
          <Grid container spacing={2} sx={{ mb: 2 }}>
            {[
              { title: "Team Members", value: "45", bg: "#f2f6ff" },
              { title: "Total BV", value: "12450", bg: "#fff5f8" },
              { title: "Total Earnings", value: "₹1,45,600", bg: "#f3fff4" },
              { title: "Current Month BV", value: "2340", bg: "#fff7f3" },
            ].map((s) => (
              <Grid item xs={6} sm={3} key={s.title}>
                <Paper sx={{ p: 2, borderRadius: 2, background: s.bg }}>
                  <Typography sx={{ fontWeight: 700 }}>{s.value}</Typography>
                  <Typography variant="caption">{s.title}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>

          {/* Contact info card */}
          <Paper sx={{ p: 2, mb: 2, border: "1px solid #dfe8ff", borderRadius: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography variant="caption">Phone</Typography>
                <Typography>+91 98765 43210</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="caption">Join Date</Typography>
                <Typography>{agent.joinDate}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="caption">Email</Typography>
                <Typography>rajesh.kumar@email.com</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="caption">Last Active</Typography>
                <Typography>2025-10-28 14:32</Typography>
              </Grid>
            </Grid>
          </Paper>

          {/* Package card */}
          <Paper sx={{ p: 2, mb: 2, border: "1px solid #dfe8ff", borderRadius: 2 }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Box>
                <Typography sx={{ fontWeight: 600 }}>Package Information</Typography>
                <Typography>Silver Package</Typography>
                <Typography variant="caption">Package Value: ₹5,000</Typography>
              </Box>
              <Button variant="contained" size="small">Upgrade</Button>
            </Box>
          </Paper>

          {/* Network position */}
          <Paper sx={{ p: 2, border: "1px solid #dfe8ff", borderRadius: 2 }}>
            <Typography sx={{ fontWeight: 600, mb: 1 }}>Network Position</Typography>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Paper sx={{ p: 1, textAlign: "center", borderRadius: 1 }}>
                  <Typography variant="caption">Sponsor</Typography>
                  <Typography sx={{ fontWeight: 700 }}>AGT-0023</Typography>
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper sx={{ p: 1, textAlign: "center", borderRadius: 1 }}>
                  <Typography variant="caption">Left Leg</Typography>
                  <Typography sx={{ fontWeight: 700 }}>AGT-0023</Typography>
                </Paper>
              </Grid>
            </Grid>
          </Paper>

          {/* Footer buttons */}
          <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 3 }}>
            <Button variant="outlined" onClick={onClose}>Close</Button>
            <Button variant="contained" color="error">Suspend</Button>
            <Button variant="contained">Edit</Button>
          </Box>
        </Box>
      )}

      {/* Other tabs */}
      {tab === "earnings" && <Typography> Earnings content </Typography>}
      {tab === "history" && <Typography> History content </Typography>}
    </Box>
  );
};

export default AgentDetailsPage;
