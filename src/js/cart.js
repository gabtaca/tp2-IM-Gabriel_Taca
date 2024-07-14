document.addEventListener("DOMContentLoaded", () => {
    const openCartButton = document.getElementById("btn_cart");
    const cart = document.getElementById("cart_modal");
    const burgerList = document.getElementById("burger_list");
    const cartItemList = document.getElementById("cart_item-list");
    const cartCount = document.getElementById("cart_count");

    function showOverlay() {
        let overlay = document.querySelector(".overlay");
        if (overlay) {
            overlay.remove();
        }
        overlay = document.createElement("div");
        overlay.className = "overlay bg-lime-950 opacity-30 fixed inset-0 z-30";
        document.body.appendChild(overlay);
    }

    function hideOverlay() {
        const overlay = document.querySelector(".overlay");
        if (overlay) {
            overlay.remove();
        }
    }

    openCartButton.addEventListener("click", (event) => {
        event.stopPropagation();
        const isHidden = cart.classList.contains("hidden");
        if (isHidden) {
            cart.classList.remove("hidden");
            cart.classList.add("block");
            showOverlay();
            burgerList.classList.add("hidden");
            burgerList.classList.remove("flex", "flex-col");
        } else {
            cart.classList.add("hidden");
            cart.classList.remove("block");
            hideOverlay();
        }
        updateCartCount();
    });

    function updateCartCount() {
        const itemCount = cartItemList.querySelectorAll("#cart_item").length;
        cartCount.textContent = itemCount;
        if (itemCount === 0) {
            cartCount.classList.add("hidden");
            cartCount.classList.remove("block");
        } else {
            cartCount.classList.remove("hidden");
            cartCount.classList.add("block");
        }
    }

    updateCartCount();


    document.addEventListener("click", (event) => {
        const target = event.target;
        if (!target.closest("#btn_cart") && !target.closest("#cart_modal")) {
            cart.classList.add("hidden");
            cart.classList.remove("block");
            hideOverlay();
        }
    });
});
