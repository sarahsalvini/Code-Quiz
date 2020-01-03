$(document).ready(function(){


var indexQandA = 0;
var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
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

  var secondsLeft = (questions.length) * 15;
  var highScoreList = document.querySelector("#high-score");
  var highScoreForm = document.querySelector(".show-onclick");




$("#start").on("click", function () {
    $('#startText').remove();
    loadQandA();
    setTimer();
});

$("#highScores").on("click", function() {
  console.log("Hello");
  $('.show.onclick').empty();
  $('.empty').empty();
  init()
  scores();
});


function scores(){
  $('.empty').empty();
  $('.show-onclick').empty();
  $('.show-onclick').append('<button type="button" class="btn btn-info" id= "clear" style = "float:left;">Clear High Scores</button><button type="button" class="btn btn-info" id= "restart" style= "float:right;">Restart</button>');
  
  $("#restart").click(function () {
    location.reload();
  });
  
  $("#clear").on("click", function () {
    console.log("World");
    highScores = [];
    storeScores();
    renderScores();
  });
  renderScores();
}


function setTimer() {
  $("#seconds-left").text(secondsLeft);
var countdown = setInterval(function(){
  secondsLeft--;
  $("#seconds-left").text(secondsLeft);
  if (secondsLeft <=0) {
    clearInterval(countdown);
  }
}, 1000);
}


function renderScores() {
  highScoreList.innerHTML = "";

  for (var i = 0; i < highScores.length; i++) {
    var highScore = highScores[i];

    var li = document.createElement("li");
    li.textContent = highScore;
    highScoreList.append(li);
  }
}


function init() {
  var storedScoresString = localStorage.getItem("highScores");
  var storedHighScores = JSON.parse(storedScoresString);

  if(storedHighScores !== null) {
    highScores = storedHighScores;
  }
  renderScores();
}


function storeScores() {
  var highScoresString = JSON.stringify(highScores);

  localStorage.setItem("highScores", highScoresString);
}



function correctAnswer() {
  resetRound();
}

function incorrectAnswer() {
  resetRound();
  timerDown();
}


function timerStop(){
  $("#timer").remove();
}

function timerDown() {
  secondsLeft = secondsLeft -= 9;
}




function resetRound(){
  $('.answers').empty();

  if (indexQandA < questions.length) {
    loadQandA();
  } else {
    timerStop();
    $('.question').remove();
    $('.show-onclick').append('<div class="form-group"> <label id= "initials" ></label><input class="form-control" id= "input" type="text" name="name" placeholder="Enter initials"></div><button id= "highScoresSubmit" class="btn btn-info">Submit</button>');
    var score = secondsLeft
    $("#initials").append("Your score is: " + score);
    var highScoreForm = document.getElementById("form");
    highScoreForm.addEventListener("submit", function(event) {
      event.preventDefault();
      var highScoreInput = document.getElementById("input").value;
      var highScoresText = (highScoreInput + " : " + score);
      init()
      scores();

      if (highScoresText === "") {
        return;
      }

      highScores.push(highScoresText);

      storeScores();
      renderScores();
    });
  }
}





function loadQandA() {
  choices = questions[indexQandA].choices;
  var question = questions[indexQandA].title;
  $('.question').html(question);
  for (var i = 0; i < 4; i++) {
      var displayAnswer = questions[indexQandA].choices[i];
      $('.answers').append('<h4 class= "button-answer" id=' + displayAnswer + '>' + displayAnswer + '</h4><br>');
  }
  
  $("h4").click(function () {
      var id = $(this).attr('id');
      var answered = questions[indexQandA].answer;
      if (id == answered) {
          answer = true;
          console.log("correct") 
          indexQandA++;
          alert("correct!");
          correctAnswer();
      
      } else {
          answer = false; 
          indexQandA++;
          incorrectAnswer();
          // $('.answers').show('<h6 class="alert alert-primary" role="alert">wrong answer!</h6>')
      }
  });
}



})