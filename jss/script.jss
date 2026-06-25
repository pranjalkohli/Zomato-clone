// Navbar shadow on scroll

window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    if(window.scrollY > 50){
        header.style.background = "rgba(226,55,68,0.95)";
        header.style.transition = "0.4s";
    }
    else{
        header.style.background = "transparent";
    }
});

// Search bar animation

const searchInput = document.querySelector("input");

const restaurants = [
    "Domino's Pizza",
    "Burger King",
    "KFC",
    "McDonald's",
    "Subway",
    "Pizza Hut",
    "Bikanervala"
];

const resultsDiv = document.getElementById("results");

searchInput.addEventListener("focus", () => {
    searchInput.style.transform = "translateX(-50%) scale(1.03)";
});

searchInput.addEventListener("blur", () => {
    searchInput.style.transform = "translateX(-50%) scale(1)";
});

// Enter key search simulation

searchInput.addEventListener("keypress", (event) => {
    if(event.key === "Enter"){
        const query = searchInput.value.trim();

        if(query !== ""){
            alert(`Searching for: ${query}`);
        }
    }
});

// Hero text animation

window.addEventListener("load", () => {
    const heroText = document.querySelector("main p");

    heroText.style.opacity = "0";

    setTimeout(() => {
        heroText.style.transition = "1s";
        heroText.style.opacity = "1";
    }, 300);
});