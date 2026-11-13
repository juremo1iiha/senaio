// // // let nome = "talijuana"

// // // // rf01 armazena o nome do cliente 
// // // let numPedido = 7592847
// // // // rf02 armazena  o numero do pedido
// // // const nomeLanchonete = "comedaora"
// // // // rf03 armazena o nome da lanchonete 
// // // let nomepedido = "pastelao"
// // // // rf04 armazena o produto inicialmente solicitado
// // // let preço = 8
// // // // rf05 armazenar o preço unitario e a qauntidade
// // // let quantidade = 3
// // // // exibir no console 

// // let nome = (prompt("qual seu nome?"))
// // let numPedido = 42344534
// // const nomeLanchonete = "comedaora"
// // let nomepedido = (prompt("nome do pedido? "))
// // let quantidade = Number(prompt("quantos vc quer?"))
// // let preco = Number(prompt("qual o preço do pedido?"))
// // const subtotal = preco * quantidade
// // let embalagem = 2

// // let estoqueInicial = 50
// // // if (quantidade > 50 ) {
// // //     alert ("estoque insuficiente, estoque avaliável: " + estoqueInicial)
// // // } else if (quantidade < 0) {
// // //     alert ("Não é possivel realizar o pedido, quantidade inválida")
// // // } else (quantidade <= 50) 
// // let estoqueFinal = estoqueInicial - quantidade
// // alert ("o subtotal do pedido ficou: R$" + subtotal)
// // let statusPedido;
// // if (quantidade <=0 && quantidade > estoqueInicial) {
// //     statusPedido = false;
// // } else { statusPedido = true; }

// // let ValorTotalDesconto; 
// // if (statusPedido == true && subtotal >=100) {
// //     ValorTotalDesconto = subtotal * 1.1;
// // }else if (statusPedido == true  && subtotal >= 50 && subtotal < 100) {
// //     ValorTotalDesconto = subtotal * 1.05;
// // } else {
// //     console.log("sem desconto, valor final: R$" + total)
// //     ValorTotalDesconto = -subtotal;
// // } 
// // if (statusPedido) {
// // let total = subtotal - ValorTotalDesconto + embalagem

// // alert ("o valor total do pedido ficou: R$" + total)
// // console.log("cliente: ",nome)
// // console.log("numero: ",numPedido)
// // console.log("pedido: ", nomepedido)
// // console.log("preço: ",preco)
// // console.log("quantidade:", quantidade)
// // console.log("Estoque restante: ", estoqueFinal)
// // console.log("valor total: R$", total.toFixed(2))
// // } else {
// //     console.log ("pedido recusado");
// // }
// // // let produtos = []
// // // produtos = ["hamburguer", "coxinha", "sanduiche", "batata frita"]
// // // let tamanho = produtos.length 
// // // alert (produtos(2))


// // // id: 1,
// // // sabor: "4 queijos", 
// // // estoque: 10,
// // // tamanho: "brotinho"
// // // },
// // // {
// // // id: 2, 
// // // sabor: "marguerita"
// // // estoque: 10,
// // // tamanhos ["grande"],
// // // }



// // let catalogoproduto = []

// // let continuarCadastro = true;

// // do {
// //     let nome = prompt("nome do produto: ")
// //     let preco = Number(prompt("qual o preco? "))
// //     let estoque = Number(prompt("qual o estoque? "))
// //     let produto = {
// // id: catalogoproduto.lenght +1,
// // nome: nome,
// // preco: preco,
// // estoque: estoque,
// // };
// // catalogoproduto.push(produto);
// // let resposta = prompt("quer continuar cadastrando? s/n")
// // continuarCadastro=
// // resposta.toLowerCase()=== "s" || resposta.toLowerCase()

// // } while (continuarCadastro)
// //     console.log(catalogoproduto);

// // ============================================================================
// // GUIA DE ATUALIZAÇÃO: LANCHETECH (RF05 & DESAFIOS)
// // Instruções para os alunos:
// // 1. Procure pelas tags [NOVO REQUISITO] e implemente as funções indicadas.
// // 2. Procure pelas tags [ALTERAR / REFATORAR] para atualizar o código antigo.
// // 3. Os trechos com [MANTÉM IGUAL] já estão prontos da última aula.
// // ============================================================================

// const nomeLanchonete = "LancheTech";
// const taxaEmbalagemPadrao = 2.0;

