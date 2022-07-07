
function myFunction (a){
	const matriz = [];
	while (a>0){
		let lastDigit = a % 10;
		matriz.push(lastDigit);
		a = Math.floor(a/10);
	}

matriz.reverse();
return matriz;
}


console.log(myFunction(10));
//console.log(myFunction(931));
//console.log(myFunction(193278));