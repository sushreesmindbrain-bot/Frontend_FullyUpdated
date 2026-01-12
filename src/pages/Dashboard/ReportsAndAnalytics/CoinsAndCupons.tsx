// import React, { useState } from "react";
// import {
//   Box,
//   Paper,
//   Typography,
//   Button,
//   Select,
//   MenuItem
// } from "@mui/material";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip
// } from "recharts";
// import type { Page } from "./PageType";

// /* ================= PROPS ================= */
// interface Props {
//   onTabChange: (page: Page) => void;
// }

// /* ================= DATA TYPES ================= */
// interface ChartData {
//   month: string;
//   issued: number;
//   redeemed: number;
// }

// /* ================= DATA ================= */
// const coinsData: ChartData[] = [
//   { month: "Jan", issued: 12000, redeemed: 9000 },
//   { month: "Feb", issued: 15000, redeemed: 11000 },
//   { month: "Mar", issued: 17000, redeemed: 14000 },
//   { month: "Apr", issued: 9000, redeemed: 6000 },
//   { month: "May", issued: 7000, redeemed: 5000 },
//   { month: "Jun", issued: 18000, redeemed: 13000 },
//   { month: "Jul", issued: 10000, redeemed: 7000 },
//   { month: "Aug", issued: 14000, redeemed: 8000 },
//   { month: "Sep", issued: 16000, redeemed: 9000 }
// ];

// const couponsData: ChartData[] = [
//   { month: "Jan", issued: 10000, redeemed: 8000 },
//   { month: "Feb", issued: 13000, redeemed: 10000 },
//   { month: "Mar", issued: 16000, redeemed: 13000 },
//   { month: "Apr", issued: 8000, redeemed: 5000 },
//   { month: "May", issued: 6000, redeemed: 4000 },
//   { month: "Jun", issued: 17000, redeemed: 12000 },
//   { month: "Jul", issued: 9000, redeemed: 6000 },
//   { month: "Aug", issued: 12000, redeemed: 7000 },
//   { month: "Sep", issued: 15000, redeemed: 8500 }
// ];

// /* ================= STYLES ================= */
// const summaryCard = {
//   height: 110,
//   borderRadius: "12px",
//   border: "1.5px solid #3b6ef6",
//   px: 3,
//   backgroundColor: "#fff",
//   display: "flex",
//   flexDirection: "column",
//   justifyContent: "center"
// };

// const chartContainer = {
//   borderRadius: "14px",
//   border: "1px solid #e6e9f0",
//   backgroundColor: "#fff",
//   p: 3
// };

// /* ================= COMPONENT ================= */
// const CoinsAndCoupons: React.FC<Props> = ({ onTabChange }) => {
//   const [activeTab, setActiveTab] = useState<Page>("coinsCoupons");

//   const handleTabClick = (tab: Page) => {
//     setActiveTab(tab);
//     onTabChange(tab);
//   };

//   return (
//     <Box sx={{ width: "100%", minHeight: "100vh", backgroundColor: "#f6f8fc" }}>

//       {/* ================= TOP TABS ================= */}
//       <Paper sx={{ px: 2, py: 1.5, mx: 3, mt: 3, mb: 3 }}>
//         <Box display="flex" gap={1}>
//           <Button
//             onClick={() => handleTabClick("salesBv")}
//             sx={{
//               textTransform: "none",
//               fontWeight: 500,
//               color: activeTab === "salesBv" ? "#fff" : "#000",
//               bgcolor: activeTab === "salesBv" ? "#26619A" : "transparent",
//               "&:hover": { bgcolor: activeTab === "salesBv" ? "#26619A" : "transparent" }
//             }}
//           >
//             Sales & BV
//           </Button>

//           <Button
//             onClick={() => handleTabClick("teamGrowth")}
//             sx={{
//               textTransform: "none",
//               fontWeight: 500,
//               color: activeTab === "teamGrowth" ? "#fff" : "#000",
//               bgcolor: activeTab === "teamGrowth" ? "#26619A" : "transparent",
//               "&:hover": { bgcolor: activeTab === "teamGrowth" ? "#26619A" : "transparent" }
//             }}
//           >
//             Team Growth
//           </Button>

//           <Button
//             onClick={() => handleTabClick("packageDistribution")}
//             sx={{
//               textTransform: "none",
//               fontWeight: 500,
//               color: activeTab === "packageDistribution" ? "#fff" : "#000",
//               bgcolor: activeTab === "packageDistribution" ? "#26619A" : "transparent",
//               "&:hover": { bgcolor: activeTab === "packageDistribution" ? "#26619A" : "transparent" }
//             }}
//           >
//             Package Distribution
//           </Button>

