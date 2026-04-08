let num = document.getElementById('numero')
let lista = document.getElementById('lista')
let res = document.getElementById('res')
let valores = []

function isNumber(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function add() {
    if (isNumber(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        lista.innerHTML += `<p>Valor ${num.value} adicionado.</p>`
        res.innerHTML = ''
    } else {
        window.alert('Numero invalido ou já encontrado na lista')
    }
    num.value = ' '
    num.focus()
}

function final() {
    if (valores.length == 0 ) {
        window.alert('Adicione valores antes de finalizar')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]
            } if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        media = soma / total
        
        res.innerHTML = ''
        res.innerHTML += `<p>Sua lista tem ${total} itens ao todo</p>`
        res.innerHTML += `<p>O maior numero é ${maior}</p>`
        res.innerHTML += `<p>O menor numero é ${menor}</p>`
        res.innerHTML += `<p>A soma de tudo é ${soma}</p>`
        res.innerHTML += `<p>A média de tudo é ${media.toFixed(3)}</p>`
    }
}