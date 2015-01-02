// file: plugins/neo.js - created at 2015-01-01, 01:57
function neoHandler() {
 
 //  var neo4j = require('neo4j');
	// var db = new neo4j.GraphDatabase(
	//     process.env['NEO4J_URL'] ||
	//     process.env['GRAPHENEDB_URL'] ||
	//     'http://localhost:7474'
	// );
	var neo4j =(function() {
		var instance;

		function init() {
			var db = new neo4j.GraphDatabase(
			    process.env['NEO4J_URL'] ||
			    process.env['GRAPHENEDB_URL'] ||
			    'http://localhost:7474');
			return {
				db : db
			}

		};
		return {
			getInstance : function() {
				if(!instance){
					instance = init();
				}
				return instance;
			}
		}
	})();

}
module.exports = exports = neoHandler;
