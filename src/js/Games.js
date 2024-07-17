export class Games {
    constructor(title, type, players, price, imageUrl, description) {
        this.title = title;
        this.type = type;
        this.players = players;
        this.price = price;
        this.imageUrl = imageUrl;
        this.description = description;
        this.htmlElement = this.createGamesElement();
    }

    createGamesElement() {
        const gamesItem = document.createElement('div');
        gamesItem.className = 'game-item flex flex-col text-center items-center w-[95%] font-slikScreen text-lime-950 p-5';

        const img = document.createElement('img');
        img.src = this.imageUrl;
        img.alt = this.title;
        img.className = 'w-[5rem] h-[5rem] md:w-[10rem] md:h-[10rem] lg:w-[15rem] lg:h-[15rem] md:mr-4 rounded-xl';

        const content = document.createElement('div');
        content.className = 'flex flex-col pl-5';

        const gameTitle = document.createElement('h3');
        gameTitle.className = 'text-md font-extrabold';
        gameTitle.textContent = this.title;

        const gameType = document.createElement('p');
        gameType.className = 'text-gray-600 text-sm';
        gameType.textContent = `Type: ${this.type}`;

        const gamePlayers = document.createElement('p');
        gamePlayers.className = 'text-gray-500 text-sm';
        gamePlayers.textContent = `Players: ${this.players}`;

        const gamePrice = document.createElement('p');
        gamePrice.className = 'text-amber-500 text-sm';
        gamePrice.textContent = `${this.price} $`;

        const buttonContainer = document.createElement('div');
        buttonContainer.className = 'flex items-center mt-2 justify-center';

        const addToCartButton = document.createElement('button');
        addToCartButton.className = 'md:p-2 text-white rounded flex items-center focus:bg-green-200 focus:border-2 focus:border-lime-900';
        addToCartButton.textContent = 'Add to Cart';
        addToCartButton.onclick = () => alert(`Added ${this.title} to cart!`);

        const cartImage = document.createElement('img');
        cartImage.src = '/images/coin.png';
        cartImage.alt = 'Cart Icon';
        cartImage.className = 'ml-2';

        addToCartButton.appendChild(cartImage);
        buttonContainer.appendChild(addToCartButton);

        content.appendChild(gameTitle);
        content.appendChild(gameType);
        content.appendChild(gamePlayers);
        content.appendChild(gamePrice);
        content.appendChild(buttonContainer);

        gamesItem.appendChild(img);
        gamesItem.appendChild(content);

        this.htmlElement = addToCartButton;
        this.addToCartButton = addToCartButton;  
        this.detailsElement = gamesItem;  

        return gamesItem;
        
    }
    setVisible(visible) {
        if (this.detailsElement) {
            this.detailsElement.style.display = visible ? '' : 'none';
        }
    }
}
