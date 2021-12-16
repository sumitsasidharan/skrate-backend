# Skrate Backend Server Demo

## Description

A backend server for fetching APIs. It includes the routes, models & controllers for User & Meeting collection stored in mongoDB database.

## Deployment URL

https://skrate-backend-server.herokuapp.com/

## Postman public URL

https://www.postman.com/martian-moon-293172/workspace/skrate-backend/overview

## API Endpoints & Usage

1. Users

   -  POST -> https://skrate-backend-server.herokuapp.com/users/new

      -  Creates new user in the database. Requires 'username' in the request body.

   -  GET -> https://skrate-backend-server.herokuapp.com/users/all

      -  Fetches all users and returns an array in json format.

   -  PUT -> https://skrate-backend-server.herokuapp.com/users/update/:userId

      -  Updates username. Requires userId in url, and userId & username in the request body.

   -  DELETE -> https://skrate-backend-server.herokuapp.com/users/:userId
      -  Just needs a userId as parameter in the api url, for deleting a specific user from database.

2. Meetings

   -  POST -> https://skrate-backend-server.herokuapp.com/meetings/new

      -  Creates a new meeting. Requires two userIDs and a date in the request body.

   -  GET -> https://skrate-backend-server.herokuapp.com/meetings/all

      -  Fetches all meetings.

   -  PUT -> https://skrate-backend-server.herokuapp.com/meetings/update/:meetingId

      -  To update a meeting. Requires a meetingID in the url and two userIDs & a date in the request body.

   -  DELETE -> https://skrate-backend-server.herokuapp.com/meetings/:meetingId
      -  Deletes specific meeting. Just needs a meetingID in the url as parameter.

## Technologies & Tools Used

-  Node.js & Express.js for configuring the backend server.
-  MongoDB & Mongoose for storing or retrieving data.
-  Git for version control & Github for hosting code.
-  Heroku for deployment.

## Setup locally

To run this project locally, download and run the following commands:

```
$ npm install
$ npm start
```

The port has been set to '5000' by default, you can change it in _server.js_ file. You can access the root from this url: http://localhost:5000/
