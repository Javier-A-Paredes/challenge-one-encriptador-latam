botonCopiar.addEventListener('click', function () {
    copiarAlPortapapeles(textoOutput.value)
})

function copiarAlPortapapeles(nuevaCopia) {
    navigator.clipboard.writeText(nuevaCopia).then(function () {
        // se copió
    }, function () {
        // no se copió
        console.log('Error al copiar al portapapeles')
    });
}