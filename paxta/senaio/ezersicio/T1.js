
function calcularMedia(notas){

let soma = notas.reduce((a, b) => a + b, 0)
return soma / notas.lenght;
}
function verificarSituacao(media) {
    if (media >=7) return "Aprovado";
    if (media < 5) return "recuperação";
}
let notas = [];

for (let i = 0; i < 4; i++) (
    notas.push (Number(prompt("Digite a nota")))
);

let media = calcularMedia(notas);
console.log("notas", notas);
console.log("Média",  media);
console.log("Situação", verificarSituacao(media));
