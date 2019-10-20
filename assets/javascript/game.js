var options = ["a", "b", "c", "d"];
var wins = 0;
var losses = 0;
var chances = 10;

document.onkeyup = function() {
    var userguess = String.fromCharCode(event.keyCode).
    toLowerCase();

    console.log(userguess);

    var psychicGuess = options[Math.floor(Math.random()*options.length)];

    console.log(psychicGuess);

    if (userguess!="a" || userguess!="b" || userguess!="c" ||userguess!="d" || userguess!="e" || userguess!="f" || userguess!="g" || userguess!="h" || userguess!="i" || userguess!="j" || userguess!="k" || userguess!="l" || userguess!="m" || userguess!="n" || userguess!="o" || userguess!="p" || userguess!="q" || userguess!="r" || userguess!="s" || userguess!="t" || userguess!="u" || userguess!="v" || userguess!="w" || userguess!="x"|| userguess!="y" || userguess!="z") {
       alert("please choose a letter!");
        }
        if ((userguess == psychicGuess)) {
            alert("you win!")
        }
        
    }
