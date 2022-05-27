import { createParticipant, getWorkshops } from '../fetch-utils.js';

const form = document.getElementById('addForm');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const workshopId = formData.get('workshop-id');
    const name = formData.get('name');
    const contact = formData.get('contact-info');

    await createParticipant({ name: name, workshop_id: workshopId, contact: contact });
    form.reset();
    window.location.replace('../Workshops/index.html');
});

window.addEventListener('load', async () => {
    const select = document.querySelector('select');
    const workshops = await getWorkshops();

    for (let workshop of workshops) {
        const option = document.createElement('option');
        option.value = workshop.id;
        option.textContent = workshop.name;

        select.append(option);
    }
});