﻿var btn_jogador1 = document.getElementById("btn_jogador_1");
var btn_jogador2 = document.getElementById("btn_jogador_2");
var btn_parar1 = document.getElementById("btn_parar_1");
var btn_parar2 = document.getElementById("btn_parar_2");
var player1 = 0;
var player2 = 0;
var cartas1 = document.getElementById("cartas1");
var cartas2 = document.getElementById("cartas2");
var resultado1 = document.getElementById('resultado_jogador1');
var resultado2 = document.getElementById('resultado_jogador2');
var resultado_total = document.getElementById('resultado_total');


resultado_total
function valorAleatorio() {
    min = Math.ceil(1);
    max = Math.floor(13);
    var aleatorio = Math.floor(Math.random() * (max - min)) + min;
    return aleatorio;
}

function jogador1() {
    var aleatorio = valorAleatorio();
    $(cartas1).attr("src", '/images/' + aleatorio + '.png');

    resultado1.innerHTML = player1 += aleatorio;

    //logica de vitoria do game------------------------
    if (player1 > player2 && player1 <= 21) {
        Resultado.Text = "Jogador 1 Ganhou";
        $(btn_jogador1).attr('disabled', 'disabled');
        $(btn_parar1).attr('disabled', 'disabled');
    }
    else if (player1 < player2 && player2 <= 21) {
        resultado_total.innerHTML ="Jogador 2 Ganhou";
    }
    else if (player1 > 21 && player2 <= 21) {
        resultado_total.innerHTML =  "Jogador 2 Ganhou";
    }
    else if (player1 <= 21 && player2 <= 21) {
        resultado_total.innerHTML = "Nenhum Ganhador!";
    }
    else if (player2 > 21 && player1 > 21) {
        resultado_total.innerHTML = "A casa ganhou!";
    }
    else if (player2 > 21) {
        resultado_total.innerHTML = "Jogador 1 Ganhou";
    }
    ///////////////------------------------------------------
}

function jogador2() {
    var aleatorio = valorAleatorio();
    $(cartas2).attr("src", '/images/' + aleatorio + '.png');

    resultado2.innerHTML = player2 += aleatorio;
}

function parar1() {
    $(btn_jogador1).attr('disabled', 'disabled');
    $(btn_parar1).attr('disabled', 'disabled');

    $(btn_jogador2).removeAttr('disabled');
    $(btn_parar2).removeAttr('disabled');
}

function parar2() {
    $(btn_jogador2).attr('disabled', 'disabled');
    $(btn_parar2).attr('disabled', 'disabled');
}

function reiniciar() {
    $(btn_jogador2).removeAttr('disabled');
    $(btn_parar2).removeAttr('disabled');
    $(btn_jogador1).removeAttr('disabled');
    $(btn_parar1).removeAttr('disabled');

    player1 = 0;
    player2 = 0;
    resultado1.innerHTML = 0;
    resultado2.innerHTML = 0;

    resultado_total.innerHTML = "";

}

function iniciar() {

}