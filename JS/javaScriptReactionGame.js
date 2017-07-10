var start = new Date().getTime();
var scores = [];
//alert(start);

function showAtRandomPosition() {
    if (Math.random() > 0.5) {
        document.getElementById("shape").style.borderRadius = "50%";
    } else {
        document.getElementById("shape").style.borderRadius = "0%";
    }

    var randomTop = Math.ceil(Math.random() * 600);
    var randomLeft = Math.ceil(Math.random() * 600);
    var randomWidth = Math.ceil((Math.random() * 200)) + 100;

    showDiffColor();
    document.getElementById("shape").style.top = randomTop;
    document.getElementById("shape").style.left = randomLeft;
    document.getElementById("shape").style.width = randomWidth;
    document.getElementById("shape").style.height = randomWidth;
    document.getElementById("shape").style.display = "block";
    start = new Date().getTime();
}

function showDiffColor() {
    var coding = '0123456789ABCDEF'.split('');
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += coding[Math.floor(Math.random() * 16)];
    }
    document.getElementById("shape").style.backgroundColor = color;

}

function showAfterDelay() {
    setTimeout(showAtRandomPosition, Math.random() * 2000);

}

Array.min = function (array) {
    return Math.min.apply(Math, array);
}

document.getElementById("shape").onclick = function () {
    document.getElementById("shape").style.display = "none";
    var end = new Date().getTime();
    var timetaken = (end - start) / 1000;

    scores.push(timetaken);

    var best = Array.min(scores);
    document.getElementById("resultNote").innerHTML = timetaken + "s";
    document.getElementById("bestScore").innerHTML = best;
    showAfterDelay();
}
