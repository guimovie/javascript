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

function numeroMaior(n1, n2, n3) {
    if (n1 > n2 && n1 > n3) {
        return n1
    } else if (n2 > n1 && n2 > n3) {
        return n2
    } else if (n3 > n1 && n3 > n2) {
        return n3
    }
}

console.log(numeroMaior(40, 10, 80))

const calculaPotencia = (n1, n2) => n1 ** n2

console.log(calculaPotencia(5, 2))