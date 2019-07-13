var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TarefaSchema = new Schema({
    usuario: { type: mongoose.Types.ObjectId, required: true },
    status: { type: Boolean, required: true, default: false },
    nome: { type: String, required: true },
    descricao: { type: String, required: true },
    inicio: { type: Date, required: true, default: new Date() },
    terminoPrevisto: { type: Date, required: true,},
    termino: { type: Date},
});

// var AtividadesSchema = new Schema({
//     status: { type: Boolean, required: true, default: false },
//     nome: { type: String, required: true },
//     descricao: { type: String, required: true },
//     inicio: { type: Date, required: true, default: new Date() },
//     terminoPrevisto: { type: Date, required: true,},
//     termino: { type: Date, required: true,},
// });

module.exports = mongoose.model('Tarefa', TarefaSchema);