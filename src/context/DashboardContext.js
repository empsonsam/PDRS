import PropTypes from "prop-types";
import React, { useState } from "react";
import awsExports from "../aws-exports";
import { useNavigate } from "react-router-dom";
import {
  listUsers,
  listProjects,
  listUserProjects,
  listUserProgrammes,
  getUserProgramme,
} from "../graphql/queries";
import Amplify, { API, graphqlOperation } from "aws-amplify";

Amplify.configure(awsExports);

export const DashboardContext = React.createContext();

export const DashboardContextConsumer = DashboardContext.Consumer;

const DashboardContextProvider = (props) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  //Logic to find the friday of the current week
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  const getFriday = (date) => {
    const today = new Date(date);
    const first = today.getDate() - today.getDay() + 1;
    const fifth = first + 4;
    return new Date(today.setDate(fifth));
  };

  const defaultAWSDate = getFriday(new Date()).toISOString();

  const getFridayListFormat = (dates) => {
    let stringDates = [];
    for (let i = 0; i < dates.length; i++) {
      stringDates.push(dates[i].toLocaleDateString("en-GB", options));
    }
    return stringDates;
  };
  const getFridayUniversalFormat = (date) => {
    let fridays = [];
    let friday = getFriday(date);
    for (let i = 0; i < 3; i++) {
      if (fridays.length === 0) {
        fridays.push(friday);
      }
      fridays.push(getFriday(date.setDate(date.getDate() - 7)));
    }
    return fridays;
  };
  const getSelectedFriday = (current) => {
    const today = new Date(current);
    const first = today.getDate() - today.getDay() + 1;
    const fifth = first + 4;

    const createdAt = new Date(today.setDate(fifth));
    return createdAt.toLocaleDateString("en-GB", options);
  };

  const captureRole = (roleID) => {
    setRole(roleID);
  };
  const [currentDateList, setCurrentDateList] = useState(
    getFridayUniversalFormat(new Date())
  );
  //username logic
  /*  const username = ReactSession.get("username")
    ? ReactSession.get("username")
    : firstUserName; */
  let [rag1, setRag1] = useState("");
  let [rag2, setRag2] = useState("");
  let [rag3, setRag3] = useState("");
  let [rag4, setRag4] = useState("");
  let [rag5, setRag5] = useState("");
  let [rag6, setRag6] = useState("");
  let [rag7, setRag7] = useState("");

  let [rag1C, setRag1C] = useState("");
  let [rag2C, setRag2C] = useState("");
  let [rag3C, setRag3C] = useState("");
  let [rag4C, setRag4C] = useState("");
  let [rag5C, setRag5C] = useState("");
  let [rag6C, setRag6C] = useState("");
  let [rag7C, setRag7C] = useState("");

  let [ragSC, setRagSC] = useState("");
  let [ragTC, setRagTC] = useState("");
  let [ragTP, setRagTP] = useState("");

  const [role, setRole] = useState("");

  const [roleID, setRoleID] = useState(sessionStorage.getItem("roleID") === "");
  const [userID, setUserID] = useState(sessionStorage.getItem("userID") === "");
  const [firstTimeUserID, setFirstTimeUserID] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const [programmeID, setProgrammeID] = useState(
    sessionStorage.getItem("programmeID") === ""
  );
  const [programmeName, setProgrammeName] = useState("");

  const [programmes, setProgrammes] = useState([]);
  const [programmeList, setProgrammeList] = useState([]);
  let listOfProgrammes = [];

  const [projectID, setProjectID] = useState(
    sessionStorage.getItem("projectID") === ""
  );
  const [projectName, setProjectName] = useState(
    sessionStorage.getItem("projectName") === ""
  );

  const [projects, setProjects] = useState([]);
  const [projectList, setProjectList] = useState([]);
  let listOfProjects = [];

  const [updateReportList, setUpdateReportList] = useState(0);

  // guidance logic

  const WORK_AND_SCHEDULE = (
    <text>
      1. Since the last assessment, has the client reviewed all completed
      deliverables and formally accepted them within the specified timeframe?
      <br />
      2.Are any of the key milestones overdue or have key milestones been
      completed late during this reporting period, as compared to the approved
      baseline plan? <br />
      3. Is the future schedule adjusted to reflect the variance between actual
      and current baseline planned performance? <br />
      4. Have you started working on project activities prior to having formal
      client approval of prerequisite milestones for those activities? <br />
      5. Are contract dependencies (internal IBM, subcontractor and client)
      actively managed to prevent scope, schedule, or cost changes? <br />
      6. Is the client or delivery organization performance (e.g. GBS/AS, GTS,
      GBS practices, subcontractor, etc.) placing the currently approved
      baseline schedule, deliverable dates, or cost budgets in jeopardy of being
      late or overrun? <br />
      7. Does the project use external suppliers contracted by IBM ? <br />
      8. Do you require formal IBM acceptance of all milestones and deliverables
      provided by your external suppliers? <br />
      9. Since the last update, have any of your external suppliers missed their
      schedule or cost commitments?
    </text>
  );
  const SCOPE_IS_REALISTIC = (
    <text>
      1. Are schedule, costs, and scope components adjusted for each approved
      change request? <br />
      2. Since your last update, has any work been started prior to obtaining a
      signed: Letter of Agreement (LOA), Contract, Statement of Work (SOW),
      Project Change Request (PCR) for that scope of work, or other management
      approved pre- contract authority. <br />
      3. Is the scope of work tightly and clearly defined, and does it provide
      an adequate baseline against which to identify and manage changes to
      scope? <br />
      4. Are all of the nonfunctional requirements (availability, performance,
      capacity, scalability, maintainablity, supportability, security, and
      privacy) documented, approved by the client and reflected in the system
      design?
      <br /> 5. Have the client authorized resources or stakeholders formally
      approved all of the business requirements? <br />
      6. Have the client authorized resources or stakeholders formally approved
      all of the system requirements?
    </text>
  );

  const TEAM_IS_PERFORMING = (
    <text>
      1. What is your level of confidence in the team's ability to achieve their
      responsibilities in support of the client's project schedule and
      milestones? <br />
      2. How well do the working conditions, facilities, and supporting
      resources enable productive and effective work and teamwork? <br />
      3. How strong is the morale, motivation, energy, and collaboration across
      the sub-teams (IBM, client and subcontractor)? <br />
      4. Do you currently have or anticipate any unfilled or under skilled
      resources, including potential key resource losses, that may impact our
      ability to deliver the to the contract SOW?
    </text>
  );

  const RISKS_MITIGATED = (
    <text>
      1. Are there any open high impact or high probability risks without a
      mitigation plan? <br />
      2. How many high and medium risks are there in the Risk Log? <br />
      3. Is a documented and client approved Risk Management process deployed?
    </text>
  );

  const BUSINESS_BENEFITS = (
    <text>
      1. Please rate your understanding of how the project will deliver the
      client's benefit case. <br />
      2. Is a process or work product for tracing client business requirements
      to the final solution and its validation defined, implemented and
      maintained? <br />
      3. Please rate your understanding of how the project will deliver the
      client's benefit case. <br />
      4. Is a process or work product for tracing client business requirements
      to the final solution and its validation defined, implemented and
      maintained?
    </text>
  );

  const ORGANISATION_BENEFITS = (
    <text>
      1. Since the last update have financial penalties been levied against IBM
      for missed SLAs, milestones or other performance agreements?
      <br />
      2. Are there currently any invoices unpaid by the client for longer than
      allowed by the payment terms in the contract? <br />
      3. Is there revenue and/or cost that has not been billed to the client
      according to the invoicing plan for the contract?
    </text>
  );

  const STAKEHOLDERS_COMMITED = (
    <text>
      1. Is there an effective steering committee or project governance
      organization in place that is staffed, funded for the duration of the
      project, meets regularly, takes actions and makes decisions to mitigate
      risks?
      <br />
      2. How many countries are engaged or scheduled to engage in one or more
      IBM or Client roles on this project? <br />
      3. Do the client sponsor's actions and decisions reflect continuous and
      active commitment to the success of the project? <br />
      4. Is the right client sponsor, with appropriate authority, engaged, and
      effective in the project and do the client sponsor's actions and decisions
      reflect continuous and active commitment to the success of the project?
      <br />
      5. Please rate the effectiveness of the overall communications between the
      client and the IBM team. <br />
      6. Please rate the effectiveness of IBM at managing the client's overall
      expectations. <br />
      7. Please rate the client's working relationship and attitude toward IBM.{" "}
      <br />
      8. Is the client meeting their obligations to provide information, access,
      staffing and other obligations required to successfully complete the
      project on schedule and cost?
    </text>
  );
  const STATUS_SUMMARY = (
    <text>
      Provide a summary status of the project since the last reporting period,
      highlighting key points (positive or negative) if appropriate. Providing
      updated comments on any longer-term items that have been raised in
      previous reports.
    </text>
  );
  const RISKS_AND_ISSUES = (
    <text>
      List of up to 5 risks and/or issues that you wish to raise for the
      project. Provide a summary of each and the actions being taken to resolve
      them. Highlight any specific Risk and/or Issues you would like to escalate
      to senior management.
    </text>
  );
  const PLANNED_NEXT = (
    <text>
      Provide a summary of the activities planned for the next reporting period,
      highlighting key points (positive or negative) that are planned to be
      achieved or encountered. Summarise activities being taken to resolve
      items, risks or issues from the previous summary sections.
    </text>
  );

  //GraphQL Async Functions

  async function getUsers(Username) {
    try {
      const usersData = await API.graphql(
        graphqlOperation(listUsers, {
          filter: { email_address: { eq: Username } },
        })
      );
      if (usersData.data.listUsers.items[0] === undefined) {
        return;
      }
      setUserEmail(Username);
      let userInfo = usersData.data.listUsers.items[0];
      sessionStorage.setItem("userID", userInfo.id);
      setFirstTimeUserID(userInfo.id);
      sessionStorage.setItem("roleID", userInfo.role.id);
    } catch (err) {
      console.log("error fetching!", err);
    }
  }
  ////////////////////////////////////////////////////////
  async function getProgrammes(UserID) {
    try {
      const programmeData = await API.graphql(
        graphqlOperation(listUserProgrammes, {
          filter: { userID: { eq: UserID } },
        })
      );
      const programmes = programmeData.data.listUserProgrammes;
      setProgrammes(programmes);

      for (let i = 0; i < programmes.items.length; i++) {
        const usersProgrammes = await API.graphql(
          graphqlOperation(getUserProgramme, { id: programmes.items[i].id })
        );

        const programmeInfo = usersProgrammes.data.getUserProgramme;
        listOfProgrammes.push({
          description: <p>{programmeInfo.programme.programme_name}</p>,
          onClick: () => {
            sessionStorage.setItem("programmeID", programmeInfo.programmeID);
            sessionStorage.setItem(
              "programmeName",
              programmeInfo.programme.programme_name
            );
            navigate("/projects");
          },
          title: programmeInfo.programme.programme_name,
        });
      }

      setProgrammeList(listOfProgrammes);
    } catch (err) {
      console.log("error fetching!", err);
    }
  }

  /////////////////////////////////////////////////
  async function getProjects(programmeID) {
    try {
      const projectsDataForUser = await API.graphql(
        graphqlOperation(listProjects, {
          filter: { programmeProjectsId: { eq: programmeID } },
        })
      );

      const projects = projectsDataForUser.data.listProjects;
      setProjects(projects);
      for (let i = 0; i < projects.items.length; i++) {
        listOfProjects.push({
          description: <p>{projects.items[i].project_name}</p>,
          onClick: () => {
            sessionStorage.setItem("projectID", projects.items[i].id);
            sessionStorage.setItem(
              "projectName",
              projects.items[i].project_name
            );
            navigate("/Reports");
          },
          title: projects.items[i].project_name,
        });
      }
      setProjectList(listOfProjects);
    } catch (err) {
      console.log("error fetching!", err);
    }
  }
  /////////////////////////////////////////////////
  async function getUserProjects(userID) {
    try {
      const projectsDataForUser = await API.graphql(
        graphqlOperation(listUserProjects, {
          filter: { userID: { eq: userID } },
        })
      );

      const projects = projectsDataForUser.data.listUserProjects;
      setProjects(projects);

      for (let i = 0; i < projects.items.length; i++) {
        listOfProjects.push({
          description: <p>{projects.items[i].project.project_name}</p>,
          onClick: () => {
            sessionStorage.setItem("projectID", projects.items[i].project.id);
            sessionStorage.setItem(
              "projectName",
              projects.items[i].project.project_name
            );
            navigate("/Reports");
          },
          title: projects.items[i].project.project_name,
        });
      }
      setProjectList(listOfProjects);
    } catch (err) {
      console.log("error fetching!", err);
    }
  }

  //provider
  return (
    <DashboardContext.Provider
      value={{
        pageNumber,
        setPageNumber,
        getFriday,
        getSelectedFriday,
        getFridayListFormat,
        getFridayUniversalFormat,
        currentDateList,
        defaultAWSDate,
        captureRole,
        WORK_AND_SCHEDULE,
        SCOPE_IS_REALISTIC,
        TEAM_IS_PERFORMING,
        RISKS_MITIGATED,
        BUSINESS_BENEFITS,
        ORGANISATION_BENEFITS,
        STAKEHOLDERS_COMMITED,
        STATUS_SUMMARY,
        RISKS_AND_ISSUES,
        PLANNED_NEXT,
        open: [open, setOpen],
        rag1,
        setRag1,
        rag2,
        setRag2,
        rag3,
        setRag3,
        rag4,
        setRag4,
        rag5,
        setRag5,
        rag6,
        setRag6,
        rag7,
        setRag7,
        updateReportList,
        setUpdateReportList,
        rag1C: [rag1C, setRag1C],
        rag2C: [rag2C, setRag2C],
        rag3C: [rag3C, setRag3C],
        rag4C: [rag4C, setRag4C],
        rag5C: [rag5C, setRag5C],
        rag6C: [rag6C, setRag6C],
        rag7C: [rag7C, setRag7C],
        ragSC: [ragSC, setRagSC],
        ragTC: [ragTC, setRagTC],
        ragTP: [ragTP, setRagTP],
        //username,
        // projects,
        getProjects,
        projectList,
        programmeList,
        getUserProjects,
        getUsers,
        getProgrammes,
        // username,
        // setUsername,
        role,
        setRole,
        roleID,
        setRoleID,
        userID,
        setUserID,
        firstTimeUserID,
        userEmail,
        programmeID,
        programmeName,
        programmes,
        projects,
        projectName,
        projectID,
      }}
    >
      {props.children}
    </DashboardContext.Provider>
  );
};

DashboardContextProvider.propTypes = {
  children: PropTypes.node,
};

export default DashboardContextProvider;
