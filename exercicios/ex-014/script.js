function add() {
    let num = document.getElementById('numero')
    let numero = Number(num.value)
    let lista = document.getElementById('lista')
    if (numero < 1 || numero > 100) {
        window.alert('adicione um numero compatível')
    } else {
        //lista.innerHTML = ' '
        lista.innerHTML += `<p>Valor ${numero} adicionado.</p>`
    }
}