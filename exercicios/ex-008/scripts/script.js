function verificar(){
    var ano = window.document.getElementById('ano')
    var agora = new Date()
    var anoAgora = agora.getFullYear()
    var idade = anoAgora - Number(ano.value) 
    var result = window.document.getElementById('result')
    var imagem = window.document.getElementById('img')
    if (Number(ano.value) > anoAgora) {
        window.alert('Ano invalido')
    } else {
        var sexo = window.document.getElementsByName('sexo')
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        var genero = ''

        if (sexo[0].checked) {
            genero = 'um Homem'
            if (idade <= 15) {
                //criança
                img.setAttribute('src', '../imagens/childrenboy.jpg')
            } else if (idade <= 50) {
                //jovem ou adulto
                img.setAttribute('src', '../imagens/adultboy.jpg')
            } else {
                //idoso
                img.setAttribute('src', '../imagens/oldman.jpg')
            }
        } else if(sexo[1].checked) {
            genero = 'uma Mulher'
            if (idade <= 15) {
                //criança
                img.setAttribute('src', '../imagens/childrengirl.jpg')
            } else if (idade <= 50) {
                //jovem ou adulto
                img.setAttribute('src', '../imagens/adultgirl.jpg')
            } else {
                //idoso
                img.setAttribute('src', '../imagens/oldwoman.jpg')
            }
        }

        result.innerHTML = `Detectamos ${genero} de ${idade} anos.`
        imagem.appendChild(img)
    }

}