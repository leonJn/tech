
    // <p>[数组连续和] 给定一个含有N个正整数的数组，求出有多少个连续区间(包括单个正整数)，他们的和大于等于x</p>
    // <p>输入：第一行两个整数N x 第二行N个正整数</p>
    // <p>
    //     3 7<br>
    //     3 4 7
    // </p>
    // <p>输出：</p>
    // <p>4</p>

let str
while(str = readline()){
    let [length, x] = str.split(' ').map(item => parseInt(item))
    let arr = readline().split(' ')
    let sum = 0
    let qur = 0
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j <= arr.length; j++){
            let slice = arr.slice(i,j)
            for(let val of slice){
                sum += parseInt(val)
            }
            if(sum >= x){
                qur++
            }
        }
        sum = 0
    }
    console.log(qur)
}
