function saudacao(nome) {
    return `Olá ${nome}, bem vindo(a)`
} 

console.log(saudacao('Guilherme'))

// ou

const saudacaoNome = (nome) => `Olá ${nome}, tamo junto`

console.log(saudacaoNome('Guilherme'))


function maiorDeIdade(idade) {
    if (idade < 18) {
        console.log(`Sua idade é ${idade}, Menor de Idade`)
    } else {
        console.log(`Sua idade é ${idade}, Maior de Idade`)
    }
}

maiorDeIdade(23)

function palindromo(palavra) {
    const palavraInvertida = palavra.split('').reverse().join('')
    if (palavra.toLowerCase() === palavraInvertida.toLowerCase()) {
        return `${palavra} é um Palíndromo`
    } else {
        return `${palavra} não é um Palíndromo, ao contrário fica ${palavraInvertida}`
    }
}

console.log(palindromo('Arara'))
