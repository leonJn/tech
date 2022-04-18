// 给定一个 数组 和 一个整数，判断数组nums[0]每隔k个后是不是和nums[0]一样
// nums = [1,2,3,1] k = 2 true
// nums = [1,0,1,1] k = 1 true
// nums = [1,2,3,1,2,3] k = 2 false


function arrow(arr, num) {
	let key = num + 1;
	let flag = true;
	if (key > arr.length - 1) {
		console.log(false);
		return;
	}
	for (let i = 1; i < arr.length; i++) {
		if (key === i) {
			key += num + 1;
			console.log(key, arr[0], arr[i])
			if (arr[0] !== arr[i]) {
				flag = false;
			}
		}
	}
	console.log(flag);
}
// 用例1：2
arrow([1,2,1,5,1,3], 1);




















// function foo(arr, key){
//     let flag = false
//     let k = key+1
//     let num = arr[0]
//     for(let i = 1; i < arr.length; i++){
//         if(i == k){
//             k = i + key + 1
//             if(arr[i] != num){
//                 flag = true
//             } 
//         }
//     }
//     if(flag){
//         console.log(false)
//     }else{
//         console.log(true)
//     }
// }
// foo([1,0,1,1,1,0,0], 2)