const rotaTarefasGet = (app) => {
  app.get("/tarefas", (req, res) => {
    res.send("Rota ativada com get e recurso <Tarefas>");
  });
};
const rotaTarefasPost = (app) => {
  app.post("/tarefas", (req, res) => {
    res.send(
      "Rota POST de tarefas ativada: tarefas adicionada ao banco de dados",
    );
    console.log(req.body);
  });
};

module.exports = { rotaTarefasGet, rotaTarefasPost };
