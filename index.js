import { Octokit, App } from "octokit";
import {config} from "./config.js";

const octokit = new Octokit({ auth: ``})

const {
  data: { login },
} = await octokit.rest.users.getAuthenticated();
console.log("Hello, %s", login);

const generateProject = () => {
  // create github project
  // make project private
  // name project
  // Return status and projectId
}
const generateIssues = (project, issueList) => {
  // return list of generated issues
}

