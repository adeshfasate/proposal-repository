// This variable tracks which step of the conversation we're in.
let step = 0;

// Predefined messages and options for each step
const messages = [
  "Hi Madhura… (Baayko) ❤️",            // Step 0 (initial message)
  "How are you?",                      // Step 1
  "Do you love me, my Baayko?",         // Step 2
  "Happy Propose Day, Madhura! 💖"       // Step 3 (final message)
];

const options = [
  ["Hi"],                              // Options for Step 0 (only the "Hi" button)
  ["Mast 😍", "Thik Thak 🙂"],          // Options for Step 1
  ["Yeess ❤️", "Ho 😘"]                // Options for Step 2
];

// This function is called when any button is pressed.
function nextMessage(selectedOption) {
  // Increase step count
  step++;

  const messageBox = document.getElementById("message-box");

  // Step 1: "How are you?" with two options
  if (step === 1) {
    messageBox.innerHTML = `
      <p id="message">${messages[1]}</p>
      <button class="option" onclick="nextMessage('Mast')">${options[1][0]}</button>
      <button class="option" onclick="nextMessage('Thik Thak')">${options[1][1]}</button>
    `;
  }
  // Step 2: "Do you love me, my Baayko?" with two options
  else if (step === 2) {
    messageBox.innerHTML = `
      <p id="message">${messages[2]}</p>
      <button class="option" onclick="nextMessage('Yeess')">${options[2][0]}</button>
      <button class="option" onclick="nextMessage('Ho')">${options[2][1]}</button>
    `;
  }
  // Step 3: Final celebration page
  else if (step === 3) {
    showCelebration();
  }
}

// This function shows the final celebration screen.
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