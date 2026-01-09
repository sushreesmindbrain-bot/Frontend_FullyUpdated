import React, { useState } from "react";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";
import type { Agent } from "./types";

 

interface EditAgentProfileProps {
  onBack: () => void;
  agent?: Agent;
}

const EditAgentProfile: React.FC<EditAgentProfileProps> = ({ onBack, agent }) => {
  const [formData, setFormData] = useState({
    fullName: agent?.name ?? "Rajesh Kumar",
    email: agent?.email ?? "rajesh.kumar@email.com",
    phone: agent?.phone ?? "+91 98765 43210",
    address: "123 Main Street, Mumbai",
    city: "Mumbai",
    state: "Maharashtra",
    pincode: "400001",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        mt: 2,
      }}
    >
      <Paper elevation={3} sx={{ width: "100%", p: 4, borderRadius: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 3 }}>
          Edit Agent Profile
        </Typography>

        {/* FULL NAME + EMAIL IN ONE LINE */}
        <Box sx={{ display: "flex", gap: 3, mb: 3 }}>
          <Box sx={{ flex: 1 }}>
            <Typography sx={{ fontWeight: 600, fontSize: "14px", mb: 0.5 }}>
              Full Name
            </Typography>
            <TextField
              fullWidth
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
            />
          </Box>

          <Box sx={{ flex: 1 }}>
            <Typography sx={{ fontWeight: 600, fontSize: "14px", mb: 0.5 }}>
              Email Address
            </Typography>
            <TextField
              fullWidth
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </Box>
        </Box>

        {/* PHONE NUMBER */}
        <Box sx={{ mb: 3 }}>
          <Typography sx={{ fontWeight: 600, fontSize: "14px", mb: 0.5 }}>
            Phone Number
          </Typography>
          <TextField
            fullWidth
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </Box>

        {/* ADDRESS */}
        <Box sx={{ mb: 3 }}>
          <Typography sx={{ fontWeight: 600, fontSize: "14px", mb: 0.5 }}>
            Address
          </Typography>
          <TextField
            fullWidth
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </Box>

        {/* CITY + STATE + PINCODE IN ONE LINE */}
        <Box sx={{ display: "flex", gap: 3, mb: 3 }}>
          <Box sx={{ flex: 1 }}>
            <Typography sx={{ fontWeight: 600, fontSize: "14px", mb: 0.5 }}>
              City
            </Typography>
            <TextField
              fullWidth
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
          </Box>

          <Box sx={{ flex: 1 }}>
            <Typography sx={{ fontWeight: 600, fontSize: "14px", mb: 0.5 }}>
              State
            </Typography>
            <TextField
              fullWidth
              name="state"
              value={formData.state}
              onChange={handleChange}
            />
          </Box>

          <Box sx={{ flex: 1 }}>
            <Typography sx={{ fontWeight: 600, fontSize: "14px", mb: 0.5 }}>
              Pin Code
            </Typography>
            <TextField
              fullWidth
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
            />
          </Box>
        </Box>

        {/* BUTTONS */}
        <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2, mt: 4 }}>
             <Button
                   variant="contained"
                   onClick={onBack}
                   sx={{
                    
                    textTransform: "none",
                     bgcolor: "#A3AED0",
                     color: "#ffffff",
                     "&:hover": { bgcolor: "#A3AED0" },
                   }}
                 >
                   Back
                 </Button>
          <Button
            variant="contained"
            color="primary"
            sx={{ width: 150 ,textTransform: "none",}}
          >
            Save Changes
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default EditAgentProfile;
