
// 计算疫情扩散时间 | 时间限制：1秒 | 内存限制：32768K | 语言限制：不限
// 在一个地图中(地图由n*n个区域组成），有部分区域被感染病菌。感染区域每天都会把周围（上下左右）的4个区域感染。
// 请根据给定的地图计算，多少天以后，全部区域都会被感染。
    
// 如果初始地图上所有区域全部都被感染，或者没有被感染区域，返回-1
// 收起
// 输入描述:
// 一行N*N个数字（只包含0,1，不会有其他数字）表示一个地图，数字间用,分割，0表示未感染区域，1表示已经感染区域
// 每N个数字表示地图中一行，输入数据共表示N行N列的区域地图。
// 例如输入1,0,1,0,0,0,1,0,1，表示地图
// 1,0,1
// 0,0,0
// 1,0,1
// 输出描述:
// 一个整数，表示经过多少天以后，全部区域都被感染
// 示例1
// 输入
// 1,0,1,0,0,0,1,0,1
// 输出
// 2
// 说明
// 1天以后，地图中仅剩余中心点未被感染；2天以后，全部被感染。
// 示例2
// 输入
// 0,0,0,0
// 输出
// -1
// 说明
// 无感染区域
// 示例3
// 输入
// 1,1,1,1,1,1,1,1,1
// 输出
// -1
// 说明
// 全部都感染
// 备注:
// 1<=N<200 -->

let str;
while ((str = readline())) {
  let string_list = str.split(",").map((item) => parseInt(item));
  const length = string_list.length;
  const calcObj = calcCount(string_list);
  const slice = parseInt(Math.pow(length, 0.5));
  let grid = [];
  for (let i of generateArray(0, slice - 1)) {
    grid.push(string_list.slice(i * slice, (i + 1) * slice));
  }

  let max = 0;
  const len = grid.length;
  let dist = [];
  dist.length = len;
  //init
  for (let i = 0; i < len; i++) {
    dist[i] = [];
    dist[i].length = len;
    for (let j = 0; j < len; j++) {
      dist[i][j] = grid[i][j] === 1 ? 0 : Number.MAX_SAFE_INTEGER;
    }
  }

  for (let i = 0; i <= len * 2; i++) {
    extend(i);
  }

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      max = Math.max(dist[i][j], max);
    }
  }
  if (max === Number.MAX_SAFE_INTEGER || max === 0) {
    console.log(-1);
  } else {
    console.log(max);
  }

  //距离 + 1
  function extend(n) {
    // const maxDist = len * 2;
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
        if (dist[i][j] === n) {
          let newDist = dist[i][j] + 1;
          //右
          if (i < len - 1) {
            dist[i + 1][j] = Math.min(dist[i + 1][j], newDist);
          }
          //左
          if (i > 0) {
            dist[i - 1][j] = Math.min(dist[i - 1][j], newDist);
          }
          //上
          if (j > 0) {
            dist[i][j - 1] = Math.min(dist[i][j - 1], newDist);
          }
          //下
          if (j < len - 1) {
            dist[i][j + 1] = Math.min(dist[i][j + 1], newDist);
          }
        }
      }
    }
  }

  function generateArray(start, end) {
    return Array.from(new Array(end + 1).keys()).slice(start);
  }

  function calcCount(arr) {
    var obj = {};
    for (var i = 0; i < arr.length; i++) {
      var key = arr[i];
      if (obj[key]) {
        obj[key]++;
      } else {
        obj[key] = 1;
      }
    }
    return obj;
  }
}