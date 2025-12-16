import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  Button,
  Stack,
  Grid,
  TextField,
  MenuItem
} from "@mui/material";

import type { Page } from "./MainParent";

/* 🔹 PROPS */
interface Props {
  onTabChange: (tab: Page) => void;
}

const Localization: React.FC<Props> = ({ onTabChange }) => {
  const [language, setLanguage] = useState("English");

  return (
    <Box sx={{ p: 3, bgcolor: "#f6f8fb", minHeight: "100vh" }}>
      {/* 🔹 TOP TABS */}
      <Paper sx={{ p: 1.5, mb: 3 }}>
        <Stack direction="row" spacing={1}>
          <Button onClick={() => onTabChange("gst")}>GST & Taxes</Button>
          <Button onClick={() => onTabChange("shipping")}>Shipping & COD</Button>
          <Button onClick={() => onTabChange("payment")}>Payment Gateways</Button>
          <Button onClick={() => onTabChange("payout")}>Payout Bank</Button>
          <Button onClick={() => onTabChange("legal")}>Legal Content</Button>
          <Button variant="contained">Localization</Button>
        </Stack>
      </Paper>

      {/* 🔹 LOCALIZATION SETTINGS */}
      <Paper sx={{ p: 3 }}>
        <Typography fontWeight={600} mb={3}>
          Localization Settings
        </Typography>

        {/* 🔹 ROW 1 */}
        <Grid container spacing={3} mb={2}>
          <Grid item xs={12} md={4}>
            <Typography fontSize={13} mb={0.5}>
             Default Language
              </Typography>
            <TextField
              select
              fullWidth
               value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <MenuItem value="English">English</MenuItem>
              <MenuItem value="Hindi">Hindi</MenuItem>
              <MenuItem value="Tamil">Tamil</MenuItem>
              <MenuItem value="Telugu">Telugu</MenuItem>
            </TextField>
          </Grid>

          <Grid item xs={12} md={4}>
             <Typography fontSize={13} mb={0.5}>
              Default Currency
              </Typography>
            <TextField
              fullWidth
               value="Indian Rupee (₹)"
              disabled
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography fontSize={13} mb={0.5}>
              Repurchase Wallet (%)
              </Typography>
            <TextField
              fullWidth
               defaultValue={10}
            />
          </Grid>
        </Grid>

        {/* 🔹 ROW 2 */}
        <Grid container spacing={3} mb={2}>
          <Grid item xs={12} md={6}>
             <Typography fontSize={13} mb={0.5}>
              Date Format
              </Typography>
            <TextField
              fullWidth
              value="DD/MM/YYYY"
              disabled
            />
          </Grid>

          <Grid item xs={12} md={6}>
             <Typography fontSize={13} mb={0.5}>
               Time Zone
              </Typography>
            <TextField
              fullWidth
              value="India Standard Time (IST)"
              disabled
            />
          </Grid>
        </Grid>

        {/* 🔹 ROW 3 (BUTTON) */}
        <Grid container justifyContent="flex-end">
          <Button
            variant="contained"
            sx={{
              bgcolor: "#245e95",
              textTransform: "none"
            }}
          >
            Save Changes
          </Button>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Localization;
