var express = require('express');
var db = require('./db');
var controller = require('./controllers');

var parser = require('body-parser');
var morgan = require('morgan');

var router = require('./routes.js');

var app = express();

app.set('port', 3000);

app.use(parser.json());
app.use(morgan('dev'));

app.use('/', router);

app.get('/', function(req, res) {
  res.send('Welcome to Routend');
})

//set up for when there are static files
//app.use(express.static(__dirname, '..', /client));

app.listen(app.get('port'));
console.log('Running on port ' + app.get('port'));

// <script>
//   window.fbAsyncInit = function() {
//     FB.init({
//       appId      : '349457445439959',
//       xfbml      : true,
//       version    : 'v2.8'
//     });
//   };

//   (function(d, s, id){
//      var js, fjs = d.getElementsByTagName(s)[0];
//      if (d.getElementById(id)) {return;}
//      js = d.createElement(s); js.id = id;
//      js.src = "//connect.facebook.net/en_US/sdk.js";
//      fjs.parentNode.insertBefore(js, fjs);
//    }(document, 'script', 'facebook-jssdk'));
// </script>

//Uncomment to fill database with dummy data on server start
//controller.mockData(37.773972, -122.431297, 1483812798)

module.exports = app;

