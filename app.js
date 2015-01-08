var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var sessions = require('client-sessions');
var csrf = require('csurf');


var models = global.models = require('./models');
var middlewares = global.middlewares = require('./middlewares');
var controllers = global.controllers = require('./controllers');

/*routes*/
var user =  require('./routes/user');
var pesquisador =  require('./routes/pesquisador');
var index =  require('./routes/index');


var app = express();



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
// deixando html legivel
app.locals.pretty = true;

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(sessions({
    cookieName: 'session',
    secret : '3120j0wej0134ja0j9013asj0575a0934'+Math.floor((Math.random() * 10000) + 1),
    duration : 7 * 60 * 1000,
    activeDuration: 5 * 60 * 1000,
    httpOnly: true, //navegador nunca acesse meus cookies
    secure: true, //cookier samento https
    ephemeral: true, //deletar cookie quando nevagador fechar
}));
/*app.use(csrf());*/

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/user', user);
app.use('/api/pesquisador', pesquisador);
app.use('/',index)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
