alunos = []

for(let i = 0; i < 5; i++) {
    let nome = prompt("Nome do aluno")
    let idade = Number(prompt("Idade"))
    let curso = prompt("Curso")
    let nota = Number(prompt("Nota"))
    alunos.push(criarAluno(nome, idade, curso, nota));

}

console.log("alunos:", alunos);
console.log("Buscar Alunos:", buscarAluno(alunos, prompt("nome para buscar:")));
console.log("Aprovados:", listarAprovados(alunos));
console.log("Nomes:", obterNomes(alunos));
console.log("Média:", calcularMedia(alunos));
console.log("Resumo: ", gerarResumo(alunos));