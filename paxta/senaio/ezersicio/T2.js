function criarProduto(nome, preco, categoria){
return (nome, preco, categoria)
}

function aplicarDesconto (produto, percentual) {
    return {
        ...produto,
        preco: produto.preco * (1 - percentual / 100)
    };
}

let nome = prompt("Nome do Produto: ");
let preco = Number(prompt("preco"));
let categoria = prompt("Categoria: ");

let produto = criarProduto(nome, preco, categoria);
let produtoDesconto = aplicarDesconto(produto, 10);

console.log(produto);
console.log("com desconto:", produtoDesconto);