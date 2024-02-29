const quizContainer = document.getElementById('quiz');
const resultContainer = document.getElementById('result');
const submitButton = document.getElementById('submit');
const retryButton = document.getElementById('retry');
const showAnswerButton = document.getElementById('showAnswer');

import quizData from './questions.js';

const logo = document.getElementById("logo");
logo.addEventListener('click', retryQuiz);

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

    submitButton.addEventListener('click', checkAnswer);
    retryButton.addEventListener('click', retryQuiz);
    showAnswerButton.addEventListener('click', showAnswer);
  
});

function startGame() {

  console.log("Game started!");

  selectedQuestions = shuffleArray(quizData).slice(0, 10);

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

    quizContainer.innerHTML = '';
    quizContainer.appendChild(questionElement);
    quizContainer.appendChild(optionsElement);
    
    resultContainer.style.display = 'none';
    retryButton.style.display = 'none';
    showAnswerButton.style.display = 'none';
    submitButton.style.display = 'inline-block';
  }
}

function checkAnswer() {
  
  const selectedOption = document.querySelector('input[name="quiz"]:checked');
  if (selectedOption) {

    const answer = selectedOption.value;

    const correctAnswerText = selectedQuestions[currentQuestion].choices[selectedQuestions[currentQuestion].correctAnswer];

    if (answer === correctAnswerText) {
      score++;
      console.log('Correct!');
    } else {
      incorrectAnswers.push({
        question: selectedQuestions[currentQuestion].question,
        incorrectAnswer: answer,
        correctAnswer: correctAnswerText,
      });
      console.log('Incorrect!');
    }

    currentQuestion++;
    selectedOption.checked = false;
    if (currentQuestion < selectedQuestions.length) {
      displayQuestion();
    } else {
      displayResult();
            
      submitButton.style.display = 'none';
    }
}
}

function displayResult() {
  
  resultContainer.style.display = 'block';
  retryButton.style.display = 'inline-block';
  showAnswerButton.style.display = 'inline-block';

  // const smiley = getSmiley(score);
  resultContainer.innerHTML = `<p class="smiley-text">${getSmiley(score)}</p>
  </p>
  <br>
  <p class="final-score-text"><br>You scored ${score} out of ${selectedQuestions.length}!</p>`;
  }
 
/**
 * Function retry sets current question + score back to ZERO
 * New set of questions picked from questions-Array
*/

function retryQuiz() {
  currentQuestion = 0;
  score = 0;
  incorrectAnswers = [];
  selectedQuestions = shuffleArray([...quizData]).slice(0, 10);
  quizContainer.style.display = 'block';
  displayQuestion();
}

function showAnswer() {
  
  console.log("show answer button clicked");

  quizContainer.style.display = 'none';
  submitButton.style.display = 'none';
  retryButton.style.display = 'inline-block';
  showAnswerButton.style.display = 'none';

/**
 * for-loop iterates over array defined above. On every incorrect answer, the array collects the question, the incorrect answer clickedFunction and
 * the answer that is correct for that question. Concatenation of incorrect answers with += yields "list" of incorrect answers 
*/
  let incorrectAnswersHtml = '';
  
  for (let i = 0; i < incorrectAnswers.length; i++) {
    incorrectAnswersHtml += `
      <p class="incorrect-answer">
        <strong>Question:</strong> ${incorrectAnswers[i].question}<br>
        <strong>Your Answer:</strong> ${incorrectAnswers[i].incorrectAnswer}<br>
        <strong class="correct-answer">Correct Answer:</strong> ${incorrectAnswers[i].correctAnswer}
      </p>
    `;
  }  

  resultContainer.innerHTML = `
  <p class="incorrect">Incorrect Answers:</p>

  ${incorrectAnswersHtml}
  `;

  resultContainer.classList.add('result-container');
}

function getSmiley(score) {
  switch (score) {
    case 10:
      return 'Seems you are a Javscript Wizard';
    case 8:
    case 9:
      return 'Nearing the gold medal';
    case 6:
    case 7:
      return 'Good knowledge but more is yet to come';
    default:
      return 'Try again to improve your score';
  }
}
