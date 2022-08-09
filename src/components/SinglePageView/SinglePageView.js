import { Button, Dropdown } from "carbon-addons-iot-react";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DashboardContext } from "../../context/DashboardContext";
import Assessment from "../Assessment/Assessment";
import "./SinglePageView.css";

export const SinglePageView = (props) => {
  const dashboardContext = useContext(DashboardContext);
  const navigate = useNavigate();

  return (
    <div className="single-page-view">
      <h1 id="title">
        <strong>7 Keys Assessment Reporting</strong>
      </h1>
      <div className="single-page-assessments">
        <h3 style={{ paddingBottom: "20px", fontWeight: "bold" }}>
          {sessionStorage.getItem("projectName")}
        </h3>
        <h4 style={{ minWidth: "100%" }}>Select Reporting Date</h4>
        <Dropdown
          style={{ width: "25%", marginTop: "15px" }}
          id="dateList"
          items={props.dropdownDateList}
          label="Select Date"
          onChange={props.handleDropDownChange}
          selectedItem={props.dateSelected}
        />
        <div>
          <h4 style={{ padding: "20px 0 10px 0" }}>
            <strong>Security Statement: </strong>
          </h4>
          <div style={{ width: "55%" }}>
            <h5>
              Please note, the content of this reporting is stored on internal
              IBM systems, therefore your submissions must be reflective of
              this, and any sensitive information should not be included or
              sufficiently obfuscated.
            </h5>
          </div>
        </div>
        <Assessment
          title="Work & Schedule are Predictable"
          guidance={dashboardContext.WORK_AND_SCHEDULE}
          ragNumber={1}
          prevDataToFill={props.comment1}
          setComment={props.setComment1}
          colourSelected={dashboardContext.rag1}
        />
        <Assessment
          title="Scope is Realistic & Managed"
          guidance={dashboardContext.SCOPE_IS_REALISTIC}
          ragNumber={2}
          prevDataToFill={props.comment2}
          setComment={props.setComment2}
          colourSelected={dashboardContext.rag2}
        />
        <Assessment
          title="Team is High Performing"
          guidance={dashboardContext.TEAM_IS_PERFORMING}
          ragNumber={3}
          prevDataToFill={props.comment3}
          setComment={props.setComment3}
          colourSelected={dashboardContext.rag3}
        />
        <Assessment
          title="Risks are being Mitigated"
          guidance={dashboardContext.RISKS_MITIGATED}
          ragNumber={4}
          prevDataToFill={props.comment4}
          setComment={props.setComment4}
          colourSelected={dashboardContext.rag4}
        />
        <Assessment
          title="Business Benefits are being Realised"
          guidance={dashboardContext.BUSINESS_BENEFITS}
          ragNumber={5}
          prevDataToFill={props.comment5}
          setComment={props.setComment5}
          colourSelected={dashboardContext.rag5}
        />
        <Assessment
          title="Delivery Organisation Benefits are being Realised"
          guidance={dashboardContext.ORGANISATION_BENEFITS}
          ragNumber={6}
          prevDataToFill={props.comment6}
          setComment={props.setComment6}
          colourSelected={dashboardContext.rag6}
        />
        <Assessment
          title="Stakeholders are Committed"
          guidance={dashboardContext.STAKEHOLDERS_COMMITED}
          ragNumber={7}
          prevDataToFill={props.comment7}
          setComment={props.setComment7}
          colourSelected={dashboardContext.rag7}
        />
        <div className="single-page-criteria">
          <h1 className="single-page-criteria">Assessment Criteria</h1>
          <Assessment
            title="Status Summary"
            guidance={dashboardContext.STATUS_SUMMARY}
            showRag={false}
            prevDataToFill={props.commentSummary}
            setComment={props.setCommentSummary}
          />
          <Assessment
            title="Top 5 Risks & Issues"
            guidance={dashboardContext.RISKS_AND_ISSUES}
            showRag={false}
            retrieve={false}
            prevDataToFill={props.commentRisks}
            setComment={props.setCommentRisks}
          />
          <Assessment
            title="Planned Next"
            guidance={dashboardContext.PLANNED_NEXT}
            showRag={false}
            retrieve={false}
            prevDataToFill={props.commentPlanned}
            setComment={props.setCommentPlanned}
          />
        </div>
        <div className="single-page-buttons">
          <Button kind="secondary" onClick={() => navigate(-1)}>
            Cancel
          </Button>
          <Button onClick={props.handleSubmitForm}>Submit</Button>
        </div>
      </div>
    </div>
  );
};
