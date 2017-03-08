
/*
* write stream 
*/

var fs = require("fs") ;
var writeStream = fs.createWriteStream(__dirname + "/b.txt");

// write(data , type)
writeStream.write("liuding" , "UTF-8") ;

writeStream.end() ;

writeStream.on("finish" , function(){
	console.log("write finish \n");
});

writeStream.on("error" , function(err){
	console.err(err);
});

console.log("writing!\n");