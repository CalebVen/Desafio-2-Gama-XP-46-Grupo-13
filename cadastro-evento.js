console.log('Cadastro-evento')

const btncadastrarEvento = document.querySelector('#submit')
const nome = document.querySelector('#nome')
const atracoes = document.querySelector("#atracoes")
const descricao = document.querySelector("#descricao")
const data = document.querySelector("#data")
const lotacao = document.querySelector("#lotacao")

async function cadastrarEvento(evento) {
  evento.preventDefault()
  const dados = {
    name: "",
    poster: src = "",
    attractions: [""],
    description: "N",
    scheduled: new Date (""),
    number_tickets: "",
  }
  
  const init = {
    method: 'POST',
    headers: {
      'content-Type': 'application/json'
    },
    body: JSON.stringify(dados),
    redirect: 'follow', 
  };
 await fetch("https://xp41-soundgarden-api.herokuapp.com/events", init)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

}

btncadastrarEvento.onclick = cadastrarEvento
