let msjError = document.querySelector('.msj-error')
function mostrarError(err) {
    if (err) {
        textoInput.classList.add('error')
        msjError.classList.remove('invisible')
    } else {
        textoInput.classList.remove('error')
        msjError.classList.add('invisible')
    }

}