var myVar = 100;
test();
document.write("myVar is " + myVar);

function test() { 			
	var myVar = 50;
	document.write(`test실행 동안에는 myVar=${myVar}<br/>`);
}
