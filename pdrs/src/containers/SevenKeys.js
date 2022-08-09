import React, { useContext } from "react";
import { DashboardContext } from "../context/DashboardContext";
import { useLocation } from "react-router-dom";

import Header from "../components/Header/Header";
import Assessment from "../components/Assessment/Assessment";
import SetOfButtonsRetrieving from "../components/SetOfButtonsRetrieving/SetOfButtonsRetrieving";
import "./SevenKeys.css";

const SevenKeys = () => {
  const { state } = useLocation();
  const dashboardContext = useContext(DashboardContext);
  return (
    <div className="seven-keys">
      <Header />
      <div>
        <h1 className="title">
          <strong>Project Delivery Report</strong>
        </h1>
      </div>
      <div className="assessments">
        <Assessment
          title="Work & Schedule are Predictable"
          guidance={dashboardContext.WORK_AND_SCHEDULE}
          prevData={state.report.assessment_1_comment}
          ragStatus={state.report.assessment_1_rag}
          retrieve={true}
          fromRetrieve={true}
        />
        <Assessment
          title="Scope is Realistic & Managed"
          guidance={dashboardContext.SCOPE_IS_REALISTIC}
          prevData={state.report.assessment_2_comment}
          ragStatus={state.report.assessment_2_rag}
          retrieve={true}
          fromRetrieve={true}
        />
        <Assessment
          title="Team is High Performing"
          guidance={dashboardContext.TEAM_IS_PERFORMING}
          prevData={state.report.assessment_3_comment}
          ragStatus={state.report.assessment_3_rag}
          retrieve={true}
          fromRetrieve={true}
        />
        <Assessment
          title="Risks are being Mitigated"
          guidance={dashboardContext.RISKS_MITIGATED}
          prevData={state.report.assessment_4_comment}
          ragStatus={state.report.assessment_4_rag}
          retrieve={true}
          fromRetrieve={true}
        />
        <Assessment
          title="Business Benefits are being Realised"
          guidance={dashboardContext.BUSINESS_BENEFITS}
          prevData={state.report.assessment_5_comment}
          ragStatus={state.report.assessment_5_rag}
          retrieve={true}
          fromRetrieve={true}
        />
        <Assessment
          title="Delivery Organisation Benefits are being Realised"
          guidance={dashboardContext.ORGANISATION_BENEFITS}
          prevData={state.report.assessment_6_comment}
          ragStatus={state.report.assessment_6_rag}
          retrieve={true}
          fromRetrieve={true}
        />
        <Assessment
          title="Stakeholders are Committed"
          guidance={dashboardContext.STAKEHOLDERS_COMMITED}
          prevData={state.report.assessment_7_comment}
          ragStatus={state.report.assessment_7_rag}
          retrieve={true}
          fromRetrieve={true}
        />
        <div className="title">
          <h1>
            <strong>Project Assessment</strong>
          </h1>
        </div>
        <Assessment
          title="Status Summary"
          guidance={dashboardContext.STATUS_SUMMARY}
          showRag={false}
          prevData={state.report.status_summary}
          retrieve={true}
        />
        <Assessment
          title="Top 5 Risks & Issues"
          guidance={dashboardContext.RISKS_AND_ISSUES}
          showRag={false}
          prevData={state.report.risks_and_issues}
          retrieve={true}
        />
        <div className="ending">
          <Assessment
            title="Planned Next"
            guidance={dashboardContext.PLANNED_NEXT}
            showRag={false}
            prevData={state.report.planned_next}
            retrieve={true}
          />
        </div>
      </div>
      <div className="buttons">
        <SetOfButtonsRetrieving
          allowed={state.allowed}
          prevDataToFill={[
            state.report.assessment_1_comment,
            state.report.assessment_2_comment,
            state.report.assessment_3_comment,
            state.report.assessment_4_comment,
            state.report.assessment_5_comment,
            state.report.assessment_6_comment,
            state.report.assessment_7_comment,
            state.report.status_summary,
            state.report.risks_and_issues,
            state.report.planned_next,
          ]}
          projectID={state.projectID}
          userID={state.userID}
        />
      </div>
    </div>
  );
};

export default SevenKeys;
