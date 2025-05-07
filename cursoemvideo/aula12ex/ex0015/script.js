function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('textano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.style.width = '500px' 
        img.style.marginTop = '10px' 

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/criançaM.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/jovemM.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/adultoM.png')
            } else {
                img.setAttribute('src', 'imagens/idosoM.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/criançaF.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/jovemF.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/adultoF.png')
            } else {
                img.setAttribute('src', 'imagens/idosoF.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}