import express from 'express';

const app = express();
let livros = [
    {
        idLivro: 1,
        dsTitulo: "O Senhor dos Anéis",
        dsAutor: "J.R.R. Tolkien",
        dsEditora: "HarperCollins",
        fgDisponivel: true
    }
];

app.get ("/", (req, res) => { // Rota raiz
    res.send("Seja bem vindo a gestão de livros");
    });

app.get ("/livros", (req, res) => { // Rota livros
    res.json(livros);

});

app.get ("/livros/:id", (req, res) => { // Rota livros com id


    const id = parseInt(req.params.id);
    if (isNaN(id)) {
        res.status(400).json({mensagem: 'ID inválido'});
        return;
    }
});

app.listen(3001);


//Doctor Who

 //idLivro, identificador
 // dsTitulo, string
 // dsAutor, string
 // dsEditora, string
 // fgDisponivel, boolean




// let livros = [meuPrimeiroLivro] //Banco de Dados


//CRUD(Post, Get, Put/Patch, Delete)