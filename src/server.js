const express = require("express");
const app = express();
const rotaUsuario = require("./rotas/usuario-rotas");
const rotaTarefas = require("./rotas/tarefas-rotas");
const port = 3011;

rotaUsuario.rotaUsuarioGet(app);
rotaUsuario.rotaUsuarioPost(app);
rotaTarefas.rotaTarefasGet(app);
rotaTarefas.rotaTarefasPost(app);

app.get("/", (req, res) => {
  res.send("Rota ativada com GET");
});
app.post("/", (req, res) => {
  res.send("Rota ativada com POST");
});

app.listen(port, () => {
  console.log("Servidor rodando: " + port);
});
