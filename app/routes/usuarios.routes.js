const express = require("express")
const usuarioController = require("../controller/usuarios.controller")
const tarefaController = require("../controller/tarefas.controller")
const routes = new express.Router();


routes.post("/usuario", usuarioController.criar)
routes.post("/login", usuarioController.login)
routes.put("/usuario/:id", usuarioController.update)
routes.post("/tarefas", tarefaController.novaTarefa )
routes.put("/tarefas/:id",tarefaController.update)
routes.get("/tarefas/:id",tarefaController.consulta)
routes.get("/tarefa/:id",tarefaController.byId)
routes.delete("/tarefas/:id",tarefaController.delete )

module.exports = routes




