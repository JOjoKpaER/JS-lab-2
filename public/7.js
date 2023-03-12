"use strict"

function getRecN(n){
	if (n <= 1) return 1;
	else return Math.sin(getRecN(n-1));
}

console.log(getRecN(20));