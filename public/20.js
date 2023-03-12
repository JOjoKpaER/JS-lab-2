let matrix =[ [1, 2, 3, 4, 5], 
			  [5, 4, 3, 2, 1],
			  [6, 7, 8, 9, 0],
			  [0, 9, 8, 7, 6],
			  [2, 4, 6 ,8, 0]];
console.log(matrix);
let result = []
for (let i = 0; i < matrix.length; i++){
	let row = matrix[i];
	for (let j = 0; j < row.length; j++){
		if (matrix[i][j] >= -5 && matrix[i][j] <= 7){
			result[i+j] = matrix[i][j];
		}
	}
}
console.log(result);