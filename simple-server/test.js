
/*
* Test 
*/

const http = require("http");

const host = "192.168.1.198" ;
const port = 3000 ;

var server =  http.createServer(function(request , response){

	response.status = 200 ;
	response.setHeader("Context-Type" , "text/html");
	response.end("<h1>Hello express!</h1>");

}); 

server.listen(port , host , function(){
	console.log(`server is running at ${host}:${port}`);
});
