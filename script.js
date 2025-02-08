const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const responseMessage = document.getElementById("responseMessage");

yesBtn.addEventListener("click", () => {
    responseMessage.classList.remove("hidden");
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
    createHearts();
});

noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - noBtn.clientWidth);
    const y = Math.random() * (window.innerHeight - noBtn.clientHeight);
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

function createHearts() {
    for (let i = 0; i < 20; i++) {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.animationDuration = (Math.random() * 2 + 3) + "s";
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 5000);
    }
}