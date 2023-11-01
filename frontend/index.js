let contador = 1;

function trocarSlide() {
    document.getElementById('slide' + contador).checked = true;
    contador++;

    if (contador > 3) {
        contador = 1;
    }
}

setInterval(trocarSlide, 3500);
