All code for the application can be found in the `src/` directory.

## Running The Project
This application requires the installation of [Node.js](https://nodejs.org/).
* Navigate into the parent directory and run `npm install` to install the dependencies.
* Run `npm start` to launch the application.
* Open http://localhost:3000/ to view it in the browser.
* Use `ctrl-c` to stop the server.
* Run `npm test` to launch the test suite.
* Use `ctrl-c` or `q` to quite the testing watch mode.

## Libraries Frameworks and Utilities
The following are additional libraries, frameworks, and Utilities that were used beyond the foundational react and redux libraries.
### create-react-app
creat-react-app was used to handle the application build. It was chosen for its ease of use and because it is a widely recommended tool for creating React apps.
### react-table
This library was chosen for the table layout used for visualizing the quotes. It has many customizable features for creating a functional table and was easy to integrate into the implementation.
### axios
This client was chosen for making calls to the API. It supports Promises and has broad browser support.
### Jest
Jest is create-react-app's default test runner and thus was easily integrated into the application. It facilitates creating descriptive tests and provides visualization through its watcher in the command line.
### enzyme
enzyme allowed for shallow testing of the objects.
### redux-mock-store
react-mock-stock was chosen to simulate the store when testing asynchronous Redux actions.
### React Bootstrap
This was chosen for the power and ease of Bootstrap CSS explicitly built for a React app.
