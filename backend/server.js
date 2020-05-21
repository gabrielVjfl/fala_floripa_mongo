const port = 4330

let express = require('express')

const app = express()

let bodyParser = require('body-parser')

let cors =  require('cors')

let path = require('path')

const mongoose = require('mongoose')


require('./models/table')

let Fala_floripa = mongoose.model("fp")

mongoose.Promise = global.Promise
mongoose.connect('mongodb+srv://gabrielVjfl:60818181@cluster0-lqnvw.gcp.mongodb.net/PROJETOMONGO2', {useNewUrlParser: true})

.then(() => {
    console.log('sucessoooo')
})

.catch((err) => {
    console.log('ERRO!')
    console.log(err)
})

app.use((req,res,next) => {
    // * permite tudo
  res.header('Access-Control-Allow-Origin', '*') // ou http://localhost:8080 ou o site .com.br

    res.header('Access-Control-Allow-Headers', 
      'Origin, X-Requested-With, Content-Type, Accept, Authorization')

      res.header('Access-Control-Allow-Methods', 'GET', 'PUT','POST','DELETE')

        app.use(cors())

        next()
})

app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(bodyParser.json())

app.use(express.static(path.join(__dirname + '/project')))

////// rotas



app.post('/postar', (req,res) => {

 const novoPost = {
      nome: req.body.nome,
      idade: req.body.idade,
     email: req.body.email,
     bairro: req.body.bairro,
     problemas: req.body.problemas,
      problemaprincipal: req.body.problemaprincipal,
       melhorar: req.body.melhorar
  }

  new Fala_floripa(novoPost).save()
  .then(suc => {
    console.log(suc)
  }).catch(err => {
    console.log(err)
  })

}) 


app.listen(port, () => {
    console.log("Funcionando na porta", port)
})
