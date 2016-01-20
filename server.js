var Express = require('express');
var app = Express();
var PORT=3000;
var middleware = require ('./middleware.js')

app.use(middleware.logger);

app.get('/about',middleware.requireAuthentication, function(req,res){
	res.send('This is about Muthu!');
});
app.use(Express.static(__dirname+'/public'));
app.listen(PORT, function(){
	console.log('Express server started on port '+PORT);
});