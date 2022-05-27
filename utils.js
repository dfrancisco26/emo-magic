import { getWorkshops, deleteParticipant } from './fetch-utils.js';

const workshopsEl = document.getElementById('workshops');

export async function renderWorkshop() {

    workshopsEl.textContent = '';

    const workshops = await getWorkshops();
    for (let workshop of workshops) {
        const wsDiv = document.createElement('div');
        wsDiv.classList.add('workshop');

        const img = document.createElement('img');
        img.src = `../assets/${workshop.image}.jpg`;

        const title = document.createElement('h2');
        const description = document.createElement('p');
        const partList = document.createElement('ul');

        title.textContent = workshop.name;
        description.textContent = workshop.description;

        workshopsEl.append(wsDiv);
        wsDiv.append(img, title, description, partList);
        
        for (let participant of workshop.participants) {
            const partEl = document.createElement('li');
            const delButton = document.createElement('button');
            const delLabel = document.createElement('label');

            partEl.textContent = `${participant.name} Contact info: ${participant.contact}`;
            delLabel.textContent = 'Delete';

            partList.append(partEl);
            partEl.append(delButton);
            delButton.append(delLabel);
            
            delButton.addEventListener('click', async () => {
                await deleteParticipant(participant.id);
                renderWorkshop();
            });
        }

    }
} 

