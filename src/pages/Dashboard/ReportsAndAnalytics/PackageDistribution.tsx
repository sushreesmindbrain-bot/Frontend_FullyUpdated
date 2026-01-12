// import React from "react";
// import {
//   Box,
//   Typography,
//   Paper,
//   Button,
//   Divider,
// } from "@mui/material";
// import {
//   PieChart,
//   Pie,
//   Cell,
//   ResponsiveContainer
// } from "recharts";
// import type { Page } from "./PageType";

// /* ---------- PROPS ---------- */
// interface Props {
//   onTabChange: (page: Page) => void;
// }

// /* ---------- CONSTANTS ---------- */
// const BLUE = "#26619A";

// /* ---------- DATA ---------- */
// const pieData = [
//   { name: "Silver", value: 85, color: "#7C7CF4" },
//   { name: "Gold", value: 35, color: "#00C49F" },
//   { name: "Star", value: 8, color: "#FF5A5A" },
//   { name: "IBO", value: 120, color: "#FFC107" }
// ];

// const statsData = [
//   { name: "IBO", value: 120, color: "#FFC107" },
//   { name: "Silver", value: 85, color: "#7C7CF4" },
//   { name: "Gold", value: 35, color: "#00C49F" },
//   { name: "Star", value: 8, color: "#FF5A5A" }
// ];

// const total = pieData.reduce((s, d) => s + d.value, 0);

// /* ---------- COMPONENT ---------- */
// const PackageDistribution: React.FC<Props> = ({ onTabChange }) => {
//   return (
//     <Box sx={{ p: 3, backgroundColor: "#f7f9fc", minHeight: "100vh" }}>
      
//       {/* ================= TOP TABS ================= */}
//       <Paper sx={{ p: 1.5, mb: 3 }}>
//         <Box display="flex" gap={1}>
//           {([
//             { key: "salesBv", label: "Sales & BV" },
//             { key: "teamGrowth", label: "Team Growth" },
//             { key: "packageDistribution", label: "Package Distribution" },
//             { key: "coinsCoupons", label: "Coins & Coupons" },
//             { key: "taxGst", label: "Tax / GST" },
//           ] as { key: Page; label: string }[]).map((tab) => (
//             <Button
//               key={tab.key}
//               onClick={() => onTabChange(tab.key)}
//               sx={{
//                 textTransform: "none",
//                 fontWeight: 500,
//                 fontSize: 14,
//                 px: 2.5,
//                 minHeight: 36,
//                 borderRadius: "8px",
//                 color: tab.key === "packageDistribution" ? "#fff" : "#000",
//                 bgcolor: tab.key === "packageDistribution" ? BLUE : "transparent",
//                 "&:hover": {
//                   bgcolor: tab.key === "packageDistribution" ? BLUE : "#f1f1f1",
//                 },
//               }}
//             >
//               {tab.label}
//             </Button>
//           ))}
//         </Box>
//       </Paper>

//       {/* ================= CONTENT ================= */}
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: { xs: "column", md: "row" },
//           gap: 3
//         }}
//       >
//         {/* LEFT: PIE CHART */}
//         <Box sx={{ flex: 1 }}>
//           <Paper sx={{ p: 3, borderRadius: 3, height: 480 }}>
//             <Typography fontSize={20} fontWeight={600} color={BLUE} mb={1}>
//               Package Distribution
//             </Typography>
//             <Divider sx={{ mb: 3 }} />
//             <Box sx={{ width: "100%", height: 330 }}>
//               <ResponsiveContainer>
//                 <PieChart>
//                   <Pie
//                     data={pieData}
//                     dataKey="value"
//                     cx="50%"
//                     cy="50%"
//                     outerRadius={165}
//                   >
//                     {pieData.map((item, index) => (
//                       <Cell key={index} fill={item.color} />
//                     ))}
//                   </Pie>
//                 </PieChart>
//               </ResponsiveContainer>
//             </Box>

//             {/* LEGEND */}
//             <Box
//               sx={{
//                 display: "flex",
//                 justifyContent: "center",
//                 gap: 3,
//                 mt: 2,
//                 flexWrap: "wrap"
//               }}
//             >
//               {pieData.map((item) => (
//                 <Box
//                   key={item.name}
//                   sx={{ display: "flex", alignItems: "center", gap: 1 }}
//                 >
//                   <Box
//                     sx={{
//                       width: 14,
//                       height: 14,
//                       borderRadius: "50%",
//                       backgroundColor: item.color
//                     }}
//                   />
//                   <Typography fontSize={16} color="#5f5f8c">
//                     {item.name}: {item.value}
//                   </Typography>
//                 </Box>
//               ))}
//             </Box>
//           </Paper>
//         </Box>

//         {/* RIGHT: STATS */}
//         <Box sx={{ flex: 1 }}>
//           <Paper sx={{ p: 3, borderRadius: 3, height: 480 }}>
//             <Typography fontSize={20} fontWeight={600} color={BLUE} mb={1}>
//               Package Statistics
//             </Typography>
//             <Divider sx={{ mb: 4 }} />

