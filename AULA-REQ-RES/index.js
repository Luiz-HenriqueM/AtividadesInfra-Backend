import express from 'express';

const app = express(); //Primeiro pilar: instancia do express
// app.get('/produto/:id', (req, res) => {
//     //parses
//     console.log(req.params.id);
//     const id = parseInt(req.params.id);

//     if (isNaN(id)) {
//         //sigo minha operação
//     }
//     else {
        
//     }
//     console.log(typeof id);
// });

app.get('/livros', (req, res) => {
    // console.log(req.query);
    // console.log(req.body);
    res.json({mensagem: 'Lista de livros'});   

});

app.get ('/usuarios/:id', (req, res) => {
    const usuario = buscarUsuario(req.params.id);
    if (usuario) {
        res.json(usuario);
    } else {
        res.status(404).json({mensagem: 'Usuário não encontrado'});
    }
});

app.listen(6484);