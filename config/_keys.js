/* eslint-disable global-require */
switch (process.env.NODE_ENV) {
	case 'test':
		module.exports = require('./test');
		break;
	case 'production':
		module.exports = require('./prod');
		break;
	default:
		module.exports = require('./dev');
}
