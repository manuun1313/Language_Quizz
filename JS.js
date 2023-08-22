
let questions = [
  {
    title: "gato",
    alternatives: ["dog", "cat", "bird", "fish"],
    correctAnswer: 1,
  },
  {
    title: "ave",
    alternatives: ["mouse", "hamster", "lizard", "bird"],
    correctAnswer: 3,
  },
  {
    title: "rata",
    alternatives: ["cat", "fish", "rat", "shark"],
    correctAnswer: 2,
  },
  {
    title: "mosca",
    alternatives: ["fly", "puma", "fish", "dog"],
    correctAnswer: 0,
  },
];

let app = {
  start: function () {
    this.currentPosition = 0;
    this.score = 0; // property to keep track of score

    // get alternatives
    let alts = document.querySelectorAll(".alternative");

    alts.forEach((element, index) => {
      element.addEventListener("click", () => {
        // check correct answer
        this.checkAnswer(index);
      });
    });

    // refresh stats
    this.updateStats();

    // show first question
    this.showQuestion(questions[this.currentPosition]);
  },

  showQuestion: function (q) {
    // show question title
    let titleDiv = document.getElementById("title");
    titleDiv.textContent = q.title;

    // show alternatives
    let alts = document.querySelectorAll(".alternative");

    alts.forEach(function (element, index) {
      element.textContent = q.alternatives[index];
    });
  },

  checkAnswer: function (userSelected) {
    let currentQuestion = questions[this.currentPosition];

    if (currentQuestion.correctAnswer == userSelected) {
      // correct
      console.log("correct");
      this.score++;
      this.showResult(true);
    } else {
      // not correct
      console.log("wrong");
      this.showResult(false);
    }

    // refresh stats
    this.updateStats();

    // increase position
    this.increasePosition();

    // show next question
    this.showQuestion(questions[this.currentPosition]);
  },

  increasePosition: function () {
    this.currentPosition++;

    if (this.currentPosition == questions.length) {
      this.currentPosition = 0;
    }
  },

  updateStats: function () {
    // select the score element
    let scoreDiv = document.getElementById("score");
    // display the score using a template literal
    scoreDiv.textContent = `Your score: ${this.score}`;
  },

  showResult: function (isCorrect) {
    let resultDiv = document.getElementById("result");
    let result = "";

    // checks
    if (isCorrect) {
      result = "Correct Answer";
    } else {
      // get the current question
      let currentQuestion = questions[this.currentPosition];

      // get correct answer (index)
      let correctAnswerIndex = currentQuestion.correctAnswer;

      // get correct answer (text)
      let correctAnswerText = currentQuestion.alternatives[correctAnswerIndex];

      result = `Wrong! Correct answer: ${correctAnswerText}`;
    }

    resultDiv.textContent = result;
  },
};

// initialize the application
app.start();
