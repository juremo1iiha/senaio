const carrinho = [
    {produto:"mouse", quantidade:2, preco: 80},
    {produto:"Teclado", quantidade:1, preco: 150},
    {produto:"Headset", quantidade:2, preco: 200}
];
function calcularTotal(carrinho) {
    return carrinho.reduce((total, item) => 
        total + item.quantidade * item.preco, 0);
}
function calcularTotalComDesconto(carrinho, desconto) {
    let total = calcularTotal(carrinho);
    return total * (1 - desconto / 100);
} 
console.log("Total: R$", calcularTotal(carrinho));
console.log("Total com desconto: R$", calcularTotalComDesconto(carrinho, 10));