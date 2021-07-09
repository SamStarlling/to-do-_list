const rotaUsuarioGet = (app) => {
  app.get("/usuario", (req, res) => {
    res.send("Rastreamento da aplicação sendo feito com nodemon");
  });
};
const rotaUsuarioPost = (app) => {
  app.post("/usuario", (req, res) => {
    res.send(
      "Rota POST de usuário ativada: usuário adicionado ao banco de dados",
    );
    console.log(req.body);
  });
};

module.exports = { rotaUsuarioGet, rotaUsuarioPost };
