# Javscript Quiz App - Javascript Project: Milestone 2

Javscript Quiz is an interactive quiz for users to answer 10 randomly picked questions on Javscript. 
Questions created are stored in a separate Array and the Quiz randomly picks 10 of those questions to be answered. 
The goal of the website is for users to test their knowledge in Javascript.

## Live project

<span style="color:red">__View the live project__</span>

![Responsive Design](readme_assets/)

<span style="color:red">__quiz-picture.png once the project is live__</span>

# User Experience (UX)

## User stories

### As a first time user

- As a website visotor I want to receive instructions what the quiz is about
- I want to know where to start the quiz indicated by a start button
- I want to see my score at the end of the quiz
- I want want to know the number of questions already answered (progress indication/bar)
- I want to restart the quiz either while I am taking the quiz or at the end of the quiz
- I want to see different questions each time that I am running the quiz
- I want to see the correct answers for those quiz questions answered incorrectly

### As a returning user

- I want to answer different questions so that I do not see the same questions again.
- I want to play the game as many quiz rounds that I would want to

## Structure

The website provides instructions for the quiz on the opening page and allows user to press start button for the quiz.

Once the quiz is started with start button, the user receives a sequence of 10 questions related to Javscript. 

The 10 questions are randomly drawn from a catalogue of quiz questions to ensure that each quiz round provides different set of questions.

Once the quiz is completed with 10 questions answere, the user is automatically shown the results page including the score of correct answers.

The user has the option to either (i) see the correct answers for those questions where the user incorrectly answered a quiz question or (ii) restart the quiz. If user decides to see the correct answers for quiz questions answered incorrectly, the user has the option to restart the quiz again.

After opening a quiz with the start button, the user can decide to restart the quiz by clicking on the logo on the top left of the website. This will take the user back to the start of the quiz.

## Opening Page

The opening page provides a logo, clear headline what the page is about "Javscript Quiz" and instructions for the user to play the quiz combined with the start button for the quiz

### User Goal

<span style="color:red">__further checks to be done/possibly overlap with user stories__</span>

### Website Goal

<span style="color:red">__further cheks to be done/possibly overlap with user stories__</span>

## Quiz Page

The quiz page continues to show the logo and title of the website. Once the start button was clicked, the instructions page is no longer visible and is now replaced with the question box. 

The radio buttons for the questions provide the user to click one possible answer. 

Once the user submits a choice on the radio button, the next quiz question automatically appears. After finishing 10 quiz questions, the user is provided the score of the quiz with optionality to view correct answers to questions answered incorrectly and to restart the quiz again.
  
## Results Page

Results page is extension of quiz page.
shows results / result supported with icon

# Design

Design was based on the key colors in the Javascript logo. Using the colors included in the JS logo, a color palette was generated with coolors

### Color Palette

<img src="readme_assets/color_palette _javascript_quiz.png" width="500" height="300">

<span style="color:red">__describe what colors used for what part of the page__</span>

