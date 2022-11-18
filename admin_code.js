
console.log("Hello, wolrd!");

const eventList = document.querySelector("table");

console.log(eventList);

async function getEvents() {
    const response = await fetch(
        'https://xp41-soundgarden-api.herokuapp.com/events', {
        }
    )

    const events = await response.json();

    events.forEach((event) => {
        const eventsRow = `
        <tbody>
            <tr>
                <th scope="row">0</th>
                <td>${event.scheduled}</td>
                <td>${event.name}</td>
                <td>${event.attractions}</td>
                <td>
                    <a href="/Desafio-2-Gama-XP-46-Grupo-13/reservas.html" class="btn btn-dark">ver reservas</a>
                    <a href="/Desafio-2-Gama-XP-46-Grupo-13/editar-evento.html/${event._id}" class="btn btn-secondary">editar</a>
                    <a href="/Desafio-2-Gama-XP-46-Grupo-13/excluir-evento.html/${event._id}" class="btn btn-danger">excluir</a>
                </td>
            </tr>   
        </tbody>
        `;

        eventList.innerHTML += eventsRow

    });

};

getEvents();
