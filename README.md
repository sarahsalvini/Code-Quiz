<h1>Unit 04 Web APIs Homework: Code Quiz</h1>
As you proceed in your career as a web developer, you will probably be asked to complete a coding assessment. These assessments are typically a combination of multiple-choice questions and interactive challenges. In this homework assignment, your challenge is to build a code quiz with multiple-choice questions.

<h2>Instructions</h2>
From scratch, build a timer-based quiz application that stores high scores client-side. Following the common templates for user stories, we can frame this challenge as follows:
As a coding bootcamp student
I want to take a timed quiz on JavaScript fundamentals that stores high scores
so that I can gauge my progress compared to my peers
How do you deliver this? Here are some guidelines:


<b>Play proceeds as follows:</b>


The user arrives at the landing page and is presented with a call-to-action to "Start Quiz." Also note the navigation option to "View Highscores" and the "Time" value set at 0.


Clicking the "Start Quiz" button presents the user with a series of questions. The timer is initialized with a value and immediately begins countdown.


Score is calculated by time remaining. Answering quickly and correctly results in a higher score. Answering incorrectly results in a time penalty (for example, 15 seconds are subtracted from time remaining).


When time runs out and/or all questions are answered, the user is presented with their final score and asked to enter their initials. Their final score and initials are then stored in localStorage.




Your application should also be responsive, ensuring that it adapts to multiple screen sizes.


Refer to the animated GIF below for a demonstration of the application functionality.




<b>Hints</b>

Store your questions as an array of objects in a separate file, questions.js, that follows this format:

The length of the array in questions.js determines the length of play. Fifteen seconds per question is a good estimate, so 5 questions will result in a length of play of 75 seconds.


<b>Minimum Requirements</b>

<ul>
<li>Functional, deployed application.</li>

<li>GitHub repository with README describing project.</li>

<li>The first view of the application displays a button that starts the quiz.</li>

<li>Clicking the start button displays a series of questions.</li>

<li>Once the quiz begins, a timer starts.</li>

<li>If a question is answered incorrectly, additional time is subtracted from the timer.</li>

<li>The timer stops when all questions have been answered or the timer reaches 0.</li>

<li>After the game ends, the user can save their initials and score to a highscores view using local storage.</li>
</ul>



<b>Bonus</b>


Add audio files to alert the user of correct or incorrect answers. Be sure to include the appropriate license.


Customize the application theme.


Create multiple quizzes and an option for users to choose between them.


Add the application to your portfolio.
