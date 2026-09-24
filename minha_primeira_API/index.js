import express from 'express';

const app = express();
app.use(express.json()); // Middleware para habilitar o parsing de JSON
let ultimo_Id = 1;

let livros = [
    {
        idLivro: 1,
        dsTitulo: "O Senhor dos Anéis",
        dsAutor: "J.R.R. Tolkien",
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

app.post("/livros", (req, res) => {

    let autor_enviado = req.body.dsAutor;
    let titulo_enviado = req.body.dsTitulo;

    if (!autor_enviado || !titulo_enviado) {
        res.status(400).json({
            mensagem: "Autor e título são obrigatórios"
        });
        return;
    }

    let id_novo = ultimo_Id + 1;
    ultimo_Id++;

    let novo_livro = {
        idLivro: id_novo,
        dsTitulo: titulo_enviado,
        dsAutor: autor_enviado,
        fgDisponivel: true
    };

    livros.push(novo_livro);

    res.status(201).json(novo_livro);
});

app.delete("/livros/:id", (req, res) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
        res.status(400).json({mensagem: 'ID inválido'});
        return;
    }

    let index_livro = livros.findIndex(livro => livro.idLivro === id);

    if (index_livro === -1) {
        res.status(404).send();
        return;
    }
    
    livros.splice(index_livro, 1);
    res.status(204).send();

});

app.listen(3001);



 //idLivro, identificador
 // dsTitulo, string
 // dsAutor, string
 // dsEditora, string
 // fgDisponivel, boolean




// let livros = [meuPrimeiroLivro] //Banco de Dados


//CRUD(Post, Get, Put/Patch, Delete)