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
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: "10px" 
        }
      }}
    >
      <DialogTitle>Edit Personal Information</DialogTitle>

      <Divider />

      <DialogContent>
        <Box mt={2}>
          <Grid container spacing={2}>
            {/* First Name */}
            <Grid item xs={12} md={6}>
              <Typography fontSize={12} color="text.secondary" mb={0.5}>
                First Name
              </Typography>
              <TextField
                fullWidth
                size="small"
                defaultValue="Moni"
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

            {/* Last Name */}
            <Grid item xs={12} md={6}>
              <Typography fontSize={12} color="text.secondary" mb={0.5}>
                Last Name
              </Typography>
              <TextField
                fullWidth
                size="small"
                defaultValue="Roy"
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

            {/* Email */}
            <Grid item xs={12} md={6}>
              <Typography fontSize={12} color="text.secondary" mb={0.5}>
                Email Address
              </Typography>
              <TextField
                fullWidth
                size="small"
                defaultValue="moniroy123@gmail.com"
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

            {/* Phone */}
            <Grid item xs={12} md={6}>
              <Typography fontSize={12} color="text.secondary" mb={0.5}>
                Phone
              </Typography>
              <TextField
                fullWidth
                size="small"
                defaultValue="+0936339846"
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

            {/* BIO — FULL WIDTH BELOW */}
            <Grid item xs={12}>
              <Typography fontSize={12} color="text.secondary" mb={0.5}>
                Bio
              </Typography>
              <TextField
                fullWidth
                size="small"
                defaultValue="Admin"
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
    Close
  </Button>

  <Button
    onClick={onSave}
    variant="contained"
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

export default EditProfileInfo;
