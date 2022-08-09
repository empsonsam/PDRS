/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRole = /* GraphQL */ `
  query GetRole($id: ID!) {
    getRole(id: $id) {
      id
      description
      users {
        items {
          id
          first_name
          last_name
          email_address
          createdAt
          updatedAt
          roleUsersId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listRoles = /* GraphQL */ `
  query ListRoles(
    $filter: ModelRoleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRoles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        description
        users {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      first_name
      last_name
      email_address
      role {
        id
        description
        users {
          nextToken
        }
        createdAt
        updatedAt
      }
      programmes {
        items {
          id
          userID
          programmeID
          createdAt
          updatedAt
        }
        nextToken
      }
      projects {
        items {
          id
          userID
          projectID
          createdAt
          updatedAt
        }
        nextToken
      }
      reports {
        items {
          id
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
          planned_next
          risks_and_issues
          status_summary
          createdAt
          updatedAt
          userReportsId
          projectReportsId
        }
        nextToken
      }
      createdAt
      updatedAt
      roleUsersId
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        first_name
        last_name
        email_address
        role {
          id
          description
          createdAt
          updatedAt
        }
        programmes {
          nextToken
        }
        projects {
          nextToken
        }
        reports {
          nextToken
        }
        createdAt
        updatedAt
        roleUsersId
      }
      nextToken
    }
  }
`;
export const getProgramme = /* GraphQL */ `
  query GetProgramme($id: ID!) {
    getProgramme(id: $id) {
      id
      programme_name
      projects {
        items {
          id
          project_name
          createdAt
          updatedAt
          programmeProjectsId
        }
        nextToken
      }
      users {
        items {
          id
          userID
          programmeID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listProgrammes = /* GraphQL */ `
  query ListProgrammes(
    $filter: ModelProgrammeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProgrammes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        programme_name
        projects {
          nextToken
        }
        users {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getProject = /* GraphQL */ `
  query GetProject($id: ID!) {
    getProject(id: $id) {
      id
      project_name
      programme {
        id
        programme_name
        projects {
          nextToken
        }
        users {
          nextToken
        }
        createdAt
        updatedAt
      }
      users {
        items {
          id
          userID
          projectID
          createdAt
          updatedAt
        }
        nextToken
      }
      reports {
        items {
          id
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
          planned_next
          risks_and_issues
          status_summary
          createdAt
          updatedAt
          userReportsId
          projectReportsId
        }
        nextToken
      }
      createdAt
      updatedAt
      programmeProjectsId
    }
  }
`;
export const listProjects = /* GraphQL */ `
  query ListProjects(
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        project_name
        programme {
          id
          programme_name
          createdAt
          updatedAt
        }
        users {
          nextToken
        }
        reports {
          nextToken
        }
        createdAt
        updatedAt
        programmeProjectsId
      }
      nextToken
    }
  }
`;
export const getReport = /* GraphQL */ `
  query GetReport($id: ID!) {
    getReport(id: $id) {
      id
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
      planned_next
      risks_and_issues
      status_summary
      user {
        id
        first_name
        last_name
        email_address
        role {
          id
          description
          createdAt
          updatedAt
        }
        programmes {
          nextToken
        }
        projects {
          nextToken
        }
        reports {
          nextToken
        }
        createdAt
        updatedAt
        roleUsersId
      }
      project {
        id
        project_name
        programme {
          id
          programme_name
          createdAt
          updatedAt
        }
        users {
          nextToken
        }
        reports {
          nextToken
        }
        createdAt
        updatedAt
        programmeProjectsId
      }
      createdAt
      updatedAt
      userReportsId
      projectReportsId
    }
  }
`;
export const listReports = /* GraphQL */ `
  query ListReports(
    $filter: ModelReportFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReports(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
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
        planned_next
        risks_and_issues
        status_summary
        user {
          id
          first_name
          last_name
          email_address
          createdAt
          updatedAt
          roleUsersId
        }
        project {
          id
          project_name
          createdAt
          updatedAt
          programmeProjectsId
        }
        createdAt
        updatedAt
        userReportsId
        projectReportsId
      }
      nextToken
    }
  }
`;
export const getUserProgramme = /* GraphQL */ `
  query GetUserProgramme($id: ID!) {
    getUserProgramme(id: $id) {
      id
      userID
      programmeID
      user {
        id
        first_name
        last_name
        email_address
        role {
          id
          description
          createdAt
          updatedAt
        }
        programmes {
          nextToken
        }
        projects {
          nextToken
        }
        reports {
          nextToken
        }
        createdAt
        updatedAt
        roleUsersId
      }
      programme {
        id
        programme_name
        projects {
          nextToken
        }
        users {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUserProgrammes = /* GraphQL */ `
  query ListUserProgrammes(
    $filter: ModelUserProgrammeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserProgrammes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        programmeID
        user {
          id
          first_name
          last_name
          email_address
          createdAt
          updatedAt
          roleUsersId
        }
        programme {
          id
          programme_name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUserProject = /* GraphQL */ `
  query GetUserProject($id: ID!) {
    getUserProject(id: $id) {
      id
      userID
      projectID
      user {
        id
        first_name
        last_name
        email_address
        role {
          id
          description
          createdAt
          updatedAt
        }
        programmes {
          nextToken
        }
        projects {
          nextToken
        }
        reports {
          nextToken
        }
        createdAt
        updatedAt
        roleUsersId
      }
      project {
        id
        project_name
        programme {
          id
          programme_name
          createdAt
          updatedAt
        }
        users {
          nextToken
        }
        reports {
          nextToken
        }
        createdAt
        updatedAt
        programmeProjectsId
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUserProjects = /* GraphQL */ `
  query ListUserProjects(
    $filter: ModelUserProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        projectID
        user {
          id
          first_name
          last_name
          email_address
          createdAt
          updatedAt
          roleUsersId
        }
        project {
          id
          project_name
          createdAt
          updatedAt
          programmeProjectsId
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const reportsByDate = /* GraphQL */ `
  query ReportsByDate(
    $status_summary: String!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelReportFilterInput
    $limit: Int
    $nextToken: String
  ) {
    reportsByDate(
      status_summary: $status_summary
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
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
        planned_next
        risks_and_issues
        status_summary
        user {
          id
          first_name
          last_name
          email_address
          createdAt
          updatedAt
          roleUsersId
        }
        project {
          id
          project_name
          createdAt
          updatedAt
          programmeProjectsId
        }
        createdAt
        updatedAt
        userReportsId
        projectReportsId
      }
      nextToken
    }
  }
`;
