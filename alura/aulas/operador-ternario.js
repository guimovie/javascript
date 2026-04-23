let idadeEstudante = 16
let precisaDeAutorizacao

if (idadeEstudante < 18) {
    precisaDeAutorizacao = true
} else {
    precisaDeAutorizacao = false
}

console.log(precisaDeAutorizacao)

//  OU

let idade = 19
const autorizacao = idade < 18 ? true : false
console.log(autorizacao)