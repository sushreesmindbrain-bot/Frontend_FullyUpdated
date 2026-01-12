import React, { useState } from "react";
import {
  Box,
  Typography,
  RadioGroup,
  Radio,
  FormControlLabel,
  TextField,
  Button,
  Divider,
} from "@mui/material";

import type { Agent } from "./types";

interface SuspendPageProps {
  agent?: Agent;
  agentName?: string;
  agentCode?: string;
  onCancel: () => void;
  onConfirm?: (reason: string, notes: string) => void;
}

const SuspendPage: React.FC<SuspendPageProps> = ({
  agent,
  agentName,
  agentCode,
  onCancel,
  onConfirm,
}) => {
  const name = agentName || agent?.name || "";
  const code = agentCode || agent?.code || agent?.id || "";
  const [reason, setReason] = useState("");
  const [notes, setNotes] = useState("");

  return (
    <Box sx={{ width: "100%", p: 3 }}>
      {/* ------------ HEADER ------------- */}
      <Typography
        sx={{ fontSize: "20px", fontWeight: 700, display: "flex", gap: 1 }}
      >
        🚫 Suspend Agent Account
      </Typography>

      <Typography sx={{ color: "#666", mt: 0.5 }}>
        Suspend {name} ({code})
      </Typography>

      <Divider sx={{ my: 2 }} />

      {/* ------------ REASONS ------------- */}
      <Typography sx={{ fontWeight: 600, mb: 1 }}>
        Suspension Reason
      </Typography>

      <RadioGroup value={reason} onChange={(e) => setReason(e.target.value)}>
        <FormControlLabel
          value="Violation of terms and conditions"
          control={<Radio />}
          label="Violation of terms and conditions"
        />
        <FormControlLabel
          value="Fraudulent activity"
          control={<Radio />}
          label="Fraudulent activity"
        />
        <FormControlLabel
          value="Multiple customer complaints"
          control={<Radio />}
          label="Multiple customer complaints"
        />
        <FormControlLabel
          value="Misrepresentation of products"
          control={<Radio />}
          label="Misrepresentation of products"
        />
        <FormControlLabel
          value="Non-compliance with policies"
          control={<Radio />}
          label="Non-compliance with policies"
        />
        <FormControlLabel
          value="Other"
          control={<Radio />}
          label="Other (specify below)"
        />
      </RadioGroup>

      {/* ------------ NOTES ------------- */}
      <Typography sx={{ fontWeight: 600, mt: 2, mb: 1 }}>
        Additional Notes
      </Typography>

      <TextField
        multiline
        minRows={3}
        placeholder="Provide detailed information about the suspension..."
        fullWidth
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />

      {/* ------------ FOOTER BUTTONS ------------- */}
      <Box
        sx={{
          borderTop: "1px solid #A3AED0",
          pt: 2,
          display: "flex",
          justifyContent: "flex-end",
          mt: 3,
          gap: 2,
        }}
      >
        <Button
          variant="contained"
          sx={{
            textTransform: "none",
            width: 120,
            bgcolor: "#A3AED0",
            color: "#ffffff",
            "&:hover": { bgcolor: "#A3AED0" },
          }}
          onClick={onCancel}
        >
          Cancel
        </Button>

        <Button
          variant="contained"
          color="error"
          sx={{
            textTransform: "none",
            bgcolor: "#FF0000" 
          }}
          onClick={() => onConfirm?.(reason, notes)}
        >
          Confirm Suspension
        </Button>
      </Box>
    </Box>
  );
};

export default SuspendPage;
