var questionindex = 0
var correctanswerindex = 0
var score = 0
var leaderboard = document.getElementById("ranks")
var questionbox = document.getElementById("QuestionBox")
var questionel = document.getElementById("Question")
var answer1box = document.getElementById("answer1")
answer1box.addEventListener("click", chooseanswer)
var answer2box = document.getElementById("answer2")
answer2box.addEventListener("click", chooseanswer)
var answer3box = document.getElementById("answer3")
answer3box.addEventListener("click", chooseanswer)
var answer4box = document.getElementById("answer4")
answer4box.addEventListener("click", chooseanswer)

var startbox = document.getElementById("startbox")
var scorebox = document.getElementById("scorebox")

// var highscores = JSON.parse(localStorage.getItem("scores"))
// if (!highscores) {
//     highscores = []
// }

var questions = [
    {
        question: "What is considered a Block statement in Javascript?",
        answers: [
            {
                Text: "Conditional Block",
                correct: false
            },{
                Text: "Block that combines a number of statements into a single compound statement",
                correct: true
            },{
                Text: "Both conditional block and a single statement",
                correct: false
            },{
                Text: "Block that contains a single statement",
                correct: false
            }
        ]
    },
    {
        question: "The function and var are known as:",
        answers: [
            {
                Text: "Keywords",
                correct: false
            },{
                Text: "Data types",
                correct: false
            },{
                Text: "Decloration Statements",
                correct: true
            },{
                Text: "Prototypes",
                correct: false
            }
        ]
    },{
        question: "Which of the following variables takes precedence over the others if the names are the same?",
        answers: [
            {
                Text: "Global Variable",
                correct: false
            },{
                Text: "The local element",
                correct: true
            },{
                Text: "Class",
                correct: false
            },{
                Text: "Id",
                correct: false
            }
        ]
    },{
        question: "Which one of the following is the correct way for calling the JavaScript code?",
        answers: [
            {
                Text: "Preprocessor",
                correct: false
            },{
                Text: "Triggering Event",
                correct: false
            },{
                Text: "RMI",
                correct: false
            },{
                Text: "Function/Method",
                correct: true
            }
        ]
    },{
        question: " Which of the following type of a variable is volatile?",
        answers: [
            {
                Text: "Mutable Variable",
                correct: true
            },{
                Text: "Dynamic Variable",
                correct: false
            },{
                Text: "Volatile Variable",
                correct: false
            },{
                Text: "Immutable Variable",
                correct: false
            }
        ]
    },{
        question: "In the JavaScript, which one of the following is not considered as an error:",
        answers: [
            {
                Text: "Syntax Error",
                correct: false
            },{
                Text: "Missing of semicolons",
                correct: false
            },{
                Text: "Division by Zero",
                correct: true
            },{
                Text: "Missing of Bracket",
                correct: false
            }
        ]
    },{
        question: "Which one of the following operator returns false if both values are equal?",
        answers: [
            {
                Text: "!",
                correct: false
            },{
                Text: "!==",
                correct: false
            },{
                Text: "!=",
                correct: true
            },{
                Text: "all of the above",
                correct: false
            }
        ]
    },{
        question: "Which of the following number object function returns the value of the number?",
        answers: [
            {
                Text: "toString()",
                correct: false
            },{
                Text: "valueOf()",
                correct: true
            },{
                Text: "toLocaleString()",
                correct: false
            },{
                Text: "toPrecision",
                correct: false
            }
        ]
    },{
        question: "Choose the correct snippet from the following to check if the variable a is not equal the NULL:",
        answers: [
            {
                Text: "if(a!==null)",
                correct: true
            },{
                Text: "if (a!)",
                correct: false
            },{
                Text: "if(a!null)",
                correct: false
            },{
                Text: "if(a!=null)",
                correct: false
            }
        ]
    },{
        question: "What we will get if we compare the one with 8 using the less than operator (one<2)?",
        answers: [
            {
                Text: "False",
                correct: true
            },{
                Text: "True",
                correct: false
            },{
                Text: "NaN",
                correct: false
            },{
                Text: "Undefined",
                correct: false
            }
        ]
    }
]
var interval
var timer = 59
function startTimer() {
    interval = setInterval(() => {
        document.getElementById('timer').textContent = timer
        if (timer <= 0) {
            clearInterval(interval)
        } else {
            timer--
        }
    }, 1000);
}


var highscoresbutton = document.getElementById("highscore")
highscoresbutton.addEventListener("click", showscores)
function showscores(){
    scorebox.classList.remove("hide")
    document.getElementById("QuestionBox").classList.add("hide")
    document.getElementById("startbox").setAttribute("style", "display:none")
    init();
    displayranks();
}

var startbutton = document.getElementById("start")
startbutton.addEventListener("click", start)
function start() {
    startTimer()
    scorebox.classList.add("hide")
    questionindex = 0
    score = 0
    document.getElementById("QuestionBox").classList.remove("hide")
    document.getElementById("startbox").setAttribute("style", "display:none")
    setquestion()
}
// var restartbutton = document.getElementById("restart")
// restartbutton.addEventListener("click", start)

function setquestion() {
    questionel.innerText = questions[questionindex].question
    for (let index = 0; index < questions[questionindex].answers.length; index++) {
        var answerbox = document.getElementById("answer" + (index + 1));
        //console.log("answer"+(index+1));
        answerbox.innerText = questions[questionindex].answers[index].Text
        if (questions[questionindex].answers[index].correct) {
            correctanswerindex = index

        } answerbox.dataset.correct = questions[questionindex].answers[index].correct
    }
}
function chooseanswer(event) {
    var correct = event.target.dataset.correct
    if (correct === "true") {
        score += 10
        // var right = document.getElementsByTagName("h3")
        // var text = document.createTextNode("Right")
        // right.appendChild(text)
        // console.log(right)

    } else {
        timer -= 5
    }
    if (questionindex >= questions.length - 1) {
        end()
    } else {
        questionindex++
        setquestion()
    }
}
function end() {
    clearInterval(interval);
    if (questionindex >= questions.length - 1) {
        QuestionBox.classList.add("hide")
        scorebox.classList.remove("hide")
        // endtimer.classList.add("hide")
        document.getElementById("score").innerText = "Score: " + score
    }
}
timeclock = document.getElementById("timer")
if (timeclock.textContent == 58){
    console.log("hello")
    end()
}
// var initials = document.getElementById("initials").value
// var score = document.getElementById("score").textContent
var allscores = [];
function savescore(){
    // get all the existing data
    // push the new value to the existing data
    // save to local storage
    var initials = document.getElementById("initials").value
    var score = document.getElementById("score").textContent
    var userscore ={
        initials,
        score
    };
    allscores.push(userscore)
    localStorage.setItem("userscore",  JSON.stringify(allscores))
}

function displayranks(){
    leaderboard.innerHTML = "";
    for (var i=0; i < allscores.length; i++){
        var currentScore = allscores[i].initials + ": " + allscores[i].score;

        var li = document.createElement("li");
        li.textContent = currentScore;
        li.setAttribute("data-index", i);


        leaderboard.appendChild(li);
    }
}
function init(){
    var storedscores =  JSON.parse(localStorage.getItem("userscore")) || [];
    allscores = storedscores;
}

var submitbutton = document.getElementById("submit")
submitbutton.addEventListener("click", submitscore)
function submitscore() {
    init();
    savescore();
    displayranks();
}