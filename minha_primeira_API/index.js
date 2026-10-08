import express from 'express';
import livrosRouter from "./routes/livros-routes.js"


const app = express();

app.use(express.json()); // Middleware para habilitar o parsing de JSON
app.use((req, res, next) => {
    new Date().toISOString();
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

app.use("/livros", livrosRouter); // Usar as rotas dos livros
app.listen(3001);



 //idLivro, identificador
 // dsTitulo, string
 // dsAutor, string
 // dsEditora, string
 // fgDisponivel, boolean




// let livros = [meuPrimeiroLivro] //Banco de Dados


//CRUD(Post, Get, Put/Patch, Delete)