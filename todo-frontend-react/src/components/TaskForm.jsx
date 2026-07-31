import { useState } from "react";

function TaskForm({ onAdd, alertMsg }) {
  const [texto, setTexto] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(texto);
    setTexto("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-area">
        <input
          type="text"
          placeholder="Digite uma nova tarefa..."
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
        />
        <button type="submit">Adicionar</button>
      </div>
      <p className="alert">{alertMsg}</p>
    </form>
  );
}

export default TaskForm;
