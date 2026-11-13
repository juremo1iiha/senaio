const usuarios = [
    {id: 1, nome: "ana", email: "ana@gmail.com"},
    {id: 2, nome: "Carlos", email: "carlos@gmail.com"},
    {id: 3, nome: "Maria", email: "mariana@gmail.com"}
];

function buscarUsuario(usuarios, email) {
    return usuarios.find( u => u.email === email) || null;
}

let email = prompt("digite o email: ");
let usuario = buscarUsuario(usuario, email);
console.log(usuario ? usuario: "usuário não encontrado");