
// 热点网站统计
// 输入描述：每一行都是一个URL或一个数字，若果是URL，代表一段时间内的网页访问；如果是数字N，代表本次输出的Top N个URL
// 输入：
// news.qq.com
// news.sina.cn
// news.qq.com
// news.qq.com
// game.163.com
// game.163.com
// www.huawei.com
// www.cctv.com
// 3
// www.huawei.com
// www.cctv.com
// www.huawei.com
// www.cctv.com
// www.huawei.com
// www.cctv.com
// www.huawei.com
// www.cctv.com
// www.huawei.com
// 3

let line
let arr = []
while(line = readline()){
    arr.push(line)
}
let url = [[]]
let key = 0
let topNum = []
for(let i = 0; i < arr.length; i++){
    if(arr[i].indexOf('.')>-1){
        url[`${key}`].push(arr[i])
    }else{
        if(i < arr.length-1){
            url.push([])
        }
        topNum.push(arr[i])
        key++
    }
}
for(let i = 0; i < url.length; i++){
    let obj = {}
    for(let val of url[i]){
        if(!obj[val]){
            obj[val] = 1
        }else{
            obj[val] += 1
        }
    }
    let res = []
    for(let key in obj){
        res.push([key,obj[key]])
    }
    res.sort((a,b)=>{ 
        if(a[1]==b[1]){
            return a[0].charCodeAt(0) - b[0].charCodeAt(0)
        }else{
            return b[1] - a[1]
        }
    })
    let slice = res.slice(0, parseInt(topNum[i])).map(item=>item[0])
    console.log(slice.join(','))
}