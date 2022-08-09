import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";
import ProgrammeTileGallery from "../components/ProgrammeTileGallery/ProgrammeTileGallery";
import Pagination from "../components/Pagination/Pagination";
import { ReactSession } from "react-client-session";

import { DashboardContext } from "../context/DashboardContext";
const ProgrammesPage = () => {
  const dashboardContext = useContext(DashboardContext);

  ReactSession.setStoreType("localStorage");

  const [message, setMessage] = useState("");
  const [username, setUsername] = useState("");
  const [pageNumber, setPageNumber] = useState(1);

  const value = window.location.href;
  const startToken = value.indexOf("access_token");
  const tokenValue = value.substring(startToken);
  const splitToken = tokenValue.split("&");
  const tokenPart = splitToken[0];
  const token = tokenPart.split("=")[1];
  let navigate = useNavigate();
  const serverUrl =
    "https://dsi-model-office-project-reporting.auth.eu-west-2.amazoncognito.com/oauth2/userInfo";
  const callSecureApi = async () => {
    try {
      const response = await fetch(`${serverUrl}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const responseData = await response.json();
      setMessage(responseData);
      setUsername(responseData.username.slice(14));
      ReactSession.set("username", responseData.username.slice(14));
    } catch (error) {
      setMessage(error.message);
    }
  };
  if (username == "") {
    callSecureApi();
  }

  const projectManagerNavigate = () => {
    if (sessionStorage.getItem("roleID") === "3") navigate("/projects");
  };
  useEffect(() => {
    projectManagerNavigate();
  }, [sessionStorage.getItem("roleID")]);

  useEffect(() => {
    dashboardContext.getUsers(username);
  }, [username, dashboardContext.userID, dashboardContext.roleID]);

  useEffect(() => {
    if (sessionStorage.getItem("userID") === null) {
      dashboardContext.getProgrammes(dashboardContext.firstTimeUserID);
    } else {
      dashboardContext.getProgrammes(sessionStorage.getItem("userID"));
    }
  }, [dashboardContext.firstTimeUserID]);

  return (
    <>
      <Header />
      <ProgrammeTileGallery
        programmeList={dashboardContext.programmeList}
        pageNumber={pageNumber}
        roleID={sessionStorage.getItem("roleID")}
      />
      <Pagination
        length={dashboardContext.programmeList.length}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        text="Programmes"
      />
    </>
  );
};

export default ProgrammesPage;
