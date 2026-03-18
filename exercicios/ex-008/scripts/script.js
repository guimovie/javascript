function verificar()  {
    var agora = new Date()
    var anoAgora = agora.getFullYear()
    var ano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    if (Number(ano.value) > anoAgora) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var radsex = window.document.getElementsByName('radsex')
        var idade = anoAgora - Number(ano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (radsex[0].checked) {
            genero = 'um Homem'
            if (idade >= 0 && idade < 15) {
                //criança
                img.setAttribute('src', 'criancam.jpg')
            } else if (idade < 50) {
                //jovem/adulto
                img.setAttribute('src', 'jovemm.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'oldm.jpg')
            }
        } else if (radsex[1].checked) {
            genero = 'uma Mulher'
            if (idade >= 0 && idade < 15) {
                //criança
                img.setAttribute('src', 'criancaf.jpg')
            } else if (idade < 50) {
                //jovem/adulto
                img.setAttribute('src', 'jovemf.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'oldf.jpg')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}