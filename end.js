const userName = document.querySelector(".username");
const saveScore = document.querySelector(".savescore");
const finalScore = document.querySelector(".finalscore");
const mostRecentScore = localStorage.getItem("mostRecentScore");

const highScore = JSON.parse(localStorage.getItem("highScore")) || [];
const maxHighScore = 5;

finalScore.innerText = mostRecentScore;

userName.addEventListener("keyup", ()=>{
    saveScore.disabled = !userName.value;
});

function saveHighScore(e){
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: userName.value
    }

    highScore.push(score);
    highScore.sort((a, b)=>{
        return b.score - a.score
    });
    highScore.splice(mostRecentScore);

    localStorage.setItem("highScore", JSON.stringify(highScore));
    window.location.assign("home.html");
}