var questionindex = 0
var correctanswerindex = 0
var score = 0
var questionbox = document.getElementById("QuestionBox")
var questionel = document.getElementById("Question")
var answer1box = document.getElementById("answer1")
answer1box.addEventListener("click", chooseanswer)
var answer2box = document.getElementById("answer2")
answer2box.addEventListener("click", chooseanswer)

var startbox = document.getElementById("startbox")
var scorebox = document.getElementById("scorebox")



var questions = [
    {
        question: "first question",
        answers: [
            {
                Text: "answer 1",
                correct: true
            },
            {
                Text: "answer 2",
                correct: false
            }
        ]
    },
    {
        question: "second question",
        answers: [
            {
                Text: "answer 1",
                correct: false
            },
            {
                Text: "answer 2",
                correct: true
            }
        ]
    }

]
var timer = 60
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
var interval

var startbutton = document.getElementById("start")
startbutton.addEventListener("click", start)
function start() {
    startTimer()
    startbutton.classList.add("hide")
    scorebox.classList.add("hide")
    scorebox
    questionindex = 0
    score = 0
    document.getElementById("QuestionBox").classList.remove("hide")
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
    if (questionindex >= questions.length - 1) {
        QuestionBox.classList.add("hide")
        scorebox.classList.remove("hide")
        document.getElementById("score").innerText = "score: " + score
        
    }
}
var submitbutton = document.getElementById("submit")
submitbutton.addEventListener("click", submitscore)
var initials
function submitscore(){
initials
}