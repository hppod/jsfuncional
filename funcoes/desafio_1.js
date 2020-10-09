// somar(3)(4)(5)
function somar(a) {
    return function (b) {
        return function (c) {
            return a + b + c
        }
    }
}

const resultadoSomar = somar(3)(4)(5)
console.log(resultadoSomar)

const somarAB = somar(3)(4)
console.log(somarAB(13))

// fn -> 3 * 7
// fn -> 3 + 7
// fn -> 3 - 7
// calcular(3)(7)(fn)

function sum(a, b) {
    return a + b
}

function sub(a, b) {
    return a - b
}

function mul(a, b) {
    return a * b
}

function calcular(a) {
    return function (b) {
        return function (fn) {
            return fn(a, b)
        }
    }
}

const resSum = calcular(3)(7)(sum)
console.log(`Somar: ${resSum}`)

const resSub = calcular(3)(7)(sub)
console.log(`Subtraindo: ${resSub}`)

const resMul = calcular(3)(7)(mul)
console.log(`Multiplicando: ${resMul}`)
