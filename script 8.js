// Define the conversation steps
// Step 0: Initial greeting, Step 1: Extra "Oh Hi" screen, Step 2: "How are you?",
// Step 3: "Do you love me, my Baayko?", then final celebration.
let step = 0;

const messages = [
  "Hi Madhura… (Baayko) ❤️",       // Step 0
  "Oh Hi",                         // Step 1 (extra step)
  "How are you?",                  // Step 2
  "Do you love me, my Baayko?"       // Step 3
];

const options = [
  ["Hi"],                        // Options for Step 0
  ["Proceed"],                   // Options for Step 1
  ["Mast 😍", "Thik Thak 🙂"],     // Options for Step 2
  ["Yeess ❤️", "Ho 😘"]           // Options for Step 3
];

// This function advances the conversation when a button is clicked.
function nextMessage(selectedOption) {
  step++;

  const messageBox = document.getElementById("message-box");

  // For steps 0 to 3, show the corresponding message and options.
  if (step < messages.length) {
    let newHTML = `<p id="message">${messages[step]}</p>`;

    // If there are defined options for the current step, add buttons.
    if (options[step] && options[step].length > 0) {
      options[step].forEach(opt => {
        newHTML += `<button class="option" onclick="nextMessage('${opt}')">${opt}</button>`;
      });
    }
    messageBox.innerHTML = newHTML;
  } else {
    // Final step: Show the celebration screen.
    showCelebration();
  }
}

function showCelebration() {
  document.body.innerHTML = `
    <div id="celebration">
      <h1>Congratulations My Baayko! ❤️🌸</h1>
      <div id="heart">💖💖💖</div>
      <p>You are the best thing that ever happened to me!</p>
      <audio autoplay loop>
        <source src="https://www.fesliyanstudios.com/play-mp3/387" type="audio/mpeg">
      </audio>
    </div>
  `;
}