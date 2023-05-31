const jsonServer = require('json-server');
const tmp = require('tmp');
const fs = require('fs');

// Create a temporary directory
const tmpDir = tmp.dirSync();

// Create an empty db.json file in the temporary directory
fs.writeFileSync(`${tmpDir.name}/db.json`, '{}');

// Start JSON Server using the temporary db.json file
const server = jsonServer.create();
const router = jsonServer.router(`${tmpDir.name}/db.json`);
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const port = 3000;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
