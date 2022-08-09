import React, { useContext, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./CreateReport.css";

import { action } from "@storybook/addon-actions";
import {
  StatefulPageWizard,
  PageWizardStep,
  PageWizardStepContent,
  PageWizardStepDescription,
  PageWizardStepTitle,
  Dropdown,
  Switch,
  ContentSwitcher,
} from "carbon-addons-iot-react";

import ActiveModal from "../../containers/ActiveModal";
import Header from "../Header/Header";
import Assessment from "../Assessment/Assessment";
import { DashboardContext } from "../../context/DashboardContext";

import { API, graphqlOperation } from "aws-amplify";
import { createReport, updateReport } from "../../graphql/mutations";

import { ReactSession } from "react-client-session";
import { SinglePageView } from "../SinglePageView/SinglePageView";

const CreateFromReportView = () => {
  const { state } = useLocation();

  const [comment1, setComment1] = useState(state.prevDataToFill[0]);
  const [comment2, setComment2] = useState(state.prevDataToFill[1]);
  const [comment3, setComment3] = useState(state.prevDataToFill[2]);
  const [comment4, setComment4] = useState(state.prevDataToFill[3]);
  const [comment5, setComment5] = useState(state.prevDataToFill[4]);
  const [comment6, setComment6] = useState(state.prevDataToFill[5]);
  const [comment7, setComment7] = useState(state.prevDataToFill[6]);
  const [commentSummary, setCommentSummary] = useState(state.prevDataToFill[7]);
  const [commentRisks, setCommentRisks] = useState(state.prevDataToFill[8]);
  const [commentPlanned, setCommentPlanned] = useState(state.prevDataToFill[9]);
  const dashboardContext = useContext(DashboardContext);
  const [open, setOpen] = useState(false);
  const [csvHeaderAndData, setCsvHeaderAndData] = useState("");
  const [isWizardView, setIsWizardView] = useState(true);

  const navigate = useNavigate();

  let csv =
    "RAG1, RAG1 Comment, RAG2, RAG2 Comment, RAG3, RAG3 Comment, RAG4, RAG4 Comment, RAG5, RAG5 Comment, RAG6,RAG6 Comment,RAG7,RAG7 Comment,Status Summary,Risks & Issues,Planned Next\n";

  const reportInitialState = {
    assessment_1_comment: dashboardContext.rag1C,
    assessment_1_rag: dashboardContext.rag1,
    assessment_2_comment: dashboardContext.rag2C,
    assessment_2_rag: dashboardContext.rag2,
    assessment_3_comment: dashboardContext.rag3C,
    assessment_3_rag: dashboardContext.rag3,
    assessment_4_comment: dashboardContext.rag4C,
    assessment_4_rag: dashboardContext.rag4,
    assessment_5_comment: dashboardContext.rag5C,
    assessment_5_rag: dashboardContext.rag5,
    assessment_6_comment: dashboardContext.rag6C,
    assessment_6_rag: dashboardContext.rag6,
    assessment_7_comment: dashboardContext.rag7C,
    assessment_7_rag: dashboardContext.rag7,
    planned_next: dashboardContext.ragTP,
    risks_and_issues: dashboardContext.ragTC,
    status_summary: dashboardContext.ragSC,
    userReportsId: sessionStorage.getItem("userID"),
    projectReportsId: sessionStorage.getItem("projectID"),
    createdAt: dashboardContext.defaultAWSDate,
    updatedAt: new Date().toISOString,
  };

  const [reportFormState, setReportFormState] = useState(reportInitialState);
  const [reports, setReports] = useState([]);
  const [dateSelected, setDateSelected] = useState("");
  const [awsDate, setAwsDate] = useState("");

  const currentDateList = dashboardContext.currentDateList;
  const dropdownDateList =
    dashboardContext.getFridayListFormat(currentDateList);

  const username = ReactSession.get("username");
  const handleSubmit = () => {
    fetch("https://289iq0808c.execute-api.eu-west-2.amazonaws.com/sendEmail", {
      mode: "no-cors",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        from: username,
        to: username,
        message: "Reporting Data",
        base64Data: csvHeaderAndData,
        date: new Date(),
        fileName: "TEST_FILE_NAME",
      }),
    });
  };
  async function addReport() {
    const ListReports = `
      query MyQuery {
        listReports(filter: {projectReportsId: {eq: "${sessionStorage.getItem(
          "projectID"
        )}"}}) {
          items {
            id
            createdAt
          }
        }
      }      
`;
    try {
      const report = { ...reportFormState };
      setReports([...reports, report]);
      setReportFormState(reportInitialState);
      const reportData = await API.graphql(graphqlOperation(ListReports));
      const reportDates = reportData.data.listReports.items;
      for (let i = 0; i < reportDates.length; i++) {
        if (
          new Date(reportDates[i]["createdAt"]).toDateString() ===
          new Date(report["createdAt"]).toDateString()
        ) {
          report["id"] = reportDates[i]["id"];
          await API.graphql(graphqlOperation(updateReport, { input: report }));
          dashboardContext.setUpdateReportList(
            dashboardContext.updateReportList + 1
          );
          return;
        }
      }
      await API.graphql(graphqlOperation(createReport, { input: report }));
      dashboardContext.setUpdateReportList(
        dashboardContext.updateReportList + 1
      );
    } catch (err) {
      console.log("error creating report:", err);
    }
  }
  const handleDropDownChange = (event) => {
    setDateSelected(event.selectedItem);
    setAwsDate(
      currentDateList[
        dropdownDateList.findIndex((element) => element === event.selectedItem)
      ].toISOString()
    );
  };
  const handleSubmitForm = () => {
    if (dashboardContext.rag1 === "") {
      dashboardContext.rag1 = "Red";
    }
    if (dashboardContext.rag2 === "") {
      dashboardContext.rag2 = "Red";
    }
    if (dashboardContext.rag3 === "") {
      dashboardContext.rag3 = "Red";
    }
    if (dashboardContext.rag4 === "") {
      dashboardContext.rag4 = "Red";
    }
    if (dashboardContext.rag5 === "") {
      dashboardContext.rag5 = "Red";
    }
    if (dashboardContext.rag6 === "") {
      dashboardContext.rag6 = "Red";
    }
    if (dashboardContext.rag7 === "") {
      dashboardContext.rag7 = "Red";
    }
    if (
      dashboardContext.rag1C === "" ||
      !(typeof dashboardContext.rag1C === "string")
    ) {
      dashboardContext.rag1C = "";
    }
    if (
      dashboardContext.rag2C === "" ||
      !(typeof dashboardContext.rag2C === "string")
    ) {
      dashboardContext.rag2C = "";
    }
    if (
      dashboardContext.rag3C === "" ||
      !(typeof dashboardContext.rag3C === "string")
    ) {
      dashboardContext.rag3C = "";
    }
    if (
      dashboardContext.rag4C === "" ||
      !(typeof dashboardContext.rag4C === "string")
    ) {
      dashboardContext.rag4C = "";
    }
    if (
      dashboardContext.rag5C === "" ||
      !(typeof dashboardContext.rag5C === "string")
    ) {
      dashboardContext.rag5C = "";
    }
    if (
      dashboardContext.rag6C === "" ||
      !(typeof dashboardContext.rag6C === "string")
    ) {
      dashboardContext.rag6C = "";
    }
    if (
      dashboardContext.rag7C === "" ||
      !(typeof dashboardContext.rag7C === "string")
    ) {
      dashboardContext.rag7C = "";
    }
    if (
      dashboardContext.ragSC === "" ||
      !(typeof dashboardContext.ragSC === "string")
    ) {
      dashboardContext.ragSC = "";
    }
    if (
      dashboardContext.ragTC === "" ||
      !(typeof dashboardContext.ragTC === "string")
    ) {
      dashboardContext.ragTC = "";
    }
    if (
      dashboardContext.ragTP === "" ||
      !(typeof dashboardContext.ragTP === "string")
    ) {
      dashboardContext.ragTP = "";
    }

    reportFormState.assessment_1_comment = comment1;
    reportFormState.assessment_1_rag = dashboardContext.rag1;
    reportFormState.assessment_2_comment = comment2;
    reportFormState.assessment_2_rag = dashboardContext.rag2;
    reportFormState.assessment_3_comment = comment3;
    reportFormState.assessment_3_rag = dashboardContext.rag3;
    reportFormState.assessment_4_comment = comment4;
    reportFormState.assessment_4_rag = dashboardContext.rag4;
    reportFormState.assessment_5_comment = comment5;
    reportFormState.assessment_5_rag = dashboardContext.rag5;
    reportFormState.assessment_6_comment = comment6;
    reportFormState.assessment_6_rag = dashboardContext.rag6;
    reportFormState.assessment_7_comment = comment7;
    reportFormState.assessment_7_rag = dashboardContext.rag7;
    reportFormState.planned_next = commentPlanned;
    reportFormState.risks_and_issues = commentRisks;
    reportFormState.status_summary = commentSummary;
    if (awsDate) {
      reportFormState.createdAt = awsDate;
    }

    csv =
      csv +
      dashboardContext.rag1 +
      "," +
      `"${comment1.replaceAll('"', "'")}"` +
      "," +
      dashboardContext.rag2 +
      "," +
      `"${comment2.replaceAll('"', "'")}"` +
      "," +
      dashboardContext.rag3 +
      "," +
      `"${comment3.replaceAll('"', "'")}"` +
      "," +
      dashboardContext.rag4 +
      "," +
      `"${comment4.replaceAll('"', "'")}"` +
      "," +
      dashboardContext.rag5 +
      "," +
      `"${comment5.replaceAll('"', "'")}"` +
      "," +
      dashboardContext.rag6 +
      "," +
      `"${comment6.replaceAll('"', "'")}"` +
      "," +
      dashboardContext.rag7 +
      "," +
      `"${comment7.replaceAll('"', "'")}"` +
      "," +
      `"${commentSummary.replaceAll('"', "'")}"` +
      "," +
      `"${commentRisks.replaceAll('"', "'")}"` +
      "," +
      `"${commentPlanned.replaceAll('"', "'")}"`;

    setCsvHeaderAndData(csv);
    dashboardContext.setRag1("");
    dashboardContext.setRag2("");
    dashboardContext.setRag3("");
    dashboardContext.setRag4("");
    dashboardContext.setRag5("");
    dashboardContext.setRag6("");
    dashboardContext.setRag7("");
    setOpen(true);
  };

  const content = [
    <PageWizardStep
      id="step1"
      label="7 Keys Assessment"
      key="step1"
      description="This is displayed when step icon is hovered"
      onClose={action("closed", () => {
        navigate(-1);
      })}
      onSubmit={action("submit", () => {})}
      onNext={action("next", () => {})}
      onBack={action("back", () => {})}
    >
      <PageWizardStepContent>
        <h1 style={{ fontWeight: "bold" }}>
          {sessionStorage.getItem("projectName")}
        </h1>
        <h2 style={{ paddingBottom: "20px" }}>7 Keys Assessment Reporting</h2>
        <h4>Select Reporting Date</h4>
        <Dropdown
          style={{ display: "inline-block", width: "25%", marginTop: "25px" }}
          id="dateList"
          items={dropdownDateList}
          label="Select Date"
          onChange={handleDropDownChange}
          selectedItem={dateSelected}
        />
        <h4 style={{ padding: "20px 0 10px 0" }}>
          <strong>Security Statement: </strong>
        </h4>
        <div style={{ width: "35%" }}>
          <h5>
            Please note, the content of this reporting is stored on internal IBM
            systems, therefore your submissions must be reflective of this, and
            any sensitive information should not be included or sufficiently
            obfuscated.
          </h5>
        </div>
      </PageWizardStepContent>
    </PageWizardStep>,
    <PageWizardStep
      id="step1-substep1"
      key="step1-substep1"
      label="Work & Schedule are Predictable"
      subStep
      onClose={action("closed", () => {})}
      onSubmit={action("submit", () => {})}
      onNext={action("next", (event) => {
        console.log(event.target.value);
      })}
      onBack={action("back", () => {})}
    >
      <PageWizardStepTitle>Work & Schedule are Predictable</PageWizardStepTitle>
      <PageWizardStepDescription>First of the 7 Keys</PageWizardStepDescription>
      <PageWizardStepContent>
        <Assessment
          title="Work & Schedule are Predictable"
          guidance={dashboardContext.WORK_AND_SCHEDULE}
          ragNumber={1}
          retrieve={false}
          prevDataToFill={comment1}
          setComment={setComment1}
          colourSelected={dashboardContext.rag1}
        />
      </PageWizardStepContent>
    </PageWizardStep>,
    <PageWizardStep
      id="step1-substep2"
      key="step1-substep2"
      label="Scope is Realistic & Managed"
      subStep
      onClose={action("closed", () => {})}
      onSubmit={action("submit", () => {})}
      onNext={action("next", () => {})}
      onBack={action("back", () => {})}
    >
      <PageWizardStepTitle>Scope is Realistic & Managed</PageWizardStepTitle>
      <PageWizardStepDescription>
        Second of the 7 Keys
      </PageWizardStepDescription>
      <PageWizardStepContent>
        <Assessment
          title="Scope is Realistic & Managed"
          guidance={dashboardContext.SCOPE_IS_REALISTIC}
          ragNumber={2}
          retrieve={false}
          prevDataToFill={comment2}
          setComment={setComment2}
          colourSelected={dashboardContext.rag2}
        />
      </PageWizardStepContent>
    </PageWizardStep>,
    <PageWizardStep
      id="step1-substep3"
      key="step1-substep3"
      label="Team is High Performing"
      subStep
      onClose={action("closed", () => {})}
      onSubmit={action("submit", () => {})}
      onNext={action("next", () => {})}
      onBack={action("back", () => {})}
    >
      <PageWizardStepTitle>Team is High Performing</PageWizardStepTitle>
      <PageWizardStepDescription>Third of the 7 Keys</PageWizardStepDescription>
      <PageWizardStepContent>
        <Assessment
          title="Team is High Performing"
          guidance={dashboardContext.TEAM_IS_PERFORMING}
          ragNumber={3}
          retrieve={false}
          prevDataToFill={comment3}
          setComment={setComment3}
          colourSelected={dashboardContext.rag3}
        />
      </PageWizardStepContent>
    </PageWizardStep>,
    <PageWizardStep
      id="step1-substep4"
      key="step1-substep4"
      label="Risks are being Mitigated"
      subStep
      onClose={action("closed", () => {})}
      onSubmit={action("submit", () => {})}
      onNext={action("next", () => {})}
      onBack={action("back", () => {})}
    >
      <PageWizardStepTitle>Risks are being Mitigated</PageWizardStepTitle>
      <PageWizardStepDescription>
        Fourth of the 7 Keys
      </PageWizardStepDescription>
      <PageWizardStepContent>
        <Assessment
          title="Risks are being Mitigated"
          guidance={dashboardContext.RISKS_MITIGATED}
          ragNumber={4}
          retrieve={false}
          prevDataToFill={comment4}
          setComment={setComment4}
          colourSelected={dashboardContext.rag4}
        />
      </PageWizardStepContent>
    </PageWizardStep>,
    <PageWizardStep
      id="step1-substep5"
      key="step1-substep5"
      label="Business Benefits are being Realised"
      subStep
      onClose={action("closed", () => {})}
      onSubmit={action("submit", () => {})}
      onNext={action("next", () => {})}
      onBack={action("back", () => {})}
    >
      <PageWizardStepTitle>
        Business Benefits are being Realised
      </PageWizardStepTitle>
      <PageWizardStepDescription>Fifth of the 7 Keys</PageWizardStepDescription>
      <PageWizardStepContent>
        <Assessment
          title="Business Benefits are being Realised"
          guidance={dashboardContext.BUSINESS_BENEFITS}
          ragNumber={5}
          retrieve={false}
          prevDataToFill={comment5}
          setComment={setComment5}
          colourSelected={dashboardContext.rag5}
        />
      </PageWizardStepContent>
    </PageWizardStep>,
    <PageWizardStep
      id="step1-substep6"
      key="step1-substep6"
      label="Delivery Organisation Benefits are being Realised"
      subStep
      onClose={action("closed", () => {})}
      onSubmit={action("submit", () => {})}
      onNext={action("next", () => {})}
      onBack={action("back", () => {})}
    >
      <PageWizardStepTitle>
        Delivery Organisation Benefits are being Realised
      </PageWizardStepTitle>
      <PageWizardStepDescription>Sixth of the 7 Keys</PageWizardStepDescription>
      <PageWizardStepContent>
        <Assessment
          title="Delivery Organisation Benefits are being Realised"
          guidance={dashboardContext.ORGANISATION_BENEFITS}
          ragNumber={6}
          prevDataToFill={comment6}
          setComment={setComment6}
          colourSelected={dashboardContext.rag6}
        />
      </PageWizardStepContent>
    </PageWizardStep>,
    <PageWizardStep
      id="step1-substep7"
      key="step1-substep7"
      label="Stakeholders are Committed"
      subStep
      onClose={action("closed", () => {})}
      onSubmit={action("submit", () => {})}
      onNext={action("next", () => {})}
      onBack={action("back", () => {})}
    >
      <PageWizardStepTitle>Stakeholders are Committed</PageWizardStepTitle>
      <PageWizardStepDescription>
        Seventh of the 7 Keys
      </PageWizardStepDescription>
      <PageWizardStepContent>
        <Assessment
          title="Stakeholders are Committed"
          guidance={dashboardContext.STAKEHOLDERS_COMMITED}
          ragNumber={7}
          retrieve={false}
          prevDataToFill={comment7}
          setComment={setComment7}
          colourSelected={dashboardContext.rag7}
        />
      </PageWizardStepContent>
    </PageWizardStep>,
    <PageWizardStep
      id="step2"
      key="step2"
      label="Assessment Criteria"
      onClose={action("closed", () => {})}
      onSubmit={action("submit", () => {})}
      onNext={action("next", () => {})}
      onBack={action("back", () => {})}
    >
      <PageWizardStepContent>
        <h1>Assessment Criteria</h1>
        <div className="title-step">
          <h3>
            <text>
              Here is where to assess and analyse any over-arching issues <br />
              or key points relating to your project's progress
            </text>
          </h3>
        </div>
      </PageWizardStepContent>
    </PageWizardStep>,
    <PageWizardStep
      id="step2-substep1"
      key="step2-substep1"
      label="Status Summary"
      subStep
      onClose={action("closed", () => {})}
      onSubmit={action("submit", () => {})}
      onNext={action("next", () => {})}
      onBack={action("back", () => {})}
    >
      <PageWizardStepTitle>Status Summary</PageWizardStepTitle>
      <PageWizardStepDescription>
        First Assessment Criteria
      </PageWizardStepDescription>
      <PageWizardStepContent>
        <Assessment
          title="Status Summary"
          guidance={dashboardContext.STATUS_SUMMARY}
          showRag={false}
          retrieve={false}
          prevDataToFill={commentSummary}
          setComment={setCommentSummary}
        />
      </PageWizardStepContent>
    </PageWizardStep>,
    <PageWizardStep
      id="step2-substep2"
      key="step2-substep2"
      label="Top 5 Risks & Issues"
      subStep
      onClose={action("closed", () => {})}
      onSubmit={action("submit", () => {})}
      onNext={action("next", () => {})}
      onBack={action("back", () => {})}
    >
      <PageWizardStepTitle>Top 5 Risks & Issues</PageWizardStepTitle>
      <PageWizardStepDescription>
        Second Assessment Criteria
      </PageWizardStepDescription>
      <PageWizardStepContent>
        <Assessment
          title="Top 5 Risks & Issues"
          guidance={dashboardContext.RISKS_AND_ISSUES}
          showRag={false}
          retrieve={false}
          prevDataToFill={commentRisks}
          setComment={setCommentRisks}
        />
      </PageWizardStepContent>
    </PageWizardStep>,
    <PageWizardStep
      id="step2-substep3"
      key="step2-substep3"
      label="Planned Next"
      subStep
      onClose={action("closed", () => {})}
      onSubmit={action("submit", () => {})}
      onNext={action("next", () => {})}
      onBack={action("back", () => {})}
    >
      <PageWizardStepTitle>Planned Next</PageWizardStepTitle>
      <PageWizardStepDescription>
        Third Assessment Criteria
      </PageWizardStepDescription>
      <PageWizardStepContent>
        <Assessment
          title="Planned Next"
          guidance={dashboardContext.PLANNED_NEXT}
          showRag={false}
          retrieve={false}
          prevDataToFill={commentPlanned}
          setComment={setCommentPlanned}
        />
      </PageWizardStepContent>
    </PageWizardStep>,
  ];

  const propsPassed = {
    comment1,
    setComment1,
    comment2,
    setComment2,
    comment3,
    setComment3,
    comment4,
    setComment4,
    comment5,
    setComment5,
    comment6,
    setComment6,
    comment7,
    setComment7,
    commentSummary,
    setCommentSummary,
    commentRisks,
    setCommentRisks,
    commentPlanned,
    setCommentPlanned,
    dropdownDateList,
    handleDropDownChange,
    handleSubmitForm,
    dateSelected,
  };

  return (
    <div>
      <Header />
      <div className="view-switch">
        <ContentSwitcher
          selectedIndex={0}
          onChange={() => {
            setIsWizardView(!isWizardView);
          }}
        >
          <Switch name="one" text="Wizard View" />
          <Switch name="two" text="Single Page View" />
        </ContentSwitcher>
      </div>
      <div className="create-report">
        {isWizardView && (
          <StatefulPageWizard
            isClickable
            afterFooterContent={null}
            beforeFooterContent={null}
            currentStepId="step1"
            error={null}
            hasStickyFooter={false}
            isProgressIndicatorVertical
            nextDisabled={false}
            onBack={action("back", () => {})}
            onClearError={function E() {}}
            onClose={() => navigate(-1)}
            onNext={action("next", (event) => {
              console.log(event.target.value);
            })}
            onSubmit={handleSubmitForm}
            sendingData={false}
            setStep={function E() {}}
          >
            {content}
          </StatefulPageWizard>
        )}
        {!isWizardView && <SinglePageView {...propsPassed} />}
        {open && (
          <ActiveModal
            isOpen={open}
            toggle={setOpen}
            submitHandler={handleSubmit}
            addingReport={addReport}
            isFromRetrieve={state.fromRetrieve}
          />
        )}
      </div>
    </div>
  );
};

export default CreateFromReportView;