// let catalogoProdutos = [];

// // [NOVO]: Array para armazenar todos os pedidos cadastrados no sistema
// let listaDePedidos = [];

// // ============================================================================
// // 1. FUNÇÕES AUXILIARES
// // ============================================================================

// // [MANTÉM IGUAL]: Formatação de moeda
// function formatarMoeda(valor) {
//   return `R$ ${valor.toFixed(2)}`;
// }

// // [MANTÉM IGUAL]: Busca linear manual no catálogo com for...of
// function buscarProdutoPorId(idProduto, listaProdutos = catalogoProdutos) {
//   for (let produto of listaProdutos) {
//     if (produto.id === idProduto) {
//       return produto;
//     }
//   }
//   return null;
// }

// // ============================================================================
// // 2. NOVAS FUNÇÕES MODULARES (RF05 E DESAFIOS A, B, C, D)
// // ============================================================================
// // [NOVO REQUISITO: RF05.1 / Desafio A]
// // Função para calcular o subtotal de um único item (preço * quantidade)
// function calcularSubtotalItem(preco, quantidade) {
//   return preco * quantidade;
// }
// // [NOVO REQUISITO: RF05.2 / Desafio B]
// // Função de cálculo de desconto com regra comercial:
// // - A partir de R$ 100 -> 10% de desconto
// // - A partir de R$ 50  -> 5% de desconto
// // - Menor que R$ 50    -> sem desconto (0)
// // ATENÇÃO: Esta é uma função pura: apenas recebe o subtotal e retorna o valor, sem alert ou console.log!
// function calcularDesconto(subtotal) {
//   if (subtotal >= 100) {
//     return subtotal * 0.10;
//   } else if (subtotal >= 50) {
//     return subtotal * 0.05;
//   } else {
//     return 0;
//   }
// }

// // [NOVO REQUISITO: RF05.3 / Desafio C]
// // Composição de funções: reutiliza calcularDesconto() para calcular o total a pagar
// function calcularTotalFinal(subtotal, taxaEmbalagem) {
//   let valorDesconto = calcularDesconto(subtotal);
//   let totalComDesconto = subtotal - valorDesconto + taxaEmbalagem;
//   return totalComDesconto;
// }

// // [NOVO REQUISITO: Desafio D]
// // Função calcularTotalPedido(itens, catalogo):
// // 1. Recebe a lista de itens do pedido e o catálogo de produtos
// // 2. Percorre os itens com for...of
// // 3. Busca o produto com buscarProdutoPorId()
// // 4. Calcula o subtotal chamando calcularSubtotalItem()
// // 5. Retorna o valor acumulado de todos os itens do pedido
// function calcularTotalPedido(itens, listaCatalogo) {
//   let subtotalAcumulado = 0;

//   for (let item of itens) {
//     let produto = buscarProdutoPorId(item.idProduto, listaCatalogo);

//     if (produto !== null) {
//       let subtotalItem = calcularSubtotalItem(produto.preco, item.quantidade);
//       subtotalAcumulado = subtotalAcumulado + subtotalItem;
//     }
//   }
//   return subtotalAcumulado;
// }

// // [ALTERAR / REFATORAR: RF05.4 / Desafio do Estudante]
// // Refatoramos a antiga "emitirNotaFiscal": agora a função gerarResumoPedido()
// // REUTILIZA as funções de cálculo criadas acima e retorna o texto formatado.
// function gerarResumoPedido(pedido, listaCatalogo, taxaEmbalagem) {
//   // Chamada das funções modulares criadas no RF05:
//   let subtotal = calcularTotalPedido(pedido.itens, listaCatalogo);
//   let desconto = calcularDesconto(subtotal);
//   let totalFinal = calcularTotalFinal(subtotal, taxaEmbalagem);

//   let linhasItens = "";

//   for (let item of pedido.itens) {
//     let produto = buscarProdutoPorId(item.idProduto, listaCatalogo);
//     if (produto !== null) {
//       let subtotalItem = calcularSubtotalItem(produto.preco, item.quantidade);
//       linhasItens = linhasItens + `${produto.nome} x ${item.quantidade}: ${formatarMoeda(subtotalItem)}\n`;
//     }
//   }

