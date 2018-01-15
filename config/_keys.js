/* eslint-disable global-require */
switch (process.env.NODE_ENV) {
	case 'production':
		break;
	default:
		module.exports = require('./dev');
}
