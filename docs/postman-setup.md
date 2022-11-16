# Postman Setup

Postman is a great tool for testing API endpoints. The link above is a configuration file that
will help setup the basic configuration for working with most of the basic endpoints.

### Get Started

1. Install/Open Postman
2. Copy JSON configuration file `./devU.postman_collection.json`
3. Select `Import > File`
4. Open the file, select both collections, and click `Import`

### Setup Auth

See `docs/localAuth.md` for examples

1. Using the auth folder, run `retrieve auth token`
2. Copy the **content** of the refresh token
3. Under the devU collection, set a variable called `authorization` to the content of the previous step
4. Run all the requests you want!
