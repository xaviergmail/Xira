/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  email: string,
};

export type ModelUserConditionInput = {
  email?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
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

export type User = {
  __typename: "User",
  id?: string,
  email?: string,
  createdAt?: string,
  updatedAt?: string,
};

export type UpdateUserInput = {
  id: string,
  email?: string | null,
};

export type DeleteUserInput = {
  id?: string | null,
};

export type CreateLabelInput = {
  id?: string | null,
  name?: string | null,
  color?: number | null,
};

export type ModelLabelConditionInput = {
  name?: ModelStringInput | null,
  color?: ModelIntInput | null,
  and?: Array< ModelLabelConditionInput | null > | null,
  or?: Array< ModelLabelConditionInput | null > | null,
  not?: ModelLabelConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Label = {
  __typename: "Label",
  id?: string,
  name?: string | null,
  color?: number | null,
  issues?: ModelLabelIssuesConnection,
  createdAt?: string,
  updatedAt?: string,
};

export type ModelLabelIssuesConnection = {
  __typename: "ModelLabelIssuesConnection",
  items?:  Array<LabelIssues | null > | null,
  nextToken?: string | null,
};

export type LabelIssues = {
  __typename: "LabelIssues",
  id?: string,
  labelID?: string,
  issueID?: string,
  label?: Label,
  issue?: Issue,
  createdAt?: string,
  updatedAt?: string,
  owner?: string | null,
};

export type Issue = {
  __typename: "Issue",
  id?: string,
  title?: string,
  text?: string,
  comments?: ModelCommentConnection,
  labels?: ModelLabelIssuesConnection,
  status?: string | null,
  createdAt?: string,
  updatedAt?: string,
  owner?: string | null,
};

export type ModelCommentConnection = {
  __typename: "ModelCommentConnection",
  items?:  Array<Comment | null > | null,
  nextToken?: string | null,
};

export type Comment = {
  __typename: "Comment",
  id?: string,
  issueID?: string,
  text?: string,
  issue?: Issue,
  createdAt?: string,
  updatedAt?: string,
  owner?: string | null,
};

export type UpdateLabelInput = {
  id: string,
  name?: string | null,
  color?: number | null,
};

export type DeleteLabelInput = {
  id?: string | null,
};

export type CreateLabelIssuesInput = {
  id?: string | null,
  labelID: string,
  issueID: string,
};

export type ModelLabelIssuesConditionInput = {
  labelID?: ModelIDInput | null,
  issueID?: ModelIDInput | null,
  and?: Array< ModelLabelIssuesConditionInput | null > | null,
  or?: Array< ModelLabelIssuesConditionInput | null > | null,
  not?: ModelLabelIssuesConditionInput | null,
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

export type UpdateLabelIssuesInput = {
  id: string,
  labelID?: string | null,
  issueID?: string | null,
};

export type DeleteLabelIssuesInput = {
  id?: string | null,
};

export type CreateCommentInput = {
  id?: string | null,
  issueID: string,
  text: string,
};

export type ModelCommentConditionInput = {
  issueID?: ModelIDInput | null,
  text?: ModelStringInput | null,
  and?: Array< ModelCommentConditionInput | null > | null,
  or?: Array< ModelCommentConditionInput | null > | null,
  not?: ModelCommentConditionInput | null,
};

export type UpdateCommentInput = {
  id: string,
  issueID?: string | null,
  text?: string | null,
};

export type DeleteCommentInput = {
  id?: string | null,
};

export type CreateIssueInput = {
  id?: string | null,
  title: string,
  text: string,
  status?: string | null,
};

export type ModelIssueConditionInput = {
  title?: ModelStringInput | null,
  text?: ModelStringInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelIssueConditionInput | null > | null,
  or?: Array< ModelIssueConditionInput | null > | null,
  not?: ModelIssueConditionInput | null,
};

export type UpdateIssueInput = {
  id: string,
  title?: string | null,
  text?: string | null,
  status?: string | null,
};

export type DeleteIssueInput = {
  id?: string | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items?:  Array<User | null > | null,
  nextToken?: string | null,
};

export type ModelLabelFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  color?: ModelIntInput | null,
  and?: Array< ModelLabelFilterInput | null > | null,
  or?: Array< ModelLabelFilterInput | null > | null,
  not?: ModelLabelFilterInput | null,
};

export type ModelLabelConnection = {
  __typename: "ModelLabelConnection",
  items?:  Array<Label | null > | null,
  nextToken?: string | null,
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null,
  issueID?: ModelIDInput | null,
  text?: ModelStringInput | null,
  and?: Array< ModelCommentFilterInput | null > | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  not?: ModelCommentFilterInput | null,
};

export type ModelIssueFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  text?: ModelStringInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelIssueFilterInput | null > | null,
  or?: Array< ModelIssueFilterInput | null > | null,
  not?: ModelIssueFilterInput | null,
};

export type ModelIssueConnection = {
  __typename: "ModelIssueConnection",
  items?:  Array<Issue | null > | null,
  nextToken?: string | null,
};

export type ModelIDKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelLabelIssuesFilterInput = {
  id?: ModelIDInput | null,
  labelID?: ModelIDInput | null,
  issueID?: ModelIDInput | null,
  and?: Array< ModelLabelIssuesFilterInput | null > | null,
  or?: Array< ModelLabelIssuesFilterInput | null > | null,
  not?: ModelLabelIssuesFilterInput | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type CreateUserMutationVariables = {
  input?: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    email: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input?: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    email: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input?: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    email: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateLabelMutationVariables = {
  input?: CreateLabelInput,
  condition?: ModelLabelConditionInput | null,
};

export type CreateLabelMutation = {
  createLabel?:  {
    __typename: "Label",
    id: string,
    name?: string | null,
    color?: number | null,
    issues?:  {
      __typename: "ModelLabelIssuesConnection",
      items?:  Array< {
        __typename: "LabelIssues",
        id: string,
        labelID: string,
        issueID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateLabelMutationVariables = {
  input?: UpdateLabelInput,
  condition?: ModelLabelConditionInput | null,
};

export type UpdateLabelMutation = {
  updateLabel?:  {
    __typename: "Label",
    id: string,
    name?: string | null,
    color?: number | null,
    issues?:  {
      __typename: "ModelLabelIssuesConnection",
      items?:  Array< {
        __typename: "LabelIssues",
        id: string,
        labelID: string,
        issueID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteLabelMutationVariables = {
  input?: DeleteLabelInput,
  condition?: ModelLabelConditionInput | null,
};

export type DeleteLabelMutation = {
  deleteLabel?:  {
    __typename: "Label",
    id: string,
    name?: string | null,
    color?: number | null,
    issues?:  {
      __typename: "ModelLabelIssuesConnection",
      items?:  Array< {
        __typename: "LabelIssues",
        id: string,
        labelID: string,
        issueID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateLabelIssuesMutationVariables = {
  input?: CreateLabelIssuesInput,
  condition?: ModelLabelIssuesConditionInput | null,
};

export type CreateLabelIssuesMutation = {
  createLabelIssues?:  {
    __typename: "LabelIssues",
    id: string,
    labelID: string,
    issueID: string,
    label:  {
      __typename: "Label",
      id: string,
      name?: string | null,
      color?: number | null,
      issues?:  {
        __typename: "ModelLabelIssuesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    issue:  {
      __typename: "Issue",
      id: string,
      title: string,
      text: string,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      labels?:  {
        __typename: "ModelLabelIssuesConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateLabelIssuesMutationVariables = {
  input?: UpdateLabelIssuesInput,
  condition?: ModelLabelIssuesConditionInput | null,
};

export type UpdateLabelIssuesMutation = {
  updateLabelIssues?:  {
    __typename: "LabelIssues",
    id: string,
    labelID: string,
    issueID: string,
    label:  {
      __typename: "Label",
      id: string,
      name?: string | null,
      color?: number | null,
      issues?:  {
        __typename: "ModelLabelIssuesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    issue:  {
      __typename: "Issue",
      id: string,
      title: string,
      text: string,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      labels?:  {
        __typename: "ModelLabelIssuesConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteLabelIssuesMutationVariables = {
  input?: DeleteLabelIssuesInput,
  condition?: ModelLabelIssuesConditionInput | null,
};

export type DeleteLabelIssuesMutation = {
  deleteLabelIssues?:  {
    __typename: "LabelIssues",
    id: string,
    labelID: string,
    issueID: string,
    label:  {
      __typename: "Label",
      id: string,
      name?: string | null,
      color?: number | null,
      issues?:  {
        __typename: "ModelLabelIssuesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    issue:  {
      __typename: "Issue",
      id: string,
      title: string,
      text: string,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      labels?:  {
        __typename: "ModelLabelIssuesConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateCommentMutationVariables = {
  input?: CreateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type CreateCommentMutation = {
  createComment?:  {
    __typename: "Comment",
    id: string,
    issueID: string,
    text: string,
    issue:  {
      __typename: "Issue",
      id: string,
      title: string,
      text: string,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      labels?:  {
        __typename: "ModelLabelIssuesConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateCommentMutationVariables = {
  input?: UpdateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type UpdateCommentMutation = {
  updateComment?:  {
    __typename: "Comment",
    id: string,
    issueID: string,
    text: string,
    issue:  {
      __typename: "Issue",
      id: string,
      title: string,
      text: string,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      labels?:  {
        __typename: "ModelLabelIssuesConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteCommentMutationVariables = {
  input?: DeleteCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type DeleteCommentMutation = {
  deleteComment?:  {
    __typename: "Comment",
    id: string,
    issueID: string,
    text: string,
    issue:  {
      __typename: "Issue",
      id: string,
      title: string,
      text: string,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      labels?:  {
        __typename: "ModelLabelIssuesConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
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
    text: string,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        issueID: string,
        text: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    labels?:  {
      __typename: "ModelLabelIssuesConnection",
      items?:  Array< {
        __typename: "LabelIssues",
        id: string,
        labelID: string,
        issueID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
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
    text: string,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        issueID: string,
        text: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    labels?:  {
      __typename: "ModelLabelIssuesConnection",
      items?:  Array< {
        __typename: "LabelIssues",
        id: string,
        labelID: string,
        issueID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
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
    text: string,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        issueID: string,
        text: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    labels?:  {
      __typename: "ModelLabelIssuesConnection",
      items?:  Array< {
        __typename: "LabelIssues",
        id: string,
        labelID: string,
        issueID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id?: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    email: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items?:  Array< {
      __typename: "User",
      id: string,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetLabelQueryVariables = {
  id?: string,
};

export type GetLabelQuery = {
  getLabel?:  {
    __typename: "Label",
    id: string,
    name?: string | null,
    color?: number | null,
    issues?:  {
      __typename: "ModelLabelIssuesConnection",
      items?:  Array< {
        __typename: "LabelIssues",
        id: string,
        labelID: string,
        issueID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListLabelsQueryVariables = {
  filter?: ModelLabelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLabelsQuery = {
  listLabels?:  {
    __typename: "ModelLabelConnection",
    items?:  Array< {
      __typename: "Label",
      id: string,
      name?: string | null,
      color?: number | null,
      issues?:  {
        __typename: "ModelLabelIssuesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetCommentQueryVariables = {
  id?: string,
};

export type GetCommentQuery = {
  getComment?:  {
    __typename: "Comment",
    id: string,
    issueID: string,
    text: string,
    issue:  {
      __typename: "Issue",
      id: string,
      title: string,
      text: string,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      labels?:  {
        __typename: "ModelLabelIssuesConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentsQuery = {
  listComments?:  {
    __typename: "ModelCommentConnection",
    items?:  Array< {
      __typename: "Comment",
      id: string,
      issueID: string,
      text: string,
      issue:  {
        __typename: "Issue",
        id: string,
        title: string,
        text: string,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
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
    text: string,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        issueID: string,
        text: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    labels?:  {
      __typename: "ModelLabelIssuesConnection",
      items?:  Array< {
        __typename: "LabelIssues",
        id: string,
        labelID: string,
        issueID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
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
      text: string,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      labels?:  {
        __typename: "ModelLabelIssuesConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type IssuesByLabelQueryVariables = {
  labelID?: string | null,
  issueID?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelLabelIssuesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type IssuesByLabelQuery = {
  issuesByLabel?:  {
    __typename: "ModelLabelIssuesConnection",
    items?:  Array< {
      __typename: "LabelIssues",
      id: string,
      labelID: string,
      issueID: string,
      label:  {
        __typename: "Label",
        id: string,
        name?: string | null,
        color?: number | null,
        createdAt: string,
        updatedAt: string,
      },
      issue:  {
        __typename: "Issue",
        id: string,
        title: string,
        text: string,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type LabelsByIssueQueryVariables = {
  issueID?: string | null,
  labelID?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelLabelIssuesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type LabelsByIssueQuery = {
  labelsByIssue?:  {
    __typename: "ModelLabelIssuesConnection",
    items?:  Array< {
      __typename: "LabelIssues",
      id: string,
      labelID: string,
      issueID: string,
      label:  {
        __typename: "Label",
        id: string,
        name?: string | null,
        color?: number | null,
        createdAt: string,
        updatedAt: string,
      },
      issue:  {
        __typename: "Issue",
        id: string,
        title: string,
        text: string,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type CommentsByIssueQueryVariables = {
  issueID?: string | null,
  text?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CommentsByIssueQuery = {
  commentsByIssue?:  {
    __typename: "ModelCommentConnection",
    items?:  Array< {
      __typename: "Comment",
      id: string,
      issueID: string,
      text: string,
      issue:  {
        __typename: "Issue",
        id: string,
        title: string,
        text: string,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    email: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    email: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    email: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateLabelSubscription = {
  onCreateLabel?:  {
    __typename: "Label",
    id: string,
    name?: string | null,
    color?: number | null,
    issues?:  {
      __typename: "ModelLabelIssuesConnection",
      items?:  Array< {
        __typename: "LabelIssues",
        id: string,
        labelID: string,
        issueID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateLabelSubscription = {
  onUpdateLabel?:  {
    __typename: "Label",
    id: string,
    name?: string | null,
    color?: number | null,
    issues?:  {
      __typename: "ModelLabelIssuesConnection",
      items?:  Array< {
        __typename: "LabelIssues",
        id: string,
        labelID: string,
        issueID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteLabelSubscription = {
  onDeleteLabel?:  {
    __typename: "Label",
    id: string,
    name?: string | null,
    color?: number | null,
    issues?:  {
      __typename: "ModelLabelIssuesConnection",
      items?:  Array< {
        __typename: "LabelIssues",
        id: string,
        labelID: string,
        issueID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateLabelIssuesSubscription = {
  onCreateLabelIssues?:  {
    __typename: "LabelIssues",
    id: string,
    labelID: string,
    issueID: string,
    label:  {
      __typename: "Label",
      id: string,
      name?: string | null,
      color?: number | null,
      issues?:  {
        __typename: "ModelLabelIssuesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    issue:  {
      __typename: "Issue",
      id: string,
      title: string,
      text: string,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      labels?:  {
        __typename: "ModelLabelIssuesConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateLabelIssuesSubscription = {
  onUpdateLabelIssues?:  {
    __typename: "LabelIssues",
    id: string,
    labelID: string,
    issueID: string,
    label:  {
      __typename: "Label",
      id: string,
      name?: string | null,
      color?: number | null,
      issues?:  {
        __typename: "ModelLabelIssuesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    issue:  {
      __typename: "Issue",
      id: string,
      title: string,
      text: string,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      labels?:  {
        __typename: "ModelLabelIssuesConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteLabelIssuesSubscription = {
  onDeleteLabelIssues?:  {
    __typename: "LabelIssues",
    id: string,
    labelID: string,
    issueID: string,
    label:  {
      __typename: "Label",
      id: string,
      name?: string | null,
      color?: number | null,
      issues?:  {
        __typename: "ModelLabelIssuesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    issue:  {
      __typename: "Issue",
      id: string,
      title: string,
      text: string,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      labels?:  {
        __typename: "ModelLabelIssuesConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateCommentSubscription = {
  onCreateComment?:  {
    __typename: "Comment",
    id: string,
    issueID: string,
    text: string,
    issue:  {
      __typename: "Issue",
      id: string,
      title: string,
      text: string,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      labels?:  {
        __typename: "ModelLabelIssuesConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateCommentSubscription = {
  onUpdateComment?:  {
    __typename: "Comment",
    id: string,
    issueID: string,
    text: string,
    issue:  {
      __typename: "Issue",
      id: string,
      title: string,
      text: string,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      labels?:  {
        __typename: "ModelLabelIssuesConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteCommentSubscription = {
  onDeleteComment?:  {
    __typename: "Comment",
    id: string,
    issueID: string,
    text: string,
    issue:  {
      __typename: "Issue",
      id: string,
      title: string,
      text: string,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      labels?:  {
        __typename: "ModelLabelIssuesConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateIssueSubscription = {
  onCreateIssue?:  {
    __typename: "Issue",
    id: string,
    title: string,
    text: string,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        issueID: string,
        text: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    labels?:  {
      __typename: "ModelLabelIssuesConnection",
      items?:  Array< {
        __typename: "LabelIssues",
        id: string,
        labelID: string,
        issueID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateIssueSubscription = {
  onUpdateIssue?:  {
    __typename: "Issue",
    id: string,
    title: string,
    text: string,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        issueID: string,
        text: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    labels?:  {
      __typename: "ModelLabelIssuesConnection",
      items?:  Array< {
        __typename: "LabelIssues",
        id: string,
        labelID: string,
        issueID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteIssueSubscription = {
  onDeleteIssue?:  {
    __typename: "Issue",
    id: string,
    title: string,
    text: string,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        issueID: string,
        text: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    labels?:  {
      __typename: "ModelLabelIssuesConnection",
      items?:  Array< {
        __typename: "LabelIssues",
        id: string,
        labelID: string,
        issueID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
