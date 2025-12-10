import React, { useState } from "react";
import { Box } from "@mui/material";

import AgentListPage from "./AgentListPage";
import AgentDetailsPage from "./AgentDetailsPage";
import KYCViewPage from "./KYCViewPage";
import TeamViewPage from "./TeamViewPage";
import DialogPopup from "./DialogPopup";
import type { Agent } from "./types";

type PopupPage = "none" | "overview" | "kyc" | "team";

const MainApp: React.FC = () => {
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);
  const [popupPage, setPopupPage] = useState<PopupPage>("none");

  const openOverview = (agent: Agent) => {
    setSelectedAgent(agent);
    setPopupPage("overview");
  };

  const closeAll = () => {
    setPopupPage("none");
    setSelectedAgent(null);
  };

  return (
    <Box sx={{ p: 3 }}>
      <AgentListPage onViewDetails={openOverview} />

      {/* Overview dialog */}
      <DialogPopup open={popupPage === "overview"} onClose={closeAll}>
        {selectedAgent && (
          <AgentDetailsPage
            agent={selectedAgent}
            onClose={closeAll}
            onKYCView={() => setPopupPage("kyc")}
            onTeamView={() => setPopupPage("team")}
          />
        )}
      </DialogPopup>

      {/* KYC dialog */}
      <DialogPopup open={popupPage === "kyc"} onClose={closeAll}>
        {selectedAgent && (
          <KYCViewPage agent={selectedAgent} onBack={() => setPopupPage("overview")} />
        )}
      </DialogPopup>

      {/* Team dialog */}
      <DialogPopup open={popupPage === "team"} onClose={closeAll}>
        {selectedAgent && (
          <TeamViewPage agent={selectedAgent} onBack={() => setPopupPage("overview")} />
        )}
      </DialogPopup>
    </Box>
  );
};

export default MainApp;
