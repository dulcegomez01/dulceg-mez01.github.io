function calcularIMC() {
    var peso = parseFloat(document.getElementById('peso').value);
    var estatura = parseFloat(document.getElementById('estatura').value);

    if(peso <= 0 || estatura <= 0){
        alert("Por favor ingrese valores válidos para peso y estatura");
        return;
    }

    var imc = peso / (estatura * estatura);
    document.getElementById('resultado').textContent = imc.toFixed(2);

    var posicion = obtenerPosicionIMC(imc);
    document.getElementById('posicion').textContent = posicion;
}

function obtenerPosicionIMC(imc) {
    if (imc < 18.5) {
        return 'Bajo peso';
    } else if (imc >= 18.5 && imc < 25) {
        return 'Peso normal';
    } else if (imc >= 25 && imc < 30) {
        return 'Sobrepeso';
    } else {
        return 'Obesidad';
    }
}