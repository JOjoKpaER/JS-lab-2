"use strict"

function u(x, y, z){
	return (Math.max(x, y) + Math.max(x + y, z))/(Math.max(0.5, x + z)**2);
}

console.log(u(1, 2, 3));