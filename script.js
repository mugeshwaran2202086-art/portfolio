
function toggleMenu() {
    const menu = document.getElementById("navMenu");

    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
        menu.style.flexDirection = "column";
    }
}

function sendMessage() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const msg = document.getElementById("message").value.trim();
    const status = document.getElementById("formStatus");

    if (name === "" || email === "" || msg === "") {
        status.style.color = "red";
        status.textContent = "Please fill out all fields!";
        return false;
    }

    status.style.color = "green";
    status.textContent = "Message Sent Successfully! (JS Demo Only)";
    return false; 
}

