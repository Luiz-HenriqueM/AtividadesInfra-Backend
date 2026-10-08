//implementar rotas

import Router from "express";
import { findAll, findOne, criarLivro, deletarLivro, atualizarLivro } from "../controllers/livros-controller.js";

const router = Router();
router.get("/", (req, res) => {
    console.log("Roteador /")
    const todosOsLivros = findAll();
    res.json(todosOsLivros)

});

    
router.get("/:id", (req, res) => {
    const idLivro = parseInt(req.params.id);

    if (isNaN(idLivro)) {
        return res.status(400).json({ mensagem: "identificador deve ser um numero" });
    }

    const livro = findOne(idLivro);
    if (!livro) {
        return res.status(404).send();
    }
    res.json(livro);
});

router.post("/", (req, res) => {
    let autor_enviado = req.body.dsAutor;
    let titulo_enviado = req.body.dsTitulo;


    if (!autor_enviado || !titulo_enviado) {
        res.status(400).json({
            mensagem: "Autor e título são obrigatórios"
        });
        return;
    }
    let livro_criado = criarLivro(titulo_enviado, autor_enviado);
    res.status(201).json(livro_criado);
     if (!livro_criado) {
        res.status(500).json({
            mensagem: "Algo deu errado ao criar o livro"
        });
        return;
    }
    return res.status(201).json(livro_criado);
});

router.delete("/:id", (req, res) => {
    const idLivro = parseInt(req.params.id);

  if (isNaN(idLivro)) {
    return res
      .status(400)
      .json({ mensagem: "identificador deve ser um numero" });
  }

  let livro = findOne(idLivro);
  if (!livro) {
    return res.status(404).send();
  }

  deletarLivro(idLivro);
  return res.status(204).send();
});

router.patch("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const dadosAtualizados = req.body;

    if (isNaN(id)) {
        return res.status(400).json({ mensagem: "identificador precisa ser um numero valido" });
    }

    const livroAtualizado = atualizarLivro(id, dadosAtualizados);
    if (!livroAtualizado) {
        return res.status(404).json({ mensagem: "Livro não encontrado" });
    }

    return res.json(livroAtualizado);
});

export default router;