var options = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];
var wins = 0;
var losses = 0;
var chances = 10;
var guesses = [];
var psychicGuess;

function start() {
  psychicGuess = options[Math.floor(Math.random() * options.length)];

  console.log("Computer: " + psychicGuess);
}

start();
document.onkeyup = function () {
  var userguess = String.fromCharCode(event.keyCode).toLowerCase();

  console.log(userguess);

  // var psychicGuess = options[Math.floor(Math.random()*options.length)];

  // console.log("Computer: " + psychicGuess);

  if (
    userguess !== "a" &&
    userguess != "b" &&
    userguess != "c" &&
    userguess != "d" &&
    userguess != "e" &&
    userguess != "f" &&
    userguess != "g" &&
    userguess != "h" &&
    userguess != "i" &&
    userguess != "j" &&
    userguess != "k" &&
    userguess != "l" &&
    userguess != "m" &&
    userguess != "n" &&
    userguess != "o" &&
    userguess != "p" &&
    userguess != "q" &&
    userguess != "r" &&
    userguess != "s" &&
    userguess != "t" &&
    userguess != "u" &&
    userguess != "v" &&
    userguess != "w" &&
    userguess != "x" &&
    userguess != "y" &&
    userguess != "z"
  ) {
    alert("please choose a letter!");
  }
  if (userguess == psychicGuess) {
    wins++;
    chances = 10;
    guesses = [];
    alert("you win!");
    start();
  } else userguess !== psychicGuess;
  chances--;

  if (chances == 0) {
    losses++;
    chances = 10;
    guesses = [];
    start();
  }

  if (userguess !== psychicGuess) {
    guesses.push(userguess);
    console.log(guesses);
  }

  var html =
    "<img src='assets/images/logo.png'></img>" +
    "<br>" +
    "<img src='assets/images/crystalball.png'></img>" +
    "<br>" +
    // "<audio controls autoplay><source src='assets/audio/wily.mp3' type='audio/mpeg'></audio>" +
    "<h5>Guess what letter I am thinking of</h5>" +
    "<p> Wins: " +
    wins +
    "</p>" +
    "<p>Losses: " +
    losses +
    "</p>" +
    "<p>Gueses Left: " +
    chances +
    "</p>" +
    "<p>You guessed so far: " +
    `${guesses} ` +
    "</p>";

  document.querySelector("#game").innerHTML = html;
};
