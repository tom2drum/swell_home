const express = require('express');

const setupMongoose = require('./config/setup-mongoose');
require('./models/_models');


//	DB CONNECTION
setupMongoose();


//	CREATING A SERVER
const app = express();


// 	ROUTES
require('./routes/routes')(app);


//	CLIENT CONFIG

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}


//	SERVER CONFIG
app.set('port', process.env.PORT || 3001);

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});

module.exports = {
	app
};
