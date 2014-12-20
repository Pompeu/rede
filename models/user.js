var db = require('./neo.js');

var User = module.exports =  function (data) {
		return {
			create : function (callback) {
				var node = db.createNode(data);
				var query = [
					'CREATE (user:User {data})',
        			'RETURN user',
        			].join('\n');
        		var params = {
        			data: data
        		};	
				db.query(query,params, function (err, results) {
					if (err) return callback(err);
			        var user = new User(results[0]['user']);
			        callback(null, user);
				});

			},
			getAll :  function (callback) {
				var query = [
			        'MATCH (user:User)',
			        'RETURN user',
			    ].join('\n');

			    db.query(query, null, function (err, results) {
			        if (err) return callback(err);
			        var users = results.map(function (result) {
			        	return  result['user'].data;    
			        });
			        
			        callback(null, users);
			    });
			},
			getOneById : function (id, callback) {
				 db.getNodeById(id, function (err, node) {
			        if (err) return callback(err);
			        callback(null, new User(node));
			    });
			}
		};
};

