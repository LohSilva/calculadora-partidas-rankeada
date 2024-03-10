//Usada para solicitar informações ao usuário.
const prompt = require('prompt-sync')();

let vitorias = prompt("Digite o número de vitórias: ");
let derrotas = prompt("Digite o número de derrotas: ");

//Armazena o saldo de vitórias, calculado pela função saldoVitorias
let resultado = saldoVitorias(vitorias, derrotas);

//Armazena o nível do jogador, determinado pela função nivelHeroi(nivel) 
let nivel = nivelHeroi();

//Calcula o saldo de vitórias do jogador subtraindo o número de derrotas do número de vitórias.
function saldoVitorias(vitorias, derrotas) {
    let saldo = vitorias - derrotas;
    return saldo;
}

//Determina o nível do jogador com base no saldo de vitórias utilizando uma estrutura de decisão switch
function nivelHeroi(nivel) {    
    switch (true) {
        case resultado <= 10:
            nivel = "Ferro";
            break;
        case resultado >= 11 && resultado <= 20:
            nivel = "Bronze";
            break;
        case resultado >= 21 && resultado <= 50:
            nivel = "Prata";
            break;
        case resultado >= 51 && resultado <= 80:
            nivel = "Ouro";
            break;
        case resultado >= 81 && resultado <= 90:
            nivel = "Diamante";
            break;
        case resultado >= 91 && resultado <= 100:
            nivel = "Lendário";
            break;
        default:
            nivel = "Imortal";
            break;
    }
    return nivel;
}

//Saída
console.log("O Herói tem saldo de " + resultado + " vitórias, e está no nível " + nivel);
