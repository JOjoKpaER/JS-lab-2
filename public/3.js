"use strict"

function maxOfThree(n1, n2, n3){
	if (n1 >= n2){
		if (n1 >= n3) return n1;
		else return n3;
	}else{
		if (n2 >= n3) return n2;
		else return n3;
	}
}

console.log(maxOfThree(1,2,3));
console.log(maxOfThree(4,2,3));
console.log(maxOfThree(1,5,3));