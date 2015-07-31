//dependencies
var express     = require('express'),
    path        = require('path'),
    favicon     = require('serve-favicon'),
    logger      = require('morgan'),
    bodyParser  = require('body-parser'),
    compression = require('compression'),
    cors        = require('cors'),
    jwt         = require('express-jwt'),
    secret =  require('./configs/apikey')().value;


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
app.use(cors());
app.use(compression());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'app/public')));
app.disable('x-powered-by');
app.enable('etag');

var jwtCheck = jwt({
  secret: secret
});

/* routes api comuns*/
app.use('/',routes);


/* routes api*/
app.use('/api/user', user);
app.use('/api/login',auth);
app.use('/api/pesquisador', pesquisador);
app.use('/api/projetodepesquisa', projetodepesquisa);
app.use('/api/area', area);
app.use('/api/empresa', empresa);
app.use('/api/publicacao',jwtCheck, publicacao);
app.use('/api/equipetecnica', equipetecnica);
app.use('/api/bancaeditais', bancaeditais);

app.use('*', function(req,res, next) {
  res.status(404).send({
    err : "url not fount",
    go : "try use /api/* or check documentation"
  });
});

module.exports = app;
