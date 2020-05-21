const mongoose = require("mongoose")

const Schema = mongoose.Schema

const pessoas = new Schema({

    nome: {
        type:  String,
        require: true,
    },
    idade: {
        type: Date,
        require: true
    },
    email: {
        type: String,
        require: true,
    },
    bairro: {
        type: String,
        
    },
    problemas: {
      type: String,
     require: true,
    },
    problemaprincipal: {
        type: String,
        require: true
    },
    melhorar: {
        type: String,
        require:true
    },
  data: {
      type: Date,
      default: Date.now()
  }
})
mongoose.model('fp', pessoas)

