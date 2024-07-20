import { gamesList } from "./gamesList";

class GameManager {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.createHeader();
        this.createButtonBar();  // Add this line to create the button bar
    }

    createHeader() {
        const header = document.createElement('div');
        header.className = 'games_header flex flex-col items-center p-4 border-b border-lime-900 col-span-1 md:col-span-2 lg:col-span-3';

        const headerImage = document.createElement('img');
        headerImage.src = '/images/header_products.png'; 
        headerImage.alt = 'Header Image';
        headerImage.className = 'w-[15rem] h-[10rem] md:w-[33rem] md:h-[20rem] mb-4 row-start-1 col-start-1 ';

        const headerText = document.createElement('h2');
        headerText.className = 'text-2xl font-bold font-slikScreen text-center';
        headerText.textContent = 'Games List';

        header.appendChild(headerImage);
        header.appendChild(headerText);

        this.header = header; 

        this.container.appendChild(header);
    }

    createButtonBar() {
        const headerInstructions = document.createElement('div');
        headerInstructions.className = 'flex flex-col md:flex-row text-sm md:justify-center item-center mb-4 pt-3 col-span-1 md:col-span-2 lg:col-span-3';

        const buttonA = document.createElement('div');
        buttonA.className = 'flex flex-row items-center mr-4';

        const imgA = document.createElement('img');
        imgA.id = 'ctct_anim-a';
        imgA.className = 'w-5 h-5 md:w-10 md:h-10 lg:w-12 lg:h-12';
        imgA.src = '/images/btn_arc.png';
        imgA.alt = 'image de bouton d\'arcade rouge';

        const labelA = document.createElement('p');
        labelA.className = 'font-AntonSc px-2';
        labelA.textContent = 'A';

        const labelAHint = document.createElement('p');
        labelAHint.className = 'font-slikScreen text-sm pr-5';
        labelAHint.textContent = '(Add to cart)';

        const buttonB = document.createElement('div');
        buttonB.className = 'flex flex-row items-center';

        const imgB = document.createElement('img');
        imgB.id = 'ctct_anim-b';
        imgB.className = 'w-5 h-5 md:w-10 md:h-10 lg:w-12 lg:h-12';
        imgB.src = '/images/btn_arc.png';
        imgB.alt = 'image de bouton d\'arcade rouge';

        const labelB = document.createElement('p');
        labelB.className = 'font-AntonSc px-2';
        labelB.textContent = 'B';

        const labelBHint = document.createElement('p');
        labelBHint.className = 'font-slikScreen text-sm';
        labelBHint.textContent = '(Description)';

        buttonA.appendChild(imgA);
        buttonA.appendChild(labelA);
        buttonA.appendChild(labelAHint);

        headerInstructions.appendChild(buttonA);

        buttonB.appendChild(imgB);
        buttonB.appendChild(labelB);
        buttonB.appendChild(labelBHint);

        headerInstructions.appendChild(buttonB);

        this.container.appendChild(headerInstructions);

        let isPressed = false;
        setInterval(() => {
            isPressed = !isPressed;
            imgA.src = isPressed ? '/images/btn_arc-pressed.png' : '/images/btn_arc.png';
            imgB.src = isPressed ? '/images/btn_arc-pressed.png' : '/images/btn_arc.png';
        }, 1000);
    }

    addGame(game) {
        const gameElement = game.createGamesElement();
        this.container.appendChild(gameElement);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const gameManager = new GameManager('screen_content-container-products');

    const params = new URLSearchParams(window.location.search);
    const searchQuery = params.get('search');

    if (searchQuery) {
        gameManager.header.style.display = 'none';
    }

    const searchInput = document.getElementById('searchInput');

    searchInput.addEventListener('input', () => {
        if (searchInput.value.trim() === '') {
            gameManager.header.style.display = 'flex'; 
        } else {
            gameManager.header.style.display = 'none';
        }
    });

    gamesList.forEach(game => {
        gameManager.addGame(game);
    });
});