"use strict";

let myNumber = Math.floor(Math.random() * 50 + 1);
let yourScore = 10;
let highScore = 0;

document.querySelector("#checkButton").addEventListener("click", checkInput);
document.querySelector("#playAgain").addEventListener("click", newGame);

function success() {
  // Set question mark to number
  document.querySelector("#reveal").innerText = myNumber;
  // Set question mark color to dark green
  document.querySelector("#reveal").style.color = "green";
  // Make input field Read Only
  document.querySelector("#mainInput").readOnly = true;
  // Disable check button
  document.querySelector("#checkButton").disabled = true;
  // Change Background Color to Success
  document.body.style.background = `linear-gradient(to bottom right, #34BE82, #2FDD92)`;
  // Congrats Message
  document.querySelector("#resultIcon").innerText = "🏆";
  document.querySelector("#result").innerText = "Congratulations! You Won 🎉";
}

function lost() {
  // Set question mark to number
  document.querySelector("#reveal").innerText = myNumber;
  // Set question mark color to red
  document.querySelector("#reveal").style.color = "red";
  // Make input field Read Only
  document.querySelector("#mainInput").readOnly = true;
  // Disable check button
  document.querySelector("#checkButton").disabled = true;
  // Change Background Color to Fail
  document.body.style.background = `linear-gradient(to bottom right, #F90716, #FF5403)`;
  // Sorry Message
  document.querySelector("#resultIcon").innerText = "❌";
  document.querySelector("#result").innerText = "Umm! You Lost.. 😞";
}

function reduceScore() {
  yourScore--;
  document.querySelector("#playerScore").innerText = yourScore;
}

function checkZeroScore() {
  if (yourScore === 0) {
    return true;
  } else {
    return false;
  }
}

function setHighScore(score) {
  // Set the high score
  highScore = score;
  document.querySelector("#highest").innerText = highScore;
}

function checkInput() {
  let inputNumber = Number(document.querySelector("#mainInput").value);

  if (inputNumber === 0) {
    document.querySelector("#resultIcon").innerText = "🚫";
    document.querySelector("#result").innerText = "Input can't be empty or 0!!";
  } else if (inputNumber < 1 || inputNumber > 50) {
    document.querySelector("#resultIcon").innerText = "🧨";
    document.querySelector("#result").innerText =
      "Please try value between 1-50";
  } else {
    if (inputNumber === myNumber) {
      success();
      document.querySelector("#playerScore").innerText = yourScore;
      if (yourScore > highScore) {
        setHighScore(yourScore);
      }
    } else if (inputNumber < myNumber) {
      reduceScore();
      if (checkZeroScore()) {
        lost();
      } else {
        document.querySelector("#resultIcon").innerText = "🔻";
        document.querySelector("#result").innerText =
          "Too Low! Try greater value..";
      }
    } else {
      reduceScore();
      if (checkZeroScore()) {
        lost();
      } else {
        document.querySelector("#resultIcon").innerText = "🔺";
        document.querySelector("#result").innerText =
          "Too High! Try lower value..";
      }
    }
  }
}

function newGame() {
  // Set number to question mark
  document.querySelector("#reveal").innerText = "?";
  // Set question mark color to default
  document.querySelector("#reveal").style.color = "#0e153a";
  // Empty Input Field
  document.querySelector("#mainInput").value = "";
  // Make input field editable
  document.querySelector("#mainInput").readOnly = false;
  // Enable check button
  document.querySelector("#checkButton").disabled = false;
  // Change Background Color to Success
  document.body.style.background = `linear-gradient(to bottom right, #0e153a, #192965)`;
  // Congrats Message
  document.querySelector("#resultIcon").innerText = "🎮";
  document.querySelector("#result").innerText = "Start Guessing..";
  // Empty Your Score
  document.querySelector("#playerScore").innerText = "NULL";

  // Remake Number
  myNumber = Math.floor(Math.random() * 50 + 1);
  // Set Your Score to 10
  yourScore = 10;
}
