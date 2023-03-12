let arr = Array(6).fill().map(() => Math.floor(Math.random() * 100));
console.log(arr);
let mx = Math.max(...arr);
let mn = Math.min(...arr);
for (let i = 0; i < arr.length; i++){
	if (arr[i] == mx){
		arr[i] = mn;
		continue;
	}
	if (arr[i] == mn){
		arr[i] = mx;
	}
}
console.log(arr);