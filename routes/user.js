var User = require('../models/user');


module.exports = function  (app) {

	add = function (req, res) {
		var user =  new User(req.body);
		user.create(function  () {
			res.json(user);	
		});
		
	};

	list = function (req, res, next) {
		new User().getAll(function (err, _users) {
			res.json(_users);
		});        
    };
	
	findById = function (req, res , next){
		new User().get(req.params.id, function (err, _user) {
			if(err) return next(err);
				res.json(_user)
		})
	};
		
	app.post('/user', add);
	app.get('/users' ,list);
	app.get('/user/:id',findById);
	/*app.post('/userLogar',logar);
	app.put('/user/:id', update);
  	app.delete('/user/:id', del);
  	app.get('/users' ,findAll);
  	app.get('/user/:id',findById);*/	
}; 