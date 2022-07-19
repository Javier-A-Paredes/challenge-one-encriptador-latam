let textoInput = document.getElementById("input-text")

function encriptarDesencriptar(texto, codificacion1, codificacion2) {

    for (let i = 0; i < codificacion1.length && i < codificacion2.length; i++) {
        codificacion1[i] = new RegExp(codificacion1[i], 'g')
        texto = texto.replace(codificacion1[i], codificacion2[i])
    }
    
    return texto
}

// encriptarDesencriptar('fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober!', letras, codigos)

