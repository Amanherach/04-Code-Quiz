var secondsLeft=30
function timer () {
    secondsLeft=secondsLeft -1
    if(secondsLeft<=0){
        clearInterval (handle)
        alert("Times Up!")
    }

}
var handle=setInterval(timer,1000) 

var questions=[
    {
        question:"What color are oranges?",
        answers:[
            "Pink","Orange","Blue","Purple"
        ],
        correctAnswer:1
    },
    {
        question:"What color are oranges?",
        answers:[
            "Pink","Orange","Blue","Purple"
        ],
        correctAnswer:1
    },
    {
        question:"What color are oranges?",
        answers:[
            "Pink","Orange","Blue","Purple"
        ],
        correctAnswer:1
    },
    {
        question:"What color are oranges?",
        answers:[
            "Pink","Orange","Blue","Purple"
        ],
        correctAnswer:1
    }
]

var currentQuestion=0 


function displayQuestion () {
    var questionDisplay=document.getElementById("question")
    var answer1Display=document.getElementById("answer1")
    var answer2Display=document.getElementById("answer2")
    var answer3Display=document.getElementById("answer3")
    var answer4Display=document.getElementById("answer4")
    questionDisplay.innerHTML=questions[currentQuestion].question
    answer1Display.innerHTML=questions[currentQuestion].answers[0]
    answer2Display.innerHTML=questions[currentQuestion].answers[1]
    answer3Display.innerHTML=questions[currentQuestion].answers[2]
    answer4Display.innerHTML=questions[currentQuestion].answers[3]
}


displayQuestion()