# Task Manager App Submission

## Overview

This submission demonstrates a partial implementation of the Task Manager application. Due to an unresolved issue with connecting to the MongoDB database, the full functionality is not available.

## MongoDB Connection Error

The backend encountered the following error when attempting to connect to MongoDB:

MongoDB connection error: MongooseServerSelectionError: Could not connect to any servers in your MongoDB Atlas cluster.  you're trying to access the database from an IP that isn't whitelisted. Make sure your current IP address is on your Atlas cluster
 https://www.mongodb.com/docs/atlas/security-whitelist/
    at _handleConnectionErrors C:\Users\ELCOT\Downloads\task-manager-app\backend\node_modules\mongoose\lib\connection.js:1165:1
    at NativeConnection.openUri C:\Users\ELCOT\Downloads\task-manager-app\backend\node_modules\mongoose\lib\connection.js:1096:
  errorLabelSet: Set(0) {},
  reason: TopologyDescription {
    type: 'ReplicaSetNoPrimary',
    servers: Map(3) {
      'ac-wdwf2dz-shard-00-01.lzyx6hu.mongodb.net:27017' => [ServerDescription],
      'ac-wdwf2dz-shard-00-02.lzyx6hu.mongodb.net:27017' => [ServerDescription],
      'ac-wdwf2dz-shard-00-00.lzyx6hu.mongodb.net:27017' => [ServerDescription]
    },
    stale: false,
    compatible: true,
    heartbeatFrequencyMS: 10000,
    localThresholdMS: 15,
    setName: 'atlas-em6xv9-shard-0',
    maxElectionId: null,
    maxSetVersion: null,
    commonWireVersion: 0,
    logicalSessionTimeoutMinutes: null
  },
  code: undefined

Efforts to resolve this issue, including checking the connection string and attempting to whitelist the current IP address, were unsuccessful within the submission timeframe.

## Partial Output Demonstration

To demonstrate the intended user interface flow and API communication, the backend authentication routes have been modified to provide mocked success responses for login.

### Login Functionality

The login functionality (`/login` on the frontend) demonstrates this mocked response. Upon submitting the login form, the backend sends a "Login successful (mock)" message, which is displayed on the frontend (see attached screenshot).

### Registration Functionality

The registration page (`/register` on the frontend) is currently encountering a 404 Not Found error. Due to time constraints, this issue could not be resolved for the submission.

## Backend Code Modification

The mocked login response is implemented in the `backend/routes/auth.routes.js` file.

## How to Run (with known issues)

1.  Navigate to the `backend` directory in the terminal and run `npm start`. (Note: This will likely show the MongoDB connection error but the server for the mocked login will still run).
2.  Navigate to the `frontend/my-app` directory in a separate terminal and run `npm start -p 3000` (or `yarn start -p 3000`).
3.  Open your browser to `http://localhost:3000/login` to see the mocked login success. The `/register` page may not function correctly.

## Screenshots

A screenshot of the working mocked login functionality is included with this submission.
