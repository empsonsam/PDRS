import React, { useContext } from "react";
import { DashboardContext } from "../context/DashboardContext";

import Header from "../components/Header/Header";
import ReportTable from "../components/ReportTable/ReportTable";
import SetOfButtons from "../components/SetOfButtons/SetOfButtons";
import PassiveModal from "./PassiveModal";

const ReportsPage = () => {
  const dashboardContext = useContext(DashboardContext);
  return (
    <div>
      <Header />
      <ReportTable />
      {dashboardContext.open && <PassiveModal />}
      <div className="buttonsReport">
        <SetOfButtons />
      </div>
    </div>
  );
};

export default ReportsPage;
