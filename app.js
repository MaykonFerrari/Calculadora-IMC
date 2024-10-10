function calcularIMC() {
    var altura = parseFloat(document.getElementById("altura").value);
    var peso = parseFloat(document.getElementById("peso").value);

    if (altura && peso) {
        var imc = peso / (altura * altura);
        var mensagem;

        if(imc < 18.5) {
            mensagem = "Abaixo do peso";
        } else if (imc < 24.9){
            mensagem = "Peso normal";
        } else if (imc < 29.29) {
            mensagem = "Sobrepeso";
        } else if (imc < 34.9) {
            mensagem = "Obesidade grau 1";
        } else if (imc < 39.39) {
            mensagem = "Obesidade grau 2";
        } else {
            mensagem = "Obesidade grau 3";
        }

        document.getElementById("resultado").innerHTML = "Seu IMC é: " + imc.toFixed(2) + "<br>" + mensagem;
    } else {
        document.getElementById("resultado").innerHTML = "Por favor, insira sua altura e peso.";
    }
}