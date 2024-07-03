const quizWrapper = document.getElementById('trivia');
const resultDisplay = document.getElementById('outcome');
const actionButton = document.getElementById('submitAction');
const restartButton = document.getElementById('tryAgain');
const showSolutionButton = document.getElementById('displayAnswers');

import quizData from './questions.js';

const logo = document.getElementById("logo");
logo.addEventListener('click', retryQuiz);

let unansweredQuestion = 0;
let points = 0;
let wrongAnswers = [];
let selectedQuestions = [];


/**
 * EventListeners for the functions and ensure that quiz only
 * runs when page (DOM) is loaded
*/

document.addEventListener("DOMContentLoaded", function () {
    const startQuizBtn = document.getElementById('startQuizBtn');
    const instructionsDiv = document.getElementById('instructions');
    const quizWrapper = document.querySelector('.container');

    startQuizBtn.addEventListener('click', function () {
      startQuizBtn.style.display = 'none';
      instructionsDiv.style.display = 'none';
      quizWrapper.style.display = 'block';
      startGame();
    });

    actionButton.addEventListener('click', checkAnswer);
    restartButton.addEventListener('click', retryQuiz);
    showSolutionButton.addEventListener('click', showSolution);
});

/**
 * Function to startGame. Shuffles the questions.js array and picks
 * 10 out of 40 questions in the questions.js array.
 * Function shuffleArray to randomize questions taken from Stackoverflow
*/

function startGame() {

  selectedQuestions = shuffleArray(quizData).slice(0, 5);

  unansweredQuestion = 0;
  points = 0;
  wrongAnswers = [];
  displayQuestion();
}

/**
 * Function to randomize the questions. This function picks a random element
 * from each original array and excludes it from the next draw.
 * Function taken from Stackoverflow
*/

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

/**
 * Function to show questions including creation of questions container
 * labels and radio (input) buttons.
 * Function taken from Stackoverflow
*/

function displayQuestion() {
  if (unansweredQuestion < selectedQuestions.length) {
    const questionData = selectedQuestions[unansweredQuestion];

    const questionElement = document.createElement('div');
    questionElement.className = 'question';
    questionElement.innerHTML = `<p class="question-counter">Question: ${unansweredQuestion + 1}/${selectedQuestions.length}</p>${questionData.question}`;

    const optionsElement = document.createElement('div');
    optionsElement.className = 'options';

    for (let i = 0; i < questionData.choices.length; i++) {
      const option = document.createElement('label');
      option.className = 'option';

      const radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = 'quiz';
      radio.value = questionData.choices[i];
      const optionText = document.createTextNode(questionData.choices[i]);

      option.appendChild(radio);
      option.appendChild(optionText);
      optionsElement.appendChild(option);
    }
    
    quizWrapper.innerHTML = '';
    quizWrapper.appendChild(questionElement);
    quizWrapper.appendChild(optionsElement);

    resultDisplay.style.display = 'none';
    restartButton.style.display = 'none';
    showSolutionButton.style.display = 'none';
    actionButton.style.display = 'inline-block';
  }
}

/**
 * Function to compare selected answer with correctAnswer from
 * questions.js array labels and radio (input) buttons.
 * Increase of count variable for correct answers
*/

function checkAnswer() {

  const selectedOption = document.querySelector('input[name="quiz"]:checked');
  if (selectedOption) {

    const answer = selectedOption.value;

    const correctAnswerText = selectedQuestions[unansweredQuestion].choices[selectedQuestions[unansweredQuestion].correctAnswer];

    if (answer === correctAnswerText) {
      points++;
    } else {
      wrongAnswers.push({
        question: selectedQuestions[unansweredQuestion].question,
        wrongAnswers: answer,
        correctAnswer: correctAnswerText,
      });
    }

    unansweredQuestion++;
    selectedOption.checked = false;
    if (unansweredQuestion < selectedQuestions.length) {
      displayQuestion();
    } else {
      displayResult();
      actionButton.style.display = 'none';
    }
}
}

/**
 * Function to show results container and make retry/showSolution button visible
 * Use count variable named points to display final points achieved
*/

function displayResult() {

  resultDisplay.style.display = 'block';
  restartButton.style.display = 'inline-block';
  showSolutionButton.style.display = 'inline-block';

  resultDisplay.innerHTML = `<p class="smiley-text">${getSmiley(points)}</p>
  </p>
  <br>
  <p class="final-score-text"><br>You scored ${points} out of ${selectedQuestions.length}!</p>`;
}

/**
 * Function retry sets current question + count of points back to ZERO
 * New set of questions picked from questions-Array
*/

function retryQuiz() {
  unansweredQuestion = 0;
  points = 0;
  wrongAnswers = [];
  selectedQuestions = shuffleArray([...quizData]).slice(0, 5);
  quizWrapper.style.display = 'block';
  displayQuestion();
}


function showSolution() {

  quizWrapper.style.display = 'none';
  actionButton.style.display = 'none';
  restartButton.style.display = 'inline-block';
  showSolutionButton.style.display = 'none';


/**
 * for-loop iterates over array defined above. On every wrong answer, the array collects
 * the question, the wrong answer clickedFunction and the answer that is correct for
 * that question. Concatenation of wrong answers with += yields "list" of wrong answers
*/
  let wrongAnswersHtml = '';

  for (let i = 0; i < wrongAnswers.length; i++) {
    wrongAnswersHtml += `
      <p class="incorrect-answer">
        <strong>Question:</strong> ${wrongAnswers[i].question}<br>
        <strong>Your Answer:</strong> ${wrongAnswers[i].wrongAnswers}<br>
        <strong class="correct-answer">Correct Answer:</strong> ${wrongAnswers[i].correctAnswer}
      </p>
    `;
  }

  resultDisplay.innerHTML = `
  <p class="incorrect">Incorrect Answers:</p>

  ${wrongAnswersHtml}
  `;

  resultDisplay.classList.add('resultDisplay-container');
}

/**
 * switch case to display feedback on quiz achievement depending on
 * points in counter variable named points. Case 8 and case 9 are combination,
 * case 6 and case 7 are combination, each yielding same outcome
*/

function getSmiley(points) {
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