// 输入整数N 实现N行的对称金字塔


function arrow(num) {
	let hideNum = num - 1;
	for (let i = 1; i <= num; i++) {
		let arr = [];
		let s = num - i;
		for (let j = 1; j <= 2 * num - 1; j++) {
			let n = j;
			if (j > num) {
				n = 2 * num - j;
			}
			if (n - s > 0) {
				arr.push(n - s);
			} else {
				arr.push(" ");
			}
		}
		hideNum--;
		console.log(arr.join(""));
	}
}
// 用例1：2
arrow(2);
// 用例2：3
arrow(3);
// 用例3：4
arrow(4);
// 用例3：5
arrow(5);
