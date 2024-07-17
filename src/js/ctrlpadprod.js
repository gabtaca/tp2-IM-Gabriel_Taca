import { gamesList } from "./gamesList";
console.log(gamesList);

const scrollCtrl = document.getElementById('scroll_ctrl-products');
let scrollInterval = null;
const clickSound = new Audio('/sounds/click-sound.wav'); 
let currentGame = -1;  
let visibleGames = [];

function updateVisibleGames() {
    visibleGames = gamesList.filter(game => game.htmlElement.style.display !== 'none');
}

function updateFocus() {
    if (visibleGames.length > 0 && visibleGames[currentGame]) {
        visibleGames[currentGame].htmlElement.focus();
        const elementRect = visibleGames[currentGame].htmlElement.getBoundingClientRect();
        const scrollCtrlRect = scrollCtrl.getBoundingClientRect(); 
        const bottomPosition = elementRect.bottom - scrollCtrlRect.bottom; 
        scrollCtrl.scrollTop += bottomPosition;
    }
}

function filterGames(query) {
    gamesList.forEach(game => {
        const isVisible = game.title.toLowerCase().includes(query.toLowerCase()) ||
                            game.description.toLowerCase().includes(query.toLowerCase()) ||
                            game.type.toLowerCase().includes(query.toLowerCase());
        game.setVisible(isVisible);
    });
    updateVisibleGames(); 
}

document.addEventListener("DOMContentLoaded", function() {
    updateVisibleGames();
    
    document.getElementById('btn_up').addEventListener('mousedown', () => {
        clickSound.play();
        scrollInterval = setInterval(() => {
            scrollCtrl.scrollTop -= 10;
        }, 50);
    });

    document.getElementById('btn_up').addEventListener('mouseup', () => {
        clearInterval(scrollInterval);
        currentGame = Math.max(currentGame - 1, 0);
        updateFocus();
    });

    document.getElementById('btn_down').addEventListener('mousedown', () => {
        clickSound.play();
        scrollInterval = setInterval(() => {
            scrollCtrl.scrollTop += 10;
        }, 50);
    });

    document.getElementById('btn_down').addEventListener('mouseup', () => {
        clearInterval(scrollInterval);
        currentGame = Math.min(currentGame + 1, visibleGames.length - 1);
        updateFocus();
    });

    document.getElementById('btn_left').addEventListener('mousedown', () => {
        clickSound.play(); 
        scrollInterval = setInterval(() => {
            scrollCtrl.scrollLeft -= 10;
        }, 50); 
    });

    document.getElementById('btn_left').addEventListener('mouseup', () => {
        clearInterval(scrollInterval);
    });

    document.getElementById('btn_right').addEventListener('mousedown', () => {
        clickSound.play(); 
        scrollInterval = setInterval(() => {
            scrollCtrl.scrollLeft += 10;
        }, 50); 
    });

    document.getElementById('btn_right').addEventListener('mouseup', () => {
        clearInterval(scrollInterval);
    });
});

document.getElementById('searchInput').addEventListener('input', function() {
    const query = this.value.trim();
    filterGames(query);
});