let resultado = saldoVitorias(30, 20);
let nivel = " ";

//Criando função para determinar o saldo de vitórias
function saldoVitorias(vitorias, derrotas){
    let saldo = vitorias - derrotas;
    return saldo;
}

//Estrutura de repetição para encontrar o nível do herói
switch (true){
    case resultado <= 10:
    nivel = "Ferro";
    break;
}

console.log("O Herói tem de saldo de " + resultado + " está no nível de " + nivel);
