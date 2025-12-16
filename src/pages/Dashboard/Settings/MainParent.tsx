 


import React, { useState } from "react";
import { Box } from "@mui/material";

import GstAndTaxes from "./GstAndTaxes";
import Shipping from "./Shipping";
import Payment from "./Payment";
import Payout from "./Payout";
import LegalContent from "./LegalContent";
import Localization from "./Localization"; // ✅ ADD THIS

export type Page =
  | "gst"
  | "shipping"
  | "payment"
  | "payout"
  | "legal"
  | "localization";

const MainParent: React.FC = () => {
  const [activePage, setActivePage] = useState<Page>("gst");

  return (
    <Box sx={{ width: "100%", minHeight: "100vh" }}>
      {activePage === "gst" && (
        <GstAndTaxes onTabChange={setActivePage} />
      )}

      {activePage === "shipping" && (
        <Shipping onTabChange={setActivePage} />
      )}

      {activePage === "payment" && (
        <Payment onTabChange={setActivePage} />
      )}

      {activePage === "payout" && (
        <Payout onTabChange={setActivePage} />
      )}

      {activePage === "legal" && (
        <LegalContent onTabChange={setActivePage} />
      )}

      {activePage === "localization" && (
        <Localization onTabChange={setActivePage} />
      )}
    </Box>
  );
};

export default MainParent;


