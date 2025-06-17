// 🌍 Mobile-Friendly Hamburger Menu Toggle
document.querySelector(".hamburger-menu").addEventListener("click", function () {
    var mobileNav = document.getElementById("mobileNav");
    mobileNav.style.display = (mobileNav.style.display === "flex" ? "none" : "flex");
});

// 🌑 Dark Mode Toggle
document.getElementById("darkModeToggle")?.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});

// 🎭 Click Animations for Interactive Elements
document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", function () {
        this.classList.add("clicked");
        setTimeout(() => this.classList.remove("clicked"), 300);
    });
});

// ✨ Fade-in Animation for Page Load
document.addEventListener("DOMContentLoaded", function () {
    document.body.classList.add("fade-in");
});

// 🌐 Smooth Scrolling for Navigation
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var target = document.querySelector(this.hash);
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// 🎭 Card Flipping Effects for Exhibit Descriptions
document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", function () {
        this.classList.toggle("flipped");
    });
});

// ✉️ Form Validation for Feedback Section
document.getElementById("contactForm")?.addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields before submitting.");
    } else {
        alert("Thank you for your feedback!");
        this.reset();
    }
});

// 🌦️ Real-Time Weather Updates (Mock Data)
function updateWeather() {
    var weatherSection = document.getElementById("weather");
    var randomTemp = Math.floor(Math.random() * (35 - 18 + 1)) + 18;
    weatherSection.innerHTML = `<p><strong>Current Zoo Weather:</strong> ${randomTemp}°C, Sunny ☀️</p>`;
}
setInterval(updateWeather, 5000);

// ⏳ Event Countdown Timer for Zoo Exhibitions
function updateCountdown() {
    var eventDate = new Date("May 25, 2025 10:00:00").getTime();
    var now = new Date().getTime();
    var timeLeft = eventDate - now;

    var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML =
        `<p><strong>Next Zoo Event:</strong> ${days}d ${hours}h ${minutes}m ${seconds}s left!</p>`;
}
setInterval(updateCountdown, 1000);

// 🦣 Ensure Animals Page Links Have Interactive Effects
document.querySelectorAll(".info-box").forEach(box => {
    box.addEventListener("click", function () {
        this.classList.add("highlight");
        setTimeout(() => this.classList.remove("highlight"), 500);
    });
});

// 🦣 Ensure Images in Animals Page Links Are Styled Correctly
document.querySelectorAll(".info-box img").forEach(img => {
    img.style.height = "70px";
    img.style.margin = "10px";
    img.style.float = "left";
});

document.querySelectorAll(".info-box img.right").forEach(img => {
    img.style.float = "right";
    img.style.marginTop = "25px";
    img.style.height = "40px";
});

// 🦣 Interactive Effects for Newly Added Animals
const animalList = [
    "gemsbok", "giraffe", "gorilla", "insect-house", "koala",
    "lion", "monkey", "tiger", "warthog", "panda"
];

animalList.forEach(animal => {
    document.querySelectorAll(`.${animal}-tn`).forEach(img => {
        img.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.1)";
            this.style.transition = "0.3s ease-in-out";
        });

        img.addEventListener("mouseout", function () {
            this.style.transform = "scale(1)";
        });
    });
});

// 🦣 Interactive Effects for Random Animal Facts
const animalFacts = {
    "elephant": "Elephants can recognize themselves in mirrors, showing self-awareness.",
    "giraffe": "Giraffes have the same number of neck vertebrae as humans—just much larger!",
    "gorilla": "Gorillas make and use tools to complete tasks, just like humans.",
    "koala": "Koalas sleep up to 20 hours a day due to their low-energy eucalyptus diet.",
    "lion": "A lion's roar can be heard up to 8 km (5 miles) away!",
    "monkey": "Monkeys express emotions through facial gestures like humans.",
    "panda": "Pandas eat up to 12 kg (26 lb) of bamboo every day.",
    "rhino-beetle": "Rhino beetles can lift objects **850 times their body weight**!",
    "tiger": "Each tiger has a **unique stripe pattern**, like human fingerprints.",
    "warthog": "Warthogs kneel on their front knees while eating grass.",
    "gemsbok": "Gemsbok can **survive without drinking water for weeks**, thanks to moisture-rich food."
};

// Display Random Fact When Clicking on Animal Name
document.querySelectorAll("#main-home h2").forEach(title => {
    title.addEventListener("click", () => {
        let animalName = title.innerText.toLowerCase().split(" ")[0]; // Extract first word
        if (animalFacts[animalName]) {
            alert(`Did you know? ${animalFacts[animalName]}`);
        } else {
            alert("Discover more fun facts about our Zoo animals!");
        }
    });
});

// Footer Scroll Effect
document.querySelector("#tabs-bottom").addEventListener("mouseover", () => {
    document.querySelector("#tabs-bottom").style.backgroundColor = "#FFD700"; // Gold hover effect
});

document.querySelector("#tabs-bottom").addEventListener("mouseleave", () => {
    document.querySelector("#tabs-bottom").style.backgroundColor = "#333"; // Restore dark color
});