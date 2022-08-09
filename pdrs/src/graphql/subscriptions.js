/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRole = /* GraphQL */ `
  subscription OnCreateRole {
    onCreateRole {
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
export const onUpdateRole = /* GraphQL */ `
  subscription OnUpdateRole {
    onUpdateRole {
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
export const onDeleteRole = /* GraphQL */ `
  subscription OnDeleteRole {
    onDeleteRole {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateProgramme = /* GraphQL */ `
  subscription OnCreateProgramme {
    onCreateProgramme {
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
export const onUpdateProgramme = /* GraphQL */ `
  subscription OnUpdateProgramme {
    onUpdateProgramme {
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
export const onDeleteProgramme = /* GraphQL */ `
  subscription OnDeleteProgramme {
    onDeleteProgramme {
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
export const onCreateProject = /* GraphQL */ `
  subscription OnCreateProject {
    onCreateProject {
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
export const onUpdateProject = /* GraphQL */ `
  subscription OnUpdateProject {
    onUpdateProject {
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
export const onDeleteProject = /* GraphQL */ `
  subscription OnDeleteProject {
    onDeleteProject {
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
export const onCreateReport = /* GraphQL */ `
  subscription OnCreateReport {
    onCreateReport {
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
export const onUpdateReport = /* GraphQL */ `
  subscription OnUpdateReport {
    onUpdateReport {
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
export const onDeleteReport = /* GraphQL */ `
  subscription OnDeleteReport {
    onDeleteReport {
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
export const onCreateUserProgramme = /* GraphQL */ `
  subscription OnCreateUserProgramme {
    onCreateUserProgramme {
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
export const onUpdateUserProgramme = /* GraphQL */ `
  subscription OnUpdateUserProgramme {
    onUpdateUserProgramme {
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
export const onDeleteUserProgramme = /* GraphQL */ `
  subscription OnDeleteUserProgramme {
    onDeleteUserProgramme {
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
export const onCreateUserProject = /* GraphQL */ `
  subscription OnCreateUserProject {
    onCreateUserProject {
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
export const onUpdateUserProject = /* GraphQL */ `
  subscription OnUpdateUserProject {
    onUpdateUserProject {
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
export const onDeleteUserProject = /* GraphQL */ `
  subscription OnDeleteUserProject {
    onDeleteUserProject {
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
