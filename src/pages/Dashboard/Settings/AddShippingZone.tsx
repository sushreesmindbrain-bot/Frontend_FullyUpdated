 



// import React, { useState } from "react";
// import {
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   TextField,
//   Button,
//   Stack,
//   Divider
// } from "@mui/material";

// /* TYPES */
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

// const AddShippingZone: React.FC<Props> = ({
//   open,
//   onClose,
//   onSave
// }) => {
//   const [form, setForm] = useState({
//     zone: "",
//     states: "",
//     baseRate: "",
//     additionalRate: "",
//     deliveryDays: "",
//     codAvailable: ""
//   });

//   const handleChange =
//     (key: string) =>
//     (e: React.ChangeEvent<HTMLInputElement>) => {
//       setForm({ ...form, [key]: e.target.value });
//     };

//   const handleSave = () => {
//     onSave({
//       zone: form.zone,
//       states: form.states,
//       baseRate: Number(form.baseRate),
//       additionalRate: Number(form.additionalRate),
//       deliveryDays: form.deliveryDays,
//       codAvailable: form.codAvailable
//     });
//     onClose();
//   };

//   return (
//     <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
//       <DialogTitle fontWeight={600}>
//         Add Shipping Zone
//       </DialogTitle>

//       <Divider />

//       <DialogContent sx={{ pt: 3 }}>
//         {/* ✅ GUARANTEED ONE FIELD PER LINE */}
//         <Stack spacing={2.5}>
//           <TextField
//             label="Zone Name"
//             fullWidth
//             value={form.zone}
//             onChange={handleChange("zone")}
//           />

//           <TextField
//             label="States"
//             placeholder="Enter states separated by commas"
//             fullWidth
//             value={form.states}
//             onChange={handleChange("states")}
//           />

//           {/* 2 columns */}
//           <Stack direction="row" spacing={2}>
//             <TextField
//               label="Base Rate (₹)"
//               type="number"
//               fullWidth
//               value={form.baseRate}
//               onChange={handleChange("baseRate")}
//             />

//             <TextField
//               label="Additional Rate (₹)"
//               type="number"
//               fullWidth
//               value={form.additionalRate}
//               onChange={handleChange("additionalRate")}
//             />
//           </Stack>

//           <Stack direction="row" spacing={2}>
//             <TextField
//               label="Delivery Days"
//               placeholder="e.g. 3-5"
//               fullWidth
//               value={form.deliveryDays}
//               onChange={handleChange("deliveryDays")}
//             />

//             <TextField
//               label="COD Available"
//               placeholder="Yes / No"
//               fullWidth
//               value={form.codAvailable}
//               onChange={handleChange("codAvailable")}
//             />
//           </Stack>
//         </Stack>
//       </DialogContent>

//       <DialogActions sx={{ p: 2.5 }}>
//         <Button
//           onClick={onClose}
//           variant="contained"
//           sx={{ bgcolor: "#9fa8da", textTransform: "none", px: 3 }}
//         >
//           Cancel
//         </Button>

//         <Button
//           onClick={handleSave}
//           variant="contained"
//           sx={{ bgcolor: "#245e95", textTransform: "none", px: 3 }}
//         >
//           Save shipping zone
//         </Button>
//       </DialogActions>
//     </Dialog>
//   );
// };

// export default AddShippingZone;


 import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Stack,
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

const inputStyle = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "8px", // ✅ curved
    "& fieldset": {
      borderColor: "#26619A" // default blue
    },
    "&:hover fieldset": {
      borderColor: "#26619A"
    },
    "&.Mui-focused fieldset": {
      borderColor: "#1f4f7a" // darker blue on focus
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
        {/* ✅ ONE FIELD PER LINE */}
        <Stack spacing={2.5}>
          <TextField
            label="Zone Name"
            fullWidth
            value={form.zone}
            onChange={handleChange("zone")}
            sx={inputStyle}
          />

          <TextField
            label="States"
            placeholder="Enter states separated by commas"
            fullWidth
            value={form.states}
            onChange={handleChange("states")}
            sx={inputStyle}
          />

          {/* Two fields in one row */}
          <Stack direction="row" spacing={2}>
            <TextField
              label="Base Rate (₹)"
              type="number"
              fullWidth
              value={form.baseRate}
              onChange={handleChange("baseRate")}
              sx={inputStyle}
            />

            <TextField
              label="Additional Rate (₹)"
              type="number"
              fullWidth
              value={form.additionalRate}
              onChange={handleChange("additionalRate")}
              sx={inputStyle}
            />
          </Stack>

          <Stack direction="row" spacing={2}>
            <TextField
              label="Delivery Days"
              placeholder="e.g. 3-5"
              fullWidth
              value={form.deliveryDays}
              onChange={handleChange("deliveryDays")}
              sx={inputStyle}
            />

            <TextField
              label="COD Available"
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

 