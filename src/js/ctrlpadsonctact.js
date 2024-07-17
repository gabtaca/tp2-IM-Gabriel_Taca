document.addEventListener("DOMContentLoaded", function() {
    const inputs = [
        document.getElementById("name"),
        document.getElementById("email"),
        document.getElementById("subject"),
        document.getElementById("message")
    ];
    const submitButton = document.getElementById("submit");
    const submittedMessage = document.getElementById("submitted");
    const completeMessage = document.getElementById("complete");
    const goodEmailMessage = document.getElementById("good_email");
    const buttonA = document.getElementById("buttonA");
    const imageA = document.getElementById("imageA");
    const buttonB = document.getElementById("buttonB");
    const imageB = document.getElementById("imageB");
    const clickSound = new Audio('/sounds/click-sound.wav');
    const punchSound = new Audio('/sounds/key-punch.mp3');
    let currentInputIndex = -1;

    const activeSrcA = '/images/btn_arc-pressed.png';
    const originalSrcA = imageA.src;
    const activeSrcB = '/images/btn_arc-pressed.png';
    const originalSrcB = imageB.src;

    function updateFocus() {
        if (inputs.length > 0 && currentInputIndex >= 0 && currentInputIndex < inputs.length) {
            inputs[currentInputIndex].focus();
        }
    }

    function showTemporaryMessage(element) {
        element.style.display = "block";
        setTimeout(() => {
            element.style.display = "none";
        }, 4000);
        const messageDiv = document.getElementById('scroll_ctrl-contact');
        messageDiv.scrollTop = messageDiv.scrollHeight;
    }

    function clearForm() {
        inputs.forEach(input => input.value = '');
        showTemporaryMessage(submittedMessage);
        currentInputIndex = 0;
        updateFocus();
    }

    function validateForm() {
        const emailInput = document.getElementById('email');
        const isValidEmail = validateEmail(emailInput.value);
        const allInputsFilled = inputs.every(input => input.value.trim() !== '');

        if (allInputsFilled && isValidEmail) {
            clearForm();
        } else {
            if (!allInputsFilled) {
                showTemporaryMessage(completeMessage);
            }
            if (!isValidEmail) {
                showTemporaryMessage(goodEmailMessage);
            }
        }
    }

    document.getElementById('btn_up').addEventListener('mousedown', (e) => {
        e.preventDefault();
        clickSound.play();
        currentInputIndex = (currentInputIndex - 1 + inputs.length) % inputs.length;
        updateFocus();
    });

    document.getElementById('btn_down').addEventListener('mousedown', (e) => {
        e.preventDefault();
        clickSound.play();
        currentInputIndex = (currentInputIndex + 1) % inputs.length;
        updateFocus();
    });

    buttonA.addEventListener('mousedown', (e) => {
        e.preventDefault();
        punchSound.play();
        const allInputsFilled = inputs.every(input => input.value.trim() !== '');
        const emailInput = document.getElementById('email');
        const isValidEmail = validateEmail(emailInput.value);
        if (allInputsFilled && isValidEmail) {
            showTemporaryMessage(submittedMessage); 
        } else {
            if (!allInputsFilled) {
                showTemporaryMessage(completeMessage); 
            }
            if (!isValidEmail) {
                showTemporaryMessage(goodEmailMessage); 
            }
        }
    });

    buttonA.addEventListener('mouseup', () => {
        imageA.src = originalSrcA;
    });

    buttonB.addEventListener('mousedown', (e) => {
        imageB.src = activeSrcB;
        punchSound.play();
        const focusedElement = document.activeElement;
        if (focusedElement && (focusedElement.tagName === 'INPUT' || focusedElement.tagName === 'TEXTAREA')) {
            focusedElement.value = '';
            focusedElement.focus();
        }
        e.preventDefault();
    });

    buttonB.addEventListener('mouseup', () => {
        imageB.src = originalSrcB;
    });

    buttonB.addEventListener('mouseleave', () => {
        imageB.src = originalSrcB;
    });

    submitButton.addEventListener('click', (e) => {
        e.preventDefault(); 
        const emailInput = document.getElementById('email');
        const isValidEmail = validateEmail(emailInput.value);
        const allInputsFilled = inputs.every(input => input.value.trim() !== '');
    
        if (allInputsFilled && isValidEmail) {
            clearForm();
            showTemporaryMessage(submittedMessage); 
            const messageDiv = document.getElementById('scroll_ctrl-contact');
            messageDiv.scrollTop = messageDiv.scrollHeight;
            messageDiv.scrollIntoView(false);
        } else {
            if (!allInputsFilled) {
                showTemporaryMessage(completeMessage); 
            }
            if (!isValidEmail) {
                showTemporaryMessage(goodEmailMessage); 
            }
        }
    });

    document.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const emailInput = document.getElementById('email');
            const isValidEmail = validateEmail(emailInput.value);
            const allInputsFilled = inputs.every(input => input.value.trim() !== '');
    
            if (allInputsFilled && isValidEmail) {
                clearForm();
                showTemporaryMessage(submittedMessage); 
                setTimeout(() => {
                    const messageDiv = document.getElementById('scroll_ctrl-contact');
                    messageDiv.scrollTop = messageDiv.scrollHeight;
                    messageDiv.scrollIntoView(false); 
                }, 100); 
            } else {
                if (!allInputsFilled) {
                    showTemporaryMessage(completeMessage);
                }
                if (!isValidEmail) {
                    showTemporaryMessage(goodEmailMessage);
                }
            }
        }
    });

    function validateEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }

    const imgA = document.getElementById('ctct_anim-a');
    const imgB = document.getElementById('ctct_anim-b');
    let isPressed = false;

    setInterval(() => {
        isPressed = !isPressed;
        imgA.src = isPressed ? '/images/btn_arc-pressed.png' : '/images/btn_arc.png';
        imgB.src = isPressed ? '/images/btn_arc-pressed.png' : '/images/btn_arc.png';
    }, 1000);
});
