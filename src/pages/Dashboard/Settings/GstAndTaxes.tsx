import React, { useState } from "react";
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
  MenuItem
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";

import type { Agent } from "./types";

/* ---------- PROPS ---------- */
interface Props {
  onViewDetails: (agent: Agent) => void;
}

/* ---------- SORT ARROWS ---------- */
const SimpleArrows = ({ label }: { label: string }) => (
  <Box sx={{ display: "flex", alignItems: "center", gap: 0.6 }}>
    {label}
    <Box sx={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
      <Typography sx={{ fontSize: 10, color: "white" }}>▲</Typography>
      <Typography sx={{ fontSize: 10, color: "white" }}>▼</Typography>
    </Box>
  </Box>
);

const AgentListPage: React.FC<Props> = ({ onViewDetails }) => {
  /* ---------- TAB STATE ---------- */
  const [activeTab, setActiveTab] = useState<"users" | "kyc">("users");

  /* ---------- MOCK DATA ---------- */
  const MOCK_DATA: Agent[] = [
    {
      id: "AG1001",
      name: "Rajesh Kumar",
      email: "rajesh@example.com",
      type: "Agent",
      kyc: "Approved",
      package: "Gold",
      joinDate: "15 Jun 2023",
      status: "Active",
      avatar: "https://i.pravatar.cc/150?img=3"
    },
    {
      id: "CU2045",
      name: "Anita Singh",
      email: "anita@example.com",
      type: "Customer",
      kyc: "-",
      package: "-",
      joinDate: "22 Jun 2023",
      status: "Active",
      avatar: "https://i.pravatar.cc/150?img=4"
    },
    {
      id: "AG1002",
      name: "Rohit Sharma",
      email: "rohit@example.com",
      type: "Agent",
      kyc: "Pending",
      package: "Silver",
      joinDate: "28 Jun 2023",
      status: "Pending KYC",
      avatar: "https://i.pravatar.cc/150?img=5"
    }
  ];

  /* ---------- TAB FILTER ---------- */
  const filteredData =
    activeTab === "kyc"
      ? MOCK_DATA.filter((row) => row.kyc === "Pending")
      : MOCK_DATA;

  return (
    <Box>
      {/* ================= TOP BUTTON TABS ================= */}
      <Paper sx={{ p: 1.5, mb: 3 }}>
        <Box sx={{ display: "flex", gap: 1 }}>
          <Button
            variant={activeTab === "users" ? "contained" : "outlined"}
            sx={{
              bgcolor: activeTab === "users" ? "#0d47a1" : "transparent",
              color: activeTab === "users" ? "#fff" : "#475467",
              textTransform: "none",
              fontWeight: 600
            }}
            onClick={() => setActiveTab("users")}
          >
            Users & Agents
          </Button>

          <Button
            variant={activeTab === "kyc" ? "contained" : "outlined"}
            sx={{
              bgcolor: activeTab === "kyc" ? "#0d47a1" : "transparent",
              color: activeTab === "kyc" ? "#fff" : "#475467",
              textTransform: "none",
              fontWeight: 600
            }}
            onClick={() => setActiveTab("kyc")}
          >
            KYC Approvals
          </Button>
        </Box>
      </Paper>

      {/* ================= SEARCH FILTERS ================= */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
          <TextField
            placeholder="Search agents & users..."
            fullWidth
            sx={{ flex: 1 }}
          />

          <TextField select label="User Type" sx={{ width: 200 }}>
            <MenuItem value="all">All Users</MenuItem>
            <MenuItem value="agent">Agents</MenuItem>
            <MenuItem value="customer">Customers</MenuItem>
          </TextField>

          <Button variant="contained" sx={{ px: 4 }}>
            Search
          </Button>
        </Box>
      </Paper>

      {/* ================= TABLE ================= */}
      <Paper sx={{ borderRadius: 3 }}>
        <Table>
          <TableHead>
            <TableRow sx={{ background: "#0d47a1" }}>
              <TableCell sx={{ color: "white" }}>
                <SimpleArrows label="ID" />
              </TableCell>
              <TableCell sx={{ color: "white" }}>
                <SimpleArrows label="User" />
              </TableCell>
              <TableCell sx={{ color: "white" }}>
                <SimpleArrows label="Type" />
              </TableCell>
              <TableCell sx={{ color: "white" }}>
                <SimpleArrows label="KYC Status" />
              </TableCell>
              <TableCell sx={{ color: "white" }}>
                <SimpleArrows label="Package" />
              </TableCell>
              <TableCell sx={{ color: "white" }}>
                <SimpleArrows label="Join Date" />
              </TableCell>
              <TableCell sx={{ color: "white" }}>
                <SimpleArrows label="Status" />
              </TableCell>
              <TableCell sx={{ color: "white" }}>Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {filteredData.map((row, i) => (
              <TableRow key={i} hover>
                <TableCell>{row.id}</TableCell>

                <TableCell>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Avatar src={row.avatar} />
                    <Box>
                      <Typography fontWeight={600}>{row.name}</Typography>
                      <Typography variant="caption" color="text.secondary">
                        {row.email}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>

                <TableCell>{row.type}</TableCell>

                <TableCell>
                  {row.kyc === "Approved" && (
                    <Badge text="Approved" bg="#e3fcef" color="#037847" />
                  )}
                  {row.kyc === "Pending" && (
                    <Badge text="Pending" bg="#fff4e5" color="#b76a00" />
                  )}
                  {row.kyc === "-" && "-"}
                </TableCell>

                <TableCell>{row.package}</TableCell>
                <TableCell>{row.joinDate}</TableCell>

                <TableCell>
                  {row.status === "Active" && (
                    <Badge text="Active" bg="#e3fcef" color="#037847" />
                  )}
                  {row.status === "Pending KYC" && (
                    <Badge
                      text="Pending KYC"
                      bg="#fff4e5"
                      color="#b76a00"
                    />
                  )}
                </TableCell>

                <TableCell>
                  <IconButton onClick={() => onViewDetails(row)}>
                    <VisibilityIcon sx={{ color: "#0d47a1" }} />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>

      {/* ================= PAGINATION ================= */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 1.5,
          py: 3
        }}
      >
        <Button variant="outlined">Previous</Button>
        <Button variant="contained">1</Button>
        <Button variant="outlined">2</Button>
        <Button variant="outlined">Next</Button>
      </Box>
    </Box>
  );
};

/* ---------- STATUS BADGE ---------- */
const Badge = ({
  text,
  bg,
  color
}: {
  text: string;
  bg: string;
  color: string;
}) => (
  <Box
    sx={{
      background: bg,
      color,
      px: 1.5,
      py: 0.5,
      borderRadius: 2,
      display: "inline-block",
      fontSize: 12
    }}
  >
    {text}
  </Box>
);

export default AgentListPage;
