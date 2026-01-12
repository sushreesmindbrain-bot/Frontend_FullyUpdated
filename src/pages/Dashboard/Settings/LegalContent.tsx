import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  Button,
  Stack,
  TextField,
  Divider
} from "@mui/material";
import type { Page } from "./MainParent";

/* 🔹 PROPS */
interface Props {
  onTabChange: (tab: Page) => void;
}

const LegalContent: React.FC<Props> = ({ onTabChange }) => {
  const [terms, setTerms] = useState(`1. Introduction
Welcome to HealthEarn. These terms and conditions outline the rules and regulations for the use of our website and mobile application.

2. Intellectual Property Rights
Other than the content you own, under these Terms, HealthEarn and/or its licensors own all the intellectual property rights and materials contained in this Website.

3. Restrictions
You are specifically restricted from all of the following:`);

  const [privacy, setPrivacy] = useState(`1. Introduction
Welcome to HealthEarn. These terms and conditions outline the rules and regulations for the use of our website and mobile application.

2. Intellectual Property Rights
Other than the content you own, under these Terms, HealthEarn and/or its licensors own all the intellectual property rights and materials contained in this Website.

3. Restrictions
You are specifically restricted from all of the following:`);

  const [refund, setRefund] = useState(`1. Cancellation Policy
Welcome to HealthEarn. These terms and conditions outline the rules and regulations for the use of our website and mobile application.

2. Intellectual Property Rights
Other than the content you own, under these Terms, HealthEarn and/or its licensors own all the intellectual property rights and materials contained in this Website.

3. Restrictions
You are specifically restricted from all of the following:`);

  return (
    <Box sx={{ p: 3, bgcolor: "#f6f8fb", minHeight: "100vh" }}>
      {/* ================= TOP TABS ================= */}
      <Paper
        sx={{
          px: 1,
          py: 1,
          mt: 2,
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

          {/* ACTIVE TAB */}
          <Button
            variant="contained"
            sx={{
              bgcolor: "#26619A",
              color: "#fff",
              textTransform: "none",
              "&:hover": { bgcolor: "#26619A" }
            }}
          >
            Legal Content
          </Button>

          <Button
            onClick={() => onTabChange("localization")}
            sx={{ textTransform: "none", color: "#000" }}
          >
            Localization
          </Button>
        </Stack>
      </Paper>

      {/* ================= LEGAL CONTENT ================= */}
      <Paper
        sx={{
          p: 3,
          "& .MuiInputBase-input": { color: "#26619A" }
        }}
      >
        <Typography fontWeight={600} mb={2} color="#26619A">
          Legal Content Management
        </Typography>

        <Divider sx={{ mb: 3, height: 2, bgcolor: "#CBD5E0" }} />

        <Typography fontWeight={500} mb={1} color="#000">
          Terms & Conditions
        </Typography>
        <TextField
          fullWidth
          multiline
          minRows={5}
          value={terms}
          onChange={(e) => setTerms(e.target.value)}
          sx={{ mb: 3 }}
        />

        <Typography fontWeight={500} mb={1} color="#000">
          Privacy Policy
        </Typography>
        <TextField
          fullWidth
          multiline
          minRows={5}
          value={privacy}
          onChange={(e) => setPrivacy(e.target.value)}
          sx={{ mb: 3 }}
        />

        <Typography fontWeight={500} mb={1} color="#000">
          Refund & Cancellation Policy
        </Typography>
        <TextField
          fullWidth
          multiline
          minRows={5}
          value={refund}
          onChange={(e) => setRefund(e.target.value)}
        />

        <Box display="flex" justifyContent="flex-end" mt={3}>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#26619A",
              color: "#fff",
              textTransform: "none",
              "&:hover": { bgcolor: "#26619A" }
            }}
          >
            Save Changes
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default LegalContent;
