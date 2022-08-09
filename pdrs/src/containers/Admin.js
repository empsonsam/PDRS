import React, { useEffect, useState, useRef } from "react";
import Header from "../components/Header/Header";
import { useNavigate } from "react-router-dom";
import { TextInput, Button, Dropdown } from "carbon-addons-iot-react";
import "./Admin.css";
import { API, graphqlOperation } from "aws-amplify";
import {
  createUser,
  createProject,
  updateProject,
  createProgramme,
  createUserProgramme,
  createUserProject,
  deleteUser,
  deleteUserProject,
  deleteProgramme,
  deleteProject,
  deleteUserProgramme,
  deleteReport,
} from "../graphql/mutations";
import {
  listUsers,
  listProjects,
  listProgrammes,
  listRoles,
  listReports,
  getProject,
  getUser,
  listUserProjects,
  getProgramme,
} from "../graphql/queries";
import AdminPassiveModal from "../components/AdminPassiveModal/AdminPassiveModal";
import { CSVLink } from "react-csv";
import { useCSVDownloader } from "react-papaparse";

const Admin = () => {
  // ***************************
  // ***************************
  const [openModal, setOpenModal] = useState(false);
  const [confirmation, setConfirmation] = useState("");
  const [openModal2, setOpenModal2] = useState(false);
  const [confirmation2, setConfirmation2] = useState("");
  const [csvData, setCsvData] = useState("");
  const { CSVDownloader, Type } = useCSVDownloader();
  const csvLink = useRef();
  const csvLink1 = useRef();
  const csvLink2 = useRef();

  // *************************** Getting weekending date *****

  const getFriday = (current) => {
    const today = new Date(current);
    const first = today.getDate() - today.getDay() + 1;
    const fifth = first + 4;

    const createdAt = new Date(today.setDate(fifth));
    //const createdAt = friday.toDateString

    return createdAt.toLocaleDateString("en-GB", {
      weekday: "long",
      day: "numeric",
      month: "long",
    });
  };

  const getFriday2 = (current) => {
    const today = new Date(current);
    const first = today.getDate() - today.getDay() + 1;
    const fifth = first + 4;

    const createdAt = new Date(today.setDate(fifth));
    //const createdAt = friday.toDateString

    return createdAt.toLocaleDateString("en-GB", {
      weekday: "numeric",
      day: "numeric",
      month: "numeric",
    });
  };

  // *************************** Verify email addresss ******

  const verifyEmail = () => {
    fetch(
      "https://v5vy8i40pd.execute-api.eu-west-2.amazonaws.com/verifyEmail",
      {
        mode: "no-cors",
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          emailAddress: email.toLowerCase(),
        }),
      }
    );
  };

  // *************************** PROGRAMME *******************
  // *********************************************************
  const [programmeId, setProgrammeId] = useState([]);
  const [programmeName, setProgrammeName] = useState("");
  const [programmeList, setProgrammeList] = useState([]);
  const [programmeAdded, setProgrammeAdded] = useState(false);

  async function populateProgrammeList() {
    try {
      let theList = await API.graphql(graphqlOperation(listProgrammes));
      setProgrammeList(theList.data.listProgrammes.items);
    } catch (err) {
      console.log("error fetching!", err);
    }
  }

  async function addProgramme() {
    try {
      if (!programmeName) {
        alert("All Fields Required");
        return;
      }
      await API.graphql(
        graphqlOperation(createProgramme, {
          input: {
            programme_name: programmeName,
          },
        })
      );
    } catch (err) {
      console.log(err);
    }
    setProgrammeAdded(true);
  }
  const submitProgramme = () => {
    if (programmeName.trim() === "") {
      return;
    }
    addProgramme();
    setConfirmation(`Successfully added Programme ${programmeName}`);
    populateProgrammeList();
    setProgrammeAdded(false);
    setProgrammeName("");
    setOpenModal(true);
  };
  function handleProgrammeSelection(data) {
    setProgrammeId(data.selectedItem.id);
    setProgrammeName(data.selectedItem.programme_name);
  }

  // ************************ PROJECT ************************
  // *********************************************************
  const [projectId, setProjectId] = useState([]);
  const [projectName, setProjectName] = useState("");
  const [projectList, setProjectList] = useState([]);
  const [projectAdded, setProjectAdded] = useState(false);
  const [allUserProjects, setAllUserProjects] = useState();
  const [specificUserProject, setSpecificUserProject] = useState([]);

  async function populateProjectList() {
    try {
      let theList = await API.graphql(graphqlOperation(listProjects));
      setProjectList(theList.data.listProjects.items);
      //console.log(theList)
    } catch (err) {
      console.log("error fetching!", err);
    }
  }
  async function addProject() {
    try {
      if (!projectName) {
        alert("All Fields Required");
        return;
      }
      await API.graphql(
        graphqlOperation(createProject, {
          input: {
            project_name: projectName,
          },
        })
      );
    } catch (err) {
      console.log(err);
    }
    setProjectAdded(true);
  }

  const submitProject = () => {
    if (projectName.trim() === "") {
      return;
    }
    addProject();
    setConfirmation(`Successfully added Project ${projectName}`);
    populateProjectList();
    setProjectAdded(false);
    setProjectName("");
    setOpenModal(true);
  };

  async function addProjectToProgramme() {
    if (projectName.trim() === "" || programmeName.trim() === "") {
      alert("All Fields Required");
      return;
    }

    try {
      const projectProgramme = await API.graphql(
        graphqlOperation(getProject, { id: projectId })
      );

      if (projectProgramme.data.getProject.programme) {
        alert("Project already added to Programme!");
        return;
      }
    } catch (err) {
      console.log(err);
    }

    try {
      await API.graphql(
        graphqlOperation(updateProject, {
          input: {
            id: projectId,
            programmeProjectsId: programmeId,
          },
        })
      );
    } catch (err) {
      console.log(err);
    }
  }

  async function addProjectToProgramme2() {
    try {
      const projectProgramme = await API.graphql(
        graphqlOperation(getProject, { id: currentProjects2.id })
      );
    } catch (err) {
      console.log(err);
    }
    ///////////////////////////////////////////////////////////

    try {
      await API.graphql(
        graphqlOperation(updateProject, {
          input: {
            id: currentProjects2.id,
            programmeProjectsId: programmeId,
          },
        })
      );
    } catch (err) {
      console.log(err);
    }

    setOpenModal(true);
    setConfirmation(`Project has been reassigned.`);

    // if(currentProjects2.programme.id===programmeId){
    //   setOpenModal(true);
    //   setConfirmation(
    //     `Project is already assigned to this programme, please select another programme to reassign to, page will refresh.`
    //   );
    // } else {
    //   setOpenModal(true);
    //   setConfirmation(
    //     `Project has been reassigned, page will refresh`
    //   );

    // }

    // setTimeout(function(){
    //   window.location.reload(1);
    // }, 3000);
  }

  function handleProjectSelection(data) {
    setProjectId(data.selectedItem.id);
    setProjectName(data.selectedItem.project_name);
  }

  const submitAddProjectToProgramme = () => {
    addProjectToProgramme();
    setConfirmation(`Successfully added ${projectName} to ${programmeName}`);
    setOpenModal(true);
  };

  function display(id) {
    const temp = [];

    for (
      var i = 0;
      i < allUserProjects.data.listUserProjects.items.length;
      i++
    ) {
      if (allUserProjects.data.listUserProjects.items[i].userID === id) {
        temp.push(allUserProjects.data.listUserProjects.items[i]);
      }
    }

    setSpecificUserProject(temp);
  }

  function handleUserSelection(data) {
    //setCurrentProject(null)
    setUserId(data.selectedItem.id);
    display(data.selectedItem.id);
    setFirstName(data.selectedItem.first_name);
    setLastName(data.selectedItem.last_name);
    setEmail(data.selectedItem.email_address);
  }
  async function submitAssignProjectToUser() {
    try {
      const GetProject = `query MyQuery {
        getProject(id:"${projectId}") {
          programme {
            id
          }
        }
      }`;
      const GetUserProgrammeQuery = `query MyQuery {
        getUser(id: "${userId}") {
          programmes {
            items {
              programmeID              
            }
          }
          projects {
            items {
              projectID              
            }
          }
        }
      }`;
      let userProgrammeAndProjectIds = await API.graphql(
        graphqlOperation(GetUserProgrammeQuery)
      );
      let projectInfo = await API.graphql(graphqlOperation(GetProject));
      const programmeID = projectInfo.data.getProject.programme.id;
      setProgrammeId(programmeID);
      const userProjectList =
        userProgrammeAndProjectIds.data.getUser.projects.items;
      if (userProjectList.find((element) => element.projectID === projectId)) {
        setConfirmation(
          `User ${email} already has project ${projectName} assigned to them`
        );
        setOpenModal(true);
        return;
      }
      await API.graphql(
        graphqlOperation(createUserProject, {
          input: { projectID: `${projectId}`, userID: `${userId}` },
        })
      );
      // const userProgrammeList =
      //   userProgrammeAndProjectIds.data.getUser.programmes.items;
      // if (
      //   !userProgrammeList.find(
      //     (element) => element.programmeID === programmeId
      //   )
      // ) {
      //   await API.graphql(
      //     graphqlOperation(createUserProgramme, {
      //       input: { programmeID: `${programmeId}`, userID: `${userId}` },
      //     })
      //   );
      // }
      setConfirmation(`Successfully added ${projectName} to ${email}`);
      setOpenModal(true);

      //   setTimeout(function(){
      //     window.location.reload(1);
      //  }, 3000);
    } catch (err) {
      console.log("error fetching!", err);
    }
  }

  async function submitAssignProgrammeToUser() {
    try {
      const GetUserProgrammeQuery = `query MyQuery {
        getUser(id: "${userId}") {
          programmes {
            items {
              programmeID              
            }
          }
        }
      }`;
      let userProgrammeIds = await API.graphql(
        graphqlOperation(GetUserProgrammeQuery)
      );

      const userProgrammeList = userProgrammeIds.data.getUser.programmes.items;
      if (
        userProgrammeList.find((element) => element.programmeID === programmeId)
      ) {
        setConfirmation(
          `Programme ${programmeName} already exists on user ${email}`
        );
        setOpenModal(true);
        return;
      }

      await API.graphql(
        graphqlOperation(createUserProgramme, {
          input: { programmeID: `${programmeId}`, userID: `${userId}` },
        })
      );

      setConfirmation(`Successfully added ${programmeName} to ${email}`);
      setOpenModal(true);
      console.log("programme added");
    } catch (err) {
      console.log("error fetching!", err);
    }
  }

  // ************************ ROLE ************************
  // ******************************************************
  const [roleId, setRoleId] = useState("");
  const [roleList, setRoleList] = useState([]);
  async function populateRoleList() {
    try {
      let theList = await API.graphql(graphqlOperation(listRoles));
      setRoleList(theList.data.listRoles.items);
    } catch (err) {
      console.log("error fetching!", err);
    }
  }
  // ************************ USER ************************
  // ******************************************************
  const [userId, setUserId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [userList, setUserList] = useState([]);
  const [userList2, setUserList2] = useState([1, 2, 3, 4]);
  async function addUser() {
    try {
      if (!(firstName || lastName || email)) {
        alert("first name, last name and email fields are required");
        return;
      }
      await API.graphql(
        graphqlOperation(createUser, {
          input: {
            first_name: firstName,
            last_name: lastName,
            email_address: email.toLowerCase(),
            roleUsersId: roleId ? roleId : "1",
          },
        })
      );
    } catch (err) {
      console.log(err);
    }
  }

  const submitUser = () => {
    addUser();
    verifyEmail();
    setConfirmation(
      `Successfully added ${firstName} ${lastName} as a user with the email ${email}`
    );
    setFirstName("");
    setLastName("");
    setEmail("");
    populateUserList();
    setOpenModal(true);
  };

  function handleRoleSelection(data) {
    setRoleId(data.selectedItem.id);
  }

  async function populateUserList() {
    try {
      let theList = await API.graphql(graphqlOperation(listUsers));

      setUserList(theList.data.listUsers.items);
    } catch (err) {
      console.log("error fetching!", err);
    }
  }

  async function getReports() {
    const theReports = await API.graphql(graphqlOperation(listReports));

    let csv = [];
    let csvPrev = [];
    let csvA = [];

    const addReportObject = (...args) => {
      return {
        "Programme Name": args[0],
        "Project Name": args[1],
        "Project Manager": `${args[2]} ${args[3]}`,
        "Submitted By": `${args[2]} ${args[3]}`,
        RAG1: args[4],
        "RAG1 Comment": args[5],
        RAG2: args[6],
        "RAG2 Comment": args[7],
        RAG3: args[8],
        "RAG3 Comment": args[9],
        RAG4: args[10],
        "RAG4 Comment": args[11],
        RAG5: args[12],
        "RAG5 Comment": args[13],
        RAG6: args[14],
        "RAG6 Comment": args[15],
        RAG7: args[16],
        "RAG7 Comment": args[17],
        "Status Summary": args[18],
        "Risks & Issues": args[19],
        "Planned Next": args[20],
        "Date Submitted": args[21],
        "For Week Ending": args[22],
      };
    };

    const regEx = /R|A|G|r|a|g/;
    theReports.data.listReports.items.forEach((report) => {
      if (
        !(
          report.user &&
          report.project.project_name &&
          report.assessment_1_rag &&
          regEx.test(report.assessment_1_rag[0]) &&
          report.assessment_2_rag &&
          regEx.test(report.assessment_2_rag[0]) &&
          report.assessment_3_rag &&
          regEx.test(report.assessment_3_rag[0]) &&
          report.assessment_4_rag &&
          regEx.test(report.assessment_4_rag[0]) &&
          report.assessment_5_rag &&
          regEx.test(report.assessment_5_rag[0]) &&
          report.assessment_6_rag &&
          regEx.test(report.assessment_6_rag[0]) &&
          report.assessment_7_rag &&
          regEx.test(report.assessment_7_rag[0])
        )
      )
        return;

      report.assessment_1_comment = report.assessment_1_comment.replaceAll(
        '"',
        "'"
      );
      report.assessment_2_comment = report.assessment_2_comment.replaceAll(
        '"',
        "'"
      );
      report.assessment_3_comment = report.assessment_3_comment.replaceAll(
        '"',
        "'"
      );
      report.assessment_4_comment = report.assessment_4_comment.replaceAll(
        '"',
        "'"
      );
      report.assessment_5_comment = report.assessment_5_comment.replaceAll(
        '"',
        "'"
      );
      report.assessment_6_comment = report.assessment_6_comment.replaceAll(
        '"',
        "'"
      );
      report.assessment_7_comment = report.assessment_7_comment.replaceAll(
        '"',
        "'"
      );

      const today = new Date();
      const today1 = new Date();
      const first = today.getDate() - today.getDay() + 1;
      const fifth = first + 4;
      const backThree = first - 3;
      let lastFriday = new Date(today1.setDate(backThree));
      let friday = new Date(today.setDate(fifth));

      friday = friday.toLocaleDateString("en-GB", {
        weekday: "long",
        day: "numeric",
        month: "long",
      });

      lastFriday = lastFriday.toLocaleDateString("en-GB", {
        weekday: "long",
        day: "numeric",
        month: "long",
      });

      const progNameQuery = `query MyQuery {
        getProgramme(id: "${report.project.programmeProjectsId}") {
          programme_name
        }
      }`;

      if (friday === getFriday(report.createdAt)) {
        progNameFunction(progNameQuery).then((value) => {
          csv.push(
            addReportObject(
              value,
              report.project.project_name,
              report.user.first_name,
              report.user.last_name,
              report.assessment_1_rag.toUpperCase(),
              report.assessment_1_comment,
              report.assessment_2_rag.toUpperCase(),
              report.assessment_2_comment,
              report.assessment_3_rag.toUpperCase(),
              report.assessment_3_comment,
              report.assessment_4_rag.toUpperCase(),
              report.assessment_4_comment,
              report.assessment_5_rag.toUpperCase(),
              report.assessment_5_comment,
              report.assessment_6_rag.toUpperCase(),
              report.assessment_6_comment,
              report.assessment_7_rag.toUpperCase(),
              report.assessment_7_comment,
              report.status_summary,
              report.risks_and_issues,
              report.planned_next,
              new Date(report.updatedAt).toLocaleDateString("en-GB"),
              new Date(report.createdAt).toLocaleDateString("en-GB")
            )
          );
        });
      }
      progNameFunction(progNameQuery).then((value) => {
        csvA.push(
          addReportObject(
            value,
            report.project.project_name,
            report.user.first_name,
            report.user.last_name,
            report.assessment_1_rag.toUpperCase(),
            report.assessment_1_comment,
            report.assessment_2_rag.toUpperCase(),
            report.assessment_2_comment,
            report.assessment_3_rag.toUpperCase(),
            report.assessment_3_comment,
            report.assessment_4_rag.toUpperCase(),
            report.assessment_4_comment,
            report.assessment_5_rag.toUpperCase(),
            report.assessment_5_comment,
            report.assessment_6_rag.toUpperCase(),
            report.assessment_6_comment,
            report.assessment_7_rag.toUpperCase(),
            report.assessment_7_comment,
            report.status_summary,
            report.risks_and_issues,
            report.planned_next,
            new Date(report.updatedAt).toLocaleDateString("en-GB"),
            new Date(report.createdAt).toLocaleDateString("en-GB")
          )
        );
      });

      //getFriday(report.createdAt)

      if (lastFriday === getFriday(report.createdAt)) {
        progNameFunction(progNameQuery).then((value) => {
          csvPrev.push(
            addReportObject(
              value,
              report.project.project_name,
              report.user.first_name,
              report.user.last_name,
              report.assessment_1_rag.toUpperCase(),
              report.assessment_1_comment,
              report.assessment_2_rag.toUpperCase(),
              report.assessment_2_comment,
              report.assessment_3_rag.toUpperCase(),
              report.assessment_3_comment,
              report.assessment_4_rag.toUpperCase(),
              report.assessment_4_comment,
              report.assessment_5_rag.toUpperCase(),
              report.assessment_5_comment,
              report.assessment_6_rag.toUpperCase(),
              report.assessment_6_comment,
              report.assessment_7_rag.toUpperCase(),
              report.assessment_7_comment,
              report.status_summary,
              report.risks_and_issues,
              report.planned_next,
              new Date(report.updatedAt).toLocaleDateString("en-GB"),
              new Date(report.createdAt).toLocaleDateString("en-GB")
            )
          );
        });
      }
    });
    setCsvData(csv);
    setCsvPrevious(csvPrev);
    setCsvAll(csvA);
  }

  async function progNameFunction(query) {
    const progName = await API.graphql(graphqlOperation(query));
    return progName.data.getProgramme.programme_name;
  }

  ////////////////////////////////////

  async function revokeUSER() {
    const user = await API.graphql(
      graphqlOperation(getUser, { id: currentUser.id })
    );

    console.log(user.data.getUser);

    for (let z = 0; z < user.data.getUser.programmes.items.length; z++) {
      await API.graphql(
        graphqlOperation(deleteUserProgramme, {
          input: { id: `${user.data.getUser.programmes.items[z].id}` },
        })
      );
    }

    for (let i = 0; i < user.data.getUser.reports.items.length; i++) {
      //console.log(user.data.getUser.reports.items[i].id)

      await API.graphql(
        graphqlOperation(deleteReport, {
          input: { id: `${user.data.getUser.reports.items[i].id}` },
        })
      );
    }

    for (let y = 0; y < user.data.getUser.projects.items.length; y++) {
      //console.log(user.data.getUser.projects.items[y].id)

      await API.graphql(
        graphqlOperation(deleteUserProject, {
          input: { id: `${user.data.getUser.projects.items[y].id}` },
        })
      );
    }

    //console.log(userId)

    await API.graphql(
      graphqlOperation(deleteUser, {
        input: { id: `${currentUser.id}` },
      })
    );

    setConfirmation(`User has been removed from system`);
    populateUserList();
    setUserList(userList);
    setFirstName("");
    setLastName("");
    setEmail("");

    setOpenModal(true);
    setCurrentUser(null);

    //   setTimeout(function(){
    //     window.location.reload(1);
    //  }, 3000);
  }

  async function revokeUSER2() {
    const user = await API.graphql(
      graphqlOperation(getUser, { id: currentUser.id })
    );

    for (let z = 0; z < user.data.getUser.programmes.items.length; z++) {
      await API.graphql(
        graphqlOperation(deleteUserProgramme, {
          input: { id: `${user.data.getUser.programmes.items[z].id}` },
        })
      );
    }

    // for(let i=0; i<user.data.getUser.reports.items.length;i++){

    //   //console.log(user.data.getUser.reports.items[i].id)

    //   await API.graphql(
    //     graphqlOperation(deleteReport, {
    //       input: { id: `${user.data.getUser.reports.items[i].id}` },
    //     })
    //   );

    // }

    for (let y = 0; y < user.data.getUser.projects.items.length; y++) {
      //console.log(user.data.getUser.projects.items[y].id)

      await API.graphql(
        graphqlOperation(deleteUserProject, {
          input: { id: `${user.data.getUser.projects.items[y].id}` },
        })
      );
    }

    //console.log(userId)

    // await API.graphql(
    //   graphqlOperation(deleteUser, {
    //     input: { id: `${currentUser.id}` },
    //   })
    // );

    setConfirmation(`User has been revoked from system`);
    populateUserList();
    setUserList(userList);
    setFirstName("");
    setLastName("");
    setEmail("");

    setOpenModal(true);
    setCurrentUser(null);

    //   setTimeout(function(){
    //     window.location.reload(1);
    //  }, 3000);
  }

  async function revokeProject() {
    const project = await API.graphql(
      graphqlOperation(getProject, { id: currentProjects.id })
    );

    //console.log(project.data.getProject)

    for (let i = 0; i < project.data.getProject.reports.items.length; i++) {
      await API.graphql(
        graphqlOperation(deleteReport, {
          input: { id: `${project.data.getProject.reports.items[i].id}` },
        })
      );
    }

    for (let y = 0; y < project.data.getProject.users.items.length; y++) {
      await API.graphql(
        graphqlOperation(deleteUserProject, {
          input: { id: `${project.data.getProject.users.items[y].id}` },
        })
      );
    }

    await API.graphql(
      graphqlOperation(deleteProject, {
        input: { id: `${currentProjects.id}` },
      })
    );

    setConfirmation(`Project has been removed from system`);

    setCurrentProjects(null);
    setOpenModal(true);
    populateProjectList();

    //   setTimeout(function(){
    //     window.location.reload(1);
    //  }, 3000);
  }

  async function revokeProgramme() {
    const prog = await API.graphql(
      graphqlOperation(getProgramme, { id: currentProgramme.id })
    );

    if (prog.data.getProgramme.projects.items.length > 0) {
      setConfirmation(
        `Please reassign the projects attached to this programme or delete them first`
      );
      setOpenModal(true);
      setCurrentProgramme(null);
      populateProgrammeList();
    } else {
      for (let z = 0; z < prog.data.getProgramme.users.items.length; z++) {
        await API.graphql(
          graphqlOperation(deleteUserProgramme, {
            input: { id: `${prog.data.getProgramme.users.items[z].id}` },
          })
        );
      }

      await API.graphql(
        graphqlOperation(deleteProgramme, {
          input: { id: `${currentProgramme.id}` },
        })
      );

      setConfirmation(`Programme has been removed from system`);

      setCurrentProgramme(null);
      setOpenModal(true);
      populateProgrammeList();
    }

    //console.log(currentProjects)

    //   setTimeout(function(){
    //     window.location.reload(1);
    //  }, 3000);
  }

  async function destroyUserProject() {
    try {
      await API.graphql(
        graphqlOperation(deleteUserProject, {
          input: { id: `${currentProject.id}` },
        })
      );

      setCurrentProject(null);
      setConfirmation2(`Project has been unlinked from the user`);

      setOpenModal2(true);
    } catch (e) {
      console.log("error");
    }

    const temp = [];

    for (
      var i = 0;
      i < allUserProjects.data.listUserProjects.items.length;
      i++
    ) {
      if (allUserProjects.data.listUserProjects.items[i].userID === userId) {
        temp.push(allUserProjects.data.listUserProjects.items[i]);
      }
    }

    setSpecificUserProject(temp);

    //   setTimeout(function(){
    //     window.location.reload(1);
    //  }, 3000);
  }

  ////////////////////

  async function fetchUserProjects() {
    const data = await API.graphql(graphqlOperation(listUserProjects));
    setAllUserProjects(data);
  }

  ///////////////////

  const inputStyling = {
    width: "50%",
    marginTop: "5px",
    marginBottom: "15px",
  };

  useEffect(() => {
    populateProgrammeList();
    populateProjectList();
    populateRoleList();
    populateUserList();
    getReports();
    fetchUserProjects();
  }, []);

  useEffect(() => {
    populateProgrammeList();
  }, [programmeAdded]);

  useEffect(() => {
    populateProjectList();
  }, [projectAdded]);

  // useEffect(() => {
  //   populateUserList();
  // }, [setUserList, userList]);

  useEffect(() => {
    populateUserList();
    fetchUserProjects();
    //destroyUserProject();
    populateProjectList();
    revokeProject();
    revokeProgramme();
    populateProgrammeList();
  }, [openModal]);

  useEffect(() => {
    populateUserList();
    fetchUserProjects();
    destroyUserProject();
    populateProjectList();
    revokeProject();
    revokeProgramme();
    populateProgrammeList();
  }, [openModal2]);

  // Drop down states
  const [currentProject, setCurrentProject] = useState();
  const [projProg, setProjProg] = useState();
  const [currentUser, setCurrentUser] = useState();
  const [currentProjects, setCurrentProjects] = useState();
  const [currentProgramme, setCurrentProgramme] = useState();
  const [currentProjects2, setCurrentProjects2] = useState();
  const [csvActive, setCsvActive] = useState(false);
  const nav = useNavigate();
  const [csvPrevious, setCsvPrevious] = useState();
  const [csvAll, setCsvAll] = useState();

  return (
    <>
      <Header />
      <div className="container2">
        <br></br>
        <br></br>
        <br></br>
        <Button
          onClick={() => {
            window.location.replace(
              "https://dsi-model-office-project-reporting.auth.eu-west-2.amazoncognito.com/oauth2/authorize?client_id=3n574t7su5t071uctrcpoo64ik&response_type=token&scope=openid&redirect_uri=https://rebrand.ly/6tf2ljk"
            );
          }}
        >
          Back
        </Button>
      </div>

      <div className="container">
        <div className="input1">
          <h1>Create Programme</h1>
          <TextInput
            style={inputStyling}
            placeholder="Programme Name"
            onChange={(event) => setProgrammeName(event.target.value)}
            value={programmeName}
          />
          <Button onClick={() => submitProgramme()}>Submit</Button>
        </div>

        <div className="input1">
          <h1>Create Project</h1>
          <TextInput
            style={inputStyling}
            placeholder="Project Name"
            onChange={(event) => setProjectName(event.target.value)}
            value={projectName}
          />
          <Button onClick={() => submitProject()}>Submit</Button>
        </div>
        <div>
          <h1>Add Project to Programme</h1>
          <Dropdown
            style={{ display: "inline-block", width: "25%" }}
            id="userslist"
            items={programmeList}
            itemToString={(item) => (item ? item.programme_name : "")}
            label="Select programme"
            onChange={handleProgrammeSelection}
          />
          <div style={{ display: "inline-block" }}>&nbsp;&nbsp;&nbsp;</div>
          <Dropdown
            style={{ display: "inline-block", width: "25%" }}
            id="projectlist"
            items={projectList}
            itemToString={(item) => (item ? item.project_name : "")}
            label="Select Project"
            onChange={handleProjectSelection}
          />
          <br />
          <br />
          <Button
            onClick={() => {
              submitAddProjectToProgramme();
            }}
          >
            Submit
          </Button>
        </div>
        <div>
          <h1>Create User</h1>
          <TextInput
            style={inputStyling}
            placeholder="First name"
            onChange={(event) => setFirstName(event.target.value)}
            value={firstName}
          />
          <TextInput
            style={inputStyling}
            placeholder="Last name"
            onChange={(event) => setLastName(event.target.value)}
            value={lastName}
          />
          <TextInput
            style={inputStyling}
            placeholder="Email address"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />
          <Dropdown
            style={{ display: "inline-block", width: "25%" }}
            id="rolelist"
            items={roleList}
            itemToString={(item) => (item ? item.description : "")}
            label="Select role"
            onChange={handleRoleSelection}
          />
          <br />
          <br />
          <Button onClick={() => submitUser()}>Submit</Button>
        </div>
        <div>
          <h1>Assign Project to User</h1>
          <p>
            Note: Before assigning a project to a user it must be assigned to a
            programme.
          </p>
          <br></br>
          <Dropdown
            style={{ display: "inline-block", width: "25%" }}
            id="userlist"
            items={userList}
            itemToString={(item) => (item ? item.email_address : "")}
            label="Select User"
            onChange={handleUserSelection}
          />
          <div style={{ display: "inline-block" }}>&nbsp;&nbsp;&nbsp;</div>
          <Dropdown
            style={{ display: "inline-block", width: "25%" }}
            id="projectlist"
            items={projectList}
            itemToString={(item) => (item ? item.project_name : "")}
            label="Select Project"
            onChange={handleProjectSelection}
          />
          <br />
          <br />
          <Button
            onClick={() => {
              submitAssignProjectToUser();
            }}
          >
            Submit
          </Button>
        </div>
        <div>
          <h1>Assign Programme to User</h1>
          <Dropdown
            style={{ display: "inline-block", width: "25%" }}
            id="userlist"
            items={userList}
            itemToString={(item) => (item ? item.email_address : "")}
            label="Select User"
            onChange={handleUserSelection}
          />
          <div style={{ display: "inline-block" }}>&nbsp;&nbsp;&nbsp;</div>
          <Dropdown
            style={{ display: "inline-block", width: "25%" }}
            id="programmelist"
            label="Select Programme"
            items={programmeList}
            itemToString={(item) => (item ? item.programme_name : "")}
            onChange={handleProgrammeSelection}
          />
          <div style={{ display: "inline-block" }}>&nbsp;&nbsp;&nbsp;</div>
          <br />
          <br />
          <Button
            onClick={() => {
              submitAssignProgrammeToUser();
            }}
          >
            Submit
          </Button>
        </div>

        <div>
          <br />
          <br />

          <h1>Revoke user</h1>
          <p>
            Note: Revoking a user will keep their data (reports they have
            submitted), but will unassign them from all projects or programmes
            they are attached to.
          </p>
          <br></br>
          <Dropdown
            style={{ display: "inline-block", width: "25%" }}
            id="userlist"
            items={userList}
            itemToString={(item) => (item ? item.email_address : "")}
            label="Select User"
            onChange={({ selectedItem }) => setCurrentUser(selectedItem)}
            selectedItem={currentUser}
          />

          <div style={{ display: "inline-block" }}>&nbsp;&nbsp;&nbsp;</div>
          <br />
          <br />

          <Button
            onClick={() => {
              revokeUSER2();
            }}
          >
            Submit
          </Button>
        </div>

        <div>
          <br />
          <br />

          <h1>Delete user from system</h1>
          <p>
            Warning: Any report submitted by this user will also be deleted. To
            retain data its best to unassign user rather than removing.
          </p>
          <br></br>
          <Dropdown
            style={{ display: "inline-block", width: "25%" }}
            id="userlist"
            items={userList}
            itemToString={(item) => (item ? item.email_address : "")}
            label="Select User"
            onChange={({ selectedItem }) => setCurrentUser(selectedItem)}
            selectedItem={currentUser}
          />

          <div style={{ display: "inline-block" }}>&nbsp;&nbsp;&nbsp;</div>
          <br />
          <br />

          <Button
            onClick={() => {
              revokeUSER();
            }}
          >
            Submit
          </Button>
        </div>

        <div>
          <br />
          <br />

          <h1>Remove project from system</h1>
          <p>
            Warning: All reports within the project will be deleted upon removal
            of project.
          </p>
          <br></br>

          <Dropdown
            style={{ display: "inline-block", width: "25%" }}
            id="projectlists"
            items={projectList}
            itemToString={(item) => (item ? item.project_name : "")}
            label="Select project"
            onChange={({ selectedItem }) => setCurrentProjects(selectedItem)}
            selectedItem={currentProjects}
          />

          <div style={{ display: "inline-block" }}>&nbsp;&nbsp;&nbsp;</div>
          <br />
          <br />

          <Button
            onClick={() => {
              revokeProject();
            }}
          >
            Submit
          </Button>
        </div>

        <div>
          <br />
          <br />

          <h1>Remove programme from system</h1>

          <p>
            Note: Only empty programmes can be removed, please reassign/delete a
            programmes projects before removing.
          </p>
          <br />
          <Dropdown
            style={{ display: "inline-block", width: "25%" }}
            id="proglists"
            items={programmeList}
            itemToString={(item) => (item ? item.programme_name : "")}
            label="Select programme"
            onChange={({ selectedItem }) => setCurrentProgramme(selectedItem)}
            selectedItem={currentProgramme}
          />

          <div style={{ display: "inline-block" }}>&nbsp;&nbsp;&nbsp;</div>
          <br />
          <br />

          <Button
            onClick={() => {
              revokeProgramme();
            }}
          >
            Submit
          </Button>
        </div>

        <div>
          <br />
          <br />

          <h1>Unassign project from user</h1>

          <Dropdown
            style={{ display: "inline-block", width: "25%" }}
            id="userlist"
            items={userList}
            itemToString={(item) => (item ? item.email_address : "")}
            label="Select User"
            onChange={handleUserSelection}
          />

          <div style={{ display: "inline-block" }}>&nbsp;&nbsp;&nbsp;</div>
          <br />
          <br />

          <Dropdown
            style={{ display: "inline-block", width: "25%" }}
            id="projectlist"
            items={specificUserProject}
            itemToString={(item) => (item ? item.project.project_name : "")}
            label="Select project"
            onChange={({ selectedItem }) => setCurrentProject(selectedItem)}
            selectedItem={currentProject}
          />

          <div style={{ display: "inline-block" }}>&nbsp;&nbsp;&nbsp;</div>
          <br />
          <br />

          <Button
            onClick={() => {
              destroyUserProject();
            }}
          >
            Submit
          </Button>
        </div>

        <div>
          <h1>Reassign a project to another programme</h1>
          <Dropdown
            style={{ display: "inline-block", width: "25%" }}
            id="projectlist"
            items={projectList}
            itemToString={(item) => (item ? item.project_name : "")}
            onChange={({ selectedItem }) => setCurrentProjects2(selectedItem)}
            selectedItem={currentProjects2}
            label="Select project"
          />
          <div style={{ display: "inline-block" }}>&nbsp;&nbsp;&nbsp;</div>

          <Dropdown
            style={{ display: "inline-block", width: "25%" }}
            id="userslist"
            items={programmeList}
            itemToString={(item) => (item ? item.programme_name : "")}
            label="Select programme"
            onChange={handleProgrammeSelection}
          />
          <br />
          <br />
          <Button
            onClick={() => {
              addProjectToProgramme2();
            }}
          >
            Submit
          </Button>
        </div>

        <div>
          <h1>Download weekly report data as CSV</h1>
          <p>
            Note: Once pressed it can take upto 5 seconds for download to start.
          </p>
          <br></br>
          <br></br>
          <CSVDownloader
            className="csv-button"
            type={Type.Button}
            filename={"This Week Report Data CSV"}
            bom={true}
            data={csvData}
          >
            Download
          </CSVDownloader>
        </div>

        <div>
          <h1>Download previous week report data as CSV</h1>
          <p>
            Note: Once pressed it can take upto 5 seconds for download to start.
          </p>
          <br></br>
          <br></br>
          <CSVDownloader
            className="csv-button"
            type={Type.Button}
            filename={"Previous Week Report Data CSV"}
            bom={true}
            data={csvPrevious}
          >
            Download
          </CSVDownloader>
        </div>

        <div>
          <h1>Download all report data as CSV</h1>
          <p>
            Note: Once pressed it can take upto 5 seconds for download to start.
          </p>
          <br></br>
          <br></br>
          <CSVDownloader
            className="csv-button"
            type={Type.Button}
            filename={"All Report Data CSV"}
            bom={true}
            data={csvAll}
          >
            Download
          </CSVDownloader>
        </div>

        {openModal && (
          <AdminPassiveModal
            openModal={openModal}
            toggle={setOpenModal}
            message={confirmation}
          />
        )}

        {openModal2 && (
          <AdminPassiveModal
            openModal={openModal2}
            toggle={setOpenModal2}
            message={confirmation2}
          />
        )}
      </div>
    </>
  );
};

export default Admin;
