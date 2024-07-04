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
    const submitActionBtn = document.getElementById('submitAction');
    const nextQuestionBtn = document.getElementById('nextQuestion');

    startQuizBtn.addEventListener('click', function () {
      startQuizBtn.style.display = 'none';
      instructionsDiv.style.display = 'none';
      quizWrapper.style.display = 'block';
      startGame();
    });

    submitActionBtn.addEventListener('click', answerCheck)
    nextQuestionBtn.addEventListener('click', function() {
      displayQuestion();
    });

    restartButton.addEventListener('click', retryQuiz);
    showSolutionButton.addEventListener('click', showSolution);
});

/**
 * Function to startGame. Shuffles the questions.js array and picks
 * 10 out of 40 questions in the questions.js array.
 * Function shuffleArray to randomize questions taken from Stackoverflow
*/

function startGame() {

  selectedQuestions = randomQuestionPick(quizData).slice(0, 5);

  unansweredQuestion = 0;
  points = 0;
  wrongAnswers = [];
  displayQuestion();
}

/**
 * Function to randomize the questions. This function picks a random element from the original array of questions included in 
 * questions.js file. This randomly picked element/question is then excluded from the next draw. This ensures that no question or
 * element from the questions array is picked twice.
 * Function taken from Stackoverflow
*/

function randomQuestionPick(array) {
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
          option.id = 'choice-' + i;

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

      actionButton.classList.remove('hide');
      document.getElementById('nextQuestion').classList.add('hide');
    }
}

/**
 * Function to compare selected answer with correctAnswer from
 * questions.js array labels and radio (input) buttons.
 * Increase of count variable for correct answers
*/

function answerCheck() {
  const clickedAnswer = document.querySelector('input[name="quiz"]:checked');
  if (clickedAnswer) {
      const answer = clickedAnswer.value;
      const correctAnswerIndex = selectedQuestions[unansweredQuestion].correctAnswer;
      const correctAnswerText = selectedQuestions[unansweredQuestion].choices[correctAnswerIndex];

      if (answer === correctAnswerText) {
          points++;
          clickedAnswer.parentNode.classList.add('correct');
      } else {
          clickedAnswer.parentNode.classList.add('wrong');
          document.getElementById('choice-' + correctAnswerIndex).classList.add('correct');
      }

      wrongAnswers.push({
          question: selectedQuestions[unansweredQuestion].question,
          userAnswer: answer,
          correctAnswer: correctAnswerText,
          isCorrect: answer === correctAnswerText
      });

      unansweredQuestion++;
      document.querySelectorAll('input[name="quiz"]').forEach(input => input.disabled = true);
      document.getElementById('nextQuestion').classList.remove('hide');
      actionButton.classList.add('hide');

      if (unansweredQuestion >= selectedQuestions.length) {
          displayResult();
          document.getElementById('nextQuestion').classList.add('hide');
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

  resultDisplay.innerHTML = `<p class="result-text">${getResults(points)}</p>
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
  selectedQuestions = randomQuestionPick([...quizData]).slice(0, 5);
  quizWrapper.style.display = 'block';
  displayQuestion();
}

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
 * case 6 and case 7 are combination, each yielding same outcome
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