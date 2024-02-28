const quizContainer = document.getElementById('quiz');
const resultContainer = document.getElementById('result');
const submitButton = document.getElementById('submit');
const retryButton = document.getElementById('retry');
const showAnswerButton = document.getElementById('showAnswer');

import quizData from './questions.js';

let currentQuestion = 0;
let score = 0;
let incorrectAnswers = [];
let selectedQuestions = [];

document.addEventListener("DOMContentLoaded", function () {
    const startQuizBtn = document.getElementById('startQuizBtn');
    const instructionsDiv = document.getElementById('instructions');
    const quizContainer = document.querySelector('.container');
  
    startQuizBtn.addEventListener('click', function () {
      startQuizBtn.style.display = 'none';
      instructionsDiv.style.display = 'none';
      quizContainer.style.display = 'block';
      startGame();
    });
  
});

function startGame() {

  console.log("Game started!");

  selectedQuestions = shuffleArray(quizData).slice(0, 4);

  currentQuestion = 0;
  score = 0;
  incorrectAnswers = [];
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

function displayQuestion() {
  if (currentQuestion < selectedQuestions.length) {
    const questionData = selectedQuestions[currentQuestion];

    const questionElement = document.createElement('div');
    questionElement.className = 'question';
    questionElement.innerHTML = `<p class="question-counter">Question: ${currentQuestion + 1}/${selectedQuestions.length}</p>${questionData.question}`;

    const optionsElement = document.createElement('div');
    optionsElement.className = 'options';
    
    quizContainer.innerHTML = '';
    quizContainer.appendChild(questionElement);
    quizContainer.appendChild(optionsElement);
    
    resultContainer.style.display = 'none';
    retryButton.style.display = 'none';
    showAnswerButton.style.display = 'none';
    submitButton.style.display = 'inline-block';
  } else {
}}
