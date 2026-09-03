import express from 'express';

const app = express();  //Primeira instancia do express







let meuPrimeiroLivro = {
    id: 1,
    dsTitulo: "O Senhor dos Aneis",
    dsAutor: "JRR Tolkien",
    fgDisponivel: true,
};

 //idLivro
 // dsTitulo, identificador
 // dsAutor, string
 // dsEditora, string
 // fgDisponivel, boolean




let livros = [meuPrimeiroLivro] //Banco de Dados











//estado + caminho + funcao
app.get("/", function(req, res) { //rota raiz
    res.send("Seja bem vindo a gestão de livros")

});

app.get("/livros",  function(req, res) {



    //Segundo Pilar, Rotas
    res.send("Olá Peter!");

});

app.listen(3000); //Terceiro Pilar, porta a ser ouvida


//CRUD(Post, Get, Put/Patch, Delete)