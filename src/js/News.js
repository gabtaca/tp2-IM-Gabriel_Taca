export class News {
    constructor(title, origin, date, imageUrl, link) {
        this.title = title;
        this.origin = origin;
        this.date = date;
        this.imageUrl = imageUrl;
        this.link = link;
        this.htmlElement = this.createNewsElement();
    }

    createNewsElement() {
        const newsItem = document.createElement('a');
        newsItem.href = this.link;
        newsItem.target = '_blank';
        newsItem.className = 'flex flex-col md:flex-row items-center w-[95%] font-slikScreen text-lime-950 focus:bg-green-200 focus:border-2 focus-border-lime-900 focus:rounded-3xl p-5';

        const img = document.createElement('img');
        img.src = this.imageUrl;
        img.alt = this.title;
        img.className = 'w-[7rem] h-[5rem] md:w-[10rem] md:h-[7rem]  lg:w-[15rem] lg:h-[12rem] md:mr-4 rounded-xl';

        const content = document.createElement('div');
        content.className = 'flex flex-col w-[20rem] pl-7';

        const newsTitle = document.createElement('h3');
        newsTitle.className = 'text-sm font-extrabold text-center md:text-left';
        newsTitle.textContent = this.title;

        const newsOrigin = document.createElement('p');
        newsOrigin.className = 'text-gray-600';
        newsOrigin.textContent = this.origin;

        const newsDate = document.createElement('p');
        newsDate.className = 'text-gray-500 text-sm';
        newsDate.textContent = this.date;

        content.appendChild(newsTitle);
        content.appendChild(newsOrigin);
        content.appendChild(newsDate);

        newsItem.appendChild(img);
        newsItem.appendChild(content);

        this.htmlElement = newsItem;

        return newsItem;
    }
}