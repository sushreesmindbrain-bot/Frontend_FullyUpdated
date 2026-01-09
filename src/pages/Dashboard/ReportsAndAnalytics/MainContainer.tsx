// import { useState } from "react";
// import { Box } from "@mui/material";

// import SalesAndBv from "./SalesAndBv";
// import TeamGrowth from "./TeamGrowth";
// import PackageDistribution from "./PackageDistribution";
// import CoinsAndCoupons from "./CoinsAndCupons";  
// import TaxGst from "./TaxGst";

// import type { Page } from "./PageType";

// const MainContainer = () => {
//    const [page, setPage] = useState<Page>("salesBv");

//   return (
//     <Box sx={{ width: "100%" }}>
//       {page === "salesBv" && (
//         <SalesAndBv onTabChange={setPage} />
//       )}

//       {page === "teamGrowth" && (
//         <TeamGrowth onTabChange={setPage} />
//       )}

//       {page === "packageDistribution" && (
//         <PackageDistribution onTabChange={setPage} />
//       )}

//       {page === "coinsCoupons" && (
//         <CoinsAndCoupons onTabChange={setPage} />
//       )}

//       {page === "taxGst" && (
//         <TaxGst onTabChange={setPage} />
//       )}
//     </Box>
//   );
// };

// export default MainContainer;

import { useState } from "react";
import { Box } from "@mui/material";

import SalesAndBv from "./SalesAndBv";
import TeamGrowth from "./TeamGrowth";
import PackageDistribution from "./PackageDistribution";
import CoinsAndCoupons from "./CoinsAndCupons";
import TaxGst from "./TaxGst";

import type { Page } from "./PageType";

const MainContainer = () => {
  const [page, setPage] = useState<Page>("salesBv");

  return (
    <Box sx={{ width: "100%" }}>
      {page === "salesBv" && <SalesAndBv onTabChange={setPage} />}
      {page === "teamGrowth" && <TeamGrowth onTabChange={setPage} />}
      {page === "packageDistribution" && (
        <PackageDistribution onTabChange={setPage} />
      )}
      {page === "coinsCoupons" && (
        <CoinsAndCoupons onTabChange={setPage} />
      )}
      {page === "taxGst" && <TaxGst onTabChange={setPage} />}
    </Box>
  );
};

export default MainContainer;


