// 🔹 Configuration File (`config.js`)
// Stores API keys, endpoints, and reusable constants for the Contact Book app

const CONFIG = {
    ROOT_PATH: "https://mysite.itvarsity.org/api/ContactBook/", // Correct rootPath reference
    BASE_API_URL: `${ROOT_PATH}controller/get-contacts/`, // Fixed API endpoint reference
    AUTH_HEADER: { "Authorization": `Bearer ${getApiKey()}` } // Secure Authorization Header
};

// 🔹 Function to Retrieve API Key
function getApiKey() {
    const apiKey = localStorage.getItem("apiKey");

    if (!apiKey) {
        alert("⚠️ API Key not found. Redirecting to setup...");
        window.location.href = "enter-api-key.html";
    }

    return apiKey;
}

// 🔹 Ensure API key exists before using CONFIG
document.addEventListener("DOMContentLoaded", () => {
    if (!localStorage.getItem("apiKey")) {
        getApiKey(); // Calls function to check and redirect if needed
    }
});

export default CONFIG;