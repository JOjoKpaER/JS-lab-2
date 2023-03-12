let arr1 = [1, 2, 5, 4, 6];
let arr2 = [8, 2, 5, 9, 5];
let arr12 = arr1.concat(arr2);
arr12 = arr12.sort();
if (arr12.length %2 == 0){
	console.log(arr12[arr12.length/2 - 1] + arr12[arr12.length/2] / 2);
}else{
	console.log(arr12[Math.round(arr12.length - 1)/2]);
}