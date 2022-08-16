import { Octokit, App } from "octokit";
import {config} from "./config.js";
import * as dotenv from 'dotenv'
dotenv.config()

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN})

const {
  data: { login },
} = await octokit.rest.users.getAuthenticated();
console.log("Hello, %s", login);

const generateProject = (feature) => {
  // create github project
  octokit.rest.projects.createForOrg({
    org: config.organization,
    name: feature
  })
  // make project private
  // name project
  // Return status and projectId
}
const generateIssues = (projectID, issueList) => {
  // return list of generated issues
}

