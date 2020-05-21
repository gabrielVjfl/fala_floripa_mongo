import React, {useState} from 'react'

import Axios from 'axios'

const Formulario = () => {

  const INITIAL_STATE = {
    nome: '',
    idade: '',
    email: '',
    bairro: '', 
    problemas: '',
    problemaprincipal: '',
    melhorar: '',
  }

const [state,setState] = useState(INITIAL_STATE)




// OnChange!

let handleChange = (e) => {
setState({...state, [e.target.name]: e.target.value})
}

// OnSubmit

let handleSubmit = (e) => {
  e.preventDefault()

     

  Axios.post('http://localhost:4330/postar', state)

  
  // Ficar vazio depois
      setState(INITIAL_STATE)    //  Ficar vazio! initial_state



  // fazer a validação
}


    return (

<div id="template2">
            <form onSubmit={handleSubmit}>
 <label id="lnome">Nome Completo : *</label>
        <input type="text" value={state.nome} name="nome" onChange={handleChange} id="nome" required pattern="[A-Za-záàâãéèêíïóôõöúçñÁ ÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]+$" autofocus="on" placeholder="Digite o nome completo" className="form-control"></input>
   
      <label id="lidade">Data Nascimento : *</label>
       <input type="date" value={state.idade} id="idade" min="0" onChange={handleChange} max="120" name="idade" required pattern="[0-9]+$" placeholder="Sua Idade" className="form-control"></input>
 <br></br>
       <label id="lemail" >Email : </label>
       <input type="email" className="form-control" value={state.email} onChange={handleChange} name="email" id="email"  placeholder="Digite o seu email"></input><br></br>
        <label id="lbairro">Qual a sua zona ? :</label>
         <select name="bairro" required  value={state.bairro} onChange={handleChange} id="bairro" className="form-control">
           <option value="">Mora em Floripa? Selecione a sua Zona</option>
           <option value="continente">Continente</option>
           <option value="Centro da Ilha">Centro da Ilha</option>
           <option value="Norte da Ilha">Norte da Ilha</option>
           <option value="Sul da Ilha">Sul da ilha</option>
         </select>
         <br></br>
           <label id="problemas">Quais os Problemas que tem em Florianópolis? *</label>
             <textarea name="problemas"  value={state.problemas} onChange={handleChange} required placeholder="Fale dos problemas que Flroianópolis enfrenta" cols="60" rows="10"></textarea>
<br></br>
             <label id="principais">Qual é o principal problema entre os 5? *</label><br></br>
               <select name="problemaprincipal" value={state.problemaprincipal} onChange={handleChange} required className="form-control" required  id="problemaprincipal">
                 <option value="">Selecione</option>
                  <option value="Educação">Educação</option>
                  <option value="Mobilidade Urbana">Mobilidade Urbana</option>
                  <option value="Segurança">Segurança</option>
                  <option value="Saúde">Saúde</option>
                  <option value="Saneamento Básico">Saneamento Básico</option>
               </select>
               <br></br>
          
               <label id="lmelhor">O que poderia ser melhor em Florianópolis?</label>
                 <textarea name="melhorar" value={state.melhorar} cols="60" onChange={handleChange} rows="10" required id="melhorar" placeholder="Fale o que poderia ser melhor na cidade"></textarea>
                 <br></br>

                 <button class="btn btn-dark" type="submit" id="btn">Enviar</button>
             </form>

    

   </div>
    )
}
export default Formulario