//   // Template string com o resumo financeiro completo (com desconto)
//   let notaFiscal = `==============================
//        ${nomeLanchonete} - NOTA FISCAL
// ==============================
// Pedido Nº: ${pedido.id}
// Cliente:   ${pedido.cliente}
// ------------------------------
// ITENS:
// ${linhasItens}------------------------------
// Subtotal:          ${formatarMoeda(subtotal)}
// Desconto:         -${formatarMoeda(desconto)}
// Taxa de Embalagem: ${formatarMoeda(taxaEmbalagem)}
// TOTAL A PAGAR:     ${formatarMoeda(totalFinal)}
// ==============================`;

//   return notaFiscal;
// }

// // ============================================================================
// // 3. ETAPAS DE CADASTRO E CARDÁPIO
// // ============================================================================

// // [MANTÉM IGUAL]: Cadastro inicial de produtos no cardápio
// function cadastrarProdutos() {
//   alert(`Bem-vindo à ${nomeLanchonete}!\nVamos iniciar o cadastro dos produtos no cardápio.`);

//   let continuarCadastro = true;

//   do {
//     let nome = prompt("Nome do produto:");
//     let preco = Number(prompt("Preço unitário (ex: 18.50):"));
//     let estoque = Number(prompt("Quantidade em estoque:"));

//     let novoProduto = {
//       id: catalogoProdutos.length + 1,
//       nome: nome,
//       preco: preco,
//       estoque: estoque
//     };

//     catalogoProdutos.push(novoProduto);

//     let resposta = prompt("Deseja cadastrar mais um produto no cardápio? (s/n)");
//     continuarCadastro = resposta.toLowerCase() === "s" || resposta.toLowerCase() === "sim";
//   } while (continuarCadastro);
// }

// // [MANTÉM IGUAL]: Montagem do texto do cardápio
// function montarTextoCardapio() {
//   let textoCardapio = `=== CARDÁPIO ${nomeLanchonete.toUpperCase()} ===\n\n`;

//   for (let produto of catalogoProdutos) {
//     textoCardapio = textoCardapio + `${produto.id} - ${produto.nome}: ${formatarMoeda(produto.preco)} (Estoque: ${produto.estoque})\n`;
//   }

//   return textoCardapio;
// }

// // [MANTÉM IGUAL]: Registro de um único pedido com múltiplos itens (RF04.2)
// function criarPedidoCliente() {
//   alert(montarTextoCardapio());

//   let nomeCliente = prompt("Qual o nome do cliente?");
//   let numPedido = Number(prompt("Número identificador do pedido:"));

//   let pedido = {
//     id: numPedido,
//     cliente: nomeCliente,
//     itens: []
//   };

//   let adicionarMaisItens = true;

//   while (adicionarMaisItens) {
//     let idEscolhido = Number(
//       prompt(`${montarTextoCardapio()}\nDigite o CÓDIGO do produto desejado:`)
//     );
//     let produtoEncontrado = buscarProdutoPorId(idEscolhido, catalogoProdutos);

//     if (produtoEncontrado === null) {
//       alert("Código de produto inválido! Tente novamente.");
//     } else {
//       let qtdDesejada = Number(
//         prompt(`Quantas unidades de "${produtoEncontrado.nome}" você deseja?`)
//       );

//       if (qtdDesejada <= 0) {
//         alert("Quantidade inválida! Informe um número maior que zero.");
//       } else if (qtdDesejada > produtoEncontrado.estoque) {
//         alert(`Estoque insuficiente! Temos apenas ${produtoEncontrado.estoque} unidades.`);
//       } else {
//         produtoEncontrado.estoque = produtoEncontrado.estoque - qtdDesejada;

//         pedido.itens.push({
//           idProduto: produtoEncontrado.id,
//           quantidade: qtdDesejada
//         });

//         alert(`Adicionado: ${qtdDesejada}x ${produtoEncontrado.nome}`);
//       }
//     }

//     let resposta = prompt("Deseja adicionar mais algum produto neste mesmo pedido? (s/n)");
//     adicionarMaisItens = resposta.toLowerCase() === "s" || resposta.toLowerCase() === "sim";
//   }
//   return pedido;
// }
// // ============================================================================
// // 4. PROCESSAMENTO DE VÁRIOS PEDIDOS (RF05.5)
// // ============================================================================
// // [NOVO]: Permite cadastrar múltiplos pedidos em fila usando um laço while
// function cadastrarVariosPedidos() {
//   let registrarOutroPedido = true;

