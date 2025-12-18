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
      {/* TOP TABS */}
      <Paper sx={{ p: 1.5, mb: 3 }}>
        <Stack direction="row" spacing={1}>
          <Button onClick={() => onTabChange("gst")}>GST & Taxes</Button>
          <Button onClick={() => onTabChange("shipping")}>Shipping & COD</Button>
          <Button onClick={() => onTabChange("payment")}>Payment Gateways</Button>
          <Button variant="contained">Payout Bank</Button>
          <Button onClick={() => onTabChange("legal")}>Legal Content</Button>
          <Button disabled>Localization</Button>
        </Stack>
      </Paper>

      {/* PAYOUT BANK SETTINGS */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography fontWeight={600}>Payout Bank Settings</Typography>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => setOpenAdd(true)}
          >
            Add Bank Account
          </Button>
        </Box>

        <Table>
          <TableHead sx={{ bgcolor: "#245e95" }}>
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

        <Box display="flex" justifyContent="center" mt={2}>
          <Pagination count={14} shape="rounded" />
        </Box>
      </Paper>

      {/* PAYOUT CONFIGURATION */}
      <Paper sx={{ p: 3 }}>
        <Typography fontWeight={600} mb={2}>Payout Configuration</Typography>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
          <Box sx={{ flex: "1 1 300px" }}>
            <TextField
              select
              fullWidth
              label="Payout Schedule"
              value={schedule}
              onChange={(e) => setSchedule(e.target.value)}
            >
              <MenuItem value="weekly">Weekly (Every Friday)</MenuItem>
              <MenuItem value="biweekly">Bi-weekly (1st & 15th)</MenuItem>
              <MenuItem value="monthly">Monthly (1st of month)</MenuItem>
            </TextField>
          </Box>

          <Box sx={{ flex: "1 1 300px" }}>
            <TextField fullWidth label="TDS Percentage (%)" defaultValue={5} />
          </Box>

          <Box sx={{ flex: "1 1 300px" }}>
            <TextField fullWidth label="Repurchase Wallet (%)" defaultValue={10} />
          </Box>

          <Box sx={{ flex: "1 1 300px" }}>
            <TextField fullWidth label="Minimum Payout Amount (₹)" defaultValue={100} />
          </Box>

          <Box sx={{ flex: "1 1 300px" }}>
            <TextField fullWidth label="Payout Processing Fee (₹)" defaultValue={0} />
          </Box>
        </Box>

        <Box display="flex" justifyContent="flex-end" mt={3}>
          <Button variant="contained" sx={{ bgcolor: "#245e95", textTransform: "none" }}>
            Save Changes
          </Button>
        </Box>
      </Paper>

      {/* ADD BANK ACCOUNT MODAL */}
      <AddBankAccount
        open={openAdd}
        onClose={() => setOpenAdd(false)}
        onSave={handleAddBank}
      />
    </Box>
  );
};

export default Payout;
