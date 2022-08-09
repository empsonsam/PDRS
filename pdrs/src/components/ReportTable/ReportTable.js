import React, { useContext, useEffect, useState } from "react";
import { TableCard } from "carbon-addons-iot-react";
import { Button } from "carbon-components-react";
import { ArrowRight32 } from "@carbon/icons-react";
import { useNavigate } from "react-router-dom";
import { DashboardContext } from "../../context/DashboardContext";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import { getUser } from "../../graphql/queries";
import awsExports from "../../aws-exports";
Amplify.configure(awsExports);

//TODO: USE API

const ReportTable = (props) => {
  const dashboardContext = useContext(DashboardContext);
  //Logic to retrieve the friday of the current week
  const [listOfReports, setListOfReports] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  let the_full_list = [];
  let navigate = useNavigate();

  // Asynchronous Function to retrieve all the reports for a specific project
  async function getReports() {
    try {
      const ListReports = `
      query MyQuery {
        listReports(filter: {projectReportsId: {eq: "${sessionStorage.getItem(
          "projectID"
        )}"}}) {
          items {
            assessment_1_comment
            assessment_1_rag
            assessment_2_comment
            assessment_2_rag
            assessment_3_comment
            assessment_3_rag
            assessment_4_comment
            assessment_4_rag
            assessment_5_comment
            assessment_5_rag
            assessment_6_comment
            assessment_6_rag
            assessment_7_comment
            assessment_7_rag
            id
            createdAt
            updatedAt
            planned_next
            risks_and_issues
            status_summary
            userReportsId
          }
        }
      }      
`;

      const userData = await API.graphql(graphqlOperation(ListReports));
      const reportData = userData.data.listReports.items;
      for (let i = 0; i < reportData.length; i++) {
        const userNames = await API.graphql(
          graphqlOperation(getUser, { id: reportData[i].userReportsId })
        );
        const userNamesData = userNames.data.getUser;
        the_full_list.push({
          id: reportData[i].id,
          values: {
            reporter: `${userNamesData.first_name} ${userNamesData.last_name}`,

            sevenKeys: `${reportData[i].assessment_1_rag[0].toUpperCase()} -
            ${reportData[i].assessment_2_rag[0].toUpperCase()} - ${reportData[
              i
            ].assessment_3_rag[0].toUpperCase()} - ${reportData[
              i
            ].assessment_4_rag[0].toUpperCase()}
              - ${reportData[
                i
              ].assessment_5_rag[0].toUpperCase()} - ${reportData[
              i
            ].assessment_6_rag[0].toUpperCase()} - ${reportData[
              i
            ].assessment_7_rag[0].toUpperCase()}`,
            dateSubmitted: new Date(reportData[i].updatedAt).toLocaleDateString(
              "en-GB"
            ),
            forWeekEnding: dashboardContext.getSelectedFriday(
              reportData[i].createdAt
            ),
            retrieveButton: (
              <div>
                <Button
                  kind="secondary"
                  size="sm"
                  renderIcon={ArrowRight32}
                  onClick={() => {
                    navigate("/assessment", {
                      state: {
                        report: reportData[i],
                        allowed: !props.allowed,
                      },
                    });
                  }}
                >
                  Retrieve Report
                </Button>
              </div>
            ),
          },
        });
      }

      setListOfReports(the_full_list);
      setIsLoading(false);
    } catch (err) {
      console.log("error fetching!", err);
    }
  }
  // Preventing re-runs of state, state comes from useLocation()
  useEffect(() => {
    getReports();
  }, [dashboardContext.updateReportList]);

  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <TableCard
        content={{
          columns: [
            {
              dataSourceId: "reporter",
              label: "Reporter",
              priority: 3,
            },
            {
              dataSourceId: "sevenKeys",
              label: "7 Keys Assessments' RAGs",
              priority: 2,
            },
            {
              dataSourceId: "dateSubmitted",
              label: "Date Submitted",
              priority: 1,
            },
            {
              dataSourceId: "forWeekEnding",
              label: "For Week Ending",
              priority: 2,
            },
            {
              dataSourceId: "retrieveButton",
              label: "Retrieval",
              priority: 4,
              linkTemplate: {
                target: "_blank",
              },
            },
          ],
        }}
        i18n={{
          cloneCardLabel: "Clone card",
          closeLabel: "Close",
          criticalLabel: "Critical",
          dailyLabel: "Daily",
          defaultFilterStringPlaceholdText: "Type and hit enter to apply",
          defaultLabel: "Default",
          deleteCardLabel: "Delete card",
          downloadIconDescription: "Download table content",
          editCardLabel: "Edit card",
          emptyMessage: "There is no data for this time range.",
          errorLoadingDataLabel: "Error loading data for this card: ",
          errorLoadingDataShortLabel: "Data error.",
          expandLabel: "Expand to fullscreen",
          filterButtonAria: "Filters",
          hourlyLabel: "Hourly",
          last24HoursLabel: "Last 24 hrs",
          last7DaysLabel: "Last 7 days",
          lastMonthLabel: "Last month",
          lastQuarterLabel: "Last quarter",
          lastYearLabel: "Last year",
          lowLabel: "Low",
          moderateLabel: "Moderate",
          monthlyLabel: "Monthly",
          noDataLabel: "No data is available for this time range.",
          noDataShortLabel: "No data",
          overflowMenuDescription: "Open and close list of options",
          periodToDateLabel: "Period to date",
          rollingPeriodLabel: "Rolling period",
          searchPlaceholder: "Search",
          selectSeverityPlaceholder: "Select a severity",
          selectTimeRangeLabel: "Select time range",
          severityLabel: "Severity",
          thisMonthLabel: "This month",
          thisQuarterLabel: "This quarter",
          thisWeekLabel: "This week",
          thisYearLabel: "This year",
          timeRangeLabel: "Time range",
          weeklyLabel: "Weekly",
        }}
        id="table-list"
        locale="en"
        onCardAction={function E() {}}
        size="LARGEWIDE"
        title={`${sessionStorage.getItem("projectName")} Reports`}
        tooltip="Here&#39;s a Tooltip"
        values={listOfReports}
        isSortable
        sortFunction={() => console.log("sorting")}
        isLoading={isLoading}
      />
    </div>
  );
};

export default ReportTable;
