function validarInput(texto) {
    const restricciones = /[^a-z ]/;
    return restricciones.test(texto);
}

