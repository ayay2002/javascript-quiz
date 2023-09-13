var questionindex = 0
var score = 0
var questionbox = document.getElementById("Question")
var answer1box = document.getElementById("answer1")
var answer2box = document.getElementById("answer2")

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
var timer = 20
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

var startbutton =document.getElementById("start")
 startbutton.addEventListener("click",start)
 function start(){
    startTimer()
    startbutton.classList.add("hide")
 }