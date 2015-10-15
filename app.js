'use strict';

//dependencies
const express     = require('express'),
			path        = require('path'),
			favicon     = require('serve-favicon'),
			logger      = require('morgan'),
			bodyParser  = require('body-parser'),
			compression = require('compression'),
			cors        = require('cors'),
			jwt         = require('express-jwt'),
			secret =  require('./configs/apikey')().value,
			jwtCheck = jwt({secret: secret});

//globals
const models = global.models = require('./models');
const middlewares = global.middlewares = require('./middlewares');
const controllers = global.controllers = require('./controllers');

/*routes*/
const user =  require('./routes/user');
const auth =  require('./routes/auth');
const pesquisador =  require('./routes/pesquisador');
const bancaeditais =  require('./routes/bancaeditais');
const projetodepesquisa =  require('./routes/projetodepesquisa');
const area =  require('./routes/area');
const empresa =  require('./routes/empresa');
const publicacao =  require('./routes/publicacao');
const equipetecnica =  require('./routes/equipetecnica');
const routes = require('./routes/index');


const app = express();
app.use(cors());
app.use(compression());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'app/public')));
app.use(function(req, res, next) {
  res.setHeader('Cache-Control', 'public, max-age=31104000');
  next();
});
app.disable('x-powered-by');
app.enable('etag');



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

app.use('*', (req,res, next) => {
  res.status(404).send({
    err : "url not fount",
    go : "try use /api/* or check documentation"
  });
});

module.exports = app;
