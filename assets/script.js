$(document).ready(function(){

  var indexQandA = 0;
  var questions = [
      {
        title: "A very useful tool used during debuggingfor printing content to the debugger is:",
        choices: ["JavaScript", "terminal/ bash", "for loops", "console.log"],
        answer: "console.log"
      },
      {
        title: "String values must be enclosed within _____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parentheses"],
        answer: "quotes"
      },
      {
        title: "Arrays in JavaScript can be used to store _________",
        choices: ["numbers and strings", "other arrays", "booleans", "all-of-the-above"],
        answer: "all-of-the-above"
      },
      {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
      },
      {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
      },
  ]

  var timeLeft = (questions.length) * 15;
  var scoreList = document.querySelector("#high-score");
  var highScores = ["AAG : 70", "JPG : 54", "KMG : 65"];
  var scoreForm = document.querySelector(".show-onclick");
  
  
  
  $("#start").on("click", function () {
      $('#startText').remove();
      loadQandA();
      setTimer();
  });
  
  $("#highScores").on("click", function () {
      $('.show-onclick').empty();
      $('.empty').empty();
      init()
      scores();
  });
  
  
  function scores(){
    $('.empty').empty();
    $('.show-onclick').empty();
    $('.show-onclick').append('<button type="button" class="btn btn-info" id= "clear" style= "float:left;">Clear High Scores</button><button type="button" class="btn btn-info" id= "restart" style= "float:right;">Restart</button>');
 
    $("#restart").click(function () {
        location.reload();
        console.log("restart");
    });

    $("#clear").on("click", function () {
        console.log("cleared history");
        highScores = [];
        storeScores();
        renderScores();
    });
    renderScores();
}
  

function setTimer(){
  $("#seconds-left").text(timeLeft);
var countdown = setInterval(function(){
  timeLeft--;
  $("#seconds-left").text(timeLeft);
  if (timeLeft <=0) {
      clearInterval(countdown);
  }
}, 1000);
}


function renderScores() {
  scoreList.innerHTML = "";
  
  for (var i = 0; i < highScores.length; i++) {
    var highScore = highScores[i];
    
// create list of player scores
    var li = document.createElement("li");
    li.textContent = highScore;
    scoreList.append(li);
  }
}

function init() {
  // Get localStorage
  var storedScoresString = localStorage.getItem("highScores");
  // Parsing the JSON string to an object
  var storedHighScores = JSON.parse(storedScoresString);

  if (storedHighScores !== null) {
    highScores = storedHighScores;
  }
  renderScores();
}

function storeScores() {
  var highScoresString = JSON.stringify(highScores);
  localStorage.setItem("highScores", highScoresString);
}


// actions based on users answer
function correctAnswer(){
  resetRound();
  $(".grading").empty().append("Correct!");
  $("audio#pop")[0].play()
}

function incorrectAnswer(){
  resetRound();
  timerDown();
  $(".grading").empty().append("Wrong Answer");
  $("audio#pop2")[0].play()
}

function timerStop(){
  $("#timer").remove();
  
}

function timerDown(){
  timeLeft = timeLeft -= 9;
  
}


// user submission form for saving data
function resetRound(){
  $('.answers').empty();
  if (indexQandA < questions.length) {
      loadQandA();
  } else {
  timerStop();
  $('.question').remove();
  $('.show-onclick').append('<div class="form-group"> <label id= "initials" ></label><input class="form-control" id= "input" type="text" name="name" placeholder="Enter initials"></div><button id= "highScoresSubmit" class="btn btn-info">Submit</button>');
  var score = timeLeft
  $("#initials").append("Your score is: " + score);
  var scoreForm = document.getElementById("form");
  $(".grading").remove()
  

  // When form is submitted...
  scoreForm.addEventListener("submit", function(event) {
      event.preventDefault();
  var highScoreInput = document.getElementById("input").value;
  var highScoresText = (highScoreInput + " : " + score);
  init()
  scores();

  // Return from function early if submitted highScores text is blank
  if (highScoresText === "") {
    return;
  }
  // Add new score to highScores array
  highScores.push(highScoresText);
  
  // Store updated scores in localStorage
  storeScores();
  renderScores();
});
}
}

// displaying answers to questions for user
function loadQandA() {
  choices = questions[indexQandA].choices;
  var question = questions[indexQandA].title;
  $('.question').html(question);
  for (var i = 0; i < 4; i++) {
      var displayAnswer = questions[indexQandA].choices[i];
      $('.answers').append('<h4 class="button-answer btn btn-info" id=' + displayAnswer + '>' + displayAnswer + '</h4><br>');
  }               
  
  // based on users input will change score 
  $("h4").click(function () {
      var id = $(this).attr('id');
      var answer= questions[indexQandA].answer;
      if (id === answer) {
          answered = true;
          console.log("correct") 
          indexQandA++;
          correctAnswer();
          rightAnswer();
      
      } else {
          answered = true; 
          console.log("incorrect") 
          indexQandA++;
          incorrectAnswer();
          wrongAnswer();
      }
  });
}



})