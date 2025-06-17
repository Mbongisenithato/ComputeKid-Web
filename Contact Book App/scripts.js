import CONFIG from "./config.js"; // Import configurations

// 🔹 Fetch and display all contacts with pagination
async function fetchContacts(page = 1) {
    const contactList = document.getElementById("contactList");
    contactList.innerHTML = "📡 Loading contacts...";

    try {
        const response = await fetch(`${CONFIG.ROOT_PATH}controller/get-contacts/?page=${page}`, {
            headers: CONFIG.AUTH_HEADER
        });

        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);

        const contacts = await response.json();
        contactList.innerHTML = "";
        populateContactTable(contacts);
        setupPaginationControls(page);
    } catch (error) {
        handleError("fetchContacts", error);
    }
}

// 🔹 Populate table with contacts
function populateContactTable(contacts) {
    const tableBody = document.getElementById("contactList");
    tableBody.innerHTML = "";

    contacts.forEach(contact => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td><img src="${CONFIG.ROOT_PATH}controller/uploads/${contact.avatar}" width="50" alt="Avatar"></td>
            <td>${contact.firstname}</td>
            <td>${contact.lastname}</td>
            <td>${contact.mobile}</td>
            <td>${contact.email}</td>
            <td>
                <button onclick="viewContact(${contact.id})" class="btn-view">👁 View</button>
                <button onclick="editContact(${contact.id})" class="btn-edit">✏ Edit</button>
                <button onclick="deleteContact(${contact.id})" class="btn-delete">🗑 Delete</button>
            </td>
        `;
        tableBody.appendChild(row);
    });

    applyAnimations();
}

// 🔹 Setup pagination controls
function setupPaginationControls(currentPage) {
    const paginationDiv = document.getElementById("paginationControls");
    paginationDiv.innerHTML = `
        <button onclick="fetchContacts(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''}>⬅ Previous</button>
        <button onclick="fetchContacts(${currentPage + 1})">Next ➡</button>
    `;
}

// 🔹 Apply UI animations
function applyAnimations() {
    document.querySelectorAll(".btn-view, .btn-edit, .btn-delete").forEach(button => {
        button.addEventListener("mouseenter", () => button.classList.add("hover-effect"));
        button.addEventListener("mouseleave", () => button.classList.remove("hover-effect"));
    });
}

// 🔹 Open pages
function addContact() { window.location.href = "add-contact.html"; }
function viewContact(contactId) { 
    if (!contactId) return handleError("viewContact", "Invalid Contact ID.");
    window.location.href = `edit-contact.html#${encodeURIComponent(contactId)}`;
}

// 🔹 Validate and submit contact form
async function submitContact(event) {
    event.preventDefault();
    const formData = new FormData(document.getElementById("addContactForm"));

    if (!validateForm(formData)) return;

    const newContact = Object.fromEntries(formData.entries());

    try {
        const response = await fetch(`${CONFIG.ROOT_PATH}controller/add-contact/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                ...CONFIG.AUTH_HEADER
            },
            body: JSON.stringify(newContact)
        });

        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);

        displayMessage("addContactMessage", "✅ Contact added successfully!");
        document.getElementById("addContactForm").reset();
        fetchContacts();
    } catch (error) {
        handleError("submitContact", error);
    }
}

// 🔹 Validate form inputs
function validateForm(formData) {
    const email = formData.get("email").trim();
    const mobile = formData.get("mobile").trim();

    if (!email.includes("@") || !email.includes(".")) return handleError("validateForm", "Invalid email format.");
    if (!/^\d{10}$/.test(mobile)) return handleError("validateForm", "Mobile number must be 10 digits.");

    return true;
}

// 🔹 Delete a contact
async function deleteContact(contactId) {
    try {
        const response = await fetch(`${CONFIG.ROOT_PATH}controller/delete-contact/${contactId}`, {
            method: "DELETE",
            headers: CONFIG.AUTH_HEADER
        });

        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);

        alert("✅ Contact deleted successfully!");
        fetchContacts();
    } catch (error) {
        handleError("deleteContact", error);
    }
}

// 🔹 Error Handling
function handleError(functionName, error) {
    console.error(`❌ Error in ${functionName}:`, error);
    alert(`⚠️ Something went wrong: ${error.message || error}`);
}

// 🔹 Display Messages
function displayMessage(elementId, message) {
    document.getElementById(elementId).textContent = message;
}

// 🔹 Ensure buttons are properly linked
document.getElementById("refreshContactsBtn").addEventListener("click", fetchContacts);
document.getElementById("addContactForm").addEventListener("submit", submitContact);

// 🔹 Load contacts on page load
document.addEventListener("DOMContentLoaded", fetchContacts);