(function(){
	'use strict';
	
	var express = require('express'),
		path = require('path'),
		open = require('open'),
		port = process.env.PORT || 8000,
		app = express();
	
	app.use(express.static(path.join(__dirname)));
	
	app.get('/',function(req,res){
		res.sendStatus(200);
	});
	
	app.listen(port,function(err){
		if(err){
			console.log(err)
		}else{
			open('http://localhost:' + port);
		}
	});
}());