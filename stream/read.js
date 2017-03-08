
/*
* read data from stream
*/

var fs = require("fs") ;

var readStream = fs.createReadStream(__dirname +  "/a.txt") ,
	data = "" ;

// set encode type
readStream.setEncoding("UTF-8");

readStream.on("data" , function(chunk){
	data += chunk ;
});

readStream.on("end" , function(){
	console.log("reading stream stops!\n");
	console.log("data : " + data);
});

readStream.on("error" , function(err){
	console.err(err);
});

console.log("reading!\n");