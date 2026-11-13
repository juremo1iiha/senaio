
const funcionarios = [
    {nome: "julio", salario: 2500, cargo: "desenvolvedor"},
    {nome: "maria", salario: 3200, cargo: "designer"},
    {nome: "gabriel", salario: 4500, cargo: "analista"},
];

function aplicarReajuste(funcionarios, percentual) {
    return funcionarios.map (f =>({
        ...f,
        salario: f.salario * (1 + percentual / 100)
    }));
}
console.log(aplicarReajuste(funcionarios, 10));