//   while (registrarOutroPedido) {
//     let novoPedido = criarPedidoCliente();

//     // Valida se o cliente adicionou ao menos um item
//     if (novoPedido.itens.length > 0) {
//       listaDePedidos.push(novoPedido);
//       alert(`Pedido #${novoPedido.id} registrado com sucesso!`);
//     } else {
//       alert("Nenhum item adicionado. Pedido cancelado.");
//     }

//     let resposta = prompt("Deseja registrar OUTRO pedido para outro cliente? (s/n)");
//     registrarOutroPedido = resposta.toLowerCase() === "s" || resposta.toLowerCase() === "sim";
//   }
// }

// // [ALTERAR / REFATORAR: RF05.5 e Desafio D]
// // Repetição Aninhada:
// // - Repetição Externa (aqui): percorre a listaDePedidos com for...of
// // - Repetição Interna (dentro de gerarResumoPedido): percorre os itens de cada pedido
// function processarVariosPedidos(pedidos, catalogo) {
//   alert(`\nProcessando notas fiscais de ${pedidos.length} pedido(s)...`);

//   for (let pedido of pedidos) {
//     // Reutiliza a função gerarResumoPedido para cada pedido da lista
//     let notaFiscal = gerarResumoPedido(pedido, catalogo, taxaEmbalagemPadrao);

//     alert(notaFiscal);
//     console.log(notaFiscal);
//   }
// }

// // ============================================================================
// // 5. FLUXO PRINCIPAL (ALTERAR)
// // ============================================================================

// // 1. Cadastro inicial do cardápio
// cadastrarProdutos();

// // [ALTERAR]: Em vez de processar apenas 1 pedido, agora cadastramos vários e processamos a lista completa
// if (catalogoProdutos.length > 0) {
//   // Registra 1 ou mais pedidos interativamente
//   cadastrarVariosPedidos();

//   // Se houver pedidos válidos cadastrados, emite todas as notas
//   if (listaDePedidos.length > 0) {
//     processarVariosPedidos(listaDePedidos, catalogoProdutos);
//   } else {
//     alert("Nenhum pedido foi concluído.");
//   }
// } else {
//   alert("Nenhum produto cadastrado no catálogo. Sistema encerrado.");
// }



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
// function calcularMedia(notas){

// let soma = notas.reduce((a, b) => a + b, 0)
// return soma / notas.lenght;
// }
// function verificarSituacao(media) {
//     if (media >=7) return "Aprovado";
//     if (media < 5) return "recuperação";
// }
// let notas = [];

// for (let i = 0; i < 4; i++) (
//     notas.push (Number(prompt("Digite a nota")))
// );

// let media = calcularMedia(notas);
// console.log("notas", notas);
// console.log("Média",  media);
// console.log("Situação", verificarSituacao(media));

////////////////////////////////////////////////

// function criarProduto(nome, preco, categoria){
// return (nome, preco, categoria)
// }

// function aplicarDesconto (produto, percentual) {
//     return {
//         ...produto,
//         preco: produto.preco * (1 - percentual / 100)
//     };
// }

// let nome = prompt("Nome do Produto: ");
// let preco = Number(prompt("preco"));
// let categoria = prompt("Categoria: ");

// let produto = criarProduto(nome, preco, categoria);
// let produtoDesconto = aplicarDesconto(produto, 10);

// console.log(produto);
// console.log("com desconto:", produtoDesconto);

//////////////////////////////////

// const produtos = [
//     {nome: "Teclado", preco: 120},
//     {nome: "Mouse", preco: 80},
//     {nome: "Monitor", preco: 900},
//     {nome: "Headset", preco: 250},
//     {nome: "Webcam", preco: 300}
// ];

// function filtrarProdutos(produtos, precoMaximo){
//     return produtos.filter(p=> p.preco <= precoMaximo);
// }
// let limite = Number(prompt("Preço máximo: "));

// console.log(filtrarProdutos(produtos, limite));

////////////////////////////////////

// const usuarios = [
//     {id: 1, nome: "ana", email: "ana@gmail.com"},
//     {id: 2, nome: "Carlos", email: "carlos@gmail.com"},
//     {id: 3, nome: "Maria", email: "mariana@gmail.com"}
// ];

