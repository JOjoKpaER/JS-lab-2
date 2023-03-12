"use strict"

function printForI(array1, array2){
	for (let i = 0; i < array1.length; i++){
		console.log(array1[i] + " " + array2[i]);
	}
}

function printForIn(array1, array2){
	for (let i in array1){
		console.log(array1[i] + " " + array2[i]);
	}
}

let countries = ["UK", "US", "Chad"];
let population = [67000000, 333000000, 17000000];

printForI(countries, population);
console.log("");
printForIn(countries, population);