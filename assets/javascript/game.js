var options = ["a", "b", "c", "d"];

document.onkeyup = function() {
    var usergueess = String.fromCharCode(event.keyCode).
    toLowerCase();

    console.log(usergueess);

    var psychicGuess = options[Math.floor(Math.random()*options.length)];

    console.log(psychicGuess);

}