// 🔹 Avengers Profile - Interactive Stats Animation
document.addEventListener("DOMContentLoaded", () => {
    const stats = document.querySelectorAll("ul li");
    
    stats.forEach((stat) => {
        stat.style.opacity = "0";
        setTimeout(() => {
            stat.style.opacity = "1";
            stat.style.transition = "opacity 1s ease-in-out";
        }, 500);
    });
});

// 🔹 Dark Mode Toggle
const darkModeToggle = document.getElementById("darkModeToggle");
darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// 🔹 Avengers Profile - Random Quote Generator
const avengersQuotes = {
    "Iron Man": "I am Iron Man.",
    "Captain America": "I can do this all day!",
    "Thor": "I am Thor, son of Odin!",
    "Hulk": "HULK SMASH!",
    "Black Widow": "I've got red in my ledger. I'd like to wipe it out.",
    "Hawkeye": "You miss 100% of the shots you don’t take."
};

document.addEventListener("DOMContentLoaded", () => {
    const avengerName = document.querySelector("h4").textContent.replace("Bio: ", "");
    if (avengersQuotes[avengerName]) {
        const quoteSection = document.createElement("p");
        quoteSection.innerHTML = `🗨️ "${avengersQuotes[avengerName]}"`;
        quoteSection.style.textAlign = "center";
        quoteSection.style.marginTop = "20px";
        document.body.appendChild(quoteSection);
    }
});