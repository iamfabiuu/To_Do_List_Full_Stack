import { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskItem from "./components/TaskItem";
import "./App.css";

const API_URL = "http://localhost:3000/tarefas";

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [alertMsg, setAlertMsg] = useState("");
  const [removendoId, setRemovendoId] = useState(null);

  useEffect(() => {
    carregarTarefas();
  }, []);

  async function carregarTarefas() {
    const res = await fetch(API_URL);
    const data = await res.json();
    setTarefas(data);
  }

  function mostrarAlerta(msg) {
    setAlertMsg(msg);
    setTimeout(() => setAlertMsg(""), 3000);
  }

  async function adicionarTarefa(descricao) {
    const texto = descricao.trim();
    if (!texto) {
      mostrarAlerta("Digite uma tarefa antes de adicionar!");
      return;
    }

    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ descricao: texto, concluida: false }),
    });

    carregarTarefas();
  }

  async function atualizarStatus(id, concluida) {
    await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ concluida }),
    });
    carregarTarefas();
  }

  async function editarTarefa(tarefa) {
    const novaDescricao = prompt("Editar tarefa:", tarefa.descricao);
    if (novaDescricao === null) return;
    if (novaDescricao.trim() === "") {
      mostrarAlerta("A descrição não pode ficar vazia!");
      return;
    }

    await fetch(`${API_URL}/${tarefa.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ descricao: novaDescricao.trim() }),
    });

    carregarTarefas();
  }

  async function excluirTarefa(id) {
    setRemovendoId(id);
    setTimeout(async () => {
      await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      setRemovendoId(null);
      carregarTarefas();
    }, 250);
  }

  async function limparConcluidas() {
    const concluidas = tarefas.filter((t) => t.concluida);
    await Promise.all(
      concluidas.map((t) => fetch(`${API_URL}/${t.id}`, { method: "DELETE" })),
    );
    carregarTarefas();
  }

  const pendentes = tarefas.filter((t) => !t.concluida).length;

  return (
    <div className="container">
      <h1>Minha Lista de Tarefas</h1>

      <TaskForm onAdd={adicionarTarefa} alertMsg={alertMsg} />

      {tarefas.length === 0 ? (
        <p className="empty-state">
          Nenhuma tarefa por aqui... adicione a primeira!
        </p>
      ) : (
        <ul id="taskList">
          {tarefas.map((tarefa) => (
            <TaskItem
              key={tarefa.id}
              tarefa={tarefa}
              onToggle={atualizarStatus}
              onEdit={editarTarefa}
              onDelete={excluirTarefa}
              isRemoving={removendoId === tarefa.id}
            />
          ))}
        </ul>
      )}

      <div className="footer">
        <span>
          {pendentes} tarefa{pendentes !== 1 ? "s" : ""} restante
          {pendentes !== 1 ? "s" : ""}
        </span>
        <button onClick={limparConcluidas}>Limpar concluídas</button>
      </div>
    </div>
  );
}

export default App;
