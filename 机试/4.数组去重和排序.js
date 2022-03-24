
		// <p>给定一个乱序的数组，排除所有的重复元素，使每个元素只出现一次，并且连续出现的次数从高到低排列，相同出现次数按照第一次出现顺序进行先后排序，</p>
		// <p>示例：</p>
		// <p>输入 1，3，3，3，3，4，4，4，2，5</p>
		// <p>输出 3，4，1，2，5</p>

let str;
while ((str = readline())) {
  const input = str.split(',').map(item => parseInt(item));
  const unique = Array.from(new Set(input));
  let arr = [];
  for (let i = 0; i < unique.length; i++) {
    let temp = unique[i];
    let count = 0;
    for (let j = 0; j < input.length; j++) {
      if (input[j] === temp) {
        count++;
      }
    }
    arr.push([temp, count]);
  }

  arr.sort((a, b) => {
    if (a[1] == b[1]) {
      return -1;
    } else {
      return b[1] - a[1];
    }
  });
  let res = []
  for(let val of arr){
      res.push(val[0])
  }
  console.log(res.join(','));
}

