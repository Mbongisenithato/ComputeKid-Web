// 🔹 Function to verify username & password
function verifyUser() {
    var username = document.getElementById("usernameInput").value;
    var password = document.getElementById("passwordInput").value;
    checkUserCreds(username, password);
}

// 🔹 Function to verify username & password
function verifyUser() {
    var username = document.getElementById("usernameInput").value;
    var password = document.getElementById("passwordInput").value;
    checkUserCreds(username, password);
}

// 🔹 Function to check credentials (Bond 007 Login System)
function checkUserCreds(username, password) {
    var systemUsername = "Bond"; // Hardcoded system username
    var systemPassword = "007";  // Hardcoded system password

    username = String(username);
    password = String(password);

    if (username === systemUsername && password === systemPassword) {
        document.getElementById("output").innerHTML = `✅ Correct. Logging you in... Welcome, ${username}!`;
    } else {
        document.getElementById("output").innerHTML = "❌ Username or password are incorrect";
    }
}

// 🔹 Attach event listener for login button
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("loginBtn").addEventListener("click", verifyUser);
});

// 🔹 Function to process basic arithmetic operations
function addNumbers(num1, num2) {
    return Number(num1) + Number(num2);
}

function multiplyNumbers(num1, num2) {
    return Number(num1) * Number(num2);
}

function subtractNumbers(num1, num2) {
    return Number(num1) - Number(num2);
}

// 🔹 Function to convert user input & handle errors
function validateAndConvert(input) {
    var number = parseFloat(input);
    return isNaN(number) ? null : number;
}

// 🔹 Function to display calculations with error handling
function displaySum() {
    var num1 = validateAndConvert(document.getElementById("numInput1").value);
    var num2 = validateAndConvert(document.getElementById("numInput2").value);

    document.getElementById("addition").innerHTML =
        num1 !== null && num2 !== null ? `${num1} + ${num2} = ${addNumbers(num1, num2)}` : "❌ Please enter valid numbers.";
}

function displayMultiplication() {
    var num1 = validateAndConvert(document.getElementById("numInput1").value);
    var num2 = validateAndConvert(document.getElementById("numInput2").value);

    document.getElementById("multiplication").innerHTML =
        num1 !== null && num2 !== null ? `${num1} × ${num2} = ${multiplyNumbers(num1, num2)}` : "❌ Please enter valid numbers.";
}

function displayDifference() {
    var num1 = validateAndConvert(document.getElementById("numInput1").value);
    var num2 = validateAndConvert(document.getElementById("numInput2").value);

    document.getElementById("subtraction").innerHTML =
        num1 !== null && num2 !== null ? `${num1} - ${num2} = ${subtractNumbers(num1, num2)}` : "❌ Please enter valid numbers.";
}

// 🔹 Ensure event listener is properly added to buttons
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("calculateSumBtn").addEventListener("click", displaySum);
    document.getElementById("calculateProductBtn").addEventListener("click", displayMultiplication);
    document.getElementById("calculateDifferenceBtn").addEventListener("click", displayDifference);
});

// 🔹 Weather Advice System using `switch` statement
function getWeatherAdvice() {
    var weatherSelected = document.getElementById("weather").value;
    var advise = "";

    switch (weatherSelected) {
        case "sunny":
            advise = "☀️ Wear your sunglasses!";
            break;
        case "windy":
            advise = "🍃 Wear a jacket!";
            break;
        case "rainy":
            advise = "🌧️ Bring an umbrella!";
            break;
        case "snowy":
            advise = "❄️ Wear a coat and stay warm!";
            break;
        default:
            advise = "🤔 Select a weather condition!";
    }

    document.getElementById("weatherAdvice").innerHTML = advise;
}

// 🔹 Fraud Detection - Flag Fraudulent Transactions
function flagFraud(transactionID) {
    alert(`Transaction ${transactionID} has been flagged for review.`);
    window.location.href = "flag-as-fraud.html";
}

// 🔹 Apply Fraud Prevention Strategies
function applyFraudPrevention(transactionID) {
    alert(`Preventive security measures applied for Transaction ${transactionID}.`);
    window.location.href = "prevent-fraud.html";
}

// 🔹 AI-Powered Threat Intelligence Simulation
function runThreatSimulation() {
    alert("🔍 AI Simulation Running... (Threats Identified and Analyzed)");
}

// 🔹 Fetch Data from Cloud API
async function fetchData() {
    try {
        const response = await fetch('https://your-api-endpoint-url.com/data'); // Replace with actual API URL
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched Data:", data);
        document.getElementById("output").innerText = JSON.stringify(data, null, 2);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// 🔹 Call the function to fetch and display data
document.addEventListener("DOMContentLoaded", function() {
    fetchData();
});