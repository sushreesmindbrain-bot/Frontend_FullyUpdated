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
  MenuItem,
  Pagination,
  PaginationItem,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";

import type { Agent } from "./types";

interface Props {
  onViewDetails: (agent: Agent) => void;
}

const BLUE = "#26619A";

const SimpleArrows = ({ label }: { label: string }) => (
  <Box sx={{ display: "flex", alignItems: "center", gap: 0.6 }}>
    {label}
    <Box sx={{ display: "flex", gap: 0.3 }}>
      <Typography sx={{ color: "white", fontSize: "12px" }}>↑</Typography>
      <Typography sx={{ color: "white", fontSize: "12px" }}>↓</Typography>
    </Box>
  </Box>
);

const AgentListPage: React.FC<Props> = ({ onViewDetails }) => {
  const [activeTab, setActiveTab] = useState<"users" | "kyc">("users");
  const [page, setPage] = useState(1);

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

  const handleTabClick = (tab: "users" | "kyc") => {
    setActiveTab(tab);
  };

  return (
    <Box>
      {/* ================= TOP TABS ================= */}
      <Paper sx={{ p: 1.5, mb: 3, background: "#F9FAFC" }}>
        <Box display="flex" gap={1}>
          {(["users", "kyc"] as const).map((tab) => {
            const isActive = activeTab === tab;
            return (
              <Button
                key={tab}
                onClick={() => handleTabClick(tab)}
                sx={{
                  textTransform: "none",
                  fontWeight: 600,
                  px: 2.5,
                  py: 1,
                  minHeight: "38px",
                  borderRadius: "9px",
                  border: "1px solid #e5e7eb",
                  color: isActive ? "#fff" : "#475467",
                  backgroundColor: isActive ? BLUE : "#f4f6f8",
                  "&:hover": {
                    backgroundColor: isActive ? BLUE : "#e5e7eb",
                  },
                }}
              >
                {tab === "users" ? "Users & Agents" : "KYC Approvals"}
              </Button>
            );
          })}
        </Box>
      </Paper>

      {/* ================= SEARCH FILTERS ================= */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            flexWrap: { xs: "wrap", sm: "nowrap" },
            alignItems: "flex-end",
          }}
        >
          {/* Search Input */}
          <Box sx={{ flex: 1 }}>
            <Typography sx={{ mb: 1, fontWeight: 500 }}>Search</Typography>
            <TextField
              placeholder="Search agents & users..."
              fullWidth
              size="small"
            />
          </Box>

          {/* User Type Dropdown */}
          <Box>
            <Typography sx={{ mb: 1, fontWeight: 500 }}>User Type</Typography>
            <TextField select size="small" sx={{ width: 200 }}>
              <MenuItem>All Users</MenuItem>
              <MenuItem>Agents</MenuItem>
              <MenuItem>Customers</MenuItem>
            </TextField>
          </Box>

          {/* Search Button aligned */}
          <Box>
            <Button
              variant="contained"
              sx={{
                height: "100%",
                textTransform: "none",
                px: 4,
                background: BLUE,
                "&:hover": { background: BLUE },
              }}
            >
              Search
            </Button>
          </Box>
        </Box>
      </Paper>

      {/* ================= TABLE ================= */}
      <Paper sx={{ borderRadius: 4, overflow: "hidden" }}>
        <Table>
          <TableHead>
            <TableRow sx={{ background: BLUE }}>
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
            {MOCK_DATA.map((row, i) => (
              <TableRow key={i} hover>
                <TableCell>{row.id}</TableCell>
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

                {/* KYC STATUS - black text */}
                <TableCell>
                  {row.kyc !== "-" ? (
                    <Box
                      sx={{
                        background: row.kyc === "Approved" ? "#e3fcef" : "#fff4e5",
                        color: "#000", // black text
                        px: 1.5,
                        py: 0.5,
                        borderRadius: 3,
                        fontSize: "12px",
                      }}
                    >
                      {row.kyc}
                    </Box>
                  ) : (
                    "-"
                  )}
                </TableCell>

                <TableCell>{row.package}</TableCell>
                <TableCell>{row.joinDate}</TableCell>

                {/* STATUS remains unchanged */}
                <TableCell>
                  <Box
                    sx={{
                      background: row.status === "Active" ? "#e3fcef" : "#fff4e5",
                      color: row.status === "Active" ? "#037847" : "#b76a00",
                      px: 1.5,
                      py: 0.5,
                      borderRadius: 3,
                      fontSize: "12px",
                    }}
                  >
                    {row.status}
                  </Box>
                </TableCell>

                <TableCell>
                  <IconButton
                    onClick={() =>
                      onViewDetails({
                        ...row,
                        code: row.id,
                        joiningDate: row.joinDate,
                        phone: "",
                        bankHolderName: "Rajesh Kumar",
                        bankName: "State Bank of India",
                        bankAccountNumber: "XXXXXXXX4521",
                        bankIFSC: "SBIN0001234",
                      } as Agent)
                    }
                  >
                    <VisibilityIcon sx={{ color: BLUE, fontSize: 22 }} />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* ================= PAGINATION ================= */}
        <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
          <Pagination
            count={10}
            page={page}
            onChange={(_, v) => setPage(v)}
            renderItem={(item) => (
              <PaginationItem
                {...item}
                slots={{
                  previous: () => <span>&lt; Previous</span>,
                  next: () => <span>Next &gt;</span>,
                }}
                sx={{
                  border: "1px solid #DCDCDC",
                  borderRadius: "6px",
                  minWidth: 36,
                  mx: 0.5,
                  fontWeight: item.selected ? 600 : 400,
                }}
              />
            )}
          />
        </Box>
      </Paper>
    </Box>
  );
};

export default AgentListPage;



