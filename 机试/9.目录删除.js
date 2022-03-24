
// 某文件系统中有N个目录，每个目录都一个独一无二的ID。每个目录只有一个父目录，但每个父目录下可以有零个或者多个子目录，目录结构呈树状结构。
// #
// 假设，根目录的ID为0，且根目录没有父目录，其他所有目录的ID用唯一的正整数表示，并统一编号。
// #
// 现给定目录ID和其父目录ID的对应父子关系表[子目录ID，父目录ID]，以及一个待删除的目录ID，请计算并返回一个ID序列，表示因为删除指定目录后剩下的所有目录，返回的ID序列以递增序输出。
// # 注意： 
// 1、被删除的目录或文件编号一定在输入的ID序列中；
// 2、当一个目录删除时，它所有的子目录都会被删除。 
// # 输入描述:
// 输入的第一行为父子关系表的长度m；接下来的m行为m个父子关系对；最后一行为待删除的ID。序列中的元素以空格分割，参见样例。
// # 输出描述: 
// 输出一个序列，表示因为删除指定目录后，剩余的目录ID。 
// # 示例1 
// 输入
// 5
// 8 6 
// 10 8
// 6 0 
// 20 8
// 2 6
// 8
// 输出 
// 2 6 

let num
while(num = parseInt(readline())){
    let dir = []
    for(let i = 0; i < num; i++){
        let arr = readline().split(' ').map(item => parseInt(item))
        dir.push(arr)
    }
    let del = parseInt(readline())
    let delArr = [del]
    let res = []
    delkey(del)
    for(let i = 0; i < dir.length; i++){
        let flag = true
        for(let j = 0; j < delArr.length; j++){
            if(dir[i][0] == delArr[j] || dir[i][1] == delArr[j] || dir[i][1] == 0){
                flag = false
            }
        }
        if(flag){
            res.push(dir[i])
        }
    }
//     console.log(JSON.stringify(res))
    if(res.length == 0){
        console.log('')
    }else{
        let result = Array.from(new Set(res.join(',').split(',').map(item => parseInt(item))))
            .sort((a,b) => a-b)
            .join(' ')
        console.log(result)
    }
    
    function delkey(key){
        for(let j = 0; j < dir.length; j++){
            if(dir[j][1] == key){
                delArr.push(dir[j][0])
                delkey(dir[j][0])
            }
        }
    }
}
