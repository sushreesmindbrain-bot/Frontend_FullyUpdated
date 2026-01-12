import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Button,
  Select,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Divider,
  Pagination,
  PaginationItem,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import type { Page } from "./PageType";

interface Props {
  onTabChange: (page: Page) => void;
}

const rows = [
  { month: "June 2024", newA: "+45", active: 167, inactive: 20, total: 245, growth: "+25.9%" },
  { month: "July 2024", newA: "+52", active: 189, inactive: 26, total: 297, growth: "+14.2%" },
  { month: "August 2024", newA: "+48", active: 201, inactive: 50, total: 345, growth: "+7.5%" },
  { month: "September 2024", newA: "+61", active: 223, inactive: 25, total: 406, growth: "+12.1%" },
  { month: "October 2024", newA: "+58", active: 245, inactive: 10, total: 464, growth: "+12.1%" },
  { month: "November 2024", newA: "+50", active: 220, inactive: 30, total: 500, growth: "+10.2%" },
  { month: "December 2024", newA: "+55", active: 230, inactive: 28, total: 520, growth: "+11.0%" },
];

const SimpleArrows = ({ label }: { label: string }) => (
  <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
    <Typography sx={{ fontWeight: 600, color: "#fff", whiteSpace: "nowrap" }}>
      {label}
    </Typography>
    <Box sx={{ display: "flex", gap: "2px" }}>
      <Typography sx={{ fontSize: 12, color: "#fff" }}>↑</Typography>
      <Typography sx={{ fontSize: 12, color: "#fff" }}>↓</Typography>
    </Box>
  </Box>
);

const TeamGrowth: React.FC<Props> = ({ onTabChange }) => {
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;

  const totalPages = Math.ceil(rows.length / rowsPerPage);

  const visibleRows = rows.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  return (
    <Box sx={{ p: 3, backgroundColor: "#f7f9fc", minHeight: "100vh" }}>
      <Paper sx={{ p: 1.5, mb: 3 }}>
        <Box display="flex" gap={1}>
          <Button onClick={() => onTabChange("salesBv")}>Sales & BV</Button>
          <Button variant="contained" sx={{ bgcolor: "#26619A" }}>
            Team Growth
          </Button>
          <Button onClick={() => onTabChange("packageDistribution")}>Package Distribution</Button>
          <Button onClick={() => onTabChange("coinsCoupons")}>Coins & Coupons</Button>
          <Button onClick={() => onTabChange("taxGst")}>Tax / GST</Button>
        </Box>
      </Paper>

      <Paper sx={{ p: 3 }}>
        <Typography fontSize={20}>Team Growth Analytics</Typography>
        <Divider sx={{ my: 2 }} />

        <Box display="flex" justifyContent="space-between" mb={2}>
          <Select size="small" defaultValue="6">
            <MenuItem value="6">Last 6 Months</MenuItem>
            <MenuItem value="12">Last 12 Months</MenuItem>
          </Select>

          <Button variant="contained" startIcon={<DownloadIcon />} sx={{ bgcolor: "#26619A" }}>
            Export
          </Button>
        </Box>

        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#26619A" }}>
              <TableCell><SimpleArrows label="Month" /></TableCell>
              <TableCell><SimpleArrows label="New Agents" /></TableCell>
              <TableCell><SimpleArrows label="Active Agents" /></TableCell>
              <TableCell><SimpleArrows label="Inactive Agents" /></TableCell>
              <TableCell><SimpleArrows label="Total Agents" /></TableCell>
              <TableCell><SimpleArrows label="Active %" /></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {visibleRows.map((row) => (
              <TableRow key={row.month}>
                <TableCell>{row.month}</TableCell>
                <TableCell>{row.newA}</TableCell>
                <TableCell>{row.active}</TableCell>
                <TableCell>{row.inactive}</TableCell>
                <TableCell>{row.total}</TableCell>
                <TableCell sx={{ color: "#70BF45", fontWeight: 600 }}>
                  {row.growth}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* ================= FIXED PAGINATION ================= */}
        <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
          <Pagination
            count={totalPages}
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
                  bgcolor: item.selected ? "#26619A" : "transparent",
                  color: item.selected ? "#fff" : "#000",
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

export default TeamGrowth;

