function numeros() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let num3 = parseFloat(document.getElementById("num3").value);

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        document.getElementById("resultados").innerText = "Por favor, ingresa solo números.";
    } else if (num1 === num2 && num2 === num3) {
        document.getElementById("resultados").innerText = "Los tres números son iguales.";
    } else {
        let numeros = [num1, num2, num3];
        numeros.sort((a, b) => a - b);

        let resultado = `
            El número mayor es: ${numeros[2]}<br>
            El número menor es: ${numeros[0]}<br>
            El número del centro es: ${numeros[1]}<br>
            Orden de menor a mayor: ${numeros.join(', ')}<br>
            Orden de mayor a menor: ${numeros.slice().reverse().join(', ')}<br>
        `;

        document.getElementById("resultados").innerHTML = resultado;
    }
}
