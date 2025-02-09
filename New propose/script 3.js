// This variable tracks the current step (from 0 to 4)
let step = 0;

// Predefined messages for each step:
const messages = [
  "Hi Madhura… (Baayko) ❤️",       // Step 0
  "Oh Hi",                         // Step 1 (extra step)
  "How are you?",                  // Step 2
  "Do you love me, my Baayko?"       // Step 3
];

// Predefined options for each step (when applicable)
const options = [
  ["Hi"],                        // Step 0: Only the "Hi" button (already present)
  ["Proceed"],                   // Step 1: Button labeled "Proceed"
  ["Mast 😍", "Thik Thak 🙂"],     // Step 2: Two options
  ["Yeess ❤️", "Ho 😘"]           // Step 3: Two options
];

function nextStep(selectedOption) {
  step++; // Advance the step

  const messageBox = document.getElementById("message-box");

  // For steps 0 to 3, update the content with the new message and buttons.
  if (step < messages.length) {
    let html = `<p id="message">${messages[step]}</p>`;
    
    // If options exist for this step, add buttons
    if (options[step] && options[step].length > 0) {
      options[step].forEach(opt => {
        html += `<button class="btn" onclick="nextStep('${opt}')">${opt}</button>`;
      });
    }
    
    messageBox.innerHTML = html;
  } else {
    // Final step: Show the celebration screen.
    showCelebration();
  }
}

function showCelebration() {
  document.body.innerHTML = `
    <div id="celebration">
      <h1>Congratulations, my Baayko! ❤️🌸</h1>
      <div id="heart">💖💖💖</div>
      <p>You are the love of my life!</p>
      <audio autoplay loop>
        <source src="https://www.fesliyanstudios.com/play-mp3/387" type="audio/mpeg">
      </audio>
    </div>
  `;
}