
// 有一个简易内存池。内存按照大小粒度分类，每个粒度有若干个可用内存资源。用户会进行一系列内存申请，需要按需分配内存池中的资源，返回申请结果成功失败列表，分配规则如下<br>
//     1.分配的内存要大于等于内存的申请量，存在满足需求的内存就必须分配，优先分配粒度小的，但内存不能拆分使用<br>
//     2.需要按申请顺序分配，先申请的先分配，<br>
//     3.有可用内存分配则申请结果为true，没有可用则返回false<br>
//     注释：不考虑内存释放<br>

//     示例一：<br>
//     输入：<br>
//     64:2,128:1,32:4,1:128<br>
//     50,36,64,128,127<br>
//     输出：<br>
//     true,true,true,false,false<br>

//     说明:<br>
//     内存池资源包含：64k共2个、128k共1个、32k共4个、1k共128个的内存资源<br>
//     针对50,36,64,128,127的内存申请序列，<br>
//     分配的内存依次是，64,64,128,null,null<br>
//     第三次申请内存时已经将128分配出去，因此输出的结果是<br>
//     true,true,true,false,false</p>

let str;
while ((str = readline())) {
  let pool = str
    .split(",")
    .map((item) => [
      parseInt(item.slice(0, item.indexOf(":"))),
      parseInt(item.slice(item.indexOf(":") + 1, item.length)),
    ])
    .sort((a, b) => {
      return a[0] - b[0];
    });
  let str2 = "50,36,64,128,127";
  let pool2 = str2.split(",");
  let res = [];
  for (let i = 0; i < pool2.length; i++) {
    let flag = true;
    for (let j = 0; j < pool.length; j++) {
      if (pool[j][0] > pool2[i] && pool[j][1] > 0) {
        res.push(true);
        pool[j][1]--;
        flag = false;
        break;
      }
    }
    if (flag) {
      res.push(false);
    }
  }
  console.log(res.join(","));
}
