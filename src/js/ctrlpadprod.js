import { gamesList } from "./gamesList";
console.log(gamesList);

const scrollCtrl = document.getElementById('scroll_ctrl-products');
let scrollInterval = null;
const clickSound = new Audio('/sounds/click-sound.wav'); 
let currentGame = -1;  

function updateFocus() {
    if (gamesList[currentGame]) {
        gamesList[currentGame].htmlElement.focus();
        const elementRect = gamesList[currentGame].htmlElement.getBoundingClientRect();
        const scrollCtrlRect = scrollCtrl.getBoundingClientRect(); 
        const bottomPosition = elementRect.bottom - scrollCtrlRect.bottom; 
        scrollCtrl.scrollTop += bottomPosition;
    }
}

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
    currentGame = Math.min(currentGame + 1, gamesList.length - 1);
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