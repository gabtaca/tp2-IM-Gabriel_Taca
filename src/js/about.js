document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("trueColorToggle");
    const contactBg = document.getElementById("contact_bg");
    const teamContainer = document.getElementById("team_container");
    const ceoImage = document.getElementById("ceo");
    const devImage = document.getElementById("dev");
    const artistImage = document.getElementById("artist");
    const teamPresentation = document.getElementById("team_presentation");
    const ceoText = document.getElementById("ceo_text");
    const devText = document.getElementById("dev_text");
    const artistText = document.getElementById("artist_text");

    let toggled = false; 

    function changeTextContent() {
        if (toggled) {
            teamPresentation.textContent = "We are a small company of three. We are dedicated to curate and bring to you the best small INDIE games possible and give the spotlight to small developers on our platform. We help bring your projects to life with resources and advice.";

            ceoText.innerHTML = "<p class='text-center px-5 drop-shadow-md'>Joe Smith, our dynamic CEO, brings a wealth of experience and a passion for indie games to the helm of our company. His vision is to create a platform that not only showcases the best small indie games but also supports the developers behind them. Joe is dedicated to ensuring that our platform is a haven for creativity, innovation, and the vibrant indie game community.</p>";

            devText.innerHTML = "<p class='text-center px-5 drop-shadow-md'>John Doe, our talented developer, is the technical backbone of our team. With a knack for coding and a deep love for indie games, John works tirelessly to create a seamless and engaging experience for our users. He ensures that our platform runs smoothly, enabling indie developers to showcase their games and connect with a wider audience.</p>";

            artistText.innerHTML = "<p class='text-center px-5 drop-shadow-md'>Emile Johnson, our creative artist, infuses our platform with a unique and captivating aesthetic. His artistic talents help bring the indie games we feature to life, creating a visually appealing environment for our users. Emile's work ensures that each game gets the spotlight it deserves, making our platform a beautiful and inspiring place for game discovery.</p>";
        } else {
            teamPresentation.textContent = "We are the unholy trinity, a small coven of three. We are devoted to summoning and delivering to you the most diabolical indie games imaginable, casting a dark spotlight on small developers through our infernal platform. We conjure your projects to life with forbidden resources and sinister advice.";

            ceoText.innerHTML = "<p class='text-center px-5 drop-shadow-md'>Joe Smith, our dark overlord CEO, brings a wealth of malevolent experience and a passion for indie games to the helm of our company. His insatiable love for money and treasures drives him to create a platform that not only showcases the best small indie games but also supports the developers behind them. Joe is dedicated to ensuring that our platform is a haven for creativity, innovation, and the vibrant indie game community.</p>";

            devText.innerHTML = "<p class='text-center px-5 drop-shadow-md'>John Doe, our sinister developer, is the technical backbone of our team. With a knack for coding and a deep love for indie games, John works tirelessly to create a seamless and engaging experience for our users. He ensures that our platform runs smoothly, enabling indie developers to showcase their games and connect with a wider audience.</p>";

            artistText.innerHTML = "<p class='text-center px-5 drop-shadow-md'>Emile Johnson, our demonic artist, infuses our platform with a unique and captivating aesthetic. His artistic talents help bring the indie games we feature to life, creating a visually appealing environment for our users. Emile's work ensures that each game gets the spotlight it deserves, making our platform a beautiful and inspiring place for game discovery.</p>";
        }
    }

    function changeGridPositioning() {
        if (toggled) {
            ceoText.className = "text-center px-5 drop-shadow-md md:col-start-2 md:row-start-2 lg:col-start-1 lg:row-start-3 bg-[url('/image/fyyaaa.gif')]";
            ceo.className = "md:col-start-1 md:row-start-2 lg:col-start-1 lg:row-start-2";

            devText.className = "text-center px-5 drop-shadow-md md:col-start-1 md:row-start-3 lg:col-start-2 lg:row-start-3 bg-[url('/img/hero-pattern.svg')]";
            dev.className = "md:col-start-2 md:row-start-3 lg:col-start-2 lg:row-start-2";

            artistText.className = "text-center px-5 drop-shadow-md md:col-start-2 md:row-start-4 lg:col-start-3 lg:row-start-3 bg-[url('/img/hero-pattern.svg')]";
            artist.className = "md:col-start-1 md:row-start-4 lg:col-start-3 lg:row-start-2";
        } else {
            ceoText.className = "text-center px-5 drop-shadow-md md:col-start-1 md:row-start-2 lg:col-start-2 lg:row-start-1 bg-[url('/img/hero-pattern.svg')]";
            ceo.className = "md:col-start-2 md:row-start-2 lg:col-start-1 lg:row-start-1";

            devText.className = "text-center px-5 drop-shadow-md md:col-start-1 md:row-start-3 lg:col-start-3 lg:row-start-1 bg-[url('/img/hero-pattern.svg')]";
            dev.className = "md:col-start-2 md:row-start-3 lg:col-start-2 lg:row-start-1";

            artistText.className = "text-center px-5 drop-shadow-md md:col-start-1 md:row-start-4 lg:col-start-4 lg:row-start-1 bg-[url('/img/hero-pattern.svg')]";
            artist.className = "md:col-start-2 md:row-start-4 lg:col-start-3 lg:row-start-1";
        }
    }

    function changeBackgroundImages() {
        if (toggled) {
            ceoText.style.backgroundImage = "url('/img/hero-pattern.svg')";
            devText.style.backgroundImage = "url('/img/hero-pattern.svg')";
            artistText.style.backgroundImage = "url('/img/hero-pattern.svg')";
        } else {
            ceoText.style.backgroundImage = "url('/images/hero_dark.svg')";
            devText.style.backgroundImage = "url('/images/hero_dark.svg')";
            artistText.style.backgroundImage = "url('/images/hero_dark.svg')";
        }
    }

    function toggleElements() {
        changeTextContent();

        changeGridPositioning();

        changeBackgroundImages();

        toggleButton.classList.toggle("bg-orange-600");
        toggleButton.classList.toggle("bg-black");

        if (contactBg) {
            contactBg.classList.toggle("bg-zinc-200");
            contactBg.classList.toggle("bg-gray-800");
            contactBg.classList.toggle("text-zinc-900");
            contactBg.classList.toggle("text-white");
        }

        if (teamContainer) {
            teamContainer.classList.toggle("bg-zinc-200");
            teamContainer.classList.toggle("bg-gray-800");
            teamContainer.classList.toggle("text-amber-800");
            teamContainer.classList.toggle("text-white");
        }

        if (ceoImage && devImage && artistImage) {
            if (ceoImage.src.includes("/images/ceo.gif")) {
                ceoImage.src = "/images/ceo_dark.gif";
                devImage.src = "/images/dev_dark.gif";
                artistImage.src = "/images/artist_dark.gif";
            } else {
                ceoImage.src = "/images/ceo.gif";
                devImage.src = "/images/dev.gif";
                artistImage.src = "/images/artist.gif";
            }
        }


        toggled = !toggled;
    }

    if (toggleButton) {
        toggleButton.addEventListener("click", toggleElements);
    }
});