## Introduction
This project has the intention of create a `client/server` App with REST API using `node.js / express.js / mongoDB` and a separate frontend with `React.js`.

### Goals
We are going to create a client/server app to do CRUD tasks with notes.
Each note resource has the following structure:
```json
{
    title: "some title",
    content: "some content"
}
```
The frontend will display a list of created notes and it will allow user to create new ones, edit/delete existents.

We have defined the following REST api, that will be consumed by the client app:
```
// GET /api/notes/
// GET /api/notes/:note_id
// POST /api/notes/
// PUT /api/notes/:note_id
// DELETE /api/notes/:note_id
```

## Prerequisites

- Latest [Node.js LTS](https://nodejs.org/en/download/)
- [yarn](https://yarnpkg.com/en/) or [npm](https://www.npmjs.com/)
- [mongoDB](https://www.mongodb.com/es)

In order to run this app it's important to have installed on your machine a mongoDB client. for more info about how to install it: [install mongo](https://docs.mongodb.com/manual/administration/install-community/)

### How to run it

We are going to use a few node packages inside our app. The first thing to do after downloading the project is run the install command and then `start`:
```sh
# with yarn
yarn 
yarn start
# with npm
npm i
npm start
```
This will install all required dependencies and start a development server under `http://localhost:3000/`.  

You can stop it with `Ctrl + c` and also as we use **pm2** to keep the server app alive, you will also need to run this command to stop the process:
```sh
yarn pm2 stop all
``` 
For more info about pm2 package look here: [pm2](https://pm2.io/runtime/)

**you can also run the server api and compile the frontend project by separate. For this, look inside package.json the commands under scripts**
### Folder Structure
In the root directory there are a bunch of configs files. Normally you don't need to change anything but know that:
```
 - .babelrc configure babel and a bunch of plugins to use ES6/7 with node and React
 - .env will host some configs for the API server
 - .eslintrc.js configuration of eslint 
 - webpack.config.js configuration file to compile all the client project
```
Then we have a src folder where we place both client/server projects with it's internal folder structure.

```
my-notes-app
├── ...
└── src
    ├── server
        ├── controllers
	       └── controllers grouped by feature in files. 
        ├── routes
 	       └── routes grouped by feature that map the url request with a controller action. 
        ├── Models
            └── models used in the app - will have a representation on the db. 
        ├── db  ── will abstract and handle all connections with db   
        └── index.js  ── entry point of the server    
    ├── client
        ├── Components
            └── Components grouped by feature inside folders
        ├── App.js
        └── index.js
```


**For any comment/suggestion you can find me at murgolo.s@gmail.com**