The colour palette was created with: **[coolors](https://www.color-hex.com)**

### Typography

Standard fonts available were used with Arial, Helvetica for reasons of legibility. As a backup to these two font-types/font-family, a sans-serif backup font was used.

### Images

The Javascript icon was downloaded from **[Icons8.com](https://icons8.com/icons/set/javascript)**

### Accessibility

- alternative text/labels used to enable screen readers providing information
- contrasting used to have best possible visibility for the user

<span style="color:red">__include reference and information about the testing of accessibility in lighthouse__
</span>

### Visual Effects

### Buttons

<span style="color:red">__describe hover effects and change of color of buttons, if any, once pressed__</span>

![Buttons](readme_assets/)


# Features

### The logo

![Logo](icons/icons8-javascript-240.png)

The logo is shown on all pages of the website. The logo likewise is a hpyerlink to restart the quiz if the user either wants to restart a quiz while having started a quiz or once a quiz round is completed and the user decides to play another quiz round.

On hover, a tooltip is display with information that the quiz can be restarted with click on the logo.

### Start Page quiz instructions page

On the start page the instructions for the quiz are provided. 
User is informed that questions are drawn randomly from a set of questions.
The start button is prominently placed so that user can easily navigate to the start of the quiz.

<span style="color:red">__describe the background for applied across all pages__</span>

<span style="color:red">__![Start Page](readme_assets/) | a picture of the start page will be neeed here with name startpage__</span>
  
### Quiz Questions

Quiz section are 10 questions for the user to answer. While answering the questions, the user can see the progress on the number of questions answered. 

Every questions has four radio buttons to choose from. A user can change the radio button/answer for as long as the submit button is not clicked.

Once clicked, the user will automatically move forward to the next quiz question until question no. 10 is reached. While answering the quiz questions, the user is not provided feedback on the correctness of the answers clicked. The incorect answers are displayed at the end of the quiz including a solution to the correct answer.

<span style="color:red">__![Questions/ Quiz Page](assets/readme/quizpage.png) | a picture of the quiz page will be neeed here with name quizpage__</span>

### Results Page

Results page is last question plus information about result achieved.
Final score out of 10 is displayed.

A message is shown depending on the score achieved

- if score is higher than or equal to XXX, user is shown "_________________"
- if score is higher than or equal to XXX, user is shown "_________________"
- if score is higher than or equal to XXX, user is shown "_________________"
- if score is higher than or equal to XXX, user is shown "_________________"
- if score is higher than or equal to XXX, user is shown "_________________"

Results also provides option for user to start new quiz. This will take the user to the beginning of the website with a quiz starting again with the first question.

![Results-page](readme_assets/)

<span style="color:red">__![Questions/ Quiz Page](assets/readme/resultspage.png) | a picture of the results page will be neeed here with name quizpage__</span>

# Technologies

- Languages: HTML, CSS, JavaScript

- **[Favicon.cc](https://www.favicon.cc/)** - Used to prepare the website's favicon

- **[GitHub](https://www.github.com)** - GitHub for storage of files

- **[GitPod](https://www.gitpod.io/)** - GitPod as IDE for development of this site

- **[Git](https://git-scm.com)** - Version control system Git

- **[W3C HTML Markup Validator](https://validator.w3.org/)** - W3C HTML markup validator for validation of HTML code

- **[W3C Jigsaw CSS Validator](https://jigsaw.w3.org/css-validator/)** - W3C Jigsaw CSS validator for validation of CSS code

- **[Javascript Validator](https://beautifytools.com/javascript-validator.php)** to validate the Javscript code.

- **[Visual Code Studios](https://code.visualstudio.com/)** - IDE used to draft the webiste and make working progress remarks in the README.md including placehoders to check for final polishing

- **[Google Chrome Dev Tools](https://developers.google.com/web/tools/chrome-devtools)**- To check responsiveness of page, debug code, and important lighthouse checks for performance, accessibility, best practices, SEO

- **[Techsini](https://techsini.com/multi-mockup/index.php)** - to generate multi-device image with different screensizes and devices possibly used by user

- **[www.color-hex.com](https://www.color-hex.com)** - to generate the color palette for the site

- A template provided by Code Institute for the workspace of the project

# Testing

Testing was done incrementally with every change in functionality of code (Javascript). Only once the manual functionality testing was completed, the visual testing started with changes of CSS. Website was also tested on different browsers and on different screen sizes using Google Chrome and Firefox developer tools.

# User Stories


| Expectations of user website                             | Realisation in website                                 |
| -------------------------------------------------------- | ------------------------------------------------------- |
| User wants to understand the purpose of the website      | The first page shows the logo clearly indicating that the site is about Javascript.                             |
| User wants to understand the use of the website          | First page provides instructions on the quiz and how it can be played.                                          |
| User wants to run the quiz easilty and understand progress | Quiz questions are numbered so user can always verify progress on number of questions answered. User has four answer buttons to choose from
| User wants to obtain score of quiz| Once 10 quiz questions are answered, user receives final score |
| User wants to see incorrect answered questions                           | User is shown correct answers for quiz questions answered incorrectly once button is clicked |
| User may want to run quiz again        | User has option to run quiz again with new set of questions. This is either achieved by clicking on the logo or the restart game button at the end of the quiz |

# Solved issues

Numerous issues while coding were resolved

### Automated Testing

1. **[W3 Markup Validation](https://validator.w3.org/) - HTML Validation**

The website was tested with HTML validator.

<span style="color:red">__![Home Page HTML](readme_assets/) | a picture of the validation of the HTML done__</span>

- [Home Page HTML](readme_assets/IndexHTML.png)

1. **[W3 Jigsaw](https://jigsaw.w3.org/css-validator/) - CSS Validation**

The CSS stylesheet was tested with CSS validator.

<span style="color:red">__![CSS Stylling](readme_assets/) | a picture of the validation of the CSS valiation done__</span>

2. [style.css CSS](readme_assets/CSS_Styles.png.png)

3. **[Google Lighthouse](https://developers.google.com/web/tools/lighthouse)**

Google lighthouse reported performance of XYZ on the desktop view / check mobile view

**lighthouse test desktop (scores reported by lighthouse)**

| File                |  Perf.  | Access. | Best P. | SEO     |
|---------------------|---------|---------|---------|---------|
| index.html          |      |      |      |      |
| FILE ABC       |      |      |          |      |

**lighthouse test mobile (scores reported by lighthouse)**

| File                |  Perf.  | Access. | Best P. | SEO     |
|---------------------|---------|---------|---------|---------|
| index.html          |      |      |      |      |
| FILE ABC       |      |      |          |      |

<span style="color:red">__Include two pictures of lighthouse testing for mobile and desktop view with width and height possibly defined to ensure smooth appearance of Readme, see code below__</span>

Mobile

Desktop

<!-- <img src="readme_assets/lighthouse_desktop.png" alt="Mobile Page" width="600"/> -->
