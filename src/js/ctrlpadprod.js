import { gamesList } from "./gamesList";

const scrollCtrl = document.getElementById('scroll_ctrl-products');
let scrollInterval = null;
const clickSound = new Audio('/sounds/click-sound.wav'); 
export let currentGame = -1;  
let visibleGames = [];

function updateVisibleGames() {
    visibleGames = gamesList.filter(game => game.htmlElement.style.display !== 'none');
}

function updateFocus() {
    if (document.activeElement === searchInput) return; // Check if search input is focused
    const visibleItems = gamesList.filter(game => game.htmlElement.style.display !== 'none');
    if (visibleItems.length > 0 && currentGame >= 0 && currentGame < visibleItems.length) {
        const focusedItem = visibleItems[currentGame];
        // code inutile
        focusedItem.htmlElement.focus();
        const elementRect = focusedItem.htmlElement.getBoundingClientRect();
        const scrollCtrlRect = scrollCtrl.getBoundingClientRect(); 
        const bottomPosition = elementRect.bottom - scrollCtrlRect.bottom; 
        scrollCtrl.scrollTop += bottomPosition;
    }
}

function navigateGames(direction) {
    const visibleItems = gamesList.filter(game => game.htmlElement.style.display !== 'none');
    const newIndex = currentGame + direction;
    if (newIndex >= 0 && newIndex < visibleItems.length) {
        currentGame = newIndex;
        updateFocus();
    }
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
        navigateGames(-1);
    });

    document.getElementById('btn_down').addEventListener('mousedown', () => {
        clickSound.play();
        scrollInterval = setInterval(() => {
            scrollCtrl.scrollTop += 10;
        }, 50);
    });

    document.getElementById('btn_down').addEventListener('mouseup', () => {
        clearInterval(scrollInterval);
        navigateGames(1);
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
    updateVisibleGames();
    currentGame = 0;
    updateFocus();
});