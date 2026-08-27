import express from 'express';

const app = express();  //Primeira instancia do express

app.get("/", function(req, res) {
    res.send("Seja bem vindo a gestão de livros")

});

app.get("/livros",  function(req, res) {



    //Segundo Pilar, Rotas
    res.send("Olá Peter!");

});

app.listen(3000); //Terceiro Pilar, porta a ser ouvida