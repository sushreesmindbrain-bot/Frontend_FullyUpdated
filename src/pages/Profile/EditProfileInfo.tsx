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

interface EditProfileInfoProps {
  open: boolean;
  onClose: () => void;
  onSave: () => void;
}

const EditProfileInfo: React.FC<EditProfileInfoProps> = ({
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
      PaperProps={{
        sx: { borderRadius: "10px" }
      }}
    >
      <DialogTitle>Edit Personal Information</DialogTitle>

      <Divider />

      <DialogContent>
        <Box mt={2} display="flex" flexWrap="wrap" gap={2}>
          {/* First Name */}
          <Box flex={{ xs: "1 1 100%", md: "1 1 calc(50% - 8px)" }}>
            <Typography fontSize={12} color="text.secondary" mb={0.5}>
              First Name
            </Typography>
            <TextField fullWidth size="small" defaultValue="Moni" sx={fieldStyle} />
          </Box>

          {/* Last Name */}
          <Box flex={{ xs: "1 1 100%", md: "1 1 calc(50% - 8px)" }}>
            <Typography fontSize={12} color="text.secondary" mb={0.5}>
              Last Name
            </Typography>
            <TextField fullWidth size="small" defaultValue="Roy" sx={fieldStyle} />
          </Box>

          {/* Email */}
          <Box flex={{ xs: "1 1 100%", md: "1 1 calc(50% - 8px)" }}>
            <Typography fontSize={12} color="text.secondary" mb={0.5}>
              Email Address
            </Typography>
            <TextField
              fullWidth
              size="small"
              defaultValue="moniroy123@gmail.com"
              sx={fieldStyle}
            />
          </Box>

          {/* Phone */}
          <Box flex={{ xs: "1 1 100%", md: "1 1 calc(50% - 8px)" }}>
            <Typography fontSize={12} color="text.secondary" mb={0.5}>
              Phone
            </Typography>
            <TextField fullWidth size="small" defaultValue="+0936339846" sx={fieldStyle} />
          </Box>

          {/* Bio — full width */}
          <Box flex="1 1 100%">
            <Typography fontSize={12} color="text.secondary" mb={0.5}>
              Bio
            </Typography>
            <TextField fullWidth size="small" defaultValue="Admin" sx={fieldStyle} />
          </Box>
        </Box>
      </DialogContent>

      <Divider />

      <DialogActions sx={{ px: 3, pb: 2 }}>
        <Button
          onClick={onClose}
          variant="contained"
          color="inherit"
          sx={{ borderRadius: "10px", textTransform: "none", px: 3 }}
        >
          Close
        </Button>

        <Button
          onClick={onSave}
          variant="contained"
          sx={{ borderRadius: "10px", textTransform: "none", px: 3 }}
        >
          Save Changes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditProfileInfo;
