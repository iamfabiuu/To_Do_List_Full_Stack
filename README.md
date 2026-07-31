# ✅ To Do List — Full Stack

> Uma aplicação completa de lista de tarefas, com **API RESTful em Node.js/Express** no back-end e uma interface moderna em **React (Vite)** no front-end. Organize suas tarefas, marque como concluídas e nunca mais esqueça nada!

---

## 📌 O que é o projeto?

O **To Do List Full Stack** é um sistema de gerenciamento de tarefas dividido em duas partes que trabalham juntas:

- **Back-end (Express):** API REST responsável por criar, listar, atualizar e excluir tarefas, com validações e persistência em memória.
- **Front-end (React):** Interface visual intuitiva e responsiva, onde o usuário adiciona, edita, marca como concluída e remove tarefas em tempo real.

O objetivo é praticar/demonstrar uma arquitetura **Full Stack** simples e funcional, com boas práticas de API (status HTTP corretos, validações, respostas em JSON) e uma UI limpa e agradável.

### 🚀 Funcionalidades
- ➕ Criar novas tarefas
- 📋 Listar todas as tarefas
- ✏️ Editar descrição de uma tarefa
- ✅ Marcar/desmarcar tarefa como concluída
- 🗑️ Excluir tarefas
- 🧹 Limpar tarefas concluídas
- 📱 Interface responsiva (mobile, tablet e desktop)

---

## 🛠️ Tecnologias utilizadas

| Camada | Tecnologia |
|---|---|
| Back-end | Node.js, Express, UUID, CORS |
| Front-end | React, Vite |
| Estilização | CSS puro (custom properties, animações, responsividade) |

---

## 📂 Estrutura do projeto

```

TO_DO_LIST_FULL/
├── todo_backend/
│   ├── node_modules/
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
├── todo-frontend-react/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── TaskForm.jsx
│   │   │   └── TaskItem.jsx
│   │   ├── App.css
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── vite.config.js
│   ├── eslint.config.js
│   ├── package.json
│   └── package-lock.json
└── README.md
```

⚙️ Como instalar as dependências
1. Clone o repositório
```
git clone https://github.com/SEU-USUARIO/to-do-list-full.git
cd to-do-list-full
```

2. Instale as dependências do back-end
```
cd todo_backend
npm install
```
3. Instale as dependências do front-end
bash
```
cd ../todo-frontend-react
npm install
```
</br>
▶️ Como executar o projeto localmente</br>
Você precisa rodar o back-end e o front-end ao mesmo tempo (em terminais separados).

### 1. Executando o back-end
```
cd todo_backend
npm start
```
O servidor será iniciado em: 📍 http://localhost:3000

### 2. Executando o front-end
Em outro terminal:
</br>
```
cd todo-frontend-react
npm run dev
```

A aplicação abrirá automaticamente em: 📍 http://localhost:5173

⚠️ Certifique-se de que o back-end esteja rodando antes de abrir o front-end, para que as requisições funcionem corretamente.

Rotas da API

Método	Rota	Descrição
GET	/tarefas	Lista todas as tarefas</br>
GET	/tarefas/:id	Busca uma tarefa pelo ID</br>
POST	/tarefas	Cria uma nova tarefa</br>
PUT	/tarefas/:id	Atualiza uma tarefa (parcial)</br>
DELETE	/tarefas/:id	Remove uma tarefa</br>
</br>Exemplo de requisição (POST)
json</br>
```
{
  "descricao": "Estudar Node.js",
  "concluida": false
}
```
</br>Exemplo de resposta
json</br>
```
{
  "id": "a1b2c3d4-e5f6-7890-g1h2-i3j4k5l6m7n8",
  "descricao": "Estudar Node.js",
  "concluida": false,
  "criadaEm": "2026-07-31T03:00:00.000Z"
}
```

 Melhorias futuras</br></br>
 Persistência com banco de dados (MongoDB/PostgreSQL)</br>
 Autenticação de usuários</br>
 Filtros por status (pendentes/concluídas)</br>
 Ordenação e busca por texto</br>
 Testes automatizados (Jest + Supertest)</br></br>


👨‍💻 Autor</br>
Feito por Fábio Araújo Silva
