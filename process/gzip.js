
/*
* process module and zlib module makes gzip a file
*/

var fs = require('fs') ;
var zlib = require('zlib') ;

// gzip data
var writeStream = fs.createWriteStream(__dirname + "/gzip_b.txt.gz") ;
fs.createReadStream(__dirname + "/gzip_a.txt")
  .pipe(zlib.createGzip())
  .pipe(writeStream) ;

