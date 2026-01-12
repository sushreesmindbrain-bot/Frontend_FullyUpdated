import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  MenuItem,
  Divider,
  Typography
} from "@mui/material";

/* ================= TYPES ================= */

export interface BankAccountForm {
  bankName: string;
  accountNumber: string;
  ifscCode: string;
  accountHolder: string;
  bankBranch: string;
  accountType: string;
  isDefault: boolean;
}

interface Props {
  open: boolean;
  onClose: () => void;
  onSave: (data: BankAccountForm) => void;
}

/* ================= STYLES ================= */

const inputStyle = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "8px",
    "& fieldset": { borderColor: "#26619A" },
    "&.Mui-focused fieldset": { borderColor: "#1f4f7a" }
  }
};

/* ================= COMPONENT ================= */

const AddBankAccount: React.FC<Props> = ({ open, onClose, onSave }) => {
  const [form, setForm] = useState<BankAccountForm>({
    bankName: "",
    accountNumber: "",
    ifscCode: "",
    accountHolder: "",
    bankBranch: "",
    accountType: "",
    isDefault: true
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked, type } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSave = () => {
    onSave(form);
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      keepMounted
      disableRestoreFocus
    >
      <DialogTitle fontWeight={600}>Add Bank Account</DialogTitle>

      <Divider />

      <DialogContent sx={{ pt: 3 }}>
        {/* ================= ROW 1 ================= */}
        <Box display="flex" flexWrap="wrap" gap={2.5} mb={2.5}>
          <Box flex="1 1 250px">
            <Typography fontSize={13} mb={0.5}>
              Bank Name
            </Typography>
            <TextField
              fullWidth
              name="bankName"
              value={form.bankName}
              onChange={handleChange}
              sx={inputStyle}
            />
          </Box>

          <Box flex="1 1 250px">
            <Typography fontSize={13} mb={0.5}>
              Account Number
            </Typography>
            <TextField
              fullWidth
              name="accountNumber"
              value={form.accountNumber}
              onChange={handleChange}
              sx={inputStyle}
            />
          </Box>
        </Box>

        {/* ================= ROW 2 ================= */}
        <Box display="flex" flexWrap="wrap" gap={2.5} mb={2.5}>
          <Box flex="1 1 250px">
            <Typography fontSize={13} mb={0.5}>
              IFSC Code
            </Typography>
            <TextField
              fullWidth
              name="ifscCode"
              value={form.ifscCode}
              onChange={handleChange}
              sx={inputStyle}
            />
          </Box>

          <Box flex="1 1 250px">
            <Typography fontSize={13} mb={0.5}>
              Account Holder Name
            </Typography>
            <TextField
              fullWidth
              name="accountHolder"
              value={form.accountHolder}
              onChange={handleChange}
              sx={inputStyle}
            />
          </Box>
        </Box>

        {/* ================= ROW 3 ================= */}
        <Box display="flex" flexWrap="wrap" gap={2.5} mb={2.5}>
          <Box flex="1 1 250px">
            <Typography fontSize={13} mb={0.5}>
              Bank Branch
            </Typography>
            <TextField
              fullWidth
              name="bankBranch"
              value={form.bankBranch}
              onChange={handleChange}
              sx={inputStyle}
            />
          </Box>
        </Box>

        {/* ================= ROW 4 ================= */}
        <Box display="flex" justifyContent="flex-end" mb={2}>
          <Box width={250}>
            <Typography fontSize={13} mb={0.5}>
              Account Type
            </Typography>
            <TextField
              select
              fullWidth
              name="accountType"
              value={form.accountType}
              onChange={handleChange}
              sx={inputStyle}
            >
              <MenuItem value="">Select Type</MenuItem>
              <MenuItem value="savings">Savings</MenuItem>
              <MenuItem value="current">Current</MenuItem>
            </TextField>
          </Box>
        </Box>

        {/* ================= ROW 5 ================= */}
        <FormControlLabel
          control={
            <Checkbox
              checked={form.isDefault}
              onChange={handleChange}
              name="isDefault"
            />
          }
          label="Set as Default Account"
        />
      </DialogContent>

      <Divider />

      <DialogActions sx={{ p: 2.5 }}>
        <Button
          onClick={onClose}
          variant="outlined"
          sx={{ color: "#979797", borderColor: "#979797", textTransform: "none", "&:hover": { borderColor: "#979797" } }}
        >
          Cancel
        </Button>

        <Button
          variant="contained"
          onClick={handleSave}
          sx={{
            bgcolor: "#26619A",
            textTransform: "none"
          }}
        >
          Save Bank Account
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddBankAccount;
