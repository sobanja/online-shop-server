const jsonServer = require('json-server');
const os = require('os');
const fs = require('fs');
const path = require('path');

// Get the default temporary directory path
const tmpDir = os.tmpdir();

// Specify the path for the db.json file
const dbPath = path.join(tmpDir, 'db.json');

// Create an empty db.json file in the temporary directory
fs.writeFileSync(dbPath, '{}');

// Start JSON Server using the temporary db.json file
const server = jsonServer.create();
const router = jsonServer.router(dbPath);
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const port = 3000;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
