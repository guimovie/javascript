function carregar() {
    var texto = window.document.getElementById('texto')
    var img = window.document.getElementById('imagem')
    var agora = new Date()
    var hora = agora.getHours()
    //var hora = 13
    var minuto = agora.getMinutes()
    texto.innerHTML = `Agora são ${hora}h e ${minuto} min`
    if (hora < 12) {
        img.src = 'imagens/morning.jpg'
        document.body.style.background = "rgb(217, 230, 47)"
    } else if (hora >= 12 && hora < 18) {
        img.src = 'imagens/afternoon.jpg'
        document.body.style.background = "rgb(255, 124, 16)"
    } else {
        img.src = 'imagens/night.jpg'
        document.body.style.background = "rgb(0, 0, 46)"
    }
}