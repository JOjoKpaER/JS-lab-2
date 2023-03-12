let arr = Array(10).fill().map(() => Math.floor(Math.random() * 20) - 10);
console.log(arr);
for (let i = 0; i < arr.length; i++){
	if (i % 2 == 0 && arr[i] < 0){
		arr[i] /= 5;
	}
	if (i % 2 == 1 && arr[i] > 0){
		arr[i] *= 3;
	}
}
console.log(arr);