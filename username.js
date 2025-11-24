const usernameScreen = document.getElementById("username-screen");
const gameScreen = document.getElementById("game-screen");
const input = document.getElementById("username-input");
const button = document.getElementById("username-btn");
const errorMsg = document.getElementById("username-error");
const playerDisplay = document.getElementById("player-username");

// Load saved username
let savedName = localStorage.getItem("fps_username");

if (savedName) {
    startGame(savedName);
}

// Auto name generator
function generateAutoName() {
    const words = ["Laser", "Ranger", "Phantom", "Nova", "Hunter", "Runner", "Shadow"];
    const num = Math.floor(Math.random() * 999);
    const word = words[Math.floor(Math.random() * words.length)];
    return word + "_" + num;
}

// Username validation
function isValid(name) {
    const regex = /^[a-zA-Z0-9]{3,12}$/;
    return regex.test(name);
}

// Button click
button.addEventListener("click", () => {
    let name = input.value.trim();

    if (name === "") {
        name = generateAutoName();
    }

    if (!isValid(name)) {
        errorMsg.textContent = "Username must be 3-12 letters/numbers only.";
        return;
    }

    localStorage.setItem("fps_username", name);
    startGame(name);
});

// Start game
function startGame(name) {
    usernameScreen.style.display = "none";
    gameScreen.style.display = "block";
    playerDisplay.textContent = "Player: " + name;
    startFPSGame(name);
}
