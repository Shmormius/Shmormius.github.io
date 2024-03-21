let gameState = {
  message: "Welcome to the Text-based Game!",
  playerHealth: 50,
  playerInventory: ["sword", "shield"]
};

function displayMessage(message) {
  const output = document.getElementById('output');
  output.textContent = message;
}

function saveGame() {
  localStorage.setItem('gameState', JSON.stringify(gameState));
  displayMessage("Game saved!");
}

function loadGame() {
  const savedState = localStorage.getItem('gameState');
  if (savedState) {
    gameState = JSON.parse(savedState);
    displayMessage("Game loaded!");
    updateUI();
  } else {
    displayMessage("No saved game found!");
  }
}

function updateUI() {
  let message = gameState.message + '\n';
  message += 'Player Health: ' + gameState.playerHealth + '\n';
  message += 'Player Inventory: ' + gameState.playerInventory.join(', ');
  displayMessage(message);
}

// Initial UI update
updateUI();
