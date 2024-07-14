import { newsList } from "./newsList";


class NewsManager {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.createHeader();
    }

    createHeader() {
        const header = document.createElement('div');
        header.className = 'flex flex-col items-center p-4 border-b border-lime-800';

        const headerImage = document.createElement('img');
        headerImage.src = '/images/banner_retro-source_screen.png'; 
        headerImage.alt = 'Header Image';
        headerImage.className = 'w-[50%] h-[50%] mb-4';

        const headerText = document.createElement('h2');
        headerText.className = 'text-lgfont-bold font-slikScreen text-center';
        headerText.textContent = 'NEWS from the video game industry';

        header.appendChild(headerImage);
        header.appendChild(headerText);

        this.container.appendChild(header);
    }

    addNews(news) {
        const newsElement = news.htmlElement;
        this.container.appendChild(newsElement);
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const newsManager = new NewsManager('screen_content-container-home');


    newsList.forEach(news => {
        newsManager.addNews(news);
    });
});


