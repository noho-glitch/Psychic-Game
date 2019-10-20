document.onkeyup = function() {
    var usergueess = String.fromCharCode(event.keyCode).
    toLowerCase();

    console.log(usergueess);

}