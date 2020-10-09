//Arrow Function
// São funções anonimas
const felizNatal = () => console.log('Feliz natal!')
felizNatal()

const saudacao = nome => `Fala, ${nome}!`
console.log(saudacao('Hygor'))

//Em arrow function com corpo é necessário explicitar o retorno com a palavra return
const somar = numeros => {
    let total = 0
    for (let n of numeros) {
        total += n
    }
    return total
}
console.log(somar([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

// Ao usar(...nomeParametro) temos a possibilidade de passar números variados de parâmetros, exemplo 1 parâmetro, ou 3, ou 10
const subtrair = (...numeros) => {
    console.log(Array.isArray(numeros))
    let total = 0
    for (let n of numeros) {
        total -= n
    }
    return total
}
console.log(subtrair(1, 2, 3))
console.log(subtrair(1, 2, 3, 5, 7))
console.log(subtrair(1, 2, 3, 5, 7, 9))

const multiplicar = (a, b) => a * b
console.log(subtrair(3, 9))

//Criando arrow functions dentro de outras arrows
const potencia = base => exp => Math.pow(base, exp)
console.log(potencia(2)(8))

// this
Array.prototype.log = function () {
    console.log(this)
}

Array.prototype.ultimo = function () {
    console.log(this[this.length - 1])
}

Array.prototype.primeiro = function () {
    console.log(this[0])
}

const numeros = [1, 2, 3]

numeros.log()
numeros.ultimo()
numeros.primeiro()