//           <Button
//             onClick={() => handleTabClick("coinsCoupons")}
//             sx={{
//               textTransform: "none",
//               fontWeight: 500,
//               color: activeTab === "coinsCoupons" ? "#fff" : "#000",
//               bgcolor: activeTab === "coinsCoupons" ? "#26619A" : "transparent",
//               "&:hover": { bgcolor: activeTab === "coinsCoupons" ? "#26619A" : "transparent" }
//             }}
//           >
//             Coins & Coupons
//           </Button>

//           <Button
//             onClick={() => handleTabClick("taxGst")}
//             sx={{
//               textTransform: "none",
//               fontWeight: 500,
//               color: activeTab === "taxGst" ? "#fff" : "#000",
//               bgcolor: activeTab === "taxGst" ? "#26619A" : "transparent",
//               "&:hover": { bgcolor: activeTab === "taxGst" ? "#26619A" : "transparent" }
//             }}
//           >
//             Tax / GST
//           </Button>
//         </Box>
//       </Paper>

//       {/* ================= SUMMARY ================= */}
//       <Box sx={{ px: 3, mb: 4, display: "flex", gap: 2 }}>
//         <Paper sx={{ ...summaryCard, flex: 1 }}>
//           <Typography fontSize={14} color="#3b6ef6">
//             Total Coins Issued
//           </Typography>
//           <Typography fontSize={30} fontWeight={700}>
//             54,800
//           </Typography>
//         </Paper>

//         <Paper sx={{ ...summaryCard, flex: 1 }}>
//           <Typography fontSize={14} color="#3b6ef6">
//             Total Coupons Issued
//           </Typography>
//           <Typography fontSize={30} fontWeight={700}>
//             18,420
//           </Typography>
//         </Paper>

//         <Paper sx={{ ...summaryCard, flex: 1 }}>
//           <Typography fontSize={14} color="#3b6ef6">
//             Breakage Rate
//           </Typography>
//           <Typography fontSize={30} fontWeight={700}>
//             25%
//           </Typography>
//           <Typography fontSize={13} color="text.secondary">
//             13,700 unredeemed
//           </Typography>
//         </Paper>
//       </Box>

//       {/* ================= CHARTS ================= */}
//       <Box sx={{ px: 3, mb: 4 }}>
//         <Paper sx={chartContainer}>
//           <ChartHeader title="Coins Issued vs Redeemed" />
//           <BarGraph data={coinsData} />
//         </Paper>
//       </Box>

//       <Box sx={{ px: 3 }}>
//         <Paper sx={chartContainer}>
//           <ChartHeader title="Coupons Issued vs Redeemed" />
//           <BarGraph data={couponsData} />
//         </Paper>
//       </Box>
//     </Box>
//   );
// };

// export default CoinsAndCoupons;

// /* ================= HELPERS ================= */
// const ChartHeader = ({ title }: { title: string }) => (
//   <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
//     <Typography fontWeight={600}>{title}</Typography>
//     <Select size="small" value="2023-2024">
//       <MenuItem value="2023-2024">2023-2024</MenuItem>
//     </Select>
//   </Box>
// );

// const BarGraph = ({ data }: { data: ChartData[] }) => (
//   <Box sx={{ width: "100%", overflowX: "auto" }}>
//     <BarChart
//       width={900}
//       height={260}
//       data={data}
//       barGap={6}
//     >
//       <XAxis dataKey="month" tick={{ fontSize: 12 }} />
//       <YAxis tick={{ fontSize: 12 }} />
//       <Tooltip />
//       <Bar dataKey="issued" fill="#1f4fd8" radius={[4, 4, 0, 0]} />
//       <Bar dataKey="redeemed" fill="#6cc04a" radius={[4, 4, 0, 0]} />
//     </BarChart>
//   </Box>
// );


 import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  Button,
  Select,
  MenuItem
} from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";
import type { Page } from "./PageType";

/* ================= PROPS ================= */
interface Props {
  onTabChange: (page: Page) => void;
}

/* ================= DATA TYPES ================= */
interface ChartData {
  month: string;
  issued: number;
  redeemed: number;
}

/* ================= DATA ================= */
const coinsData: ChartData[] = [
  { month: "Jan", issued: 12000, redeemed: 9000 },
  { month: "Feb", issued: 15000, redeemed: 11000 },
  { month: "Mar", issued: 17000, redeemed: 14000 },
  { month: "Apr", issued: 9000, redeemed: 6000 },
  { month: "May", issued: 7000, redeemed: 5000 },
  { month: "Jun", issued: 18000, redeemed: 13000 },
  { month: "Jul", issued: 10000, redeemed: 7000 },
  { month: "Aug", issued: 14000, redeemed: 8000 },
  { month: "Sep", issued: 16000, redeemed: 9000 }
];

const couponsData: ChartData[] = [
  { month: "Jan", issued: 10000, redeemed: 8000 },
  { month: "Feb", issued: 13000, redeemed: 10000 },
  { month: "Mar", issued: 16000, redeemed: 13000 },
  { month: "Apr", issued: 8000, redeemed: 5000 },
  { month: "May", issued: 6000, redeemed: 4000 },
  { month: "Jun", issued: 17000, redeemed: 12000 },
  { month: "Jul", issued: 9000, redeemed: 6000 },
  { month: "Aug", issued: 12000, redeemed: 7000 },
  { month: "Sep", issued: 15000, redeemed: 8500 }
];

