var User = require('../models/user');


module.exports = function  (app) {

	cadUser = function(req,res) {
		res.render('caduser');
	};

	add = function (req, res, next) {
		User().create(req.body ,function(err, user) {
			if(err) return next(err);
			return res.json(user);
		});
	};

	update = function (req, res , nex) {
		User().getOneById(req.params.id, function (err, _user) {
			if(err) return next(err);
			 _user = req.body;
		});
	};

	list = function (req, res, next) {
		User().getAll(function (err, _users) {
			if(err) return next(err);
			return	res.json(_users);	
		});        
    };

	listUsers =function (req, res) {
		res.render('listusers');
	};

	findById = function (req, res , next){
		User().getOneById(req.params.id, function (err, _user) {
			if(err) return next(err);
			return	res.json(_user)
		});
	};

	findByName = function (req, res , next){
		User().getOneByName(req.params.name, function (err, _users) {
			if(err) return next(err);
			return	res.json(_users)
		});
	};

	app.post('/user', add);
	app.get('/caduser',cadUser);//pagina Cadastro
	app.get('/users' ,list);
	app.get('/listusers',listUsers);//pagina
	app.get('/user/:id',findById);
	app.get('/user/name/:name',findByName);
	app.put('/user/:id', update);
	/*app.post('/userLogar',logar);
	
  	app.delete('/user/:id', del);
  	app.get('/users' ,findAll);
  	app.get('/user/:id',findById);*/	
}; 