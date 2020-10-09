// Entendendo o funcionamento das funções

let a = 4
console.log(a)

//Function declaration
function bomDia() {
    console.log('Bom dia!')
}

bomDia()

//Function Expression
const boaTarde = function () {
    console.log('Boa tarde!')
}

boaTarde()

//undefined pois não retorna nada
// let x = boaTarde() 

//Retornando algo na função
//posso definir um parâmetro como opcional definindo um valor padrão para ele. Exemplo: o parâmetro B recebe como padrão o valor 0 (zero)
function somar(a, b = 0) {
    return a + b
}

let resultado = somar(3, 4)
console.log(resultado)

resultado = somar(3)
console.log(resultado)

//posso passar mais de um parâmetro que o JS não irá reclamar, porém ele ira ignorá-los ao executar e somará apenas os parâmetros que declaramos
//resultado = somar(3, 4, 5, 6, 7, 8) 

//posso passar menos parâmetros do que os obrigatórios, porém o JS irá somar o primeiro parâmetro com undefined e retornará NaN (Not a Number)
//resultado = somar(3)