## Installation

Clone the repo and open my branch.

In vscode, open two terminals:

In the first terminal, navigate to the server directory and start the server:

    cd server
    npm i

Then create a `.env` file with the following:

    GOOGLE_CLIENT_ID=
    GOOGLE_CLIENT_SECRET=
    JWT_SECRET=
    FRONTEND_URL=
    MONGO_URI=

Then start the server:

    npm start

In the second terminal, navigate to the client directory and start the client:

    cd client
    npm i
    npm start

Then go to `http://localhost:3000`

## Folder structure

    /
    │
    ├── client/                     # react
    |   |
    │   ├── public/
    |   |
    │   └── src/
    |      |
    │      ├── pages/
    |      |
    │      └── App.jsx
    │
    │
    └── server/                     # express
        |
        ├── index.js
        |
        ├── routes/
        |   |
        │   ├── auth.js
        |   └── ...
        |
        └── utils/
            |
            └── mongo.js

## Tech used

- React (with Vite)
- Mongoose and Atlas for MongoDB
- google-auth-library for JWT authentication

## Notes

To log out, manually clear cookies in the browser.

When logging in, use your IIIT Ranchi email.

[Altas console](https://cloud.mongodb.com/v2/6718bf76b1b9ad76cf392188#/metrics/replicaSet/6718c08ff1806c283fc6c284/explorer/Sports_management/users/find)

[Render](https://dashboard.render.com/project/prj-csmcjhrtq21c738g517g)

Hosted url:
https://sports-management-system-binary-coders.onrender.com/
