const quizWrapper = document.getElementById('trivia');
const resultDisplay = document.getElementById('outcome');
const actionButton = document.getElementById('submitAction');
const restartButton = document.getElementById('tryAgain');
const showSolutionButton = document.getElementById('displayAnswers');

import quizData from './questions.js';

let unansweredQuestion = 0;
let points = 0;
let wrongAnswers = [];
let correctAnswers = [];
let selectedQuestions = [];

/**
 * EventListeners for the functions and ensure that quiz only
 * runs when page (DOM) is loaded
*/

document.addEventListener("DOMContentLoaded", function () {
  const startQuizBtn = document.getElementById('startQuizBtn');
  const instructionsDiv = document.getElementById('instructions');
  const quizWrapperLocal = document.querySelector('.container');
  const submitActionBtn = document.getElementById('submitAction');
  const nextQuestionBtn = document.getElementById('nextQuestion');
  const restartButtonLocal = document.getElementById('tryAgain');
  const showSolutionButtonLocal = document.getElementById('displayAnswers');

  const applauseSound = document.getElementById('applauseSound');
  const buzzerSound = document.getElementById('buzzerSound');

  // Here, I set the "start" of the audio to zero so that audio always starts from the "beginning"
  applauseSound.currentTime = 0;
  buzzerSound.currentTime = 0;

  startQuizBtn.addEventListener('click', function () {
    startQuizBtn.style.display = 'none';
    instructionsDiv.style.display = 'none';
    quizWrapperLocal.style.display = 'block';
    startGame();
  });

  submitActionBtn.addEventListener('click', validateAnswer);
  nextQuestionBtn.addEventListener('click', function() {
  showQuestion();
  actionButton.style.display = 'inline-block';
  nextQuestionBtn.style.display = 'none';
  });

  restartButtonLocal.addEventListener('click', retakeQuiz);
  showSolutionButtonLocal.addEventListener('click', showSolution);

  restartButton.style.display = 'none';
  showSolutionButton.style.display = 'none';
  submitActionBtn.style.display = 'inline-block';
  nextQuestionBtn.style.display = 'none';

  const logo = document.getElementById("logo");
  logo.addEventListener('click', retakeQuiz);

});

/**
 * Function to startGame. Shuffles the questions.js array and picks
 * 10 questions in the questions.js array.
 * Function randomQuestionPick see documentation in README
*/

function startGame() {

  selectedQuestions = randomQuestionPick(quizData).slice(0, 10);

  unansweredQuestion = 0;
  points = 0;
  wrongAnswers = [];
  correctAnswers = [];
  showQuestion();
}

/**
 * Function to randomize the questions. This function picks a random element from
 * array of questions included in questions.js file. This randomly picked element/question is
 * then excluded from the next draw. This ensures that no question or element from the questions
 * array is picked twice. Source documented in README
*/

function randomQuestionPick(triviaarray) {
  for (let i = triviaarray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [triviaarray[i], triviaarray[j]] = [triviaarray[j], triviaarray[i]];
  }
  return triviaarray;
}

/**
 * Function to show questions including creation of questions container, 
 * labels and radio (input) buttons.
*/

function showQuestion() {
  if (unansweredQuestion < selectedQuestions.length) {
    const questionData = selectedQuestions[unansweredQuestion];

    const divForEachQuestion = document.createElement('div');

    divForEachQuestion.className = 'question';
    divForEachQuestion.innerHTML = `<p class="question-counter">Question: ${unansweredQuestion + 1}/${selectedQuestions.length}</p>${questionData.question}`;

    const divForAnswerOptions = document.createElement('div');
      divForAnswerOptions.className = 'options';

      for (let i = 0; i < questionData.choices.length; i++) {
        const answerChoice = document.createElement('label');
        answerChoice.className = 'option';
        answerChoice.id = 'choice-' + i;

        const userChoice = document.createElement('input');
        userChoice.type = 'radio';
        userChoice.name = 'quiz';
        userChoice.value = questionData.choices[i];

        const optionText = document.createTextNode(questionData.choices[i]);

        answerChoice.appendChild(userChoice);
        answerChoice.appendChild(optionText);
        divForAnswerOptions.appendChild(answerChoice);
      }

        quizWrapper.innerHTML = '';
        quizWrapper.appendChild(divForEachQuestion);
        quizWrapper.appendChild(divForAnswerOptions);

        actionButton.classList.remove('hide');
        document.getElementById('nextQuestion').classList.add('hide');
  } else {
      showEntireTriviaOutcome();
    }
}

/**
 * Function to compare clicked answer with correctAnswer from
 * questions.js array labels and radio (input) buttons.
 * Increase of count variable for correct answers
 * audio effect with applause and buzzer sound for correct and
 * incorrect answers by user (immediate audio feedback)
*/

