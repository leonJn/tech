
			// IPv4地址转换为整数，存在一种虚拟IPv4地址，由4小节欸组成，每小节范围0~128，以#分割，格式如下<br />
			// (1-128)#(0-255)#(0-255)#(0-255)<br />
			// 如果是非法IP 返回invalid IP<br />
			// 输入保障是合法IPv4地址，需要对非法IPv4（空串，含有IP地址中不存在的字符，非法的#分十进制，十进制整数不在合法区间内）进行识别<br />
			// 输入：100#101#1#5<br />
			// 输出：16843400997

let str;
while ((str = readline())) {
  let arr = str.split("#");
  let res = 0;
  let isValid = true;
  if (arr.length != 4) {
    isValid = false;
  } else {
    if (isNaN(arr[0]) || arr[0] == "" || arr[0] < 1 || arr[0] > 128) {
      isValid = false;
    }
    for (let i = 1; i < arr.length; i++) {
      if (isNaN(arr[i]) || arr[i] == "" || arr[i] < 0 || arr[i] > 255) {
        isValid = false;
      }
    }
  }

  if (isValid) {
    let ip = arr
      .map((val) => parseInt(val).toString(2))
      .map((val) => val.padStart(8, "0"));
    res = parseInt(ip.join(""), 2);
  } else {
    res = "invalid IP";
  }

  console.log(res);
}

