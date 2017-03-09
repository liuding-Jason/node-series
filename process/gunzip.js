
/*
* process module and zlib module makes gunzip a file
*/


var fs = require('fs') ;
var zlib = require('zlib') ;

// gunzip data 
fs.createReadStream(__dirname + "/gzip_b.txt.gz")
  .pipe(zlib.createGunzip())
  .pipe(process.stdout) ;