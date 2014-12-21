var User = require('../models/user');


module.exports = function  (app) {

	cadUser = function(req,res) {
		res.render('caduser');
	};

	add = function (req, res) {
		var user =  new User(req.body);
		user.create(function  () {
			res.json(user);	
		});
		
	};

	list = function (req, res, next) {
		new User().getAll(function (err, _users) {
			if(err) return next(err);
				res.json(_users);	
		});        
    };

	listUsers =function (req, res) {
		res.render('listusers');
	};

	findById = function (req, res , next){
		new User().getOneById(req.params.id, function (err, _user) {
			if(err) return next(err);
				res.json(_user)
		});
	};

	findByName = function (req, res , next){
		new User().getOneByName(req.params.name, function (err, _users) {
			if(err) return next(err);
				res.json(_users)
		});
	};

	app.post('/user', add);
	app.get('/caduser',cadUser);
	app.get('/users' ,list);
	app.get('/listusers',listUsers);//pagina
	app.get('/user/:id',findById);
	app.get('/user/name/:name',findByName);
	/*app.post('/userLogar',logar);
	app.put('/user/:id', update);
  	app.delete('/user/:id', del);
  	app.get('/users' ,findAll);
  	app.get('/user/:id',findById);*/	
}; 