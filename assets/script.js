$(document).ready(function(){

var questions = [
    {
      title: "Inside which HTML element do we put the JavaScript?",
      choices: ["<script>", "<javascript>", "<scripting>", "<js>"],
      answer: "<script>"
    },
    {
      title: "How do you write “Hello World” in an alert box?",
      choices: ["msgBox(“Hello World”);", "alert(“Hello World”);", "alertBox(“Hello World”);", "msg(“Hello World”);"],
      answer: "alert(“Hello World”);"
    },
    {
      title: "How to write an IF statement in JavaScript?",
      choices: ["if i == 5 then", "if i = 5", "if i = 5 then", "if (i==5)"],
      answer: "if (i==5)"
    },
    {
      title: "What is the correct way to write a JavaScript array?",
      choices: ["var colors = (1:”red”, 2:”green”, 3:”blue”)", "var colors = “red”, “green”, “blue”", "var colors = [“red”, ”green”, “blue”]", "var colors = 1=(“red”), 2=(“green), 3=(“blue”)"],
      answer: "var colors = [“red”, ”green”, “blue”]"
    },
    {
      title: "How do you round the number 7.25, to the nearest integer?",
      choices: ["Math.round(7.25)", "Math.rnd(7.25)", "round(7.25)", "rnd(7.25)"],
      answer: "Math.round(7.25)"
    },
  ]

var time = 75;
var indexQandA = 0;

$("#startBtn").on("click", function () {
    $("#startText").remove();
    loadQandA();
    setTimer();
});

function loadQandA() {
    choices = questions[indexQandA].choices;
    var question = questions[indexQandA].title;
    $(".question").html(question);
    for (var i=0; i < 4; i++) {
        var answer = questions[indexQandA].choices[i];
        $(".answers").append('<h4 class= "btn btn-info" id=' + answer + '>' + answer + '</h4><br>');
    }
}

$("h4").click(function () {
  var id = $(this).attr("id");
  if (id === answer) {
    answered = true;
    $(".question").text("Correct");
    correctAnswer();
  } else {
    answered = true; 
    $(".question").text("Wrong Answer");
    incorrectAnswer();
  }
});



function correctAnswer() {
  resetRound();
}

function incorrectAnswer() {
  resetRound();
  // lower timer by 10 
}



function resetRound(){
  indexQandA++;
  $(".btn-info").remove();
  if (indexQandA < questions.length) {
    loadQandA();
  } else {
    // submit high score button
  }
}


function setTimer() {
  $("#secondsLeft").text(time);
var countdown = setInterval(function() {
  time--;
  $("#secondsLeft").text(time);
  if (time <=0) {
    clearInterval(countdown);
  }
}, 1000);

}

})