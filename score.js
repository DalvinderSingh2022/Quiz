const highScoreList = document.querySelector(".highscorelist");
const highScore = JSON.parse(localStorage.getItem("highScore")) || [];

highScoreList.innerHTML = highScore.map(score => {
    return `<li class="highscore">${score.name}<span>-</span><span>${score.score}</span></li>`;
}).join("");