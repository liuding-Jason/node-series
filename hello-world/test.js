
/*
* Test SetInterval
*/

var t = setInterval(function(){
	console.log(a++);
	if(a >= 10){
		clearInterval(t);
	}
} , 1000);