function contar() {
    var inicio = window.document.getElementById('inicio')
    var fim = window.document.getElementById('fim')
    var passo = window.document.getElementById('passo')
    var iNumero = Number(inicio.value)
    var fNumero = Number(fim.value)
    var res = window.document.getElementById('res')
    if (iNumero > fNumero) {
        window.alert(`Insira uma contagem válida!`)
    } else {
        res.innerHTML = ' '
        while (iNumero <= fNumero) {
            res.innerHTML += iNumero
            res.innerHTML += ' 👉 '
            iNumero = iNumero + Number(passo.value)
        }
        res.innerHTML += ' ✅'
    }
    
}