/* ================= STYLES ================= */
const summaryCard = {
  height: 110,
  borderRadius: "12px",
  border: "1.5px solid #3b6ef6",
  px: 3,
  backgroundColor: "#fff",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center"
};

const chartContainer = {
  borderRadius: "14px",
  border: "1px solid #e6e9f0",
  backgroundColor: "#fff",
  p: 3
};

/* ================= COMPONENT ================= */
const CoinsAndCoupons: React.FC<Props> = ({ onTabChange }) => {
  const [activeTab, setActiveTab] = useState<Page>("coinsCoupons");

  const handleTabClick = (tab: Page) => {
    setActiveTab(tab);
    onTabChange(tab);
  };

  return (
    <Box sx={{ width: "100%", minHeight: "100vh", backgroundColor: "#f6f8fc" }}>

      {/* ================= TOP TABS ================= */}
      <Paper
        sx={{
          px: 1,
          py: 1,
          mt: 3,
          mb: 3,
          ml: 3,
          width: "fit-content",
          display: "inline-flex",
          borderRadius: "12px"
        }}
      >
        <Box display="flex" gap={1}>
          {[
            { key: "salesBv", label: "Sales & BV" },
            { key: "teamGrowth", label: "Team Growth" },
            { key: "packageDistribution", label: "Package Distribution" },
            { key: "coinsCoupons", label: "Coins & Coupons" },
            { key: "taxGst", label: "Tax / GST" }
          ].map((tab) => (
            <Button
              key={tab.key}
              onClick={() => handleTabClick(tab.key as Page)}
              sx={{
                textTransform: "none",
                fontWeight: 500,
                color: activeTab === tab.key ? "#fff" : "#000",
                bgcolor: activeTab === tab.key ? "#26619A" : "transparent",
                borderRadius: "8px",
                "&:hover": {
                  bgcolor: activeTab === tab.key ? "#26619A" : "#f1f1f1"
                }
              }}
            >
              {tab.label}
            </Button>
          ))}
        </Box>
      </Paper>

      {/* ================= SUMMARY ================= */}
      <Box sx={{ px: 3, mb: 4, display: "flex", gap: 2 }}>
        <Paper sx={{ ...summaryCard, flex: 1 }}>
          <Typography fontSize={14} color="#3b6ef6">
            Total Coins Issued
          </Typography>
          <Typography fontSize={30} fontWeight={700}>
            54,800
          </Typography>
        </Paper>

        <Paper sx={{ ...summaryCard, flex: 1 }}>
          <Typography fontSize={14} color="#3b6ef6">
            Total Coupons Issued
          </Typography>
          <Typography fontSize={30} fontWeight={700}>
            18,420
          </Typography>
        </Paper>

        <Paper sx={{ ...summaryCard, flex: 1 }}>
          <Typography fontSize={14} color="#3b6ef6">
            Breakage Rate
          </Typography>
          <Typography fontSize={30} fontWeight={700}>
            25%
          </Typography>
          <Typography fontSize={13} color="text.secondary">
            13,700 unredeemed
          </Typography>
        </Paper>
      </Box>

      {/* ================= CHARTS ================= */}
      <Box sx={{ px: 3, mb: 4 }}>
        <Paper sx={chartContainer}>
          <ChartHeader title="Coins Issued vs Redeemed" />
          <BarGraph data={coinsData} />
        </Paper>
      </Box>

      <Box sx={{ px: 3 }}>
        <Paper sx={chartContainer}>
          <ChartHeader title="Coupons Issued vs Redeemed" />
          <BarGraph data={couponsData} />
        </Paper>
      </Box>
    </Box>
  );
};

export default CoinsAndCoupons;

/* ================= HELPERS ================= */
const ChartHeader = ({ title }: { title: string }) => (
  <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
    <Typography fontWeight={600}>{title}</Typography>
    <Select size="small" value="2023-2024">
      <MenuItem value="2023-2024">2023-2024</MenuItem>
    </Select>
  </Box>
);

const BarGraph = ({ data }: { data: ChartData[] }) => (
  <Box sx={{ width: "100%", overflowX: "auto" }}>
    <BarChart width={900} height={260} data={data} barGap={6}>
      <XAxis dataKey="month" tick={{ fontSize: 12 }} />
      <YAxis tick={{ fontSize: 12 }} />
      <Tooltip />
      <Bar dataKey="issued" fill="#1f4fd8" radius={[4, 4, 0, 0]} />
      <Bar dataKey="redeemed" fill="#6cc04a" radius={[4, 4, 0, 0]} />
    </BarChart>
  </Box>
);
