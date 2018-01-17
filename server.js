const express = require('express');

const setupMongoose = require('./config/setup-mongoose');
const setupModels = require('./config/setup-models');
const getRouter = require('./routes');

const start = async () => {
  //	DB SETUP
  const cleanupMongoose = await setupMongoose();
  setupModels();

  //	CREATING A SERVER
  const app = express();

  // 	ROUTES
  app.use(getRouter());

  //	CLIENT CONFIG

  // Express only serves static assets in production
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
  }

  //	SERVER START
  return new Promise(resolve => {
		const port = process.env.PORT || 3001;
    const server = app.listen(port, () => {
      console.log(`Find the server at: http://localhost:${port}/`); // eslint-disable-line no-console
      server.on('close', () => cleanupMongoose());
      resolve(server);
    });
  });
};

start();

module.exports = start;
