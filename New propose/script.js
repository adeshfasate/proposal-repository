// This variable tracks the current step (0 to 4)
let step = 0;

// nextStep advances the conversation flow.
// The optional parameter 'selected' is not used in this version but can be extended for custom logic.
function nextStep(selected) {
  step++;
  const contentDiv = document.getElementById("content");

  if (step === 1) {
    // Step 1: Show "Oh Hi" with a "Proceed" button.
    contentDiv.innerHTML = `
      <p id="message">Oh Hi</p>
      <button class="btn" onclick="nextStep()">Proceed</button>
    `;
  } else if (step === 2) {
    // Step 2: Ask "How are you?" with two options.
    contentDiv.innerHTML = `
      <p id="message">How are you?</p>
      <button class="btn" onclick="nextStep('Mast')">Mast 😍</button>
      <button class="btn" onclick="nextStep('Thik Thak')">Thik Thak 🙂</button>
    `;
  } else if (step === 3) {
    // Step 3: Ask "Do you love me, my Baayko?" with two options.
    contentDiv.innerHTML = `
      <p id="message">Do you love me, my Baayko?</p>
      <button class="btn" onclick="nextStep('Yeess')">Yeess ❤️</button>
      <button class="btn" onclick="nextStep('Ho')">Ho 😘</button>
    `;
  } else if (step === 4) {
    // Final Step: Show celebration screen.
    showCelebration();
  }
}

// This function shows the final celebration screen.
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