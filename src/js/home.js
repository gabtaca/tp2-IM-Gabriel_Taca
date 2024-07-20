import { newsList } from "./newsList";

class NewsManager {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.createHeader();
        this.createButtonBar();
        this.addNewsElements();
    }

    createHeader() {
        const header = document.createElement('div');
        header.className = 'flex flex-col items-center p-4 border-b border-lime-800';

        const headerImage = document.createElement('img');
        headerImage.src = '/images/banner_retro-source_screen.png';
        headerImage.alt = 'Header Image';
        headerImage.className = 'w-[50%] h-[50%] mb-4';

        const headerText = document.createElement('h2');
        headerText.className = 'text-lg font-bold font-slikScreen text-center';
        headerText.textContent = 'NEWS from the video game industry';

        const headerInstructions = document.createElement('div');
        headerInstructions.className = 'flex flex-row text-sm justify-center mb-4 pt-3';

        const buttonA = document.createElement('div');
        buttonA.className = 'flex flex-row items-center';

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
        labelAHint.textContent = '(check news)';

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
        labelBHint.textContent = '(clear news)';


        buttonA.appendChild(imgA);
        buttonA.appendChild(labelA);
        buttonA.appendChild(labelAHint);

        headerInstructions.appendChild(buttonA);

        buttonA.appendChild(imgB);
        buttonA.appendChild(labelB);
        buttonA.appendChild(labelBHint);

        headerInstructions.appendChild(buttonB);

        header.appendChild(headerImage);
        header.appendChild(headerText);
        header.appendChild(headerInstructions);

        this.container.appendChild(header);
    }

    createButtonBar() {
    }

    addNewsElements() {
        newsList.forEach(news => {
            this.addNews(news);
        });
    }

    addNews(news) {
        const newsElement = news.htmlElement;
        this.container.appendChild(newsElement);
        const imgA = document.getElementById('ctct_anim-a');
        const imgB = document.getElementById('ctct_anim-b');
        let isPressed = false;
        
        setInterval(() => {
            isPressed = !isPressed;
            imgA.src = isPressed ? '/images/btn_arc-pressed.png' : '/images/btn_arc.png';
            imgB.src = isPressed ? '/images/btn_arc-pressed.png' : '/images/btn_arc.png';
        }, 1000);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const newsManager = new NewsManager('screen_content-container-home');
});



