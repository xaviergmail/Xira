/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      email
      registeredAt
      createdAt
      updatedAt
      owner
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
        registeredAt
        createdAt
        updatedAt
        owner
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
      creator {
        id
        email
        registeredAt
        createdAt
        updatedAt
        owner
      }
      text
      createdAt
      updatedAt
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
        creator {
          id
          email
          registeredAt
          createdAt
          updatedAt
          owner
        }
        text
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getIssue = /* GraphQL */ `
  query GetIssue($id: ID!) {
    getIssue(id: $id) {
      id
      creator {
        id
        email
        registeredAt
        createdAt
        updatedAt
        owner
      }
      title
      text
      comments {
        id
        issueID
        creator {
          id
          email
          registeredAt
          createdAt
          updatedAt
          owner
        }
        text
        createdAt
        updatedAt
      }
      labels {
        items {
          id
          labelID
          issueID
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
export const listIssues = /* GraphQL */ `
  query ListIssues(
    $filter: ModelIssueFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listIssues(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        creator {
          id
          email
          registeredAt
          createdAt
          updatedAt
          owner
        }
        title
        text
        comments {
          id
          issueID
          text
          createdAt
          updatedAt
        }
        labels {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
