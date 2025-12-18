import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Divider,
  Checkbox,
  FormControlLabel,
  Typography,
  Box
} from "@mui/material";

/* ================= TYPES ================= */

export interface AddGatewayForm {
  gatewayName: string;
  gatewayType: string;
  merchantId: string;
  apiKey: string;
  secretKey: string;
  active: boolean;
}

interface Props {
  open: boolean;
  onClose: () => void;
  onSave: (data: AddGatewayForm) => void;
}

/* ================= STYLES ================= */

const inputStyle = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "10px",
    "& fieldset": { borderColor: "#26619A" },
    "&:hover fieldset": { borderColor: "#26619A" },
    "&.Mui-focused fieldset": { borderColor: "#1f4f7a" }
  },
  "& .MuiInputBase-input": {
    color: "#667085"
  }
};

/* ================= COMPONENT ================= */

const AddPaymentGateway: React.FC<Props> = ({
  open,
  onClose,
  onSave
}) => {
  const [form, setForm] = useState<AddGatewayForm>({
    gatewayName: "",
    gatewayType: "",
    merchantId: "",
    apiKey: "",
    secretKey: "",
    active: true
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked, type } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = () => {
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
      disableAutoFocus
      sx={{
        "& .MuiPaper-root": { borderRadius: "12px" }
      }}
    >
      {/* TITLE */}
      <DialogTitle fontWeight={600}>
        Add Payment Gateway
      </DialogTitle>

      <Divider />

      {/* CONTENT */}
      <DialogContent sx={{ pt: 3 }}>
        <Box mb={2.5}>
          <Typography fontSize={13} mb={0.5}>
            Gateway Name
          </Typography>
          <TextField
            fullWidth
            size="small"
            name="gatewayName"
            value={form.gatewayName}
            onChange={handleChange}
            sx={inputStyle}
          />
        </Box>

        <Box mb={2.5}>
          <Typography fontSize={13} mb={0.5}>
            Gateway Type
          </Typography>
          <TextField
            fullWidth
            size="small"
            name="gatewayType"
            value={form.gatewayType}
            onChange={handleChange}
            sx={inputStyle}
          />
        </Box>

        <Box display="flex" flexWrap="wrap" gap={2.5} mb={2.5}>
          <Box flex="1 1 250px">
            <Typography fontSize={13} mb={0.5}>
              Merchant ID
            </Typography>
            <TextField
              fullWidth
              size="small"
              name="merchantId"
              value={form.merchantId}
              onChange={handleChange}
              sx={inputStyle}
            />
          </Box>

          <Box flex="1 1 250px">
            <Typography fontSize={13} mb={0.5}>
              API Key
            </Typography>
            <TextField
              fullWidth
              size="small"
              name="apiKey"
              value={form.apiKey}
              onChange={handleChange}
              sx={inputStyle}
            />
          </Box>
        </Box>

        <Box display="flex" justifyContent="flex-end" mb={2}>
          <Box width={250}>
            <Typography fontSize={13} mb={0.5}>
              Secret Key
            </Typography>
            <TextField
              fullWidth
              size="small"
              name="secretKey"
              value={form.secretKey}
              onChange={handleChange}
              sx={inputStyle}
            />
          </Box>
        </Box>

        <FormControlLabel
          control={
            <Checkbox
              checked={form.active}
              onChange={handleChange}
              name="active"
            />
          }
          label="Active"
        />
      </DialogContent>

      <Divider />

      {/* ACTIONS */}
      <DialogActions sx={{ px: 3, pb: 2 }}>
        <Button
          onClick={onClose}
          variant="contained"
          color="inherit"
          sx={{
            borderRadius: "10px",
            textTransform: "none",
            px: 3
          }}
        >
          Cancel
        </Button>

        <Button
          onClick={handleSubmit}
          variant="contained"
          sx={{
            bgcolor: "#245e95",
            borderRadius: "10px",
            textTransform: "none",
            px: 3
          }}
        >
          Save Gateway
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddPaymentGateway;
