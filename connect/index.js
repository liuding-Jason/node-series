/*
*  Node.JS Middleware Modules Connect
*
*  # install 
*  npm install connect --save
*
*  # use
*  var connect = require("connect");
*  var app = connent();
*  app.use(function(req , res , next){})
*/

var connect = require("connect") ;
var http = require("http") ;

var app = connect() ;

// middleware -- html
app.use(function(req , res , next){
	if(req.url === "/"){
		res.writeHead(200 , {'Connect-Type' : 'text/html'}) ;
		res.end("<h1>Hello Connect!</h1>");
	}else{
		next() ;
	}
});

// middleware -- plain
app.use(function(req , res , next){
	if(req.url === "/list"){
		res.writeHead(200 , {'Connect-Type' : "text/plain"}) ;
		res.end("This is a web page !");
	}else{
		next() ;
	}
});

// middleware -- 404
app.use(function(req , res , next){
	res.writeHead(404);
	res.end('404');
});

http.createServer(app).listen(3000) ;
console.log("server is running at port 3000!");
