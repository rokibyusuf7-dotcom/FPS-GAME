function startFPSGame(playerName) {
    const canvas = document.getElementById("gameCanvas");
    const ctx = canvas.getContext("2d");

    // Set canvas full-screen
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Draw background
    ctx.fillStyle = "#222";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Display welcome text
    ctx.fillStyle = "#00c8ff";
    ctx.font = "40px Arial";
    ctx.fillText("Welcome, " + playerName, 50, 80);

    ctx.fillStyle = "#ffffff";
    ctx.font = "30px Arial";
    ctx.fillText("Game Starting Soon...", 50, 130);

    console.log("Game started for:", playerName);
}
