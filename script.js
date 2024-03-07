//Calculadora de partidas Rankeadas
let resultado = saldoVitorias(100, 20);
let nivel = nivelHeroi();

//Criando função para determinar o saldo de vitórias
function saldoVitorias(vitorias, derrotas) {
    let saldo = vitorias - derrotas;
    return saldo;
}

//Função para verificar nivel do herói
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
console.log("O Herói tem de saldo de " + resultado + " está no nível de " + nivel);
