//dependencies
'use strict';

const express     = require('express');
const path        = require('path');
const logger      = require('morgan');
const bodyParser  = require('body-parser');
const compression = require('compression');
const cors        = require('cors');
const jwt         = require('express-jwt');
const secret      = require('./configs/apikey').value;
const jwtCheck    = jwt({secret: secret});

//globals
global.models      = require('./models');
global.middlewares = require('./middlewares');
global.controllers = require('./controllers');

/*routes*/
const user              = require('./routes/user');
const auth              = require('./routes/auth');
const pesquisador       = require('./routes/pesquisador');
const bancaeditais      = require('./routes/bancaeditais');
const projetodepesquisa = require('./routes/projetodepesquisa');
const area              = require('./routes/area');
const empresa           = require('./routes/empresa');
const publicacao        = require('./routes/publicacao');
const equipetecnica     = require('./routes/equipetecnica');
const routes            = require('./routes/index');
const app               = express();

app.use(cors());
app.use(compression());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/app/public/')));
app.use((req, res, next) => {
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
app.use('/api/projetosdepesquisa', projetodepesquisa);
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
  next();
});

module.exports = app;
