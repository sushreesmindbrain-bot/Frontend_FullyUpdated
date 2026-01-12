import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  Grid,
  TextField,
  Switch,
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Stack,
  Divider,
  Pagination
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import AddShippingZone from "./AddShippingZone";
import type { ShippingZoneForm } from "./AddShippingZone";
import type { Page } from "./MainParent";

interface Props {
  onTabChange: (tab: Page) => void;
}

const initialZones: ShippingZoneForm[] = [
  {
    zone: "North Zone",
    states: "Delhi, Haryana, Punjab.....",
    baseRate: 60,
    additionalRate: 10,
    deliveryDays: "3-5",
    codAvailable: "Yes"
  },
  {
    zone: "South Zone",
    states: "Tamil Nadu, Karnataka.....",
    baseRate: 80,
    additionalRate: 15,
    deliveryDays: "4-6",
    codAvailable: "Yes"
  },
  {
    zone: "East Zone",
    states: "Maharashtra, Karnataka.....",
    baseRate: 90,
    additionalRate: 15,
    deliveryDays: "5-7",
    codAvailable: "Yes"
  }
];

const Shipping: React.FC<Props> = ({ onTabChange }) => {
  const [zones, setZones] = useState(initialZones);
  const [openAdd, setOpenAdd] = useState(false);
  const [codEnabled, setCodEnabled] = useState(true);

  const handleAdd = (data: ShippingZoneForm) => {
    setZones((prev) => [...prev, data]);
  };

  return (
    <Box sx={{ p: 3, bgcolor: "#f6f8fb", minHeight: "100vh" }}>

      {/* 🔹 TOP TABS (ONLY WIDTH FIXED) */}
      <Paper
        sx={{
          px: 1,
          py: 1,
          mt: 2,
          mb: 3,
          width: "fit-content",
          display: "inline-flex",
          borderRadius: "12px"
        }}
      >
        <Stack direction="row" spacing={1}>
          <Button onClick={() => onTabChange("gst")} sx={{ textTransform: "none", color: "#000" }}>
            GST & Taxes
          </Button>

          <Button
            variant="contained"
            sx={{
              bgcolor: "#26619A",
              color: "#fff",
              textTransform: "none",
              "&:hover": { bgcolor: "#26619A" }
            }}
          >
            Shipping & COD
          </Button>

          <Button onClick={() => onTabChange("payment")} sx={{ textTransform: "none", color: "#000" }}>
            Payment Gateways
          </Button>

          <Button onClick={() => onTabChange("payout")} sx={{ textTransform: "none", color: "#000" }}>
            Payout Bank
          </Button>

          <Button onClick={() => onTabChange("legal")} sx={{ textTransform: "none", color: "#000" }}>
            Legal Content
          </Button>

          <Button onClick={() => onTabChange("localization")} sx={{ textTransform: "none", color: "#000" }}>
            Localization
          </Button>
        </Stack>
      </Paper>

      {/* 🔹 SHIPPING SETTINGS */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography fontWeight={400} mb={2} sx={{ color: "#26619A" }}>
          Shipping Zones & COD Rules
        </Typography>

        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography fontSize={14} mb={0.5}>
              Free Shipping Threshold (₹)
            </Typography>
            <TextField fullWidth defaultValue={999} />
            <Typography fontSize={12} sx={{ color: "#26619A" }}>
              Orders above this amount will qualify for free shipping
            </Typography>
          </Grid>

          <Grid size={14}>
            <Typography fontWeight={500} mb={1} sx={{ color: "#26619A" }}>
              Enable Cash on Delivery (COD)
            </Typography>
            <Switch checked={codEnabled} onChange={(e) => setCodEnabled(e.target.checked)} />
            <Typography fontSize={14} sx={{ color: "#26619A" }}>
              Enable COD
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Typography fontSize={14} mb={0.5}>
              COD Maximum Order Value (₹)
            </Typography>
            <TextField fullWidth defaultValue={5000} />
            <Typography fontSize={12} sx={{ color: "#26619A" }}>
              COD will not be available for orders above this amount
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Typography fontSize={14} mb={0.5}>
              COD Additional Charge (₹)
            </Typography>
            <TextField fullWidth defaultValue={50} />
            <Typography fontSize={12} sx={{ color: "#26619A" }}>
              Additional charge for COD orders
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3 }} />

        <Box display="flex" justifyContent="flex-end" gap={1}>
          <Button variant="contained" sx={{ bgcolor: "#CBD5E0", color: "#1F2937" }}>
            Clear
          </Button>
          <Button variant="contained" sx={{ bgcolor: "#26619A" }}>
            Save Shipping Setting
          </Button>
        </Box>
      </Paper>

      {/* 🔹 SHIPPING ZONES TABLE */}
      <Paper sx={{ p: 3 }}>
        <Box display="flex" justifyContent="space-between" mb={2}>
          <Typography fontWeight={600}>Shipping Zones & Rates</Typography>

          <Button variant="contained" startIcon={<AddIcon />} onClick={() => setOpenAdd(true)} sx={{ bgcolor: "#26619A" }}>
            Add Shipping Zone
          </Button>
        </Box>

        <Table>
          <TableHead>
            <TableRow sx={{ bgcolor: "#26619A" }}>
              {["Zone Name", "States", "Base Rate (₹)", "Additional Rate (₹)", "Delivery Days", "COD Available", "Actions"].map((head) => (
                <TableCell key={head} sx={{ color: "#fff", fontSize: 13 }}>
                  <Box display="flex" alignItems="center" gap={0.5}>
                    {head}
                    {head !== "Actions" && (
                      <>
                        <ArrowUpwardIcon sx={{ fontSize: 14 }} />
                        <ArrowDownwardIcon sx={{ fontSize: 14 }} />
                      </>
                    )}
                  </Box>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {zones.map((row, i) => (
              <TableRow key={i}>
                <TableCell>{row.zone}</TableCell>
                <TableCell>{row.states}</TableCell>
                <TableCell>{row.baseRate}</TableCell>
                <TableCell>{row.additionalRate}</TableCell>
                <TableCell>{row.deliveryDays}</TableCell>
                <TableCell>{row.codAvailable}</TableCell>
                <TableCell>
                  <Stack direction="row" spacing={1}>
                    <IconButton size="small" sx={{ bgcolor: "#e8f5e9", color: "#2e7d32" }}>
                      <EditIcon fontSize="small" />
                    </IconButton>
                    <IconButton size="small" sx={{ bgcolor: "#fdecea", color: "#d32f2f" }}>
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <Box display="flex" justifyContent="center" mt={2} gap={1}>
          <Button size="small" variant="outlined">Previous</Button>
          <Pagination count={14} shape="rounded" />
          <Button size="small" variant="outlined">Next</Button>
        </Box>
      </Paper>

      <AddShippingZone open={openAdd} onClose={() => setOpenAdd(false)} onSave={handleAdd} />
    </Box>
  );
};

export default Shipping;

 