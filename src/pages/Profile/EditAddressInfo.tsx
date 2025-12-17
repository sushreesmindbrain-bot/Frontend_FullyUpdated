 import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
  TextField,
  Button,
  Box,
  Divider,
  Typography
} from "@mui/material";

interface EditAddressInfoProps {
  open: boolean;
  onClose: () => void;
  onSave: () => void;
}

const EditAddressInfo: React.FC<EditAddressInfoProps> = ({
  open,
  onClose,
  onSave
}) => {
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
      <DialogTitle>Edit Address</DialogTitle>

      <Divider />

      <DialogContent>
        <Box mt={2}>
          <Grid container spacing={2}>
            {/* Country */}
            <Grid item xs={12} md={6}>
              <Typography fontSize={12} color="text.secondary" mb={0.5}>
                Country
              </Typography>
              <TextField
                fullWidth
                size="small"
                defaultValue="United States"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px"
                  },
                  "& .MuiInputBase-input": {
                    color: "#667085"
                  }
                }}
              />
            </Grid>

            {/* City */}
            <Grid item xs={12} md={6}>
              <Typography fontSize={12} color="text.secondary" mb={0.5}>
                City
              </Typography>
              <TextField
                fullWidth
                size="small"
                defaultValue="Phoenix"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px"
                  },
                  "& .MuiInputBase-input": {
                    color: "#667085"
                  }
                }}
              />
            </Grid>

            {/* State */}
            <Grid item xs={12} md={6}>
              <Typography fontSize={12} color="text.secondary" mb={0.5}>
                State
              </Typography>
              <TextField
                fullWidth
                size="small"
                defaultValue="Arizona"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px"
                  },
                  "& .MuiInputBase-input": {
                    color: "#667085"
                  }
                }}
              />
            </Grid>

            {/* Postal Code */}
            <Grid item xs={12} md={6}>
              <Typography fontSize={12} color="text.secondary" mb={0.5}>
                Postal Code
              </Typography>
              <TextField
                fullWidth
                size="small"
                defaultValue="ERT 2489"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px"
                  },
                  "& .MuiInputBase-input": {
                    color: "#667085"
                  }
                }}
              />
            </Grid>
          </Grid>
        </Box>
      </DialogContent>

      <Divider />

      {/* ACTION BUTTONS */}
      <DialogActions sx={{ px: 3, pb: 2 }}>
        <Button
          variant="contained"
          color="inherit"
          onClick={onClose}
          sx={{
            borderRadius: "10px",
            textTransform: "none",
            px: 3
          }}
        >
          Close
        </Button>

        <Button
          variant="contained"
          onClick={onSave}
          sx={{
            borderRadius: "10px",
            textTransform: "none",
            px: 3
          }}
        >
          Save Changes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditAddressInfo;

