const questionText = document.querySelector(".question");
const choices = Array.from(document.querySelectorAll(".choice-text"));
const progressText = document.querySelector(".progressText");
const progressBar = document.querySelector(".progressBar");
const progressBarFull = document.querySelector(".progressBarFull");
const scoreText = document.querySelector(".Score");

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let qCount = 0;
let availableQuestions = [];
let questionIndex = 0;

const questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        choice1: "<scripting>",
        choice2: "<script>",
        choice3: "<javascript>",
        choice4: "<js>",
        answer: 2
    },
    {
        question: "Javascript is an _______ language?",
        choice1: "Object-Oriented",
        choice2: "Object-Based",
        choice3: "Procedural",
        choice4: "None of the above",
        answer: 1
    },
    {
        question: "Which of the following keywords is used to define a variable in Javascript?",
        choice1: "var",
        choice2: "let",
        choice3: "Both A & B",
        choice4: "None of the above",
        answer: 3
    },
    {
        question: "Which of the following methods is used to access HTML elements using Javascript?",
        choice1: "getElementsByClassName()",
        choice2: "getElementbyId()",
        choice3: "Both A & B",
        choice4: "None of the above",
        answer: 3
    },
    {
        question: "What is 5 + 3?",
        choice1: '2',
        choice2: '4',
        choice3: "8",
        choice4: "10",
        answer: 3
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        choice1: "<script>",
        choice2: "<p>",
        choice3: "<body>",
        choice4: "html",
        answer: 1

    },
    {
        question: "Which type of language is JavaScript?",
        choice1: "Object-Oriented",
        choice2: "Object-based",
        choice3: "Assembly-Language",
        choice4: "High-Level",
        answer: 2
    },

    {
        question: "Which one of the following also known as Conditional Expression:",
        choice1: "Alternative to if-else",
        choice2: "Switch statement",
        choice3: "If-then-else statement",
        choice4: "immediate if",
        answer: 4
    }

];

const scorePoints = 100;
const maxQuestion = questions.length;

Game = () => {
    qCount = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
}

getNewQuestion = () =>{
    if (availableQuestions.length === 0 || qCount >= maxQuestion) {
        localStorage.setItem("mostRecentScore", score);
        return window.location.assign("end.html")
    }

    qCount++;
    progressText.innerText = `Question ${qCount} of ${maxQuestion}`;
    progressBarFull.style.width = `${(qCount/maxQuestion)*100}%`;

    currentQuestion = availableQuestions[questionIndex];

    questionText.innerText = currentQuestion.question;
    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });
    
    questionIndex++;
    acceptingAnswers = true;
}

choices.forEach(choice=>{
    choice.addEventListener("click", (e) =>{
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];
        
        let classToApply = (selectedAnswer == currentQuestion.answer) ? "correct" : "incorrect";

        if (classToApply === "correct") {
            incrementScore(scorePoints);
        } 

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(()=>{
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 500);
    });
});

incrementScore = (num) =>{
    score += num;
    scoreText.innerText = score;
}

Game();