// 给定一个长度为N的数组，存储了打乱顺序的每个人喊'过'的次数，请把它还原成正确的顺序，即数组的第i个元素存储编号i的人喊'过'的次数
// 示例：<br>
// 输入 0 0 0 2 1<br>
// 输出 0 2 0 1 0<br>
// 输入一串打乱的喊7次数，输出准确的顺序<br>
// 例如：输入00021 代表五个人，喊了三次过（逢7过）<br>
// 遇到的就是7，14，17，<br>
// 1  2  3  4  5<br>
// 6  7  8  9  10<br>
// 11 12 13 14 15<br>
// 16 17 <br>
// 分别出现在2号两次和4号一次，准确的顺序是02001

let line;
while ((line = readline())) {
  const str = line.split(' ');
  let num = 0;
  for (const x of str) {
    num += parseInt(x, 10);
  }
  const len = str.length;
  const arr = new Array(len).fill(0);
  let [index, count] = [1, 0];

  while (count < num) {
    if (index.toString(10).indexOf("7") !== -1 || index % 7 === 0) {
      let i = (index % len) - 1;
      arr[i]++;
      count++;
    }
    index++;
  }
  // 输出
  console.log(arr.join(' '));
}

