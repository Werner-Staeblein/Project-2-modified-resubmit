const quizData = [
    {
      question: "What is the purpose of the 'let' keyword in JavaScript?",
      choices: [
        "Define a constant variable",
        "Declare a variable with block scope",
        "Declare a variable with global scope",
        "Define a function",
      ],
      correctAnswer: 1,
    },
    
    {
      question: "What is the purpose of the setTimeout function in JavaScript?",
      choices: [
        "Defines a time delay before executing a function",
        "Compares two values for strict equality",
        "Creates a new array from an existing one",
        "Sorts the elements of an array in place"
      ],
      correctAnswer: 0
    },
    
    {
      question:
        "Which of the following is a method used to iterate over the elements of an array in JavaScript?",
      choices: ["for loop", "while loop", "foreach loop", "map function"],
      correctAnswer: 2,
    },

    {
      question:
        "Which of the following is a method used to iterate over the elements of an array in JavaScript?",
      choices: ["for loop", "while loop", "foreach loop", "map function"],
      correctAnswer: 2,
    },
    
    {
      question:
        "What is the purpose of the 'querySelector()' method in JavaScript?",
      choices: [
        "To select and manipulate HTML elements",
        "To query the database",
        "To query the server for data",
        "To declare a variable",
      ],
      correctAnswer: 0,
    },
    
    {
      question: "How do you comment out multiple lines of code in JavaScript?",
      choices: [
        " This is a comment",
        "/* This is a comment */",
        "# This is a comment",
        "<!-- This is a comment -->",
      ],
      correctAnswer: 1,
    },

    {
      "question": "What is the addEventListener() method in JavaScript?",
      "choices": [
        "It creates a new HTML element.",
        "It adds a new CSS rule to the stylesheet.",
        "It attaches an event handler to a specified element.",
        "It modifies the text content of an element."
      ],
      "correctAnswer": 2
    },
  
    {
      question: "How do you pick a document element based on the value of its id attribute?",
      choices: [
        "getElementsbyId()",
        "getElementbyId()",
        "both getElementsbyId() and getElementbyId()",
        "getElement",
      ],
      correctAnswer: 2,
    },
  
    {
      "question": "Which method is used to combine two or more arrays in JavaScript?",
      "choices": [
        "concat()",
        "combine()",
        "merge()",
        "join()"
      ],
      "correctAnswer": 0
    },
    
    {
      question: "What does the forEach method do in JavaScript?",
      choices: [
        "Adds a new element to the end of an array",
        "Removes an element from the beginning of an array",
        "Executes a function once for each element in an array",
        "Reverses the order of the elements in an array",
      ],
      correctAnswer: 2,
    },
    
    {
      question: "What is the difference between == and === operators in JavaScript?",
      choices: [
        "They are interchangeable",
        "== performs a strict comparison, while === performs a loose comparison",
        "=== performs a strict comparison, while == performs a loose comparison",
        "They both perform the same type of comparison",
      ],
      correctAnswer: 2,
    },

    {
      "question": "Which of the following is used to iterate over the properties of an object?",
      "choices": [
        "for loop",
        "while loop",
        "for...in loop",
        "for...of loop"
      ],
      "correctAnswer": 2
    },
    
    {
      question: "Which of the following is not a data type in JavaScript?",
      choices: [
        "Boolean",
        "String",
        "Number",
        "Character",
      ],
      correctAnswer: 3,
    },
    
    {
      question: "What is the output of the following code: console.log('5' + 5);",
      choices: [
        "'10'",
        "10",
        "'55'",
        "Error",
      ],
      correctAnswer: 2,
    },
    
    {
      question: "Which of the following is not a valid way to create a JavaScript array?",
      choices: [
        "var arr = []",
        "var arr = new Array()",
        "var arr = Array()",
        "var arr = {1, 2, 3}",
      ],
      correctAnswer: 3,
    },
    
    {
      "question": "What is the purpose of the `Promise` object in JavaScript?",
      "choices": [
        "To handle synchronous operations.",
        "To manage asynchronous operations.",
        "To create new HTML elements dynamically.",
        "To perform arithmetic operations."
      ],
      "correctAnswer": 1
    },

    {
      question: "Arrays in JavaScript are defined by which of the following statements?",
      choices: [
        "It is an ordered list of values",
        "It is an ordered list of objects",
        "It is an ordered list of strings",
        "It is an ordered list of functions",
      ],
      correctAnswer: 0,
    },
    
    {
      question: "What is the correct syntax for a 'for loop' in JavaScript?",
      choices: [
        "for (var i = 0; i < 5; i++)",
        "for (i = 0; i < 5; i++)",
        "for (var i = 5; i > 0; i-)",
        "for (i = 5; i > 0; i-)",
      ],
      correctAnswer: 0,
    },  
    
    {
      question: "Which of the following is not a primitive data type in JavaScript?",
      choices: [
        "String",
        "Number",
        "Boolean",
        "Array",
      ],
      correctAnswer: 3,
    },
      
    {
      question: "What is the output of the following code: console.log('3' + 2);",
      choices: [
        "'32'",
        "'5'",
        "5",
        "Error",
      ],
      correctAnswer: 0,
    },
  
    {
      question: "What does the 'typeof' operator in JavaScript do?",
      choices: [
        "Returns the data type of a variable or expression",
        "Compares the types of two variables",
        "Assigns a type to a variable",
        "Checks if a variable is defined",
      ],
      correctAnswer: 0,
    },
  
    {
      question: "Which function is used to convert a string to an integer in JavaScript?",
      choices: [
        "parseInt()",
        "stringToInt()",
        "toInteger()",
        "convertToInt()",
      ],
      correctAnswer: 0,
    },
  
    {
      question: "What is the purpose of the 'let' keyword in JavaScript?",
      choices: [
        "Declares a constant variable",
        "Declares a block-scoped variable",
        "Declares a global variable",
        "Declares a variable with function scope",
      ],
      correctAnswer: 1,
    },
  
    {
      question: "What does the 'NaN' in JavaScript stand for?",
      choices: [
        "Not a Null",
        "Not a Number",
        "No and Null",
        "Null and Nothing",
      ],
      correctAnswer: 1,
    },
  
    {
      question: "What is the purpose of the 'const' keyword in JavaScript?",
      choices: [
        "Declares a constant variable",
        "Declares a block-scoped variable",
        "Declares a global variable",
        "Declares a variable with function scope",
      ],
      correctAnswer: 0,
    },
  
    {
      question: "Which method is used to add elements to the end of an array in JavaScript?",
      choices: [
        "push()",
        "add()",
        "append()",
        "insert()",
      ],
      correctAnswer: 0,
    },
  
    {
      question: "What does the 'slice()' method in JavaScript do?",
      choices: [
        "Removes elements from an array",
        "Returns a portion of an array",
        "Reverses the order of elements in an array",
        "Adds elements to the end of an array",
      ],
      correctAnswer: 1,
    },
  
    {
      question: "Which event is triggered when a user clicks on an HTML element?",
      choices: [
        "mouseover",
        "click",
        "keydown",
        "change",
      ],
      correctAnswer: 1,
    },
  
    {
      question: "What is the purpose of the 'splice()' method in JavaScript?",
      choices: [
        "To add or remove elements from an array",
        "To sort the elements of an array",
        "To concatenate two arrays",
        "To reverse the order of elements in an array",
      ],
      correctAnswer: 0,
    },
  
    {
      question: "What does the 'JSON' stand for in JavaScript?",
      choices: [
        "JavaScript Object Notation",
        "JavaScript Operation Network",
        "JavaScript Object Navigator",
        "JavaScript Order Notation",
      ],
      correctAnswer: 0,
    },
  
    {
      question: "Which function is used to round a number to the nearest integer in JavaScript?",
      choices: [
        "ceil()",
        "floor()",
        "round()",
        "truncate()",
      ],
      correctAnswer: 2,
    },
  
    {
      question: "Which of the following is the correct way to declare a JavaScript object?",
      choices: [
        "var obj = {};",
        "var obj = [];",
        "var obj = ();",
        "var obj = <>;"
      ],
      correctAnswer: 0
    },

    {
      question: "Which keyword is used to declare a constant in JavaScript?",
      choices: [
        "const",
        "let",
        "var",
        "constant",
      ],
      correctAnswer: 0,
    },
  
    {
      question: "Which statement is used to exit a switch statement in JavaScript?",
      choices: [
        "break",
        "exit",
        "continue",
        "return",
      ],
      correctAnswer: 0,
    },
  
    {
      question: "Which event is triggered when an HTML form is submitted?",
      choices: [
        "submit",
        "submitForm",
        "formSubmit",
        "formSubmitEvent",
      ],
      correctAnswer: 0,
    },
  
    {
      question: "What is the purpose of the 'charAt()' method in JavaScript?",
      choices: [
        "To concatenate two strings",
        "To extract a character at a specified index from a string",
        "To check if a string contains a specific character",
        "To convert a string to uppercase",
      ],
      correctAnswer: 1,
    },
    {
      question: "Which statement is used to define a function in JavaScript?",
      choices: [
        "defineFunction",
        "function",
        "func",
        "def",
      ],
      correctAnswer: 1,
    },
  
    {
      question: "Which operator is used for string concatenation in JavaScript?",
      choices: [
        "+",
        "-",
        "*",
        "/",
      ],
      correctAnswer: 0,
    },
  
    {
      question: "Which method is used to remove the last element from an array in JavaScript?",
      choices: [
        "removeLast()",
        "pop()",
        "shift()",
        "slice()",
      ],
      correctAnswer: 1,
    },
  
    {
      question: "Which statement is used to define a constant in JavaScript?",
      choices: [
        "const",
        "let",
        "var",
        "constant",
      ],
      correctAnswer: 0,
    }
   
  ];
  
  console.log(quizData.length);
  export default quizData;
  


