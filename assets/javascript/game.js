var options = ["a", "b", "c", "d"];
var wins = 0;
var losses = 0;
var chances = 10;
var guesses = "";

document.onkeyup = function() {
    var userguess = String.fromCharCode(event.keyCode).
    toLowerCase();

    console.log(userguess);

    var psychicGuess = options[Math.floor(Math.random()*options.length)];

    console.log(psychicGuess);

    if ((userguess!="a" || userguess!="b" || userguess!="c" ||userguess!="d" || userguess!="e" || userguess!="f" || userguess!="g" || userguess!="h" || userguess!="i" || userguess!="j" || userguess!="k" || userguess!="l" || userguess!="m" || userguess!="n" || userguess!="o" || userguess!="p" || userguess!="q" || userguess!="r" || userguess!="s" || userguess!="t" || userguess!="u" || userguess!="v" || userguess!="w" || userguess!="x"|| userguess!="y" || userguess!="z")
    ) {
       alert("please choose a letter!");
        }
        if ((userguess == psychicGuess)) {
            wins++;
            alert("you win!")
        }

        else ((userguess !== psychicGuess)) 
            chances--; guesses == userguess;
        
        if ((chances == 0))
            losses++;
        
      
        
        var html = "<img src='assets/images/logo.png'></img>" +
        "<br>" +
        "<img src='assets/images/crystalball.png'></img>" +
        "<br>" +
        "<audio controls autoplay><source src='assets/audio/wily.mp3' type='audio/mpeg'></audio>" +
        "<h5>Guess what letter I am thinking of</h5>" +
        "<p> Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Gueses Left: " + chances + "</p>" +
        "<p>You guessed so far: " + guesses + "</p>";

        document.querySelector("#game").innerHTML = html;

    }
