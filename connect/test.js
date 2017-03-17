


var connect = require("connect") ;
var http = require("http") ;
var app = connect() ;

var fs = require("fs") ;
var path = require("path") ;
// middleware1
app.use(function(req , res , next){
	if(req.url === "/"){
		res.writeHead(200 , {'Context-Type' : 'text/html'});
		res.end("<h1>Hello Connect!</h1>");
	}else{
		next() ;
	}
});

app.use(function(req , res , next){
	if(req.url === "/list"){
		res.writeHead(200 , {"Connect-type" : 'text/html'});
		var listStream = fs.createReadStream(path.join(__dirname , "/list.html"));
		
		var data = '' ;
		listStream.setEncoding("UTF-8");
		listStream.on("data" , function(chunk){
			data += chunk ;
		});
		listStream.on("error" , function(err){
			console.error(err);
			next() ;
		});
		listStream.on("end" , function(){
			res.end(data);
		});
	}else{
		next() ;
	}
});

app.use(function(req , res , next){
	res.writeHead(404 , {"Context-Type" : 'text/html'});
	var noDataStream = fs.createReadStream(path.join(__dirname + "/404.html"));
	var data = '' ;
	noDataStream.on("data" , function(chunk){
		data += chunk ;
	}) ;
	noDataStream.on("end" , function(){
		res.end(data) ;
	});
});

http.createServer(app).listen(3000) ;
console.log("server is running at port 3000") ;