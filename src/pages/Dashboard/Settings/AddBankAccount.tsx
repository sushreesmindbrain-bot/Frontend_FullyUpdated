import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
  Grid,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  MenuItem,
  Divider,
  Typography
} from "@mui/material";

/* TYPES */
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

const inputStyle = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "8px",
    "& fieldset": { borderColor: "#26619A" },
    "&:hover fieldset": { borderColor: "#26619A" },
    "&.Mui-focused fieldset": { borderColor: "#1f4f7a" }
  }
};

const AddBankAccount: React.FC<Props> = ({
  open,
  onClose,
  onSave
}) => {
  const [form, setForm] = useState<BankAccountForm>({
    bankName: "",
    accountNumber: "",
    ifscCode: "",
    accountHolder: "",
    bankBranch: "",
    accountType: "",
    isDefault: true
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
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
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle fontWeight={600}>
        Add Bank Account
      </DialogTitle>

      <Divider />

      <DialogContent sx={{ pt: 3 }}>
        <Grid container spacing={2.5}>
          {/* Row 1 */}
          <Grid item xs={12} md={6}>
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
          </Grid>

          <Grid item xs={12} md={6}>
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
          </Grid>

          {/* Row 2 */}
          <Grid item xs={12} md={6}>
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
          </Grid>

          <Grid item xs={12} md={6}>
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
          </Grid>

          {/* Row 3 */}
          <Grid item xs={12} md={6}>
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
          </Grid>

          <Grid item xs={12} md={6} /> 

          {/* Row 4 – Account Type on RIGHT */}
          <Grid item xs={12} md={6} />  

          <Grid item xs={12} md={6}>
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
 
              <MenuItem value="Select Type" >Select Type</MenuItem>
              <MenuItem value="savings">Savings</MenuItem>
              <MenuItem value="current">Current</MenuItem>
            </TextField>
          </Grid>

          {/* Row 5 */}
          <Grid item xs={12}>
            <Box mt={1}>
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
            </Box>
          </Grid>
        </Grid>
      </DialogContent>

      <Divider />

      <DialogActions sx={{ p: 2.5 }}>
        <Button onClick={onClose} sx={{ textTransform: "none" }}>
          Cancel
        </Button>

        <Button
          variant="contained"
          onClick={handleSave}
          sx={{ bgcolor: "#245e95", textTransform: "none" }}
        >
          Save Bank Account
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddBankAccount;

