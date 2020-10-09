// Entendendo como passar funções como parâmetros para outras funções e retornar outras funções a partir de funções

function bomDia() {
    console.log('Bom dia!')
}

const boaTarde = function () {
    console.log('Boa tarde!')
}

//Passando uma função como parâmetro para outra função
function executarQualquerCoisa(fn) {
    if (typeof fn === 'function') {
        fn()
    }
}

// Caso eu passe o 3 o JS vai retornar que 3 não é uma função
executarQualquerCoisa(3)
executarQualquerCoisa(bomDia)
executarQualquerCoisa(boaTarde)

//Retornar uma função a partir de outra função
function potencia(base) {
    return function (exp) {
        return Math.pow(base, exp)
    }
}

const potenciaDe2 = potencia(2)
console.log(potenciaDe2(8))

//Outra forma de chamar a potência
const potenciaDe34 = potencia(3)(4)
console.log(potenciaDe34)