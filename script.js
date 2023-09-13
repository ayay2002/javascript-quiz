var questionindex = 0
var correctanswerindex = 0
var score = 0
var questionbox = document.getElementById("Question")
var answer1box = document.getElementById("answer1")
answer1box.addEventListener("click",chooseanswer)
var answer2box = document.getElementById("answer2")
answer2box.addEventListener("click",chooseanswer)


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

var startbutton =document.getElementById("start")
 startbutton.addEventListener("click",start)
 function start(){
    startTimer()
    startbutton.classList.add("hide")
    questionindex = 0
    score = 0
    document.getElementById("QuestionBox").classList.remove("hide")
    setquestion()
 }

 function setquestion(){
    questionbox.innerText = questions[questionindex].question
    for (let index = 0; index < questions[questionindex].answers.length; index++) {
        var answerbox = document.getElementById("answer"+(index+1));
        //console.log("answer"+(index+1));
        answerbox.innerText = questions[questionindex].answers[index].Text
        if (questions[questionindex].answers[index].correct) {
            correctanswerindex = index
           
        } answerbox.dataset.correct = questions[questionindex].answers[index].correct
    }
 }

 function chooseanswer(event){
    //console.log(event.target.innerText);
    var correct = event.target.dataset.correct
    //console.log(correct);
    if (correct === "true"){
        score+=10
        //console.log("right")
    } else{
        timer-=5
        //console.log("wrong")
    } 
    if(questionindex >=questions.length-1){
        end()
    } else{
        questionindex++
        setquestion()
    }
 }
 function end(){
    if (questionindex >=questions.length-1) {
        
    }
 }