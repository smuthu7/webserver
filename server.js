var Express = require('express');
var app = Express();
var PORT=3000;

var middleware = {
	requireAuthentication: function(req, res, next){
		console.log('private route hit!');
		next();
	},
	logger: function(req,res,next){
		console.log('Request: '+ new Date().toString()+ ' '+ req.method + ' '+ req.originalUrl);
		next();
	}
};

app.use(middleware.logger);

app.get('/about',middleware.requireAuthentication, function(req,res){
	res.send('This is about Muthu!');
});
app.use(Express.static(__dirname+'/public'));
app.listen(PORT, function(){
	console.log('Express server started on port '+PORT);
});