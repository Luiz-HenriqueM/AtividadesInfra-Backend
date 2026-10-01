//implementar rotas

import router from "express";

const router = router();

router.get("/", (req, res) => {
    //res.json(livros);
});

router.get("/:id", (req, res) => {
    //res.json(livros.find(livro => livro.idLivro === req.params.id));
});

router.post("/", (req, res) => {
});

router.delete("/:id", (req, res) => {
});

router.patch("/:id", (req, res) => {
});

export default router;