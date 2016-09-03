
var build = require('./build');
var express = require('express');
var Analytics = require('analytics-node');

var analytics = new Analytics('7wW12EyGvu', {
  flushAt: 1
});

/**
 * App.
 */

var app = express();

/**
 * Development.
 */

app.configure('development', function(){
  app.use(express.logger('dev'));
  app.use(builder);
});

/**
 * Static.
 */

app.use(express.static(__dirname + '/build'));

/**
 * Listen.
 */

app.listen(process.env.PORT, function(){
  console.log('Server running at http://localhost:' + process.env.PORT + '');
});

/**
 * Builder middleware.
 *
 * @param {Request} req
 * @param {Response} res
 * @param {Function} next
 */

function builder(req, res, next){
  if ('/' != req.path) return next();
  analytics.page({
    userId: 'random-id',
    name: 'Home',
    properties: {
      url: 'http://www.nightmarejs.org' + req.originalUrl
    },
    context: {
      ip: req.ip
    }
  }, function(err, batch){
    if (err) console.log(err);
    else console.log('successfully flushed');
  });
  build(function(err){
    if (err) return next(err);
    console.log('Built');
    next();
  });
}