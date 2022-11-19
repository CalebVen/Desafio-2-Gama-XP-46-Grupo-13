const eventos = document.querySelector("#listaDeEventos");

async function getEvents() {
    const response = await fetch('https://xp41-soundgarden-api.herokuapp.com/events/:id', {
        headers: {
            'Content-Type': 'application/json'
        },
        });

    const events = await response.json(); 

    events.forEach((event) => {
        const articleEvent = `
        <article class="evento card p-5 m-3">
            <h2>${event.name}</h2>
            <h4>${event.attractions}</h4>
            <p>${event.description}</p>
            <a href="" class="btn btn-primary">
                reservar ingresso
            </a>
        </article>`;

        console.log(event);

        eventos.innerHTML += articleEvent;

    });     
}

getEvents();