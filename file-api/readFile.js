
/*
* node.JS offers file reading API through Node.JS's 'fs' module.
* sync read API : fs.readFileSync
* async read API : fs.readFile
*/
var fs = require("fs");

// sync
var data = fs.readFileSync("./name.txt");
console.log("同步读取完毕：\n" + data.toString() + "\n");


// async
fs.readFile("./name.txt" , function(err , data){
	if(err){
		return console.err(err);
	}
	console.log("异步读取文件 : \n" + data.toString());
});