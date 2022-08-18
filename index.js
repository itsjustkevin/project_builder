import { Octokit, App } from "octokit";
import {config} from "./config.js";
import * as dotenv from 'dotenv'
dotenv.config()

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN})

/*
 * Github's REST api and GH cli do not offer the ability to manage Github
 * ProjectsV2.
 * The only hook to create projectsV2 I can find is with the graphQL api.  We
 * only need to use the graphQL api to generate the projectV2 and maybe add the
 * issues to the project as well.
 */
const generateProject = async (feature) => {
  // create github project
  // make project private
  // name project
  // Return status and projectId
}
const generateIssues = (projectID, issueList) => {
  // return list of generated issues
}

// Get all issues associated with a project
const getIssues = () => {}

