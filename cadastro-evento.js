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
    name: nome.value,
    poster: "link da imagem",
    attractions: [atracoes.value],
    description: descricao.value,
    scheduled: data.value,
    number_tickets: lotacao.value,
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