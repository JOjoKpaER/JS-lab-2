"use strict"

function perimeter(){
	let ret = 0;
	let x0 = arguments[0];
	let x00 = arguments[0];
	let y0 = arguments[1];
	let y00 = arguments[1];
	for (let i = 2; i < arguments.length; i += 2){
		let x1 = arguments[i];
		let y1 = arguments[i+1];
		ret += Math.sqrt((x1 - x0)**2 + (y1 - y0)**2);
		x0 = x1;
		y0 = y1;
	}
	ret += Math.sqrt((x0 - x00)**2 + (y0 - y00)**2);
	return ret;
}

console.log(perimeter(0,0, 0,5, 10,5, 10,0))