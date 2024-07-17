import { gamesList } from "./gamesList";

document.addEventListener("DOMContentLoaded", function() {
    const searchButton = document.getElementById("btn_search");
    const searchDiv = document.getElementById("search_div");
    const searchInput = document.getElementById('searchInput');
    const searchBarButton = document.getElementById("btn_srch-bar");
    const gameContainer = document.getElementById('screen_content-container-products');

    function toggleSearchDiv(show) {
        if (show) {
            searchDiv.classList.remove("md:hidden");
            searchInput.focus();
        } else {
            searchDiv.classList.add("md:hidden");
            resetSearch();
        }
    }

    function resetSearch() {
        searchInput.value = "";
        filterGames("");
    }

    function filterGames(query) {
        gamesList.forEach(game => {
            const isVisible = game.title.toLowerCase().includes(query.toLowerCase()) ||
                              game.description.toLowerCase().includes(query.toLowerCase()) ||
                              game.type.toLowerCase().includes(query.toLowerCase());
            game.setVisible(isVisible);
        });
    }

    function setupGameVisibility() {
        gamesList.forEach(game => {
            game.setVisible(true);
        });
    }

    searchButton.addEventListener("click", () => {
        const isHidden = searchDiv.classList.contains("md:hidden");
        toggleSearchDiv(isHidden);
    });

    if (gameContainer) {
        setupGameVisibility();

        const params = new URLSearchParams(window.location.search);
        const searchQuery = params.get('search');
        if (searchQuery) {
            searchInput.value = searchQuery;
            setTimeout(() => {
                filterGames(searchQuery);
                toggleSearchDiv(true);
            }, 300);
        }

        searchInput.addEventListener("input", () => {
            filterGames(searchInput.value);
            const newUrl = window.location.pathname;
            history.replaceState(null, '', newUrl); 
        });
    } else {
        searchBarButton.addEventListener("click", function(event) {
            event.preventDefault();
            const query = searchInput.value.trim();
            if (query) {
                window.location.href = `/src/html/products.html?search=${encodeURIComponent(query)}`;
            }
        });

        searchInput.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                event.preventDefault();
                searchBarButton.click();
            }
        });
    }
});