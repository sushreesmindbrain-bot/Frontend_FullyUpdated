// import React from "react";
// import {
//   Box,
//   Paper,
//   Table,
//   TableHead,
//   TableRow,
//   TableCell,
//   TableBody,
//   Avatar,
//   IconButton,
//   Typography,
// } from "@mui/material";
// import VisibilityIcon from "@mui/icons-material/Visibility";
// import type { Agent } from "./types";

// interface Props {
//   onViewDetails: (agent: Agent) => void;
// }

// const MOCK_AGENTS: Agent[] = [
//   {
//     id: "1",
//     name: "Rajesh Kumar",
//     code: "AGT-1045",
//     joinDate: "15/8/2024",
//     avatar: "https://i.pravatar.cc/150?img=3",
//   },
//   {
//     id: "2",
//     name: "Amit Singh",
//     code: "AGT-1046",
//     joinDate: "22/6/2024",
//     avatar: "https://i.pravatar.cc/150?img=4",
//   },
// ];

// const AgentListPage: React.FC<Props> = ({ onViewDetails }) => {
//   return (
//     <Paper sx={{ p: 3 }}>
//       <Typography variant="h6" sx={{ mb: 2 }}>
//         Users & Agents
//       </Typography>

//       <Table>
//         <TableHead>
//           <TableRow sx={{ background: "#f1f5f9" }}>
//             <TableCell>ID</TableCell>
//             <TableCell>User</TableCell>
//             <TableCell>Join Date</TableCell>
//             <TableCell>Actions</TableCell>
//           </TableRow>
//         </TableHead>

//         <TableBody>
//           {MOCK_AGENTS.map((a) => (
//             <TableRow key={a.id} hover>
//               <TableCell>{a.code}</TableCell>

//               <TableCell>
//                 <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//                   <Avatar src={a.avatar} sx={{ width: 36, height: 36 }} />
//                   <Box>
//                     <Typography sx={{ fontWeight: 600 }}>{a.name}</Typography>
//                     <Typography variant="caption" color="text.secondary">
//                       {a.code.toLowerCase()}@example.com
//                     </Typography>
//                   </Box>
//                 </Box>
//               </TableCell>

//               <TableCell>{a.joinDate}</TableCell>

//               <TableCell>
//                 <IconButton onClick={() => onViewDetails(a)} aria-label="view">
//                   <VisibilityIcon />
//                 </IconButton>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </Paper>
//   );
// };

// export default AgentListPage;



