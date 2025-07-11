import { gql } from '@apollo/client'

export const GET_REPOSITORY_DATA = gql`
  query GetRepository($repositoryKey: String!, $organizationKey: String!) {
    repository(repositoryKey: $repositoryKey, organizationKey: $organizationKey) {
      commitsCount
      contributorsCount
      createdAt
      description
      forksCount
      key
      issues {
        author {
          avatarUrl
          login
          name
        }
        organizationName
        repositoryName
        createdAt
        title
      }
      languages
      license
      name
      openIssuesCount
      organization {
        login
      }
      project {
        key
        name
      }
      releases {
        author {
          avatarUrl
          name
          login
        }
        isPreRelease
        name
        organizationName
        publishedAt
        repositoryName
        tagName
      }
      size
      starsCount
      topics
      updatedAt
      url
      recentMilestones(limit: 5) {
        author {
          avatarUrl
          login
          name
        }
        title
        openIssuesCount
        closedIssuesCount
        repositoryName
        organizationName
        createdAt
        url
      }
    }
    topContributors(organization: $organizationKey, repository: $repositoryKey) {
      avatarUrl
      login
      name
    }
    recentPullRequests(limit: 5, organization: $organizationKey, repository: $repositoryKey) {
      author {
        avatarUrl
        login
        name
      }
      createdAt
      organizationName
      repositoryName
      title
      url
    }
  }
`

export const GET_REPOSITORY_METADATA = gql`
  query GetRepository($repositoryKey: String!, $organizationKey: String!) {
    repository(repositoryKey: $repositoryKey, organizationKey: $organizationKey) {
      description
      name
    }
  }
`
