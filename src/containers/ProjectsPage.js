import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";
import TileGallery from "../components/TileGallery/TileGallery";
import Pagination from "../components/Pagination/Pagination";
import Amplify from "aws-amplify";
import awsExports from "../aws-exports";
import { ReactSession } from "react-client-session";
import { Button } from "carbon-addons-iot-react";
import { DashboardContext } from "../context/DashboardContext";

Amplify.configure(awsExports);

const ProjectsPage = () => {
  ReactSession.setStoreType("localStorage");
  const [pageNumber, setPageNumber] = useState(1);

  let dashboardContext = useContext(DashboardContext);

  let navigate = useNavigate();

  useEffect(() => {
    if (
      sessionStorage.getItem("roleID") === "1" ||
      sessionStorage.getItem("roleID") === "2"
    )
      dashboardContext.getProjects(sessionStorage.getItem("programmeID"));
    if (sessionStorage.getItem("roleID") === "3")
      dashboardContext.getUserProjects(sessionStorage.getItem("userID"));
  }, []);

  return (
    <>
      <Header />
      <TileGallery
        projectList={dashboardContext.projectList}
        pageNumber={pageNumber}
      />
      <div style={{ marginBottom: "20px", marginLeft: "34px" }}>
        {(sessionStorage.getItem("roleID") === "1" && (
          <Button
            onClick={() => {
              navigate(-1);
            }}
          >
            Back
          </Button>
        )) ||
          (sessionStorage.getItem("roleID") === "2" && (
            <Button
              onClick={() => {
                navigate(-1);
              }}
            >
              Back
            </Button>
          ))}
      </div>
      <Pagination
        length={dashboardContext.projectList.length}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        text="Projects"
      />
    </>
  );
};

export default ProjectsPage;
