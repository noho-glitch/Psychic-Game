var options = ["a", "b", "c", "d"];

document.onkeyup = function() {
    var usergueess = String.fromCharCode(event.keyCode).
    toLowerCase();

    console.log(usergueess);

    var psychicGuess = options[Math.floor(Math.random()*options.length)];

    console.log(psychicGuess);

    if (userguesss!=='a' || usergueess!=='b' || usergueess!=='c' || usergueess!=='d' || usergueess!=='e' || usergueess!=='f' || usergueess!=='g' || usergueess!=='h' || usergueess!=='i' || usergueess!=='j' || usergueess!=='k' || usergueess!=='l' || usergueess!=='m' || usergueess!=='n' || usergueess!=='o' || usergueess!=='p' || usergueess!=='q' || usergueess!=='r' || usergueess!=='s' || usergueess!=='t' || usergueess!=='u' || usergueess!=='v' || usergueess!=='w' || usergueess!=='x' || usergueess!=='y' || usergueess!=='z') {
        alert("please choose a letter!");
    } else {
        alert("chosen correctly!");
    }
}