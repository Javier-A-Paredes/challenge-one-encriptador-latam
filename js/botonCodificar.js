let form = document.querySelector('.form-encriptador')
let botonEncriptar = document.querySelector('.boton-encriptar')
let textoOutput = document.querySelector('#encriptacion')
let imagenSinMensaje = document.querySelector('.img-sin-msj')
let avisoSinMensaje = document.querySelector('.sin-msj')
let instruccionSinMsj = document.querySelector('.instruccion-sin-msj')
let botonCopiar = document.querySelector('.boton-copiar')

botonEncriptar.addEventListener('click', function (event) {
    event.preventDefault()


    let letras = ['e', 'i', 'a', 'o', 'u']
    let codigos = ['enter', 'imes', 'ai', 'ober', 'ufat']

    let texto = form['input-text'].value

    if (validarInput(texto) || texto.length == 0) {
        // botonEncriptar.disabled = true; 
        if (texto.length == 0) {
            msjError.textContent = 'No se ingresaron caracteres'
        } else {
            msjError.textContent = 'Se ingresó una mayúscula o algun carácter especial'
        }
        mostrarError(true)
        return;
    } else {
        mostrarError(false)
        let textoEncriptado = encriptarDesencriptar(texto, letras, codigos)
        textoOutput.textContent = textoEncriptado

        imagenSinMensaje.classList.add('invisible')
        avisoSinMensaje.classList.add('invisible')
        instruccionSinMsj.classList.add('invisible')
        botonCopiar.classList.remove('invisible')
        textoOutput.classList.remove('invisible')
    }
})