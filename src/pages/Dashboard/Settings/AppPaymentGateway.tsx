import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Grid,
  Divider,
  Checkbox,
  FormControlLabel,
  Typography
} from "@mui/material";

interface Props {
  open: boolean;
  onClose: () => void;
  onSave: (data: any) => void;
}

/* SHARED INPUT STYLE (SAME AS OTHER DIALOGS) */
const inputStyle = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "10px",
    "& fieldset": {
      borderColor: "#26619A"
    },
    "&:hover fieldset": {
      borderColor: "#26619A"
    },
    "&.Mui-focused fieldset": {
      borderColor: "#1f4f7a"
    }
  },
  "& .MuiInputBase-input": {
    color: "#667085"
  }
};

const AddPaymentGateway: React.FC<Props> = ({
  open,
  onClose,
  onSave
}) => {
  const handleSubmit = () => {
    onSave({});
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      sx={{
        "& .MuiPaper-root": {
          borderRadius: "12px"
        }
      }}
    >
      {/* TITLE */}
      <DialogTitle fontWeight={600}>
        Add Payment Gateway
      </DialogTitle>

      <Divider />

      {/* CONTENT */}
      <DialogContent sx={{ pt: 3 }}>
        <Grid container spacing={2.5}>
          {/* Row 1 */}
          <Grid item xs={12}>
            <Typography fontSize={13} mb={0.5} color="#000000">
              Gateway Name
            </Typography>
            <TextField
              fullWidth
              size="small"
              sx={inputStyle}
            />
          </Grid>

          {/* Row 2 */}
          <Grid item xs={12}>
            <Typography fontSize={13} mb={0.5} color="#000000">
              Gateway Type
            </Typography>
            <TextField
              fullWidth
              size="small"
              sx={inputStyle}
            />
          </Grid>

          {/* Row 3 */}
          <Grid item xs={12} md={6}>
            <Typography fontSize={13} mb={0.5} color="#000000">
              Merchant ID
            </Typography>
            <TextField
              fullWidth
              size="small"
              sx={inputStyle}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography fontSize={13} mb={0.5} color="#000000">
              API Key
            </Typography>
            <TextField
              fullWidth
              size="small"
              sx={inputStyle}
            />
          </Grid>

          {/* Row 4 */}
          <Grid item xs={12} md={6}>
            <Typography fontSize={13} mb={0.5} color="#000000">
              Secret Key
            </Typography>
            <TextField
              fullWidth
              size="small"
              sx={inputStyle}
            />
          </Grid>

          <Grid item xs={12} md={6} />

          {/* Checkbox */}
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Active"
            />
          </Grid>
        </Grid>
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

