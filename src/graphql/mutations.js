/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRole = /* GraphQL */ `
  mutation CreateRole(
    $input: CreateRoleInput!
    $condition: ModelRoleConditionInput
  ) {
    createRole(input: $input, condition: $condition) {
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
export const updateRole = /* GraphQL */ `
  mutation UpdateRole(
    $input: UpdateRoleInput!
    $condition: ModelRoleConditionInput
  ) {
    updateRole(input: $input, condition: $condition) {
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
export const deleteRole = /* GraphQL */ `
  mutation DeleteRole(
    $input: DeleteRoleInput!
    $condition: ModelRoleConditionInput
  ) {
    deleteRole(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createProgramme = /* GraphQL */ `
  mutation CreateProgramme(
    $input: CreateProgrammeInput!
    $condition: ModelProgrammeConditionInput
  ) {
    createProgramme(input: $input, condition: $condition) {
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
export const updateProgramme = /* GraphQL */ `
  mutation UpdateProgramme(
    $input: UpdateProgrammeInput!
    $condition: ModelProgrammeConditionInput
  ) {
    updateProgramme(input: $input, condition: $condition) {
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
export const deleteProgramme = /* GraphQL */ `
  mutation DeleteProgramme(
    $input: DeleteProgrammeInput!
    $condition: ModelProgrammeConditionInput
  ) {
    deleteProgramme(input: $input, condition: $condition) {
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
export const createProject = /* GraphQL */ `
  mutation CreateProject(
    $input: CreateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    createProject(input: $input, condition: $condition) {
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
export const updateProject = /* GraphQL */ `
  mutation UpdateProject(
    $input: UpdateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    updateProject(input: $input, condition: $condition) {
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
export const deleteProject = /* GraphQL */ `
  mutation DeleteProject(
    $input: DeleteProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    deleteProject(input: $input, condition: $condition) {
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
export const createReport = /* GraphQL */ `
  mutation CreateReport(
    $input: CreateReportInput!
    $condition: ModelReportConditionInput
  ) {
    createReport(input: $input, condition: $condition) {
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
export const updateReport = /* GraphQL */ `
  mutation UpdateReport(
    $input: UpdateReportInput!
    $condition: ModelReportConditionInput
  ) {
    updateReport(input: $input, condition: $condition) {
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
export const deleteReport = /* GraphQL */ `
  mutation DeleteReport(
    $input: DeleteReportInput!
    $condition: ModelReportConditionInput
  ) {
    deleteReport(input: $input, condition: $condition) {
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
export const createUserProgramme = /* GraphQL */ `
  mutation CreateUserProgramme(
    $input: CreateUserProgrammeInput!
    $condition: ModelUserProgrammeConditionInput
  ) {
    createUserProgramme(input: $input, condition: $condition) {
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
export const updateUserProgramme = /* GraphQL */ `
  mutation UpdateUserProgramme(
    $input: UpdateUserProgrammeInput!
    $condition: ModelUserProgrammeConditionInput
  ) {
    updateUserProgramme(input: $input, condition: $condition) {
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
export const deleteUserProgramme = /* GraphQL */ `
  mutation DeleteUserProgramme(
    $input: DeleteUserProgrammeInput!
    $condition: ModelUserProgrammeConditionInput
  ) {
    deleteUserProgramme(input: $input, condition: $condition) {
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
export const createUserProject = /* GraphQL */ `
  mutation CreateUserProject(
    $input: CreateUserProjectInput!
    $condition: ModelUserProjectConditionInput
  ) {
    createUserProject(input: $input, condition: $condition) {
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
export const updateUserProject = /* GraphQL */ `
  mutation UpdateUserProject(
    $input: UpdateUserProjectInput!
    $condition: ModelUserProjectConditionInput
  ) {
    updateUserProject(input: $input, condition: $condition) {
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
export const deleteUserProject = /* GraphQL */ `
  mutation DeleteUserProject(
    $input: DeleteUserProjectInput!
    $condition: ModelUserProjectConditionInput
  ) {
    deleteUserProject(input: $input, condition: $condition) {
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
