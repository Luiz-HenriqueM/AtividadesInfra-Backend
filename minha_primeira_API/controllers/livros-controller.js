// implementar regras

let livros = [
    {
        idLivro: 1,
        dsTitulo: "O Senhor dos Anéis",
        dsAutor: "J.R.R. Tolkien",
        fgDisponivel: true
    }
];
let ultimoId = 1;

export function findAll() {
   
    
    console.log("Controlador")
    return livros
}

export function findOne(id) {
    let livro = livros.find((livro) => {
    return livro.idLivro === id;
    });

    return livro;
}

export function criarLivro(dsTitulo, dsAutor) {
    let novoId = ultimoId + 1;
    ultimoId++;
    let novo_livro = {
        idLivro: novoId,
        dsTitulo: dsTitulo,
        dsAutor: dsAutor,
        fgDisponivel: true
    };

    livros.push(novo_livro);
    return novo_livro;
   


}

export function deletarLivro(idLivro) {
    let index_livro = livros.findIndex((livro) => {
    return livro.idLivro === idLivro;
  });

  livros.splice(index_livro, 1);
}

export function atualizarLivro(id, novo_titulo, novo_autor) {
    const id = parseInt(req.params.id);
  const novo_titulo = req.body.dsTitulo;
  const novo_autor = req.body.dsAutor;

  if (isNaN(id)) {
    return res
      .status(400)
      .json({ mensagem: "identificador precisa ser um numero valido" });
  }

  let index_livro = livros.findIndex((livro) => {
    return livro.idLivro === id;
  });

  if (index_livro === -1) {
    return res.sendStatus(404);
  }

  let livro_a_ser_atualizado = livros[index_livro];

  if (novo_autor !== undefined) {
    livro_a_ser_atualizado.dsAutor = novo_autor;
  }

  if (novo_titulo !== undefined) {
    livro_a_ser_atualizado.dsTitulo = novo_titulo;
  }




}
