export const getOrgProjects = `
  query {
    organization(login: "dart-lang") {
      projectsV2(first: 50) {
        nodes {
          id
          title
        }
      }
    }
  }`

export const getRepoIssues = `
  query {
    repository(owner: "dart-lang", name: "sdk") {
      issues(last: 3) {
        edges {
          node {
            title
          }
        }
      }
    }
  }`
