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
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      {/* TITLE */}
      <DialogTitle sx={{ fontWeight: 600 }}>
        Add Payment Gateway
      </DialogTitle>

      {/* BLACK LINE */}
      <Divider sx={{ borderColor: "#000" }} />

      {/* CONTENT */}
      <DialogContent sx={{ pt: 3 }}>
        <Grid container spacing={2.5}>
          {/* Row 1 */}
          <Grid size={{ xs: 12 }}>
             <Typography fontSize={13} mb={0.5}>
            Gateway Name
              </Typography>
            <TextField
              fullWidth
               size="small"
            />
          </Grid>

          {/* Row 2 */}
          <Grid size={{ xs: 12 }}>
             <Typography fontSize={13} mb={0.5}>
            Gateway Type
              </Typography>
            <TextField
              fullWidth
              size="small"
            />
          </Grid>

          {/* Row 3 */}
          <Grid size={{ xs: 12, md: 6 }}>
             <Typography fontSize={13} mb={0.5}>
            Merchant ID
              </Typography>
            <TextField
              fullWidth
              size="small"
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
              <Typography fontSize={13} mb={0.5}>
             API Key
              </Typography>
            <TextField
              fullWidth
               size="small"
            />
          </Grid>

          {/* Row 4 */}
          <Grid size={{ xs: 12, md: 6 }}>
               <Typography fontSize={13} mb={0.5}>
              Secret Key
              </Typography>
            <TextField
              fullWidth
              size="small"
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }} />

          {/* Checkbox */}
          <Grid size={{ xs: 12 }}>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Active"
            />
          </Grid>
        </Grid>
      </DialogContent>

      {/* BLACK LINE */}
      <Divider sx={{ borderColor: "#000" }} />

      {/* ACTIONS */}
      <DialogActions sx={{ px: 3, py: 2 }}>
        <Button
          onClick={onClose}
          variant="contained"
          sx={{
            bgcolor: "#d1d5db",
            color: "#000",
            textTransform: "none"
          }}
        >
          Cancel
        </Button>

        <Button
          onClick={handleSubmit}
          variant="contained"
          sx={{
            bgcolor: "#245e95",
            textTransform: "none"
          }}
        >
          Save Gateway
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddPaymentGateway;


