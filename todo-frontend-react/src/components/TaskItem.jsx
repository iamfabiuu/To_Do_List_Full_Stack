function TaskItem({ tarefa, onToggle, onEdit, onDelete, isRemoving }) {
  return (
    <li className={`task-item ${isRemoving ? "removing" : ""}`}>
      <input
        type="checkbox"
        checked={tarefa.concluida}
        onChange={() => onToggle(tarefa.id, !tarefa.concluida)}
      />
      <span className={`task-text ${tarefa.concluida ? "completed" : ""}`}>
        {tarefa.descricao}
      </span>
      <div className="task-actions">
        <button className="edit-btn" onClick={() => onEdit(tarefa)}>
          Editar
        </button>
        <button className="delete-btn" onClick={() => onDelete(tarefa.id)}>
          Excluir
        </button>
      </div>
    </li>
  );
}

export default TaskItem;
