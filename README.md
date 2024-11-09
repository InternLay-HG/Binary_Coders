## Installation

Clone the repo and open my branch.

Install the necesarry packages:

    npm ci --prefix client ; npm ci --prefix server

In `server` folder create a `.env` file with the following:

    GOOGLE_CLIENT_ID=
    GOOGLE_CLIENT_SECRET=
    JWT_SECRET=
    FRONTEND_URL=http://localhost:3000
    BACKEND_URL=http://localhost:5000
    MONGO_URI=mongodb+srv://champa281982:sDTErVBBl2QNTjQ6@cluster0.4psoj.mongodb.net/Sports_management?retryWrites=true&w=majority
    PORT=5000
    IS_LOCAL=true

Then open 2 terminals and start the server client separately:

In first terminal,

    npm start --prefix client

In second terminal,

    npm run dev --prefix server

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
