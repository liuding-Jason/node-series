
/*
* Node.JS could delieve a http server through 'http' module .
* 	API:
*		http.createServer(function(req , res){}) 
*		@params function(req , res){} -- the callback function of the created server
* 		http.listen(port)
*/


var http = require("http") ;

http.createServer(function(request , response){
	// eg1 Send String
	//response.writeHead("200" , {"Content-type" : "text/plain"});
    //response.end("hello world\n");

    // eg2 Send HTML
    response.writeHead("200" , {"Content-type" : 'text/html'}) ;
    response.end("<h1>Node Js can send HTML!</h1>\n") ;

}).listen(3000) ;

console.log("Server is running at 127.0.0.1:3000") ;

