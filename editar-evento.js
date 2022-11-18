console.log("Hello, wolrd!");

const inputName = document.querySelector("#nome");
const inputBanner = document.querySelector("#banner");
const inputAttractions = document.querySelector("#atracoes");
const inputDescription = document.querySelector("#descricao");
const inputDate = document.querySelector("#data");
const inputTicket = document.querySelector("#lotacao");

const btnEditarEvento = document.querySelector("button");

console.log(btnEditarEvento);

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
