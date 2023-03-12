let m = 5;
let n = 6;

let matrix = [];
for (let i = 0; i < m; i++){
	let arr = Array(n).fill().map(() => Math.floor(Math.random() * 18) - 9);
	matrix.push(arr);
}
console.log(matrix);

let mx = [];
for (let i in matrix){
	mx = mx.concat([Math.max(...matrix[i])]);
}

let mn = [];
for (let i = 0; i < matrix[0].length; i++){
	let tmpColumn = [];
	for (let j = 0; j < matrix.length; j++){
		tmpColumn = tmpColumn.concat([matrix[j][i]]);
	}
	mn = mn.concat([Math.min(...tmpColumn)]);
}

let sum = 0;
for (let i in mx){
	sum += mx[i];
}
console.log("Sum of max in rows: " + sum);

let prod = 1;
for (let i in mn){
	prod *= mn[i];
}
console.log("Product of min in columns: " + prod);