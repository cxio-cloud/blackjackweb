function calcularIMC() {
    var formulario = document.getElementById("formulario");
    var peso = formulario.peso.value;
    var altura = formulario.altura.value;
    var imc = peso / (altura * altura);
    var resposta = document.getElementById("resposta")

    formulario.imc.value = imc.toFixed(2);

    if (imc < 18.5) {
        document.getElementById("resposta").innerHTML="Seu Peso está baixo!"
    } else if (imc > 18.5 && imc < 24.9) {
        document.getElementById("resposta").innerHTML="Seu Peso está normal! não se preocupe."
    } else if (imc > 30 && imc < 34.9) {
        document.getElementById("resposta").innerHTML="Voce está com Obesidade (Nivel 1), procure um medico!!!"
    } else if (imc > 35 && imc < 39.9) {
        document.getElementById("resposta").innerHTML = "Voce está em Obesidade Severena (Nivel 2), procure o mais rapido possível um medico ou especialista"
    } else if (imc > 40) {
        document.getElementById("resposta").innerHTML="VOCE ESTÁ COM OBESIDADE MORBIDA, VA PARA UMA EMERGENCIA URGENTE!!!!"
    }
}