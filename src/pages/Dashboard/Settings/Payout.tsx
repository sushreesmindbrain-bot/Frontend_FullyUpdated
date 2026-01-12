import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Pagination,
  PaginationItem,
  Stack,
  TextField,
  MenuItem,
  Radio
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import AddBankAccount from "./AddBankAccount";
import type { BankAccountForm } from "./AddBankAccount";
import type { Page } from "./MainParent";

interface BankAccount {
  bankName: string;
  accountNumber: string;
  ifsc: string;
  accountHolder: string;
  default: boolean;
}

interface Props {
  onTabChange: (tab: Page) => void;
}

const initialBanks: BankAccount[] = [
  {
    bankName: "HDFC Bank",
    accountNumber: "5010234567890",
    ifsc: "HDFC0000123",
    accountHolder: "HealthEarn Pvt Ltd",
    default: true
  },
  {
    bankName: "ICICI Bank",
    accountNumber: "12345678901234",
    ifsc: "ICIC0000456",
    accountHolder: "HealthEarn Pvt Ltd",
    default: false
  }
];

const Payout: React.FC<Props> = ({ onTabChange }) => {
  const [banks, setBanks] = useState<BankAccount[]>(initialBanks);
  const [schedule, setSchedule] = useState("weekly");
  const [openAdd, setOpenAdd] = useState(false);
  const [page, setPage] = useState(1); // pagination page

  const handleAddBank = (data: BankAccountForm) => {
    setBanks((prev) => [
      ...prev.map((b) => ({
        ...b,
        default: data.isDefault ? false : b.default
      })),
      {
        bankName: data.bankName,
        accountNumber: data.accountNumber,
        ifsc: data.ifscCode,
        accountHolder: data.accountHolder,
        default: data.isDefault
      }
    ]);
  };

  return (
    <Box sx={{ p: 3, bgcolor: "#f6f8fb", minHeight: "100vh" }}>
      {/* ================= TOP TABS (Shipping style) ================= */}
      <Paper
        sx={{
          px: 1,
          py: 1,
          mb: 3,
          width: "fit-content",
          display: "inline-flex",
          borderRadius: "12px",
        }}
      >
        <Stack direction="row" spacing={1}>
          <Button
            onClick={() => onTabChange("gst")}
            sx={{ textTransform: "none", color: "#000" }}
          >
            GST & Taxes
          </Button>
          <Button
            onClick={() => onTabChange("shipping")}
            sx={{ textTransform: "none", color: "#000" }}
          >
            Shipping & COD
          </Button>
          <Button
            onClick={() => onTabChange("payment")}
            sx={{ textTransform: "none", color: "#000" }}
          >
            Payment Gateways
          </Button>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#26619A",
              color: "#fff",
              textTransform: "none",
              "&:hover": { bgcolor: "#26619A" }
            }}
          >
            Payout Bank
          </Button>
          <Button
            onClick={() => onTabChange("legal")}
            sx={{ textTransform: "none", color: "#000" }}
          >
            Legal Content
          </Button>
          <Button
            onClick={() => onTabChange("localization")}
            sx={{ textTransform: "none", color: "#000" }}
          >
            Localization
          </Button>
        </Stack>
      </Paper>

      {/* ================= PAYOUT BANK SETTINGS ================= */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography fontWeight={600}>Payout Bank Settings</Typography>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => setOpenAdd(true)}
            sx={{
              bgcolor: "#26619A",
              "&:hover": { bgcolor: "#26619A" },
              textTransform: "none"
            }}
          >
            Add Bank Account
          </Button>
        </Box>

        <Table>
          <TableHead sx={{ bgcolor: "#26619A" }}>
            <TableRow>
              {["Bank Name", "Account Number", "IFSC Code", "Account Holder", "Default", "Actions"].map((h) => (
                <TableCell key={h} sx={{ color: "white", fontWeight: 500 }}>
                  {h}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {banks.map((b, i) => (
              <TableRow key={i} hover>
                <TableCell>{b.bankName}</TableCell>
                <TableCell>{b.accountNumber}</TableCell>
                <TableCell>{b.ifsc}</TableCell>
                <TableCell>{b.accountHolder}</TableCell>
                <TableCell><Radio checked={b.default} /></TableCell>
                <TableCell>
                  <IconButton color="success"><EditIcon /></IconButton>
                  <IconButton color="error"><DeleteIcon /></IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* 🔹 PAGINATION (Payout-style) */}
        <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
          <Pagination
            count={14}
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

      {/* ================= PAYOUT CONFIGURATION ================= */}
      <Paper sx={{ p: 3 }}>
        <Typography fontWeight={600} mb={2}>Payout Configuration</Typography>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
          <Box sx={{ flex: "1 1 300px" }}>Payout Schedule
            <TextField
              select
              fullWidth
              value={schedule}
              onChange={(e) => setSchedule(e.target.value)}
            >
              <MenuItem value="weekly">Weekly (Every Friday)</MenuItem>
              <MenuItem value="biweekly">Bi-weekly (1st & 15th)</MenuItem>
              <MenuItem value="monthly">Monthly (1st of month)</MenuItem>
            </TextField>
          </Box>

          <Box sx={{ flex: "1 1 300px" }}>
            TDS Percentage (%)
            <TextField fullWidth  defaultValue={5} />
          </Box>

          <Box sx={{ flex: "1 1 300px" }}>Repurchase Wallet (%)
            <TextField fullWidth   defaultValue={10} />
          </Box>

          <Box sx={{ flex: "1 1 300px" }}>Minimum Payout Amount (₹)
            <TextField fullWidth   defaultValue={100} />
          </Box>

          <Box sx={{ flex: "1 1 300px" }}>Payout Processing Fee (₹)
            <TextField fullWidth   defaultValue={0} />
          </Box>
        </Box>

        <Box display="flex" justifyContent="flex-end" mt={3}>
          <Button
            variant="contained"
            sx={{ bgcolor: "#26619A", "&:hover": { bgcolor: "#26619A" }, textTransform: "none" }}
          >
            Save Changes
          </Button>
        </Box>
      </Paper>

      {/* ================= ADD BANK ACCOUNT MODAL ================= */}
      <AddBankAccount
        open={openAdd}
        onClose={() => setOpenAdd(false)}
        onSave={handleAddBank}
      />
    </Box>
  );
};

export default Payout;
