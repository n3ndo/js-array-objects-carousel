const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

let indice = 0;

function changeImage() {
    const imgElement = document.createElement('img');
    imgElement.src = images[indice].image;
    imgElement.alt = images[indice].title;

    const imgContainer = document.getElementById('item-active');
    imgContainer.innerHTML = '';

    const titleElement = document.createElement('h2');
    titleElement.textContent = images[indice].title;

    const textElement = document.createElement('p');
    textElement.textContent = images[indice].text;

    imgContainer.appendChild(imgElement);
    imgContainer.appendChild(titleElement);
    imgContainer.appendChild(textElement);
}

function nextImage() {
    indice = (indice + 1) % images.length;
    changeImage();
}

function prevImage() {
    indice = (indice - 1 + images.length) % images.length;
    changeImage();
}

const next = document.getElementById('next').addEventListener('click', nextImage);
const prev = document.getElementById('prev').addEventListener('click', prevImage);

changeImage();
