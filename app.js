//dependencies
var express = require('express'),
    path = require('path'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    sessions = require('client-sessions'),
    csrf = require('csurf'),
    compression = require('compression');


//globals
var models = global.models = require('./models');
var middlewares = global.middlewares = require('./middlewares');
var controllers = global.controllers = require('./controllers');

/*routes*/
var user =  require('./routes/user');
var auth =  require('./routes/auth');
var pesquisador =  require('./routes/pesquisador');
var bancaeditais =  require('./routes/bancaeditais');
var projetodepesquisa =  require('./routes/projetodepesquisa');
var area =  require('./routes/area');
var empresa =  require('./routes/empresa');
var publicacao =  require('./routes/publicacao');
var equipetecnica =  require('./routes/equipetecnica');
var routes = require('./routes/index');


var app = express();
app.use(compression());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'app/public')));

app.use(sessions({
  cookieName: 'session',
  secret : '3120j0wej0134ja0j9013asj0575a0934'+Math.floor((Math.random() * 10000) + 1),
  duration : 7 * 60 * 1000,
  activeDuration: 5 * 60 * 1000,
  httpOnly: true, //navegador nunca acesse meus cookies
  secure: true, //cookier samento https
  ephemeral: true, //deletar cookie quando nevagador fechar
}));

app.use(csrf());

app.use(function(req , res, next) {
  debug("session aways check ");
  if(req.session && req.session.user){
    models.db.find({email : req.session.user.email} ,
      function(err,user) {
        debug(user);
        if(user){
          req.user = user;
          delete req.user.password;
          req.session.user = req.user;
          res.locals.user =  req.user;
          debug(req.user);
        }
        next();
      });
  }else{
    next();
  }
});

function requireLogin(req , res, next) {
  debug("session aways reqlogin ");
  if(!req.user){
    res.redirect('/');
  }else{
    debug('aways reqlogin %s',user);
    next();
  }
}

app.use(function(req, res, next) {
  res.cookie('XSRF-TOKEN', req.csrfToken()); 
  next();
});

/* routes api*/
app.use('/api/user',requireLogin, user);
app.use('/api/pesquisador',requireLogin, pesquisador);
app.use('/api/projetodepesquisa',requireLogin, projetodepesquisa);
app.use('/api/area',requireLogin, area);
app.use('/api/empresa',requireLogin, empresa);
app.use('/api/publicacao',requireLogin, publicacao);
app.use('/api/equipetecnica',requireLogin, equipetecnica);
app.use('/api/bancaeditais',requireLogin, bancaeditais);

/* routes api comuns*/
app.use('/',routes);
app.use('/login', auth);


module.exports = app;
