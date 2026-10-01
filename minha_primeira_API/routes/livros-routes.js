//implementar rotas

import router from "express";

const router = router();

router.get("/livros", (req, res) => {
    //res.json(livros);
});

router.get("/livros/:id", (req, res) => {
    //res.json(livros.find(livro => livro.idLivro === req.params.id));
});

router.post("/livros", (req, res) => {
});

router.delete("/livros/:id", (req, res) => {
});

router.patch("/livros/:id", (req, res) => {
});

export default router;