import React from "react";
import {
  Box,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Avatar,
  IconButton,
  Typography,
  TextField,
  Button,
  MenuItem,
  Tabs,
  Tab,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";

import type { Agent } from "./types";

interface Props {
  onViewDetails: (agent: Agent) => void;
}

const AgentListPage: React.FC<Props> = ({ onViewDetails }) => {
  const MOCK_DATA = [
    {
      id: "AG1001",
      name: "Rajesh Kumar",
      email: "rajesh@example.com",
      type: "Agent",
      kyc: "Approved",
      package: "Gold",
      joinDate: "15 Jun 2023",
      status: "Active",
      avatar: "https://i.pravatar.cc/150?img=3",
    },
    {
      id: "CU2045",
      name: "Rajesh Kumar",
      email: "rajesh@example.com",
      type: "Customer",
      kyc: "-",
      package: "-",
      joinDate: "22 Jun 2023",
      status: "Active",
      avatar: "https://i.pravatar.cc/150?img=4",
    },
    {
      id: "AG1001",
      name: "Rajesh Kumar",
      email: "rajesh@example.com",
      type: "Agent",
      kyc: "Pending",
      package: "Silver",
      joinDate: "28 Jun 2023",
      status: "Pending KYC",
      avatar: "https://i.pravatar.cc/150?img=5",
    },
    {
      id: "CU2045",
      name: "Rajesh Kumar",
      email: "rajesh@example.com",
      type: "Customer",
      kyc: "-",
      package: "-",
      joinDate: "05 Jul 2023",
      status: "Active",
      avatar: "https://i.pravatar.cc/150?img=6",
    },
    {
      id: "AG1001",
      name: "Rajesh Kumar",
      email: "rajesh@example.com",
      type: "Agent",
      kyc: "Approved",
      package: "Star",
      joinDate: "05 Jul 2023",
      status: "Active",
      avatar: "https://i.pravatar.cc/150?img=7",
    },
  ];

  return (
    <Box>
      {/* TOP TABS */}
      <Tabs
        value="users"
        TabIndicatorProps={{ style: { display: "none" } }}
        sx={{
          mb: 3,
          "& .MuiTab-root": {
            textTransform: "none",
            borderRadius: "8px",
            px: 2.5,
            mx: 0.7,
            background: "#f4f6f8",
            color: "#475467",
            border: "1px solid #e5e7eb",
            fontWeight: 600,
          },
          "& .Mui-selected": {
            background: "#0d47a1",
            color: "white",
          },
        }}
      >
        <Tab label="Users & Agents" value="users" />
        <Tab label="KYC Approvals" value="kyc" />
      </Tabs>

      {/* SEARCH FILTERS */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
          <TextField
            placeholder="Search agents & users..."
            fullWidth
            sx={{ flex: 1 }}
          />

          <TextField select label="User Type" sx={{ width: 200 }}>
            <MenuItem>All Users</MenuItem>
            <MenuItem>Agents</MenuItem>
            <MenuItem>Customers</MenuItem>
          </TextField>

          <Button variant="contained" sx={{ px: 4 }}>
            Search
          </Button>
        </Box>
      </Paper>

      {/* LIST TABLE */}
      <Paper sx={{ borderRadius: 3 }}>
        <Table>
          <TableHead>
            <TableRow sx={{ background: "#0d47a1" }}>
              <TableCell sx={{ color: "white" }}>ID</TableCell>
              <TableCell sx={{ color: "white" }}>User</TableCell>
              <TableCell sx={{ color: "white" }}>Type</TableCell>
              <TableCell sx={{ color: "white" }}>KYC Status</TableCell>
              <TableCell sx={{ color: "white" }}>Package</TableCell>
              <TableCell sx={{ color: "white" }}>Join Date</TableCell>
              <TableCell sx={{ color: "white" }}>Status</TableCell>
              <TableCell sx={{ color: "white" }}>Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {MOCK_DATA.map((row, i) => (
              <TableRow key={i} hover>
                <TableCell>{row.id}</TableCell>

                {/* USER COLUMN */}
                <TableCell>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Avatar src={row.avatar} sx={{ width: 36, height: 36 }} />
                    <Box>
                      <Typography sx={{ fontWeight: 600 }}>{row.name}</Typography>
                      <Typography variant="caption" color="text.secondary">
                        {row.email}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>

                <TableCell>{row.type}</TableCell>

                {/* KYC STATUS BADGE */}
                <TableCell>
                  {row.kyc === "Approved" && (
                    <Box
                      sx={{
                        background: "#e3fcef",
                        color: "#037847",
                        px: 1.5,
                        py: 0.5,
                        borderRadius: 2,
                        display: "inline-block",
                        fontSize: "12px",
                      }}
                    >
                      Approved
                    </Box>
                  )}

                  {row.kyc === "Pending" && (
                    <Box
                      sx={{
                        background: "#fff4e5",
                        color: "#b76a00",
                        px: 1.5,
                        py: 0.5,
                        borderRadius: 2,
                        display: "inline-block",
                        fontSize: "12px",
                      }}
                    >
                      Pending
                    </Box>
                  )}

                  {row.kyc === "-" && <span>-</span>}
                </TableCell>

                <TableCell>{row.package}</TableCell>
                <TableCell>{row.joinDate}</TableCell>

                {/* STATUS BADGE */}
                <TableCell>
                  {row.status === "Active" && (
                    <Box
                      sx={{
                        background: "#e3fcef",
                        color: "#037847",
                        px: 1.5,
                        py: 0.5,
                        borderRadius: 2,
                        display: "inline-block",
                        fontSize: "12px",
                      }}
                    >
                      Active
                    </Box>
                  )}

                  {row.status === "Pending KYC" && (
                    <Box
                      sx={{
                        background: "#fff4e5",
                        color: "#b76a00",
                        px: 1.5,
                        py: 0.5,
                        borderRadius: 2,
                        display: "inline-block",
                        fontSize: "12px",
                      }}
                    >
                      Pending KYC
                    </Box>
                  )}
                </TableCell>

                <TableCell>
                  <IconButton onClick={() => onViewDetails(row)}>
                    <VisibilityIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>

      {/* PAGINATION */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 1.5,
          py: 3,
          fontSize: "14px",
        }}
      >
        <Button variant="outlined">Previous</Button>
        <Button variant="contained">1</Button>
        <Button variant="outlined">2</Button>
        <Button variant="outlined">3</Button>
        <Button variant="outlined">Next</Button>
      </Box>
    </Box>
  );
};

export default AgentListPage;

