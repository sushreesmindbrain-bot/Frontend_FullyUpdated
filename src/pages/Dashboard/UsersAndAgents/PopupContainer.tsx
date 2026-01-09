import { useState } from "react";
import UpgradePackagePage from "./UpgradePackagePage";
import UpgradeSummaryPage from "./UpgradeSummaryPage";
import type { Agent } from "./types";

interface PopupContainerProps {
  agent?: Agent;
  onClose: () => void;
}

const PopupContainer: React.FC<PopupContainerProps> = ({ agent, onClose }) => {
  const [popupPage, setPopupPage] = useState("upgradePage");
  const [selectedPackage, setSelectedPackage] = useState("");

  return (
    <>
      {popupPage === "upgradePage" && (
        <UpgradePackagePage
          agent={agent}
          onCancel={onClose}
          onConfirm={(pkg) => {
            setSelectedPackage(pkg);   
            setPopupPage("upgradeSummary");  
          }}
        />
      )}

      {popupPage === "upgradeSummary" && (
        <UpgradeSummaryPage
          selectedPkg={selectedPackage}
          packageName={selectedPackage}
          onCancel={onClose}
          onConfirm={() => {
            console.log("Final package:", selectedPackage);
            onClose();         
          }}
        />
      )}
    </>
  );
};

export default PopupContainer;
