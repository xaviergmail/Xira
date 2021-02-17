/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateIssueInput = {
  id?: string | null,
  title: string,
  description: string,
  comments?: Array< string | null > | null,
  labels?: Array< string | null > | null,
};

export type ModelIssueConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  comments?: ModelStringInput | null,
  labels?: ModelStringInput | null,
  and?: Array< ModelIssueConditionInput | null > | null,
  or?: Array< ModelIssueConditionInput | null > | null,
  not?: ModelIssueConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Issue = {
  __typename: "Issue",
  id?: string,
  title?: string,
  description?: string,
  comments?: Array< string | null > | null,
  labels?: Array< string | null > | null,
  createdAt?: string,
  updatedAt?: string,
};

export type UpdateIssueInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  comments?: Array< string | null > | null,
  labels?: Array< string | null > | null,
};

export type DeleteIssueInput = {
  id?: string | null,
};

export type ModelIssueFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  comments?: ModelStringInput | null,
  labels?: ModelStringInput | null,
  and?: Array< ModelIssueFilterInput | null > | null,
  or?: Array< ModelIssueFilterInput | null > | null,
  not?: ModelIssueFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelIssueConnection = {
  __typename: "ModelIssueConnection",
  items?:  Array<Issue | null > | null,
  nextToken?: string | null,
};

export type CreateIssueMutationVariables = {
  input?: CreateIssueInput,
  condition?: ModelIssueConditionInput | null,
};

export type CreateIssueMutation = {
  createIssue?:  {
    __typename: "Issue",
    id: string,
    title: string,
    description: string,
    comments?: Array< string | null > | null,
    labels?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateIssueMutationVariables = {
  input?: UpdateIssueInput,
  condition?: ModelIssueConditionInput | null,
};

export type UpdateIssueMutation = {
  updateIssue?:  {
    __typename: "Issue",
    id: string,
    title: string,
    description: string,
    comments?: Array< string | null > | null,
    labels?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteIssueMutationVariables = {
  input?: DeleteIssueInput,
  condition?: ModelIssueConditionInput | null,
};

export type DeleteIssueMutation = {
  deleteIssue?:  {
    __typename: "Issue",
    id: string,
    title: string,
    description: string,
    comments?: Array< string | null > | null,
    labels?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetIssueQueryVariables = {
  id?: string,
};

export type GetIssueQuery = {
  getIssue?:  {
    __typename: "Issue",
    id: string,
    title: string,
    description: string,
    comments?: Array< string | null > | null,
    labels?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListIssuesQueryVariables = {
  filter?: ModelIssueFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListIssuesQuery = {
  listIssues?:  {
    __typename: "ModelIssueConnection",
    items?:  Array< {
      __typename: "Issue",
      id: string,
      title: string,
      description: string,
      comments?: Array< string | null > | null,
      labels?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateIssueSubscription = {
  onCreateIssue?:  {
    __typename: "Issue",
    id: string,
    title: string,
    description: string,
    comments?: Array< string | null > | null,
    labels?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateIssueSubscription = {
  onUpdateIssue?:  {
    __typename: "Issue",
    id: string,
    title: string,
    description: string,
    comments?: Array< string | null > | null,
    labels?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteIssueSubscription = {
  onDeleteIssue?:  {
    __typename: "Issue",
    id: string,
    title: string,
    description: string,
    comments?: Array< string | null > | null,
    labels?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
