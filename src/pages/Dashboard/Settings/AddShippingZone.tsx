import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Grid,
  Typography,
  Divider
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

const AddShippingZone: React.FC<Props> = ({ open, onClose, onSave }) => {
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
        <Grid container spacing={2.5}>
          {/* Zone Name */}
          <Grid item xs={12}>
            <Typography fontSize={13} mb={0.5}>
              Zone Name
            </Typography>
            <TextField
              fullWidth
              value={form.zone}
              onChange={handleChange("zone")}
            />
          </Grid>

          {/* States */}
          <Grid item xs={12}>
            <Typography fontSize={13} mb={0.5}>
              States
            </Typography>
            <TextField
              fullWidth
              placeholder="Enter states separated by commas"
              value={form.states}
              onChange={handleChange("states")}
            />
          </Grid>

          {/* Base + Additional Rate */}
          <Grid item xs={6}>
            <Typography fontSize={13} mb={0.5}>
              Base Rate (₹)
            </Typography>
            <TextField
              fullWidth
              type="number"
              value={form.baseRate}
              onChange={handleChange("baseRate")}
            />
          </Grid>

          <Grid item xs={6}>
            <Typography fontSize={13} mb={0.5}>
              Additional Rate (₹)
            </Typography>
            <TextField
              fullWidth
              type="number"
              value={form.additionalRate}
              onChange={handleChange("additionalRate")}
            />
          </Grid>

          {/* Delivery + COD */}
          <Grid item xs={6}>
            <Typography fontSize={13} mb={0.5}>
              Delivery Days
            </Typography>
            <TextField
              fullWidth
              placeholder="e.g. 3-5"
              value={form.deliveryDays}
              onChange={handleChange("deliveryDays")}
            />
          </Grid>

          <Grid item xs={6}>
            <Typography fontSize={13} mb={0.5}>
              COD Available
            </Typography>
            <TextField
              fullWidth
              placeholder="e.g. Yes"
              value={form.codAvailable}
              onChange={handleChange("codAvailable")}
            />
          </Grid>
        </Grid>
      </DialogContent>

      <DialogActions sx={{ p: 2.5 }}>
        <Button
          onClick={onClose}
          variant="contained"
          sx={{ bgcolor: "#9fa8da", textTransform: "none", px: 3 }}
        >
          Cancel
        </Button>

        <Button
          onClick={handleSave}
          variant="contained"
          sx={{ bgcolor: "#245e95", textTransform: "none", px: 3 }}
        >
          Save shipping zone
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddShippingZone;




 
// import React, { useState } from "react";
// import {
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   TextField,
//   Button,
//   Grid,
//   Box
// } from "@mui/material";

// /* ✅ EXPORTED TYPE (IMPORTANT) */
// export interface ShippingZoneForm {
//   zone: string;
//   states: string;
//   baseRate: number;
//   additionalRate: number;
//   deliveryDays: string;
//   codAvailable: string;
// }

// interface Props {
//   open: boolean;
//   onClose: () => void;
//   onSave: (data: ShippingZoneForm) => void;
// }

// const AddShippingZone: React.FC<Props> = ({ open, onClose, onSave }) => {
//   const [form, setForm] = useState<ShippingZoneForm>({
//     zone: "",
//     states: "",
//     baseRate: 0,
//     additionalRate: 0,
//     deliveryDays: "",
//     codAvailable: ""
//   });

//   const handleChange =
//     (key: keyof ShippingZoneForm) =>
//     (e: React.ChangeEvent<HTMLInputElement>) => {
//       setForm({ ...form, [key]: e.target.value as any });
//     };

//   const handleSave = () => {
//     onSave({
//       ...form,
//       baseRate: Number(form.baseRate),
//       additionalRate: Number(form.additionalRate)
//     });
//     onClose();
//   };

//   return (
//     <Dialog
//       open={open}
//       onClose={onClose}
//       maxWidth="sm"
//       fullWidth
//       PaperProps={{ sx: { borderRadius: 3 } }}
//     >
//       {/* 🔹 TITLE */}
//       <DialogTitle sx={{ fontWeight: 600 }}>
//         Add Shipping Zone
//       </DialogTitle>

//       {/* 🔹 CONTENT */}
//       <DialogContent>
//         <Box mt={1}>
//           <Grid container spacing={2}>
//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 label="Zone Name"
//                 value={form.zone}
//                 onChange={handleChange("zone")}
//               />
//             </Grid>

//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 label="States"
//                 placeholder="Enter states separated by commas"
//                 value={form.states}
//                 onChange={handleChange("states")}
//               />
//             </Grid>

//             <Grid item xs={6}>
//               <TextField
//                 fullWidth
//                 label="Base Rate (₹)"
//                 type="number"
//                 value={form.baseRate}
//                 onChange={handleChange("baseRate")}
//               />
//             </Grid>

//             <Grid item xs={6}>
//               <TextField
//                 fullWidth
//                 label="Additional Rate (₹)"
//                 type="number"
//                 value={form.additionalRate}
//                 onChange={handleChange("additionalRate")}
//               />
//             </Grid>

//             <Grid item xs={6}>
//               <TextField
//                 fullWidth
//                 label="Delivery Days"
//                 placeholder="e.g. 3-5"
//                 value={form.deliveryDays}
//                 onChange={handleChange("deliveryDays")}
//               />
//             </Grid>

//             <Grid item xs={6}>
//               <TextField
//                 fullWidth
//                 label="COD Available"
//                 placeholder="e.g. Yes"
//                 value={form.codAvailable}
//                 onChange={handleChange("codAvailable")}
//               />
//             </Grid>
//           </Grid>
//         </Box>
//       </DialogContent>

//       {/* 🔹 ACTION BUTTONS */}
//       <DialogActions sx={{ p: 2, justifyContent: "flex-end", gap: 1 }}>
//         <Button
//           onClick={onClose}
//           variant="contained"
//           sx={{
//             bgcolor: "#9fa8da",
//             color: "#fff",
//             textTransform: "none",
//             px: 3,
//             "&:hover": { bgcolor: "#8c96c9" }
//           }}
//         >
//           Cancel
//         </Button>

//         <Button
//           onClick={handleSave}
//           variant="contained"
//           sx={{
//             bgcolor: "#245e95",
//             textTransform: "none",
//             px: 3,
//             "&:hover": { bgcolor: "#1d4f7d" }
//           }}
//         >
//           Save shipping zone
//         </Button>
//       </DialogActions>
//     </Dialog>
//   );
// };

// export default AddShippingZone;
