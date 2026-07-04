// Get current score
function getScore() {
    return Number(localStorage.getItem("score")) || 0;
}

// Save score
function setScore(score) {
    localStorage.setItem("score", score);
}

// Check answer
function checkAnswer(correctAnswer, nextPage) {

    const input = document.getElementById("answer");
    const message = document.getElementById("message");

    let userAnswer = input.value.trim().toUpperCase();

    if (userAnswer === correctAnswer.toUpperCase()) {

        let score = getScore();
        score += 25;
        setScore(score);

        alert("✅ Correct Answer!");

        window.location.href = nextPage;

    } else {

        message.innerHTML = "❌ Wrong Answer! Try Again.";
        message.style.color = "red";

    }

}

// Display final score
function showScore() {

    let score = getScore();

    const scoreElement = document.getElementById("score");
    const resultElement = document.getElementById("result");

    if (!scoreElement || !resultElement) return;

    scoreElement.innerHTML = score + " / 100";

    if (score === 100) {
        resultElement.innerHTML = "🏆 Excellent! Perfect Score!";
    }
    else if (score >= 75) {
        resultElement.innerHTML = "🎉 Great Job!";
    }
    else if (score >= 50) {
        resultElement.innerHTML = "👍 Good Work!";
    }
    else if (score >= 25) {
        resultElement.innerHTML = "😊 Nice Try!";
    }
    else {
        resultElement.innerHTML = "😅 Better Luck Next Time!";
    }

}

// Restart game
function restartGame() {

    localStorage.setItem("score", "0");
    window.location.href = "index.html";

}

// Play again
function playAgain() {

    localStorage.setItem("score", "0");
    window.location.href = "puzzle1.html";

}
