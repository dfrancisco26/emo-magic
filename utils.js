const workshopsEl = document.getElementById('workshops');

export function renderWorkshop() {
    const wsDiv = document.createElement('div');
    const title = document.createElement('h2');
    const description = document.createElement('p');
    const partList = document.createElement('ul');
    const partEl = document.createElement('li');

    title.textContent = 'Tearbending';
    description.textContent = 'Like waterbending, but saltier!';
    partEl.textContent = 'Bufo Contact Info: Wiggle your fingers while thinking of toads.';
    partList.append(partEl);
    wsDiv.append(title, description, partList);
    workshopsEl.append(wsDiv);
} 