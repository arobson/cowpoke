const stack = require( "./stack" );
const key = require( "configya" )( {
	file: "./config.json"
} ).api.key;
const checkAuth = require("../checkauth").bind(key);

module.exports = function( host, environment, slack ) {
	return {
		name: "environment",
		middleware: [checkAuth],
		actions: {
			upgrade: {
				url: "/stack",
				method: "PATCH",
				handle: stack.upgradeStack.bind( null, slack )
			}
		}
	};
};
