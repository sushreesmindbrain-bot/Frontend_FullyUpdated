import { useState } from "react";
import { Box } from "@mui/material";

import AgentListPage from "./AgentListPage";
import AgentDetailsPage from "./AgentDetailsPage";
import KYCViewPage from "./KYCViewPage";
import TeamViewPage from "./TeamViewPage";
import EarningPage from "./EarningPage";
import HistoryPage from "./HistoryPage";
import EditAgentProfile from "./EditAgentProfile";
import SuspendPage from "./SuspendPage";
import UpgradePackagePage from "./UpgradePackagePage";
import UpgradeSummaryPage from "./UpgradeSummaryPage";
import VerificationPage from "./VerificationPage";

import DialogPopup from "./DialogPopup";
import type { Agent } from "./types";

type PopupPage =
  | "none"
  | "overview"
  | "kyc"
  | "team"
  | "earnings"
  | "history"
  | "editProfile"
  | "suspend"
  | "upgrade"
  | "upgradeSummary"
  | "verification";

const MainApp = () => {
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);
  const [popupPage, setPopupPage] = useState<PopupPage>("none");
  const [selectedUpgrade, setSelectedUpgrade] = useState("");

  /* ===================== OPEN / CLOSE ===================== */
  const openOverview = (agent: Agent) => {
    setSelectedAgent(agent);
    setPopupPage("overview");
  };

  const closeAll = () => {
    setPopupPage("none");
    setSelectedAgent(null);
    setSelectedUpgrade("");
  };

  /* ===================== TAB HANDLER (SINGLE SOURCE) ===================== */
  const handleTabChange = (tab: number) => {
    if (tab === 0) setPopupPage("overview");
    if (tab === 1) setPopupPage("kyc");
    if (tab === 2) setPopupPage("team");
    if (tab === 3) setPopupPage("earnings");
    if (tab === 4) setPopupPage("history");
  };

  return (
    <Box sx={{ p: 3 }}>
      {/* ================= AGENT LIST ================= */}
      {popupPage === "none" && (
        <AgentListPage onViewDetails={openOverview} />
      )}

      {/* ================= OVERVIEW ================= */}
      <DialogPopup open={popupPage === "overview"} onClose={closeAll}>
        {selectedAgent && (
          <AgentDetailsPage
            agent={selectedAgent}
            onClose={closeAll}
            onKYCView={() => setPopupPage("kyc")}
            onTeamView={() => setPopupPage("team")}
            onEarningsView={() => setPopupPage("earnings")}
            onHistoryView={() => setPopupPage("history")}
            onUpgrade={() => setPopupPage("upgrade")}
            onEditProfile={() => setPopupPage("editProfile")}
          />
        )}
      </DialogPopup>

      {/* ================= KYC ================= */}
      <DialogPopup open={popupPage === "kyc"} onClose={closeAll}>
        {selectedAgent && (
          <KYCViewPage
            agent={selectedAgent}
            onBack={() => setPopupPage("overview")}
            onTeamView={() => setPopupPage("team")}
            onEarningsView={() => setPopupPage("earnings")}
            onHistoryView={() => setPopupPage("history")}
            onVerificationView={() => setPopupPage("verification")}
          />
        )}
      </DialogPopup>

      {/* ================= TEAM ================= */}
      <DialogPopup open={popupPage === "team"} onClose={closeAll}>
        {selectedAgent && (
          <TeamViewPage
            agent={selectedAgent}
            onBack={() => setPopupPage("overview")}
            onTabChange={handleTabChange}
          />
        )}
      </DialogPopup>

      {/* ================= EARNINGS ================= */}
      <DialogPopup open={popupPage === "earnings"} onClose={closeAll}>
        {selectedAgent && (
          <EarningPage
            selectedTab={3}
            agent={selectedAgent}
            onClose={() => setPopupPage("overview")}
            onEdit={() => setPopupPage("editProfile")}
            onSuspend={() => setPopupPage("suspend")}
            onUpgrade={() => setPopupPage("upgrade")}
            onTabChange={handleTabChange}
          />
        )}
      </DialogPopup>

      {/* ================= HISTORY ================= */}
      <DialogPopup open={popupPage === "history"} onClose={closeAll}>
        {selectedAgent && (
          <HistoryPage
            agent={selectedAgent}
            onBack={() => setPopupPage("overview")}
            onEditProfile={() => setPopupPage("editProfile")}
            onTabChange={handleTabChange}
          />
        )}
      </DialogPopup>

      {/* ================= EDIT PROFILE ================= */}
      <DialogPopup open={popupPage === "editProfile"} onClose={closeAll}>
        {selectedAgent && (
          <EditAgentProfile
            agent={selectedAgent}
            onBack={() => setPopupPage("history")}
          />
        )}
      </DialogPopup>

      {/* ================= SUSPEND ================= */}
      <DialogPopup open={popupPage === "suspend"} onClose={closeAll}>
        {selectedAgent && (
          <SuspendPage
            agent={selectedAgent}
            onCancel={() => setPopupPage("earnings")}
          />
        )}
      </DialogPopup>

      {/* ================= UPGRADE ================= */}
      <DialogPopup open={popupPage === "upgrade"} onClose={closeAll}>
        {selectedAgent && (
          <UpgradePackagePage
            agent={selectedAgent}
            onCancel={() => setPopupPage("overview")}
            onConfirm={(pkg) => {
              setSelectedUpgrade(pkg);
              setPopupPage("upgradeSummary");
            }}
          />
        )}
      </DialogPopup>

      {/* ================= UPGRADE SUMMARY ================= */}
      <DialogPopup open={popupPage === "upgradeSummary"} onClose={closeAll}>
        <UpgradeSummaryPage
          packageName={selectedUpgrade}
          onFinish={() => setPopupPage("overview")}
        />
      </DialogPopup>

      {/* ================= VERIFICATION ================= */}
      <DialogPopup open={popupPage === "verification"} onClose={closeAll}>
        {selectedAgent && (
          <VerificationPage
            agent={selectedAgent}
            onBack={() => setPopupPage("kyc")}
          />
        )}
      </DialogPopup>
    </Box>
  );
};

export default MainApp;
