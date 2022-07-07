
function myFunction (a,b){
	const date1 = new Date(a);
	const date2 = new Date(b);
	
    if (date1.getTime(a) < date2.getTime(b)){ 
    		if(date1.getUTCHours(a) < date2.getUTCHours(b) && date1.getUTCMinutes(a) < date2.getUTCMinutes(b)){
			return false
			}
			else{
			return true
			}
	}
    else{
		return true
	}
}
console.log(myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00')));
//console.log(myFunction(new Date('2000/01/01 09:00:00'), new Date('2000/01/01 08:45:00')));
//console.log(myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 09:45:00')));
//console.log(myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 09:00:00')));
