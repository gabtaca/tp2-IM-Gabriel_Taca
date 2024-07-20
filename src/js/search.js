import { gamesList } from "./gamesList";


document.addEventListener("DOMContentLoaded", function() {
    const searchButton = document.getElementById("btn_search");
    const searchDiv = document.getElementById("search_div");
    const searchInput = document.getElementById('searchInput');
    const searchBarButton = document.getElementById("btn_srch-bar");
    const gameContainer = document.getElementById('screen_content-container-products');

window.addEventListener("resize", () => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 768) {
        searchButton.style.display = "none";
    } else {
        searchButton.style.display = "block";
    }
});

    function toggleSearchDiv(show) {
        if (show) {
            searchDiv.style.display = "flex";
            searchInput.focus();
        } else {
            searchDiv.style.display = "none";
            resetSearch();
        }
    }

    function resetSearch() {
        searchInput.value = "";
        filterGames("");
    }

    function filterGames(query) {
        console.log("Filtering games with query:", query);
        gamesList.forEach((game) => {
            const isVisible = game.title.toLowerCase().includes(query.toLowerCase()) ||
                                game.description.toLowerCase().includes(query.toLowerCase()) ||
                                game.type.toLowerCase().includes(query.toLowerCase());
            game.setVisible(isVisible);
        });
    }

    searchButton.addEventListener("click", () => {
        const screenWidth = window.innerWidth;
        const mdBreakpoint = 768;
        if (screenWidth < mdBreakpoint) {
            searchDiv.style.display = "flex";
        } else {
            const isHidden = searchDiv.style.display === "none" || searchDiv.style.display === "";
            toggleSearchDiv(isHidden);
        }
    });
    
    window.addEventListener("resize", () => {
        const screenWidth = window.innerWidth;
        if (screenWidth < 768) {
            searchDiv.style.display = "flex";
        } else {
            searchDiv.style.display = "none";
        }
    });
    
    const initialScreenWidth = window.innerWidth;
    if (initialScreenWidth >= 768) {
        searchDiv.style.display = "none";
    }


    if (gameContainer) {
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
        searchInput.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                event.preventDefault();
                const query = searchInput.value.trim();
                if (query) {
                    window.location.href = `./products.html?search=${encodeURIComponent(query)}`;
                }
            }
        });

        searchBarButton.addEventListener("click", function(event) {
            event.preventDefault();
            const query = searchInput.value.trim();
            if (query) {
                window.location.href = `./products.html?search=${encodeURIComponent(query)}`;
            }
        });
    }
});