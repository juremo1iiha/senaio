const pedidos = [
    {id:1, cliente:"sophia", valor:800},
    {id:2, cliente:"carla", valor: 350},
    {id:3, cliente:"charles", valor:400},
    {id:4, cliente:"eduarda", valor:600}
];
function buscarPedidoPorCliente(pedidos, cliente) {
    return pedidos.filter(p=> p.cliente === cliente);
}
    function calcularTotalPedidos(pedidos){
    return pedidos.reduce((total, p) => total + p.valor, 0);
}
let cliente = prompt("Nome do cliente");
let resultado = buscarPedidoPorCliente(pedidos, cliente);

console.log("Pedidos", resultado);
console.log("Total: R$", calcularTotalPedidos(resultado));