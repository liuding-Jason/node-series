
var fs = require("fs");

// 同步
var data = fs.readFileSync("./name.txt");
console.log("同步读取完毕：\n" + data.toString() + "\n");


// 异步
fs.readFile("./name.txt" , function(err , data){
	if(err){
		return console.err(err);
	}
	console.log("异步读取文件 : \n" + data.toString());
});