
/*
* stream pipe
*/

var fs = require("fs") ;

var readStream = fs.createReadStream(__dirname + "/a.txt") ;
var writeStream = fs.createWriteStream(__dirname + "/b.txt");

readStream.pipe(writeStream);
console.log("piping!\n");