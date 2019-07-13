
const Usuario = require("../models/usuario")

const criarUsuario = async (req, res) => {
    console.log("teste")
    const usuario = {
        nome: req.body.nome,
        login: req.body.login,
        senha: req.body.senha,
    }

    try {
        const createUsuario = await Usuario.create(usuario);

        res.send(createUsuario)


    } catch (error) {
        res.status(400)
        res.send(error)
    }

}

const consultaUsuarios = async (req, res) => {

    try {
        const ususarios = await Usuario.find({}, { senha: 0 })
        res.send(ususarios);

    } catch (error) {
        res.status(400);
        res.send(error)
    }

}

const usuarioLogin = async (req, res) => {

    try {
        const usuarioLogin = await Usuario.findOne({ login: req.body.login, senha: req.body.senha }, { senha: 0 })
        console.log(req.body)
        if (usuarioLogin) {
            res.send({
                data: {
                    usuario: usuarioLogin,
                }
            })
            return
        }

        res.status(401)
        res.send({ data: "usuario nao autorizado" })



    } catch (error) {
        res.status(400);
        res.send(error)
    }

}

const editUsuario = async (req, res) => {
    const id = req.params.id;

    try{
        const updateUser = await Usuario.updateOne({ _id: id },req.body)
        res.send(updateUser)
    } catch(error){
        res.status(400);
        res.send(error.toString())
    }
    
}

module.exports = {
    criar: criarUsuario,
    login: usuarioLogin,
    update:editUsuario,
}