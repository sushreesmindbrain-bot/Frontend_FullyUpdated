import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  Button,
  Stack,
  TextField,
  MenuItem,
} from "@mui/material";

import type { Page } from "./MainParent";

/* 🔹 PROPS */
interface Props {
  onTabChange: (tab: Page) => void;
}

/* 🔹 SHARED INPUT STYLE */
const inputStyle = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "10px",
    "& fieldset": {
      borderColor: "#26619A",
    },
    "&:hover fieldset": {
      borderColor: "#26619A",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#1f4f7a",
    },
  },
  "& .MuiInputBase-input": {
    color: "#667085",
  },
};

const Localization: React.FC<Props> = ({ onTabChange }) => {
  const [language, setLanguage] = useState<string>("English");

  return (
    <Box sx={{ p: 3, bgcolor: "#f6f8fb", minHeight: "100vh" }}>
      {/* 🔹 TOP TABS (Shipping page style) */}
      <Paper
        sx={{
          px: 1,
          py: 1,
          mb: 3,
          width: "fit-content",
          display: "inline-flex",
          borderRadius: "12px",
        }}
      >
        <Stack direction="row" spacing={1}>
          <Button
            onClick={() => onTabChange("gst")}
            sx={{ textTransform: "none", color: "#000" }}
          >
            GST & Taxes
          </Button>
          <Button
            onClick={() => onTabChange("shipping")}
            sx={{ textTransform: "none", color: "#000" }}
          >
            Shipping & COD
          </Button>
          <Button
            onClick={() => onTabChange("payment")}
            sx={{ textTransform: "none", color: "#000" }}
          >
            Payment Gateways
          </Button>
          <Button
            onClick={() => onTabChange("payout")}
            sx={{ textTransform: "none", color: "#000" }}
          >
            Payout Bank
          </Button>
          <Button
            onClick={() => onTabChange("legal")}
            sx={{ textTransform: "none", color: "#000" }}
          >
            Legal Content
          </Button>

          {/* Localization Tab: Active */}
          <Button
            variant="contained"
            sx={{
              bgcolor: "#26619A",
              color: "#fff",
              textTransform: "none",
              "&:hover": { bgcolor: "#26619A" },
            }}
          >
            Localization
          </Button>
        </Stack>
      </Paper>

      {/* 🔹 LOCALIZATION SETTINGS */}
      <Paper sx={{ p: 3, borderRadius: "12px" }}>
        <Typography fontWeight={600} mb={3} color="#000">
          Localization Settings
        </Typography>

        {/* 🔹 ROW 1 */}
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3, mb: 3 }}>
          <Box sx={{ flex: "1 1 300px" }}>
            <Typography fontSize={13} mb={0.5}>
              Default Language
            </Typography>
            <TextField
              select
              fullWidth
              size="small"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              sx={inputStyle}
            >
              <MenuItem value="English">English</MenuItem>
              <MenuItem value="Hindi">Hindi</MenuItem>
              <MenuItem value="Tamil">Tamil</MenuItem>
              <MenuItem value="Telugu">Telugu</MenuItem>
            </TextField>
          </Box>

          <Box sx={{ flex: "1 1 300px" }}>
            <Typography fontSize={13} mb={0.5}>
              Default Currency
            </Typography>
            <TextField
              fullWidth
              size="small"
              value="Indian Rupee (₹)"
              disabled
              sx={inputStyle}
            />
          </Box>

          <Box sx={{ flex: "1 1 300px" }}>
            <Typography fontSize={13} mb={0.5}>
              Repurchase Wallet (%)
            </Typography>
            <TextField fullWidth size="small" defaultValue={10} sx={inputStyle} />
          </Box>
        </Box>

        {/* 🔹 ROW 2 */}
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3, mb: 3 }}>
          <Box sx={{ flex: "1 1 400px" }}>
            <Typography fontSize={13} mb={0.5}>
              Date Format
            </Typography>
            <TextField
              fullWidth
              size="small"
              value="DD/MM/YYYY"
              disabled
              sx={inputStyle}
            />
          </Box>

          <Box sx={{ flex: "1 1 400px" }}>
            <Typography fontSize={13} mb={0.5}>
              Time Zone
            </Typography>
            <TextField
              fullWidth
              size="small"
              value="India Standard Time (IST)"
              disabled
              sx={inputStyle}
            />
          </Box>
        </Box>

        {/* 🔹 SAVE BUTTON */}
        <Box display="flex" justifyContent="flex-end">
          <Button
            variant="contained"
            sx={{
              bgcolor: "#26619A",
              color: "#fff",
              borderRadius: "10px",
              textTransform: "none",
              px: 3,
              "&:hover": { bgcolor: "#26619A" },
            }}
          >
            Save Changes
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Localization;


