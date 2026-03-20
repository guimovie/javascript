function gerar() {
    var numero = window.document.getElementById('numero')
    var num = Number(numero.value)
    var mult = 1
    var res = window.document.getElementById('res')
    res.innerHTML = " "
    while (mult <= 10) {
        res.innerHTML += `<p>${mult} x ${num} = ${mult*num}</p>`
        mult++  
    }
}