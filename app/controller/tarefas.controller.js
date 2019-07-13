const Tarefas = require("../models/tarefas")

const CriarTarefa = async (req, res) => {
    const tarefa = {
        usuario: req.body.usuario,
        status: req.body.status,
        nome: req.body.nome,
        descricao: req.body.descricao,
        inicio: new Date(),
        terminoPrevisto: req.body.terminoPrevisto
    }
    try {
        const CriarTarefa = await Tarefas.create(tarefa);

        res.send(CriarTarefa)


    } catch (error) {
        res.status(400)
        res.send(error)
    }
}

const editTarefa = async (req, res) =>{
    const id = req.params.id;
    try{
        const updateTarefa = await Tarefas.updateOne({_id: id}, req.body)
        res.send(updateTarefa)

    }catch(error){
        res.status(400)
        res.send(error.toString())
    }
}

const consultaTarefa = async (req,res)=>{
    try{
        const tarefas = await Tarefas.find({usuario:req.params.id})
        res.send(tarefas)
    }catch(error){
        res.status(400);
        res.send(error)
    }
}

const deleteTarefa = async (req,res)=>{
    try{
        const tarefas = await Tarefas.deleteOne({_id:req.params.id})
        res.send(tarefas)
    }catch(error){
        res.status(400)
        res.send(error)

    }
}

const consultaTarefaById = async (req,res)=>{
    try{
        const tarefas = await Tarefas.findById(req.params.id)
        res.send(tarefas)
    }catch(error){
        res.status(400);
        res.send(error)
    }
}



module.exports = {
    novaTarefa: CriarTarefa,
    update: editTarefa,
    consulta: consultaTarefa,
    delete: deleteTarefa,
    byId:consultaTarefaById,
}