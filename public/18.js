let arr = [5, 4, 6, 2, 1];
let cond = true;
for (let i = 1; i < arr.length; i++){
	if (arr[i] > arr[i-1]){
		console.log(i);
		cond = false;
		break;
	}
}
if (cond == true){
	console.log(arr);
}