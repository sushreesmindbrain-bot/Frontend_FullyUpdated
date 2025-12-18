import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
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
  const fieldStyle = {
    "& .MuiOutlinedInput-root": { borderRadius: "10px" },
    "& .MuiInputBase-input": { color: "#667085" }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      sx={{
        "& .MuiPaper-root": { borderRadius: "12px" }
      }}
    >
      <DialogTitle>Edit Address</DialogTitle>

      <Divider />

      <DialogContent>
        <Box mt={2} display="flex" flexWrap="wrap" gap={2}>
          {/* Country */}
          <Box flex={{ xs: "1 1 100%", md: "1 1 calc(50% - 8px)" }}>
            <Typography fontSize={12} color="text.secondary" mb={0.5}>
              Country
            </Typography>
            <TextField fullWidth size="small" defaultValue="United States" sx={fieldStyle} />
          </Box>

          {/* City */}
          <Box flex={{ xs: "1 1 100%", md: "1 1 calc(50% - 8px)" }}>
            <Typography fontSize={12} color="text.secondary" mb={0.5}>
              City
            </Typography>
            <TextField fullWidth size="small" defaultValue="Phoenix" sx={fieldStyle} />
          </Box>

          {/* State */}
          <Box flex={{ xs: "1 1 100%", md: "1 1 calc(50% - 8px)" }}>
            <Typography fontSize={12} color="text.secondary" mb={0.5}>
              State
            </Typography>
            <TextField fullWidth size="small" defaultValue="Arizona" sx={fieldStyle} />
          </Box>

          {/* Postal Code */}
          <Box flex={{ xs: "1 1 100%", md: "1 1 calc(50% - 8px)" }}>
            <Typography fontSize={12} color="text.secondary" mb={0.5}>
              Postal Code
            </Typography>
            <TextField fullWidth size="small" defaultValue="ERT 2489" sx={fieldStyle} />
          </Box>
        </Box>
      </DialogContent>

      <Divider />

      <DialogActions sx={{ px: 3, pb: 2 }}>
        <Button
          variant="contained"
          color="inherit"
          onClick={onClose}
          sx={{ borderRadius: "10px", textTransform: "none", px: 3 }}
        >
          Close
        </Button>

        <Button
          variant="contained"
          onClick={onSave}
          sx={{ borderRadius: "10px", textTransform: "none", px: 3 }}
        >
          Save Changes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditAddressInfo;
