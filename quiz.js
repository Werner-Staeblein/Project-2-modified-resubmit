const quizContainer = document.getElementById('quiz');
const resultContainer = document.getElementById('result');
const submitButton = document.getElementById('submit');
const retryButton = document.getElementById('retry');
const showAnswerButton = document.getElementById('showAnswer');

import quizData from './questions.js';

document.addEventListener("DOMContentLoaded", function () {
    const startQuizBtn = document.getElementById('startQuizBtn');
    const instructionsDiv = document.getElementById('instructions');
    const quizContainer = document.querySelector('.container');
  
    startQuizBtn.addEventListener('click', function () {
      startQuizBtn.style.display = 'none';
      instructionsDiv.style.display = 'none';
      quizContainer.style.display = 'block';
    });
  
});
  
  