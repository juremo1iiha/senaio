const alunos = [
    {nome:"tarcisio", nota:1},
    {nome:"ana", nota:10},
    {nome:"gabriel", nota:9},
    {nome:"thawan", nota:8},
    {nome:"adriano", nota: 8.5},
    {nome: "jamilly", nota: 4},
];
function listarAprovados(alunos) {
    return alunos.filter(a => a.nota >= 7);
}
function obterNomes(alunos){
    return alunos.map(a => a.nome);
}
function calcularMediaTurma(alunos) {
    return alunos.reduce((soma, a) =>soma +a.nota,0) / alunos.lenght;
}
let aprovados = listarAprovados(alunos)
console.log(obterNomes(aprovados));
console.log("Média da turma: ", calcularMediaTurma(alunos));