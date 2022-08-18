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
- [ ] write:packages
  - [x] read:packages
- [ ] admin:org
  - [x] write:org
  - [x] read:org
- [ ] admin:org
  - [x] write:org
  - [x] read:org
- [ ] admin:public_key
  - [x] read:public_key
- [x] user
- [ ] write:discussion
  - [x] read:discussion
- [ ] admin:enterprise
  - [x] read:enterprise
- [x] project
- [ ] admin:gpg_key
  - [x] read:gpg_key

