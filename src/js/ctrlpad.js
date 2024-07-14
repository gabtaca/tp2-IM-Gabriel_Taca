import { newsList } from "./newsList";
console.log(newsList);

const scrollCtrl = document.getElementById('scroll_ctrl-home');
let scrollInterval = null;
const clickSound = new Audio('/sounds/click-sound.wav'); 
let currentNews = -1; 

document.getElementById('btn_up').addEventListener('mousedown', () => {
    clickSound.play();
    scrollInterval = setInterval(() => {
    scrollCtrl.scrollTop -= 10;
    }, 50); 
});

document.getElementById('btn_up').addEventListener('mouseup', () => {
    currentNews = Math.max(currentNews - 1, 0); 
    clearInterval(scrollInterval);
    newsList[currentNews].htmlElement.focus({
        focusVisible: true
    });
});

document.getElementById('btn_down').addEventListener('mousedown', () => {
    clickSound.play(); 
    scrollInterval = setInterval(() => {
    scrollCtrl.scrollTop += 10;
    }, 50); 
});

document.getElementById('btn_down').addEventListener('mouseup', () => {
    currentNews = Math.min(currentNews + 1, newsList.length - 1); 
    clearInterval(scrollInterval);
    newsList[currentNews].htmlElement.focus({
        focusVisible: true
    });

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