var db = require('./neo.js');

var User = module.exports =  function () {
		return {
			create : function (data,callback) {
				var node = db.createNode(data);
				callback(err,node);
				// var query = [
				// 	'CREATE (user:User {data})',
    //     			'RETURN user',
    //     			].join('\n');
    //     		var params = {
    //     			data: data
    //     		};	
				// db.query(query,params, function (err, results) {
				// 	if (err) return callback(err);
			 //        var user = results.map(function(result) {
			 //        	return result['user'].data;
			 //        });
			 //        callback(null, user);
				// });

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
				 var query = [
			        'MATCH (user:User)',
			        'WHERE id(user) = {id}',
			        'RETURN user',
			    ].join('\n');
			    var params = {
			    	id : new Number(id)
			    };
			    db.query(query, params, function (err, results) {
			        if (err) return callback(err);;
			        var users = results.map(function (result) {
			        	return  result['user'].data;    
			        });
			        
			        callback(null, users);
			    });
			},
			getOneByName : function(name, callback) {
				var query = [
			        'MATCH (user:User)',
			        'WHERE user.name = {name}',
			        'RETURN user',
			    ].join('\n');

			    var params = {
			    	name : name
			    };

			    db.query(query, params, function (err, results) {
			        if (err) return callback(err);;
			        var users = results.map(function (result) {
			        	return  result['user'].data;    
			        });
			        
			        callback(null, users);
			    });
			}
		};
};

