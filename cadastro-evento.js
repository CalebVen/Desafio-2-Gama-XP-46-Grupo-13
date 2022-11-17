console.log('Cadastro-evento')

const btncadastrarEvento = document.querySelector('#submit')

async function cadastrarEvento(evento) {
  evento.preventDefault()

  const dados = {
    name: "Assassin's Creed",
    poster: src = "https://files.meiobit.com/wp-content/uploads/2021/10/Assassins-Creed-.jpg",
    attractions: ["Ezio Auditore, Bayek, Eivor Wolf-Kissed"],
    description: "Nada é verdade. Tudo é permitido",
    scheduled: new Date ("2022/12/21"),
    number_tickets: "50",
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