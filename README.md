### Current limitations

Currently there are no apis available for creating projectsV2.  There is no
access to projectsV2 through the rest api and it is not yet implemented in the
graphql api.

This application will create a project, and the project will need to be
manually converted to projectsV2 through the github UI.

## Requirements

### Authentication

To utilize this application, it is necessary to create a github token with the
proper scopes necessary to interact with the api.

### Scopes needed for token
- [x] repo
- [ ] admin:org
  - [x] write:org
  - [x] read:org
