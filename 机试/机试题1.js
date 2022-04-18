// 敏感字段加密
// 给定一个由多个命令字组成的命令字符串
// 1.包含大小写字母，数字，下划线和偶数个双引号
// 2.命令字之间以一个或多个下划线_进行分割
// 3.可以通过两个双引号来标识含下划线_的命令字或空命令字
// 请对指定索引的敏感字段进行加密，替换为****** 并删除多余的前后多余下划线_，如无法找到指定索引的命令字，输出字符串ERROR

// 用例1：
// 2
// password_a123456B_"23123_sdf12"_1233_

function sensitive(str, key) {
	let arr = str
		.replace(/_"/g, '@"')
		.replace(/"_/g, '"@')
		.split("@")
		.filter(Boolean)
		.map((item) => (item.substr(0, 1) === '"' ? item : item.split("_")))
		.flat();
    if(key > arr.length){
        console.log('ERROR')
        return 
    }
    arr[key] = '******'
	console.log(arr.join('_'));
}

sensitive('password_a123456B_"23123_sdf12"_1233_"23123_sdf12"_', 4);

