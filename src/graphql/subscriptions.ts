/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      email
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      email
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      email
      createdAt
      updatedAt
    }
  }
`;
export const onCreateLabel = /* GraphQL */ `
  subscription OnCreateLabel {
    onCreateLabel {
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
export const onUpdateLabel = /* GraphQL */ `
  subscription OnUpdateLabel {
    onUpdateLabel {
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
export const onDeleteLabel = /* GraphQL */ `
  subscription OnDeleteLabel {
    onDeleteLabel {
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
export const onCreateLabelIssues = /* GraphQL */ `
  subscription OnCreateLabelIssues {
    onCreateLabelIssues {
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
export const onUpdateLabelIssues = /* GraphQL */ `
  subscription OnUpdateLabelIssues {
    onUpdateLabelIssues {
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
export const onDeleteLabelIssues = /* GraphQL */ `
  subscription OnDeleteLabelIssues {
    onDeleteLabelIssues {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
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
export const onCreateIssue = /* GraphQL */ `
  subscription OnCreateIssue {
    onCreateIssue {
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
export const onUpdateIssue = /* GraphQL */ `
  subscription OnUpdateIssue {
    onUpdateIssue {
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
export const onDeleteIssue = /* GraphQL */ `
  subscription OnDeleteIssue {
    onDeleteIssue {
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
