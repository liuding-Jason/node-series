
/*
* Node.JS's file writing API through 'fs' module 
* fs.writeFile(file , data [,options] , callback)
*/

var fs = require("fs") ;


fs.readFile("./name.txt" , function(err , data){

	if(err){
		return console.error(err);
	}
	console.log("开始写入!\n");
	fs.writeFile("./name.txt" , data.toString() + " new"  , function(err){
		if(err){
			return console.err(err);
		}
		console.log("写入成功！\n");
	});

});