import { gamesList } from "./gamesList"; 

const searchButton = document.getElementById("btn_search");
const searchDiv = document.getElementById("search_div");
const searchInput = document.getElementById('searchInput');
const searchBarButton = document.getElementById("btn_srch-bar");

function handlePageLoadSearch() {
  const params = new URLSearchParams(window.location.search);
  const searchQuery = params.get('search');
  if (searchQuery) {
    searchInput.value = searchQuery;
    searchProducts(searchQuery.toLowerCase());
    searchDiv.classList.remove("md:hidden");
  }
}

document.addEventListener("DOMContentLoaded", handlePageLoadSearch);


searchButton.addEventListener("click", () => {
  searchDiv.classList.toggle("md:hidden");
  if (!searchDiv.classList.contains("md:hidden")) {
    searchInput.focus();  
  } else {
    resetSearch();
  }
});

searchBarButton.addEventListener("click", search);
searchInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault(); 
    search();
  }
});

function search() {
  const inputValue = searchInput.value.toLowerCase();
  if (inputValue === "") {
    resetSearch();
  } else if (!window.location.href.includes("products.html")) {
    window.location.href = `products.html?search=${encodeURIComponent(inputValue)}`;
  } else {
    searchProducts(inputValue);
  }
}

function searchProducts(inputValue) {
  gamesList.forEach(game => {
    const isVisible = game.title.toLowerCase().includes(inputValue) ||
                      game.description.toLowerCase().includes(inputValue) ||
                      game.type.toLowerCase().includes(inputValue);
    game.detailsElement.style.display = isVisible ? '' : 'none';
  });
}

function resetSearch() {
  searchInput.value = ""; 
  gamesList.forEach(game => {
    game.detailsElement.style.display = '';
  });
  if (window.location.pathname.includes("products.html")) {
    history.replaceState({}, '', window.location.pathname);
  }
}
