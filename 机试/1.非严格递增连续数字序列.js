/* <p>非严格递增连续数字序列]输入一个字符串仅包含大小写字母和数字，求字符串中包含的非严格递增连续数字序列的长度（比如12234属于非严格递增连续数字序列）</p>
<p>示例：</p>
<p>输入 abc22234019A334bc</p>
<p>输出 4</p> */

let str;
while ((str = readline())) {
	let reg = new RegExp(/[a-zA-Z]/, "g");
	let arr = str.replace(reg, " ").split(" ");
	let count = 0;
	for (let a = 0; a < arr.length; a++) {
		if (arr[a]) {
			for (let i = 0; i < arr[a].length; i++) {
				for (let j = i + 1; j <= arr[a].length; j++) {
					let slice = arr[a].slice(i, j);
					// console.log(slice)
					if (isAddNum(slice)) {
						// console.log(slice)
						if (slice.length > count) {
							count = slice.length;
						}
					}
				}
			}
		}
	}
	console.log(count);
}
function isAddNum(str) {
	if (str.length == 1) {
		return false;
	}
	let flag = true;
	for (let i = 0; i < str.length - 1; i++) {
		if (str[i] != str[i + 1] && str[i + 1] - str[i] != 1) {
			flag = false;
		}
	}
	if (flag) {
		return true;
	}
}
