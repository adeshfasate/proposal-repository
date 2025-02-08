const questions = [
    { text: "How are you?", options: ["Mast", "Thik thak"] },
    { text: "Then do you love me, my Baayko?", options: ["Yeess ❤️", "Ho 😘"] },
];

let currentQuestion = 0;
const questionText = document.getElementById("question-text");
const buttonsDiv = document.getElementById("buttons");

function showQuestion() {
    if (currentQuestion < questions.length) {
        questionText.innerText = questions[currentQuestion].text;
        buttonsDiv.innerHTML = "";

        questions[currentQuestion].options.forEach((optionText) => {
            const button = document.createElement("button");
            button.innerText = optionText;
            button.classList.add(optionText.includes("❤️") ? "option1" : "option2");
            button.onclick = nextQuestion;
            buttonsDiv.appendChild(button);
        });
    } else {
        showCelebration();
    }
}

function nextQuestion() {
    currentQuestion++;
    showQuestion();
}

function showCelebration() {
    document.body.innerHTML = `
        <div id="celebration">
            <p>Congratulations My Baayko ❤️🌸</p>
            <p id="heart">💖💖💖</p>
            <audio autoplay loop>
                <source src="https://www.fesliyanstudios.com/play-mp3/387" type="audio/mpeg">
            </audio>
        </div>
    `;
}

// Start the first question after 2 seconds
setTimeout(() => {
    showQuestion();
}, 2000);