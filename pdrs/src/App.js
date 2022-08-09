import React from "react";
import DashboardContextProvider from "./context/DashboardContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProjectsPage from "./containers/ProjectsPage";
import ReportsPage from "./containers/ReportsPage";
import ProgrammesPage from "./containers/ProgrammesPage";
import SevenKeys from "./containers/SevenKeys";
import CreateReport from "./components/CreateReport/CreateReport";
import PassiveModal from "./containers/PassiveModal";
import Admin from "./containers/Admin";

const App = () => {
  return (
    <BrowserRouter>
      <DashboardContextProvider>
        <Routes>
          <Route exact path="/" element={<ProgrammesPage />} />

          <Route exact path="/programmes" element={<ProgrammesPage />} />
          <Route exact path="/projects" element={<ProjectsPage />} />
          <Route exact path="/reports" element={<ReportsPage />} />
          <Route exact path="/assessment" element={<SevenKeys />} />
          <Route exact path="/wizard" element={<CreateReport />} />
          <Route exact path="/modal" element={<PassiveModal />} />
          <Route exact path="/admin" element={<Admin />} />
        </Routes>
      </DashboardContextProvider>
    </BrowserRouter>
  );
};

export default App;
