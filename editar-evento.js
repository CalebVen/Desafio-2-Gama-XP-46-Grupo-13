console.log("Hello, wolrd!");

const inputEvent = document.getElementsByTagName("form");
const inputName = document.querySelector("#nome");
const inputBanner = document.querySelector("#banner");
const inputAttractions = document.querySelector("#atracoes");
const inputDescription = document.querySelector("#descricao");
const inputDate = document.querySelector("#data");
const inputTicket = document.querySelector("#lotacao");

const btnEditarEvento = document.querySelector("button");

console.log(btnEditarEvento);


inputEvent.onload = async () => {
    const formInputLoad = {
        name: inputName.value,
        poster: inputBanner.value,
        attractions: [
            inputAttractions.value
        ],
        description: inputDescription.value,
        scheduled:inputDate.value,
        number_tickets: Number(inputTicket.value)
        }; 

        console.log(formInputLoad)

        let URLid = new URLSearchParams(location.search);
        let id_load = URLid.get("id")
    
    const resposta = await fetch(
        'https://xp41-soundgarden-api.herokuapp.com/events/' + id_load
      );
  
      const input = await resposta.json();     

      inputName.value = input.name;
      inputBanner.value = input.poster;
      inputAttractions.value = input.attractions;
      inputDescription.value = input.description;
      inputDate.value = input.scheduled;
      inputTicket.value = input.number_tickets;
    };

inputEvent.onload()

async function setEdits(event) {
    event.preventDefault();
    const formInput = {
        name: inputName.value,
        poster: inputBanner.value,
        attractions: [
            inputAttractions.value
        ],
        description: inputDescription.value,
        scheduled:inputDate.value,
        number_tickets: Number(inputTicket.value)
        };

        let params = new URLSearchParams(location.search);
        let id = params.get("id")

    await fetch(`https://xp41-soundgarden-api.herokuapp.com/events/${id}`,{
        method: "PUT", 
        headers: {
        'Content-type': 'application/json' 
        },
        body: JSON.stringify(formInput), 
        redirect: 'follow',

        }
    );
};

btnEditarEvento.onclick = setEdits;
