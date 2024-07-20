import '/css/style.css';
import '/css/index.css';
import '/js/cart';
import '/js/burger';
import '/js/search';
import '/js/footer';
import 'animate.css';
import { gamesList } from "./gamesList";

document.addEventListener('DOMContentLoaded', () => {
    function updateGameInfo(title, description) {
        const modalTitle = document.getElementById('modalTitle');
        const modalDescription = document.getElementById('modalDescription');
        if (modalTitle && modalDescription) {
            modalTitle.textContent = title;
            modalDescription.textContent = description;
        }
    }

    function toggleModal() {
        const modal = document.getElementById('gameModal');
        if (modal) {
            modal.classList.toggle('hidden');
        }
    }

    const buttonA = document.getElementById('buttonA');
    const imageA = document.getElementById('imageA');
    const buttonB = document.getElementById('buttonB');
    const imageB = document.getElementById('imageB');
    const punchSound = document.getElementById('punchSound');

    let originalSrcA, originalSrcB;

    if (imageA) {
        originalSrcA = imageA.src;
    }

    if (imageB) {
        originalSrcB = imageB.src;
    }

    const activeSrcA = '/images/btn_arc-pressed.png';
    const activeSrcB = '/images/btn_arc-pressed.png';

    let currentGame = -1; 

    function playPunchSound() {
        if (punchSound) {
            punchSound.currentTime = 0;
            punchSound.play();
        }
    }

    function simulateMouseClick() {
        const focusedElement = document.activeElement;
        if (focusedElement) {
            const mouseClickEvent = new MouseEvent('click', {
                bubbles: true,
                cancelable: true
            });
            focusedElement.dispatchEvent(mouseClickEvent);
        }
    }

    ['mousedown', 'mouseup', 'mouseleave'].forEach(event => {
        if (buttonA) {
            buttonA.addEventListener(event, (e) => {
                if (e.type === 'mousedown') {
                    if (imageA) {
                        imageA.src = activeSrcA;
                    }
                    playPunchSound();
                    simulateMouseClick();
                } else {
                    if (imageA) {
                        imageA.src = originalSrcA;
                    }
                }
                e.preventDefault();
            });
        }
    
        if (buttonB) {
            buttonB.addEventListener('mousedown', () => {
                if (imageB) {
                    imageB.src = activeSrcB;
                }
                playPunchSound();
                
                const focusedButton = document.activeElement;
                const game = gamesList.find(g => g.addToCartButton === focusedButton);
                
                if (game && game.description) {
                    updateGameInfo(game.title, game.description);
                    toggleModal();  
                }
            });
            
            buttonB.addEventListener('mouseup', () => {
                if (imageB) {
                    imageB.src = originalSrcB;
                }
            });
            
            buttonB.addEventListener('mouseleave', () => {
                if (imageB) {
                    imageB.src = originalSrcB;
                }
            });
        }
    });

    function toggleModal() {
        const modal = document.getElementById('gameModal');
        if (modal) {
            modal.classList.toggle('hidden');
        }
    }
    
    function setupModalAccessibility() {
        const closeModalButton = document.getElementById('closeModalButton');
        const modal = document.getElementById('gameModal'); 
    
        if (closeModalButton) {
            closeModalButton.addEventListener('click', toggleModal);
        }
    
        if (modal) {
            modal.addEventListener('click', (event) => {
                if (event.target === modal) { 
                    toggleModal();
                }
            });
        }
    
        window.addEventListener('keydown', (e) => {
            if (e.key === "Escape" && !modal.classList.contains('hidden')) {
                toggleModal();
                if (currentGame >= 0 && gamesList[currentGame]) {
                    gamesList[currentGame].addToCartButton.focus();
                }
            }
        });
    }
    
    setupModalAccessibility();
});