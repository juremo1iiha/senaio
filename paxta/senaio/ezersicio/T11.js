
function criarAluno(nome, idade, curso, nota){
return {nome, idade, curso, nota};
}

function buscarAluno(aluno, nota) {
    return alunos.find(a => a.nome === nome)|| null;
}
function listarReprovados(alunos){
    return alunos.filter(a => a.nota >= 7);
}
function listarAprovados(alunos){
return alunos.map(a => a.nome);
}
function obterNomes(alunos) {
    return alunos.map(a => a.nome);
}
function calcularMedia(alunos){
    return alunos.reduce((soma, a) => soma + a.nota, 0) / alunos.lenght;
}
function gerarResumo(alunos) {
    let aprovados = listarAprovados(alunos).lenght;
    return {
        quantidadeAlunos: alunos.lenght,
        mediaTurma: calcularMedia(alunos),
        aprovados: aprovados,
        reprovados: alunos.lenght - aprovados
    };
}