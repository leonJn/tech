function funcClone(func) {
    let paramReg = /\((.*?)\)/
    let bodyReg = /\{(.*)\}/g
    let funcString = func.toString()
    if (func.prototype) {
        let param = paramReg.exec(funcString)
        let body = bodyReg.exec(funcString)
        if (body) {
            if (param) {
                let arrParam = param[1].split(',')
                return new Function(...arrParam, body[1])
            } else {
                return new Function(body[1])
            }
        }
    } else {
        return eval(funcString)
    }
}

const deepcloneTest = function (obj, hash = new WeakMap()) {
    const root = {}
    const loopList = [
        {
            parent: root,
            key: undefined,
            data: obj,
        }
    ];

    while (loopList.length) {
        const { parent, data, key } = loopList.pop()

        let res = parent;
        if (typeof key !== 'undefined') {
            res = parent[key] = {};
        }

        if (hash.has(data)) {
            parent[key] = hash.get(data)
            continue
        }

        const type = [Date, RegExp, Set, Map]
        if (type.includes(data.constructor)) {
            parent[key] = new data.constructor(data)
            continue
        }

        const allDesc = Object.getOwnPropertyDescriptors(data)
        Object.defineProperties(res, allDesc)
        res.__proto__ = Object.getPrototypeOf(data)

        hash.set(data, res)

        for (let k of Reflect.ownKeys(data)) {
            if (data[k] !== null && typeof data[k] === 'object') {
                loopList.push({
                    parent: res,
                    key: k,
                    data: data[k],
                })
            } else if (typeof data[k] === 'function') {
                res[k] = funcClone(data[k])
            } else {
                res[k] = data[k]
            }
        }
    }

    return root
}

function createData(deep, breadth) {
    var data = {};
    var temp = data;

    for (var i = 0; i < deep; i++) {
        temp = temp['data'] = {};
        for (var j = 0; j < breadth; j++) {
            temp[j] = j;
        }
    }

    return data;
}

function Person() {
    console.log("person")
}
let myPerson = new Person()

const enumer = Object.create(
    null,
    {
        x: { value: 'x', enumerable: false, writable: false },
        y: { value: 'y', enumerable: true }
    }
)

let obj = {
    name: '啊啊',
    sex: 1,
    boolean: true,
    array: [{
        apple: 1,
    }, 2, 3],
    null: null,
    undefined: undefined,
    Symbol: Symbol(2),
    bigint: BigInt(100),
    func: function () { console.log("func") },
    arrow: () => { console.log("arrow") },
    date: new Date(),
    regExp: new RegExp(),
    person: myPerson,
    enumer,
}
obj.loop = obj

deepcloneTest(createData(100000)) // 检查是否爆栈
let newObj = deepcloneTest(obj)

console.log('result', newObj)
console.log('检验方法复制', newObj.func === obj.func)
console.log('检验普通对象', newObj.array === obj.array)
console.log('检验原型', newObj.person.constructor)
console.log(newObj.enumer.y)
newObj.enumer.y = 2
console.log('检验描述对象属性', newObj.enumer.y) // 无法修改, 严格模式下会报错,
console.log('检验循环属性', newObj.loop === obj.loop)