//             <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
//               {statsData.map((d) => (
//                 <Box
//                   key={d.name}
//                   sx={{
//                     backgroundColor: "#f8fafc",
//                     borderRadius: 3,
//                     px: 3,
//                     py: 2.5,
//                     display: "flex",
//                     justifyContent: "space-between",
//                     alignItems: "center"
//                   }}
//                 >
//                   <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
//                     <Box
//                       sx={{
//                         width: 28,
//                         height: 28,
//                         borderRadius: 1,
//                         backgroundColor: d.color
//                       }}
//                     />
//                     <Typography fontSize={17} color={BLUE}>
//                       {d.name}
//                     </Typography>
//                   </Box>

//                   <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
//                     <Typography fontSize={16}>{d.value} agents</Typography>
//                     <Typography fontSize={15} color="#7a8194">
//                       {((d.value / total) * 100).toFixed(1)}%
//                     </Typography>
//                   </Box>
//                 </Box>
//               ))}
//             </Box>
//           </Paper>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default PackageDistribution;

import React from "react";
import {
  Box,
  Typography,
  Paper,
  Button,
  Divider,
} from "@mui/material";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer
} from "recharts";
import type { Page } from "./PageType";

/* ---------- PROPS ---------- */
interface Props {
  onTabChange: (page: Page) => void;
}

/* ---------- CONSTANTS ---------- */
const BLUE = "#26619A";

/* ---------- DATA ---------- */
const pieData = [
  { name: "Silver", value: 85, color: "#7C7CF4" },
  { name: "Gold", value: 35, color: "#00C49F" },
  { name: "Star", value: 8, color: "#FF5A5A" },
  { name: "IBO", value: 120, color: "#FFC107" }
];

const statsData = [
  { name: "IBO", value: 120, color: "#FFC107" },
  { name: "Silver", value: 85, color: "#7C7CF4" },
  { name: "Gold", value: 35, color: "#00C49F" },
  { name: "Star", value: 8, color: "#FF5A5A" }
];

const total = pieData.reduce((s, d) => s + d.value, 0);

/* ---------- COMPONENT ---------- */
const PackageDistribution: React.FC<Props> = ({ onTabChange }) => {
  return (
    <Box sx={{ p: 3, backgroundColor: "#f7f9fc", minHeight: "100vh" }}>

      {/* ================= TOP TABS ================= */}
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
        <Box display="flex" gap={1}>
          {([
            { key: "salesBv", label: "Sales & BV" },
            { key: "teamGrowth", label: "Team Growth" },
            { key: "packageDistribution", label: "Package Distribution" },
            { key: "coinsCoupons", label: "Coins & Coupons" },
            { key: "taxGst", label: "Tax / GST" },
          ] as { key: Page; label: string }[]).map((tab) => (
            <Button
              key={tab.key}
              onClick={() => onTabChange(tab.key)}
              sx={{
                textTransform: "none",
                fontWeight: 500,
                fontSize: 14,
                px: 2.5,
                minHeight: 36,
                borderRadius: "8px",
                color: tab.key === "packageDistribution" ? "#fff" : "#000",
                bgcolor: tab.key === "packageDistribution" ? BLUE : "transparent",
                "&:hover": {
                  bgcolor: tab.key === "packageDistribution" ? BLUE : "#f1f1f1",
                },
              }}
            >
              {tab.label}
            </Button>
          ))}
        </Box>
      </Paper>

      {/* ================= CONTENT ================= */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 3
        }}
      >
        {/* LEFT: PIE CHART */}
        <Box sx={{ flex: 1 }}>
          <Paper sx={{ p: 3, borderRadius: 3, height: 480 }}>
            <Typography fontSize={20} fontWeight={600} color={BLUE} mb={1}>
              Package Distribution
            </Typography>
            <Divider sx={{ mb: 3 }} />
            <Box sx={{ width: "100%", height: 330 }}>
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={pieData}
                    dataKey="value"
                    cx="50%"
                    cy="50%"
                    outerRadius={165}
                  >
                    {pieData.map((item, index) => (
                      <Cell key={index} fill={item.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </Box>

            {/* LEGEND */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 3,
                mt: 2,
                flexWrap: "wrap"
              }}
            >
              {pieData.map((item) => (
                <Box
                  key={item.name}
                  sx={{ display: "flex", alignItems: "center", gap: 1 }}
                >
                  <Box
                    sx={{
                      width: 14,
                      height: 14,
                      borderRadius: "50%",
                      backgroundColor: item.color
                    }}
                  />
                  <Typography fontSize={16} color="#5f5f8c">
                    {item.name}: {item.value}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Paper>
        </Box>

        {/* RIGHT: STATS */}
        <Box sx={{ flex: 1 }}>
          <Paper sx={{ p: 3, borderRadius: 3, height: 480 }}>
            <Typography fontSize={20} fontWeight={600} color={BLUE} mb={1}>
              Package Statistics
            </Typography>
            <Divider sx={{ mb: 4 }} />

            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              {statsData.map((d) => (
                <Box
                  key={d.name}
                  sx={{
                    backgroundColor: "#f8fafc",
                    borderRadius: 3,
                    px: 3,
                    py: 2.5,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Box
                      sx={{
                        width: 28,
                        height: 28,
                        borderRadius: 1,
                        backgroundColor: d.color
                      }}
                    />
                    <Typography fontSize={17} color={BLUE}>
                      {d.name}
                    </Typography>
                  </Box>

                  <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
                    <Typography fontSize={16}>{d.value} agents</Typography>
                    <Typography fontSize={15} color="#7a8194">
                      {((d.value / total) * 100).toFixed(1)}%
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default PackageDistribution;
