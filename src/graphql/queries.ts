/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getIssue = /* GraphQL */ `
  query GetIssue($id: ID!) {
    getIssue(id: $id) {
      id
      title
      description
      comments
      labels
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
        title
        description
        comments
        labels
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
