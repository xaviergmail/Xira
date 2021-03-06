/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      email
      createdAt
      updatedAt
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
      email
      createdAt
      updatedAt
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
      email
      createdAt
      updatedAt
    }
  }
`;
export const createLabel = /* GraphQL */ `
  mutation CreateLabel(
    $input: CreateLabelInput!
    $condition: ModelLabelConditionInput
  ) {
    createLabel(input: $input, condition: $condition) {
      id
      name
      color
      issues {
        items {
          id
          labelID
          issueID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateLabel = /* GraphQL */ `
  mutation UpdateLabel(
    $input: UpdateLabelInput!
    $condition: ModelLabelConditionInput
  ) {
    updateLabel(input: $input, condition: $condition) {
      id
      name
      color
      issues {
        items {
          id
          labelID
          issueID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteLabel = /* GraphQL */ `
  mutation DeleteLabel(
    $input: DeleteLabelInput!
    $condition: ModelLabelConditionInput
  ) {
    deleteLabel(input: $input, condition: $condition) {
      id
      name
      color
      issues {
        items {
          id
          labelID
          issueID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createLabelIssues = /* GraphQL */ `
  mutation CreateLabelIssues(
    $input: CreateLabelIssuesInput!
    $condition: ModelLabelIssuesConditionInput
  ) {
    createLabelIssues(input: $input, condition: $condition) {
      id
      labelID
      issueID
      label {
        id
        name
        color
        issues {
          nextToken
        }
        createdAt
        updatedAt
      }
      issue {
        id
        title
        text
        comments {
          nextToken
        }
        labels {
          nextToken
        }
        status
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateLabelIssues = /* GraphQL */ `
  mutation UpdateLabelIssues(
    $input: UpdateLabelIssuesInput!
    $condition: ModelLabelIssuesConditionInput
  ) {
    updateLabelIssues(input: $input, condition: $condition) {
      id
      labelID
      issueID
      label {
        id
        name
        color
        issues {
          nextToken
        }
        createdAt
        updatedAt
      }
      issue {
        id
        title
        text
        comments {
          nextToken
        }
        labels {
          nextToken
        }
        status
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteLabelIssues = /* GraphQL */ `
  mutation DeleteLabelIssues(
    $input: DeleteLabelIssuesInput!
    $condition: ModelLabelIssuesConditionInput
  ) {
    deleteLabelIssues(input: $input, condition: $condition) {
      id
      labelID
      issueID
      label {
        id
        name
        color
        issues {
          nextToken
        }
        createdAt
        updatedAt
      }
      issue {
        id
        title
        text
        comments {
          nextToken
        }
        labels {
          nextToken
        }
        status
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
      id
      issueID
      text
      issue {
        id
        title
        text
        comments {
          nextToken
        }
        labels {
          nextToken
        }
        status
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
      id
      issueID
      text
      issue {
        id
        title
        text
        comments {
          nextToken
        }
        labels {
          nextToken
        }
        status
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
      id
      issueID
      text
      issue {
        id
        title
        text
        comments {
          nextToken
        }
        labels {
          nextToken
        }
        status
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createIssue = /* GraphQL */ `
  mutation CreateIssue(
    $input: CreateIssueInput!
    $condition: ModelIssueConditionInput
  ) {
    createIssue(input: $input, condition: $condition) {
      id
      title
      text
      comments {
        items {
          id
          issueID
          text
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      labels {
        items {
          id
          labelID
          issueID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      status
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateIssue = /* GraphQL */ `
  mutation UpdateIssue(
    $input: UpdateIssueInput!
    $condition: ModelIssueConditionInput
  ) {
    updateIssue(input: $input, condition: $condition) {
      id
      title
      text
      comments {
        items {
          id
          issueID
          text
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      labels {
        items {
          id
          labelID
          issueID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      status
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteIssue = /* GraphQL */ `
  mutation DeleteIssue(
    $input: DeleteIssueInput!
    $condition: ModelIssueConditionInput
  ) {
    deleteIssue(input: $input, condition: $condition) {
      id
      title
      text
      comments {
        items {
          id
          issueID
          text
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      labels {
        items {
          id
          labelID
          issueID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      status
      createdAt
      updatedAt
      owner
    }
  }
`;
