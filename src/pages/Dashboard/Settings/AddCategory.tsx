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
  InputLabel
} from "@mui/material";

interface AddCategoryProps {
  open: boolean;
  onClose: () => void;
  onSave: (data: { category: string; rate: number }) => void;
}

const categories = [
  "Health Supplements",
  "Personal Care",
  "Health Devices",
  "Electronics",
  "Groceries"
];

const AddCategory: React.FC<AddCategoryProps> = ({ open, onClose, onSave }) => {
  const [category, setCategory] = useState("");
  const [rate, setRate] = useState<number | "">("");

  const handleSave = () => {
    if (!category || rate === "") return;
    onSave({ category, rate: Number(rate) });
    setCategory("");
    setRate("");
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ fontWeight: 600 }}>
        Add Category GST
      </DialogTitle>

      <DialogContent sx={{ pt: 2 }}>
        <Box mb={2}>
          <Typography variant="body2" mb={0.5}>
            Category
          </Typography>
          <FormControl fullWidth>
            <InputLabel>Select Category</InputLabel>
            <Select
              value={category}
              label="Select Category"
              onChange={(e) => setCategory(e.target.value)}
            >
              {categories.map((c) => (
                <MenuItem key={c} value={c}>
                  {c}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <Box>
          <Typography variant="body2" mb={0.5}>
            Tax Rate (%)
          </Typography>
          <TextField
            fullWidth
            type="number"
            placeholder="0"
            value={rate}
            onChange={(e) => setRate(e.target.value === "" ? "" : Number(e.target.value))}
          />
        </Box>
      </DialogContent>

      <DialogActions sx={{ p: 2 }}>
        <Button
          onClick={onClose}
          variant="contained"
          sx={{ bgcolor: "#9fa8da", color: "white" }}
        >
          Cancel
        </Button>
        <Button
          onClick={handleSave}
          variant="contained"
          sx={{ bgcolor: "#245e95" }}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddCategory;
