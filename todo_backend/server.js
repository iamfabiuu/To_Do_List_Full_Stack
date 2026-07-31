const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

let tarefas = [];

function encontrarIndice(id) {
  return tarefas.findIndex((t) => t.id === id);
}

app.post("/tarefas", (req, res) => {
  const { descricao, concluida } = req.body;

  if (!descricao || typeof descricao !== "string" || descricao.trim() === "") {
    return res.status(400).json({
      erro: 'O campo "descricao" é obrigatório e não pode estar vazio.',
    });
  }

  const novaTarefa = {
    id: uuidv4(),
    descricao: descricao.trim(),
    concluida: Boolean(concluida) || false,
    criadaEm: new Date().toISOString(),
  };

  tarefas.push(novaTarefa);
  return res.status(201).json(novaTarefa);
});

app.get("/tarefas", (req, res) => {
  return res.status(200).json(tarefas);
});

app.get("/tarefas/:id", (req, res) => {
  const { id } = req.params;
  const tarefa = tarefas.find((t) => t.id === id);

  if (!tarefa) {
    return res.status(404).json({ erro: "Tarefa não encontrada." });
  }

  return res.status(200).json(tarefa);
});

app.put("/tarefas/:id", (req, res) => {
  const { id } = req.params;
  const indice = encontrarIndice(id);

  if (indice === -1) {
    return res.status(404).json({ erro: "Tarefa não encontrada." });
  }

  const { descricao, concluida } = req.body;

  if (descricao !== undefined) {
    if (typeof descricao !== "string" || descricao.trim() === "") {
      return res
        .status(400)
        .json({ erro: 'O campo "descricao" não pode estar vazio.' });
    }
    tarefas[indice].descricao = descricao.trim();
  }

  if (concluida !== undefined) {
    tarefas[indice].concluida = Boolean(concluida);
  }

  return res.status(200).json(tarefas[indice]);
});

app.delete("/tarefas/:id", (req, res) => {
  const { id } = req.params;
  const indice = encontrarIndice(id);

  if (indice === -1) {
    return res.status(404).json({ erro: "Tarefa não encontrada." });
  }

  tarefas.splice(indice, 1);
  return res.status(204).send();
});

// Rota raiz (opcional, útil para checar se o servidor está no ar)
app.get("/", (req, res) => {
  res.json({ mensagem: "API de Tarefas rodando! Acesse /tarefas" });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});