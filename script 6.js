let step = 0;

function nextQuestion(step) {
    let questionBox = document.getElementById("question-box");

    if (step === 1) {
        questionBox.innerHTML = `
            <p id="question-text">How are you?</p>
            <button class="option" onclick="nextQuestion(2)">Mast 😍</button>
            <button class="option" onclick="nextQuestion(2)">Thik thak 🙂</button>
        `;
    } else if (step === 2) {
        questionBox.innerHTML = `
            <p id="question-text">Do you love me, my Baayko? ❤️</p>
            <button class="option" onclick="nextQuestion(3)">Yeesss 😘</button>
            <button class="option" onclick="nextQuestion(3)">Ho 🥰</button>
        `;
    } else if (step === 3) {
        questionBox.innerHTML = `
            <p id="question-text">Happy Propose Day, Madhura! 💖🌸💍</p>
            <img src="https://media.giphy.com/media/l4FGpP4lxGGgK5CBW/giphy.gif" width="200px">
            <p>You are the best thing that ever happened to me! 💕</p>
        `;
    }
}