import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
  Typography,
  TextField,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Divider
} from "@mui/material";

/* ---------- PROPS ---------- */
interface AddCategoryProps {
  open: boolean;
  onClose: () => void;
  onSave: (data: { category: string; rate: number }) => void;
}

/* ---------- CATEGORY OPTIONS ---------- */
const categories = [
  "Health Supplements",
  "Personal Care",
  "Health Devices",
  "Electronics",
  "Groceries"
];

/* ---------- SHARED INPUT STYLE ---------- */
const inputStyle = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "10px",
    "& fieldset": {
      borderColor: "#26619A"
    },
    "&:hover fieldset": {
      borderColor: "#26619A"
    },
    "&.Mui-focused fieldset": {
      borderColor: "#1f4f7a"
    }
  },
  "& .MuiInputBase-input": {
    color: "#667085"
  }
};

const AddCategory: React.FC<AddCategoryProps> = ({
  open,
  onClose,
  onSave
}) => {
  const [category, setCategory] = useState("");
  const [rate, setRate] = useState<number | "">("");

  const handleSave = () => {
    if (!category || rate === "") return;

    onSave({
      category,
      rate: Number(rate)
    });

    setCategory("");
    setRate("");
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      sx={{
        "& .MuiPaper-root": {
          borderRadius: "12px"
        }
      }}
    >
      {/* ---------- TITLE ---------- */}
      <DialogTitle fontWeight={600} color="#26619A">
        Add Category GST
      </DialogTitle>

      <Divider />

      {/* ---------- CONTENT ---------- */}
      <DialogContent sx={{ pt: 3 }}>
        {/* CATEGORY */}
        <Box mb={2.5}>
          <Typography fontSize={13} mb={0.5} color="#26619A">
            Category
          </Typography>

          <FormControl fullWidth>
            <InputLabel>Select Category</InputLabel>
            <Select
              value={category}
              label="Select Category"
              onChange={(e) => setCategory(e.target.value)}
              sx={inputStyle}
            >
              {categories.map((c) => (
                <MenuItem key={c} value={c}>
                  {c}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        {/* TAX RATE */}
        <Box>
          <Typography fontSize={13} mb={0.5} color="#26619A">
            Tax Rate (%)
          </Typography>
          <TextField
            fullWidth
            size="small"
            type="number"
            placeholder="0"
            value={rate}
            onChange={(e) =>
              setRate(e.target.value === "" ? "" : Number(e.target.value))
            }
            sx={inputStyle}
          />
        </Box>
      </DialogContent>

      <Divider />

      {/* ---------- ACTIONS ---------- */}
      <DialogActions sx={{ px: 3, pb: 2 }}>
        {/* CANCEL BUTTON */}
        <Button
          onClick={onClose}
          variant="outlined"
          sx={{ color: "#979797", borderColor: "#979797", borderRadius: "10px", textTransform: "none", px: 3, "&:hover": { borderColor: "#979797" } }}
        >
          Cancel
        </Button>

        {/* SAVE BUTTON */}
        <Button
          onClick={handleSave}
          variant="contained"
          sx={{
            bgcolor: "#26619A",
            "&:hover": {
              bgcolor: "#1f4f7a"
            },
            borderRadius: "10px",
            textTransform: "none",
            px: 3
          }}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddCategory;

