import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Stack,
  Divider,
  Typography
} from "@mui/material";

/* TYPES */
export interface ShippingZoneForm {
  zone: string;
  states: string;
  baseRate: number;
  additionalRate: number;
  deliveryDays: string;
  codAvailable: string;
}

interface Props {
  open: boolean;
  onClose: () => void;
  onSave: (data: ShippingZoneForm) => void;
}

const inputStyle = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "8px",  
    "& fieldset": {
      borderColor: "#26619A"  
    },
    "&:hover fieldset": {
      borderColor: "#26619A"
    },
    "&.Mui-focused fieldset": {
      borderColor: "#1f4f7a"  
    }
  }
};

const AddShippingZone: React.FC<Props> = ({
  open,
  onClose,
  onSave
}) => {
  const [form, setForm] = useState({
    zone: "",
    states: "",
    baseRate: "",
    additionalRate: "",
    deliveryDays: "",
    codAvailable: ""
  });

  const handleChange =
    (key: string) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm({ ...form, [key]: e.target.value });
    };

  const handleSave = () => {
    onSave({
      zone: form.zone,
      states: form.states,
      baseRate: Number(form.baseRate),
      additionalRate: Number(form.additionalRate),
      deliveryDays: form.deliveryDays,
      codAvailable: form.codAvailable
    });
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle fontWeight={600}>
        Add Shipping Zone
      </DialogTitle>

      <Divider />

      <DialogContent sx={{ pt: 3 }}>
       
        <Stack spacing={2.5}>
             <Typography fontSize={13} mb={0.5}>
                 Zone Name </Typography>
          <TextField
             fullWidth
            value={form.zone}
            onChange={handleChange("zone")}
            sx={inputStyle}
          />
          <Typography fontSize={13} mb={0.5}>
                States
           </Typography>
          <TextField
             placeholder="Enter states separated by commas"
            fullWidth
            value={form.states}
            onChange={handleChange("states")}
            sx={inputStyle}
          />

           
          <Stack direction="row" spacing={2}>
            <Typography fontSize={13} mb={0.5}>
                       Base Rate (₹)
            </Typography>
            <TextField
              type="number"
              fullWidth
              value={form.baseRate}
              onChange={handleChange("baseRate")}
              sx={inputStyle}
            />
           <Typography fontSize={13} mb={0.5}>
                   Additional Rate (₹)
            </Typography>
            <TextField

               type="number"
              fullWidth
              value={form.additionalRate}
              onChange={handleChange("additionalRate")}
              sx={inputStyle}
            />
          </Stack>

          <Stack direction="row" spacing={2}>
            <Typography fontSize={13} mb={0.5}>
                       Delivery Days
             </Typography>
            <TextField
               placeholder="e.g. 3-5"
              fullWidth
              value={form.deliveryDays}
              onChange={handleChange("deliveryDays")}
              sx={inputStyle}
            />
            <Typography fontSize={13} mb={0.5}>
                      COD Available
             </Typography>
            <TextField
               placeholder="Yes / No"
              fullWidth
              value={form.codAvailable}
              onChange={handleChange("codAvailable")}
              sx={inputStyle}
            />
          </Stack>
        </Stack>
      </DialogContent>

      <DialogActions sx={{ p: 2.5 }}>
        <Button
          onClick={onClose}
          variant="contained"
          sx={{
            bgcolor: "#9fa8da",
            textTransform: "none",
            px: 3
          }}
        >
          Cancel
        </Button>

        <Button
          onClick={handleSave}
          variant="contained"
          sx={{
            bgcolor: "#26619A",
            textTransform: "none",
            px: 3
          }}
        >
          Save shipping zone
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddShippingZone;

 