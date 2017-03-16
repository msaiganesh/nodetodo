var express = require('express');
//import the controller part for the functioning


var todocontroller = require('./controllers/todocontroller');

//firing up the app express
var app  = express();
app.set('view engine','ejs');
app.use(express.static('./public'));
//setting the template engine


//using the middleware to give path to the static files

 // sending the parameter to functioning
todocontroller(app);
app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