// function buscarUsuario(usuarios, email) {
//     return usuarios.find( u => u.email === email) || null;
// }

// let email = prompt("digite o email: ");
// let usuario = buscarUsuario(usuario, email);
// console.log(usuario ? usuario: "usuário não encontrado");

/////////////////////////////////////

// const carrinho = [
//     {produto:"mouse", quantidade:2, preco: 80},
//     {produto:"Teclado", quantidade:1, preco: 150},
//     {produto:"Headset", quantidade:2, preco: 200}
// ];
// function calcularTotal(carrinho) {
//     return carrinho.reduce((total, item) => 
//         total + item.quantidade * item.preco, 0);
// }
// function calcularTotalComDesconto(carrinho, desconto) {
//     let total = calcularTotal(carrinho);
//     return total * (1 - desconto / 100);
// } 
// console.log("Total: R$", calcularTotal(carrinho));
// console.log("Total com desconto: R$", calcularTotalComDesconto(carrinho, 10));

//////////////////////////////////////

// function celsiusParaFahrenheit(celsius) {
//     return celsius * 1.8 + 32;
// }
// function celsiusParaKelvin(celsius){
//     return celsius + 273.15;
// }
// function converterTemperatura(celsius){
//     return {
//         celsius: celsius,
//         fahrenheit: celsiusParaFahrenheit(celsius),
//         kelvin: celsiusParaKelvin(celsius)
//     };
// }

// let temperatura = Number(prompt("Temperatura em celsius: "));
// console.log(converterTemperatura(temperatura));

//////////////////////////////////////

// const funcionarios = [
//     {nome: "julio", salario: 2500, cargo: "desenvolvedor"},
//     {nome: "maria", salario: 3200, cargo: "designer"},
//     {nome: "gabriel", salario: 4500, cargo: "analista"},
// ];

// function aplicarReajuste(funcionarios, percentual) {
//     return funcionarios.map (f =>({
//         ...f,
//         salario: f.salario * (1 + percentual / 100)
//     }));
// }
// console.log(aplicarReajuste(funcionarios, 10));

// const alunos = [
//     {nome:"tarcisio", nota:1},
//     {nome:"ana", nota:10},
//     {nome:"gabriel", nota:9},
//     {nome:"thawan", nota:8},
//     {nome:"adriano", nota: 8.5},
//     {nome: "jamilly", nota: 4},
// ];
// function listarAprovados(alunos) {
//     return alunos.filter(a => a.nota >= 7);
// }
// function obterNomes(alunos){
//     return alunos.map(a => a.nome);
// }
// function calcularMediaTurma(alunos) {
//     return alunos.reduce((soma, a) =>soma +a.nota,0) / alunos.lenght;
// }
// let aprovados = listarAprovados(alunos)
// console.log(obterNomes(aprovados));
// console.log("Média da turma: ", calcularMediaTurma(alunos));

// const pedidos = [
//     {id:1, cliente:"sophia", valor:800},
//     {id:2, cliente:"carla", valor: 350},
//     {id:3, cliente:"charles", valor:400},
//     {id:4, cliente:"eduarda", valor:600}
// ];
// function buscarPedidoPorCliente(pedidos, cliente) {
//     return pedidos.filter(p=> p.cliente === cliente);
// }
//     function calcularTotalPedidos(pedidos){
//     return pedidos.reduce((total, p) => total + p.valor, 0);
// }
// let cliente = prompt("Nome do cliente");
// let resultado = buscarPedidoPorCliente(pedidos, cliente);

// console.log("Pedidos", resultado);
// console.log("Total: R$", calcularTotalPedidos(resultado));




// alunos = []

// for(let i = 0; i < 5; i++) {
//     let nome = prompt("Nome do aluno")
//     let idade = Number(prompt("Idade"))
//     let curso = prompt("Curso")
//     let nota = Number(prompt("Nota"))
//     alunos.push(criarAluno(nome, idade, curso, nota));

// }

// console.log("alunos:", alunos);
// console.log("Buscar Alunos:", buscarAluno(alunos, prompt("nome para buscar:")));
// console.log("Aprovados:", listarAprovados(alunos));
// console.log("Nomes:", obterNomes(alunos));
// console.log("Média:", calcularMedia(alunos));
// console.log("Resumo: ", gerarResumo(alunos));




//  let notas []
//  for(let i = 0; i < 4; i )