/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      email
      createdAt
      updatedAt
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
        email
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getLabel = /* GraphQL */ `
  query GetLabel($id: ID!) {
    getLabel(id: $id) {
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
export const listLabels = /* GraphQL */ `
  query ListLabels(
    $filter: ModelLabelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLabels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        color
        issues {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
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
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        issueID
        text
        issue {
          id
          title
          text
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getIssue = /* GraphQL */ `
  query GetIssue($id: ID!) {
    getIssue(id: $id) {
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listIssues = /* GraphQL */ `
  query ListIssues(
    $filter: ModelIssueFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listIssues(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        text
        comments {
          nextToken
        }
        labels {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const issuesByLabel = /* GraphQL */ `
  query IssuesByLabel(
    $labelID: ID
    $issueID: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelLabelIssuesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    issuesByLabel(
      labelID: $labelID
      issueID: $issueID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        labelID
        issueID
        label {
          id
          name
          color
          createdAt
          updatedAt
        }
        issue {
          id
          title
          text
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const labelsByIssue = /* GraphQL */ `
  query LabelsByIssue(
    $issueID: ID
    $labelID: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelLabelIssuesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    labelsByIssue(
      issueID: $issueID
      labelID: $labelID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        labelID
        issueID
        label {
          id
          name
          color
          createdAt
          updatedAt
        }
        issue {
          id
          title
          text
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const commentsByIssue = /* GraphQL */ `
  query CommentsByIssue(
    $issueID: ID
    $text: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    commentsByIssue(
      issueID: $issueID
      text: $text
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        issueID
        text
        issue {
          id
          title
          text
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
