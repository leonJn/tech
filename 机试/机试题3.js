// 配置网络 求最快配置时间
// 输入
// 2    两组用例
// 3    3台机器
// 1 3  第一个为配置时间， 第二个为生效时间
// 2 2
// 3 1
// 2
// 1 1
// 2 2

let input = ["2 2", "1 1"];
let arr = input
	.map((item) => item.split(" ").map((item) => parseInt(item)))
	.sort((a, b) => {
		return b[1] - a[1];
	});

// 配置总时间
let time1 = 0;
// 配置+生效时间数组
let timeArr = [];
for (let i = 0; i < arr.length; i++) {
	time1 += arr[i][0];
	timeArr.push(time1 + arr[i][1]);
}
console.log(timeArr[arr.length - 1]);
// console.log(timeArr)
