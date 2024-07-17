document.addEventListener("DOMContentLoaded", function() {
    const gameCategories = {
        "Sports": "/images/trophy.png",
        "Fighting": "/images/fighting.png",
        "RPG": "/images/RPG.png",
        "Racing": "/images/racing_footer.png",
        "Adventure": "/images/adventure.png",
        "Management": "/images/management.png",
        "Platformer": "/images/platformer.png",
        "Simulator": "/images/simulator.png",
        "Stealth": "/images/stealth.png"
    };

    const footerImageDiv = document.getElementById('footer_game-img');
    const listItems = document.querySelectorAll('#content_1 ul li a');

    listItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const gameType = this.textContent.trim();
            const imageUrl = gameCategories[gameType];
            footerImageDiv.style.backgroundImage = `url('${imageUrl}')`;
            footerImageDiv.style.backgroundSize = 'contain';
        });

        item.addEventListener('mouseleave', function() {
            footerImageDiv.style.backgroundImage = 'none';
        });
    });


    const coll = document.querySelectorAll(".exp_dropdown");
    coll.forEach(function(dropdown) {
        const content = dropdown.nextElementSibling;
        const arrow = dropdown.querySelector("p");


        content.style.display = "none";
        arrow.innerHTML = '▼';  

        dropdown.addEventListener("click", function() {
            const isExpanded = content.style.display === "block";
            content.style.display = isExpanded ? "none" : "block";
            arrow.innerHTML = isExpanded ? '▼' : '▲'; 
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const selectElement = document.getElementById('location');

    function updateSelectedOption() {
        const options = selectElement.options;

        for (let i = 0; i < options.length; i++) {
        const option = options[i];
        const icon = option.getAttribute('data-icon');
        const countryName = option.textContent.replace(/⚑ /g, '');

        if (option.selected) {
            option.innerHTML = `${icon} ${countryName}`;
        } else {
            option.innerHTML = countryName;
        }
        }
    }

    updateSelectedOption();
    
    selectElement.addEventListener('change', updateSelectedOption);
});