document.addEventListener("DOMContentLoaded", () => {
    const openBurgerButton = document.getElementById("btn_open-burger");
    const burgerList = document.getElementById("burger_list");
    const cart = document.getElementById("cart_modal");

    // Function to create and show the overlay
    function showOverlay() {
        let overlay = document.querySelector(".overlay");
        if (overlay) {
            overlay.remove();
        }
        overlay = document.createElement("div");
        overlay.className = "overlay bg-lime-950 opacity-30 fixed inset-0 z-[1]";
        document.body.appendChild(overlay);
    }

    // Function to hide and remove the overlay
    function hideOverlay() {
        const overlay = document.querySelector(".overlay");
        if (overlay) {
            overlay.remove();
        }
    }

    openBurgerButton.addEventListener("click", (event) => {
        event.stopPropagation();
        const isHidden = burgerList.classList.contains("hidden");
        if (isHidden) {
            burgerList.classList.remove("hidden");
            burgerList.classList.add("flex", "flex-col",);
            showOverlay();
            // Ensure cart is closed
            cart.classList.add("hidden");
            cart.classList.remove("block");
        } else {
            burgerList.classList.add("hidden");
            burgerList.classList.remove("flex", "flex-col");
            hideOverlay();
        }
    });

    // Close the menu and overlay when clicking outside
    document.addEventListener("click", (event) => {
        const target = event.target;
        if (!target.closest("#btn_open-burger") && !target.closest("#burger_list")) {
            burgerList.classList.add("hidden");
            burgerList.classList.remove("flex", "flex-col");
            hideOverlay();
        }
    });
});