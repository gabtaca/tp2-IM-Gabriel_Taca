import '/src/css/style.css';
import '/src/css/index.css';
import '/src/js/cart';
import '/src/js/burger';
import '/src/js/search';
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

    const activeSrcA = '/images/btn_arc-pressed.png';
    const originalSrcA = imageA.src;
    const activeSrcB = '/images/btn_arc-pressed.png';
    const originalSrcB = imageB.src;

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
        buttonA.addEventListener(event, (e) => {
            if (e.type === 'mousedown') {
                imageA.src = activeSrcA;
                playPunchSound();
                simulateMouseClick();
            } else {
                imageA.src = originalSrcA;
            }
            e.preventDefault();
        });

        buttonB.addEventListener('mousedown', () => {
            imageB.src = activeSrcB;
            playPunchSound();
            
            const focusedButton = document.activeElement;
            const game = gamesList.find(g => g.addToCartButton === focusedButton);
            
            if (game && game.description) {
                updateGameInfo(game.title, game.description);
                toggleModal();  
            }
        });
        
        buttonB.addEventListener('mouseup', () => {
            imageB.src = originalSrcB;
        });
        
        buttonB.addEventListener('mouseleave', () => {
            imageB.src = originalSrcB;
        });
    });

    function toggleModal() {
        const modal = document.getElementById('gameModal');
        if (modal) {
            modal.classList.toggle('hidden');
        }
    }
    
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