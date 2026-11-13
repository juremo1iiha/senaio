const produtos = [
    {nome: "Teclado", preco: 120},
    {nome: "Mouse", preco: 80},
    {nome: "Monitor", preco: 900},
    {nome: "Headset", preco: 250},
    {nome: "Webcam", preco: 300}
];

function filtrarProdutos(produtos, precoMaximo){
    return produtos.filter(p=> p.preco <= precoMaximo);
}
let limite = Number(prompt("Preço máximo: "));

console.log(filtrarProdutos(produtos, limite));
