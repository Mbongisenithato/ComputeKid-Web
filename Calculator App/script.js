// Select display screen, buttons, and the equals button
const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const acButton = document.querySelector(".clear");
const equalsButton = document.querySelector(".equal");

// Initialize input string for calculations
let inputString = "";

// Function to handle button clicks
function handleButtonClick(event) {
    let buttonText = event.target.textContent;

    // Fix multiplication operator (HTML may use "×" instead of "*")
    if (buttonText === "×") {
        buttonText = "*";
    }

    // Remove leading zero if user starts entering numbers
    if (inputString === "0" && !isNaN(buttonText)) {
        inputString = buttonText;
    } else if (event.target.classList.contains("clear")) {
        clearDisplay();
    } else if (event.target.classList.contains("equal")) {
        evaluateExpression();
    } else if (event.target.classList.contains("operator")) {
        // Prevent consecutive operators
        if (!/[+\-*/]$/.test(inputString) && inputString !== "") {
            inputString += buttonText;
        }
    } else {
        inputString += buttonText;
    }

    display.value = inputString;
}

// Add event listeners to all buttons
buttons.forEach(button => {
    button.addEventListener("click", handleButtonClick);
});

// Function to Clear Display (AC Button)
function clearDisplay() {
    inputString = "";
    display.value = inputString;
}

// Add event listener to AC button
acButton.addEventListener("click", clearDisplay);

// Function to Evaluate Expression (`=` Button)
function evaluateExpression() {
    try {
        // Prevent evaluation of incomplete expressions
        if (inputString.trim() === "" || /[+\-*/]$/.test(inputString)) {
            return;
        }
        inputString = eval(inputString).toString();
    } catch {
        inputString = "Error";
    }

    display.value = inputString;
}

// Add event listener to Equals (`=`) button
equalsButton.addEventListener("click", evaluateExpression);

// Keyboard Input Support (Handles operators & "=" key)
document.addEventListener("keydown", (event) => {
    let key = event.key;

    // Fix multiplication operator if typed
    if (key === "x") {
        key = "*";
    }

    if (!isNaN(key) || ["+", "-", "*", "/", "."].includes(key)) {
        // Prevent consecutive operators when typing
        if (["+", "-", "*", "/"].includes(key) && /[+\-*/]$/.test(inputString)) {
            return;
        }

        if (inputString === "0" && !isNaN(key)) {
            inputString = key;
        } else {
            inputString += key;
        }
    } else if (key === "Enter" || key === "=") {
        evaluateExpression();
    } else if (key === "Backspace") {
        inputString = inputString.slice(0, -1);
    } else if (key === "Escape") {
        clearDisplay();
    }

    display.value = inputString;
});

// Button Click Animation
buttons.forEach(button => {
    button.addEventListener("mousedown", () => {
        button.style.transform = "scale(0.9)";
    });

    button.addEventListener("mouseup", () => {
        button.style.transform = "scale(1)";
    });
});

// Smooth Loading Transition for Calculator
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".calculator").style.opacity = "1";
    document.querySelector(".calculator").style.transform = "translateY(0px)";
});