function validateAnswer() {
  const clickedAnswer = document.querySelector('input[name="quiz"]:checked');
  if (clickedAnswer) {
    const answer = clickedAnswer.value;
    const correctAnswerIndex = selectedQuestions[unansweredQuestion].correctAnswer;
    const correctAnswerText = selectedQuestions[unansweredQuestion].choices[correctAnswerIndex];

    if (answer === correctAnswerText) {
      points++;
      clickedAnswer.parentNode.classList.add('correct');
      applauseSound.play();
    } else {
      clickedAnswer.parentNode.classList.add('wrong');
      document.getElementById('choice-' + correctAnswerIndex).classList.add('correct');
      buzzerSound.play();
    }

    wrongAnswers.push({
      question: selectedQuestions[unansweredQuestion].question,
      userAnswer: answer,
      correctAnswer: correctAnswerText,
      isCorrect: answer === correctAnswerText
    });

    unansweredQuestion++;
      document.querySelectorAll('input[name="quiz"]').forEach(input => input.disabled = true);

      if (unansweredQuestion >= selectedQuestions.length) {
        showEntireTriviaOutcome();
        document.getElementById('nextQuestion').classList.add('hide');
        actionButton.style.display = 'none';
      } else {
        document.getElementById('nextQuestion').style.display = 'inline-block';
        actionButton.style.display = 'none';
      }
      calculateAnswerStatistics();
  }
}

/**
 * Function that iterates through array of all answers. This array contains all answers, either
 * right OR wrong. Don't be confused by Name of array of wrongAnswers. Interate and collect by
 * correctAnswers and remainder (not correct = wrong) and display the counter variables inside the
 * HTML <span> tag dynamically
*/

function calculateAnswerStatistics() {
  let correctAnswerCount = 0;
  let wrongAnswerCount = 0;

  for (let answered of wrongAnswers) {
    if (answered.isCorrect) {
      correctAnswerCount++;
    } else {
      wrongAnswerCount++;
    }
  }

  document.getElementById('correctCount').textContent = correctAnswerCount;
  document.getElementById('wrongCount').textContent = wrongAnswerCount;
}

/**
 * Function to show results container and make retry/showSolution button visible
 * Use count variable named 'points' to display final points achieved
*/

function showEntireTriviaOutcome() {

  resultDisplay.style.display = 'block';
  restartButton.style.display = 'inline-block';
  showSolutionButton.style.display = 'inline-block';

  resultDisplay.innerHTML = `<p class="result-text">${getResults(points)}</p>
  </p>
  <br>
  <p class="final-score-text"><br>You scored ${points} out of ${selectedQuestions.length}!</p>`;
}

/**
 * Function retakeQuiz sets current question AND count of points back to ZERO
 * New set of questions picked from questions-Array. Every single step documented
 * because this function was difficult to implement without every step explained
 * in detail
*/

function retakeQuiz() {
  unansweredQuestion = 0;
  points = 0;
  wrongAnswers = [];
  correctAnswers = [];

  // Step 1: Once a new round starts, a new set of trivia questions is selected
  selectedQuestions = randomQuestionPick([...quizData]).slice(0, 10);

  // Step 2: The results of a previous round are cleared from the display as otherwise
  // these results from a previous round continue to show up
  resultDisplay.innerHTML = '';
  document.getElementById('correctCount').textContent = '0';
  document.getElementById('wrongCount').textContent = '0';

  // Step 3: The TryAgain button and ShowAnswers button must be switched to display
  // of 'none' for a new round
  restartButton.style.display = 'none';
  showSolutionButton.style.display = 'none';

  // Step 4: With a new round, the Submit button must become visible again.
  // This button went to display none when solution() function was called
  actionButton.style.display = 'inline-block';

  // Step 5: The quizWrapper went to display 'none' when solution()-function
  // was called. Now the quiz questions must be shown again
  quizWrapper.style.display = 'block';

  // Step 6: The first question of a new trivia round must show up once
  // a new round is started
  showQuestion();
}

/**
 * THIS FUNCTION NEEDS DESCRIPTION
 * xxx
 * xxx
 * */

function showSolution() {
  quizWrapper.style.display = 'none';
  actionButton.style.display = 'none';
  restartButton.style.display = 'inline-block';
  showSolutionButton.style.display = 'none';

  let correctAnswersHtml = '<div class="correct-answers"><p class="results correct-heading">Correct Answers:</p>';
  let wrongAnswersHtml = '<div class="wrong-answers"><p class="results wrong-heading">Wrong Answers:</p>';

  for (let i = 0; i < wrongAnswers.length; i++) {
    const answerData = wrongAnswers[i];
    const questionHtml = `
      <p class="${answerData.isCorrect ? 'correct-answer' : 'wrong-answer'}">
        <strong>Question:</strong> ${answerData.question}<br>
        <strong>Your Answer:</strong> ${answerData.userAnswer}<br>
        <strong class="correct-answer">Correct Answer:</strong> ${answerData.correctAnswer}
      </p>
    `;

    if (answerData.isCorrect) {
      correctAnswersHtml += questionHtml;
    } else {
      wrongAnswersHtml += questionHtml;
    }
  }

  correctAnswersHtml += '</div>';
  wrongAnswersHtml += '</div>';

  resultDisplay.innerHTML = `
    ${correctAnswersHtml}
    ${wrongAnswersHtml}
  `;

  resultDisplay.classList.add('resultDisplay-container');
}

/**
 * switch case to display feedback on quiz achievement depending on
 * points in counter variable named points. Case 8 and case 9 are combination,
 * case 6 and case 7 are combination, each showing the same outcome
*/

function getResults(points) {
  switch (points) {
    case 10:
      return 'Seems you are a Javscript Wizard';
    case 8:
    case 9:
      return 'Nearing the gold medal';
    case 6:
    case 7:
      return 'Good knowledge but more is yet to come';
    default:
      return 'Try again to improve your points';
  }
}