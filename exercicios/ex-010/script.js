function contar() {
    let inicio = window.document.getElementById('inicio')
    let fim = window.document.getElementById('fim')
    let passo = window.document.getElementById('passo')
    let res = window.document.getElementById('res')
    
    if (inicio.length == 0 || fim.length == 0  || passo.length == 0 ) {
        res.innerHTML = 'Impossivel contar'
    } else {
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        res.innerHTML = ' '

        if (p <= 0) {
            window.alert('considerando PASSO = 1')
            p = 1
        }
        if (i < f) {
            //contegem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} 👉`
            }
        } else {
            //contagem regressiva
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} 👉`
            }
        }
    res.innerHTML += ' ✅' 
    }
}