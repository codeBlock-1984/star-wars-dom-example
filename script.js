const url = 'https://swapi.dev/api/people';
const list = document.getElementById('characters');
const characterBox = document.getElementById('character');

let store;

// Make call to star wars API and load results into list
fetch(url)
    .then(res => res.json())
    .then(res => {
        loadPersons(res.results);
    })
    .catch(error => console.log(error));

function loadPersons(persons) {
    store = persons;
    persons.forEach(person => {
        const link = document.createElement('a');
        link.onclick = loadPerson;
        link.innerText = person.name;

        const listItem = document.createElement('li');
        listItem.className = 'character-item';
        listItem.appendChild(link);

        list.appendChild(listItem);
    });
}

function loadPerson(event) {
    const name = event.target.innerText;
    const person = store.find(i => i.name === name);

    // Create image
    const image = document.createElement('img');
    image.src = 'random.png';
    image.width = 200;

    const title = document.createElement('h2');
    title.innerText = person.name;

    const gender = document.createElement('p');
    gender.innerText = person.gender;

    const height = document.createElement('p');
    height.innerText = person.height;

    const character = document.createElement('div');

    character.appendChild(image);
    character.appendChild(title);
    character.appendChild(gender);
    character.appendChild(height);

    characterBox.childNodes[0].remove();

    characterBox.appendChild(character);
}
