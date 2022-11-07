function hide() {
    document.getElementById("page1").style.display = 'none';
    document.getElementById("page3").style.display = 'none';
    document.getElementById("win").style.display = 'none';
    document.getElementById("lose").style.display = 'none';
    document.getElementById("draw").style.display = 'none';
    document.getElementById("page2").style.display = 'flex';
    document.getElementById("output").style.display = 'hidden';
}

function show() {
    document.getElementById("page1").style.display = 'flex';
    document.getElementById("page2").style.display = 'none';
    document.getElementById("page3").style.display = 'flex';
    document.getElementById("output").style.display = 'flex';
}

function win() {
    document.getElementById("win").style.display = 'flex';
    document.getElementById("page1").style.display = 'flex';
    document.getElementById("page2").style.display = 'none';
}

function lose() {
    document.getElementById("lose").style.display = 'flex';
    document.getElementById("page1").style.display = 'flex';
    document.getElementById("page2").style.display = 'none';
}

function draw() {
    document.getElementById("draw").style.display = 'flex';
    document.getElementById("page1").style.display = 'flex';
    document.getElementById("page2").style.display = 'none';
}


function gunting() {
    var output = bot()
    if (output == "gunting") {
        draw()
        document.getElementById("img1").src="../assets/img/Pon.png";
    } else if (output == "kertas") {
        win()
        scorecounter("win")
        document.getElementById("img1").src="../assets/img/Ken.png";
    } else {
        lose()
        scorecounter("lose")
        document.getElementById("img1").src="../assets/img/Jan.png";
    }
    document.getElementById("img2").src="../assets/img/Pon.png";
    show()
}

function kertas() {

    var output = bot()
    if (output == "gunting") {
        lose()
        scorecounter("lose")
        document.getElementById("img1").src="../assets/img/Pon.png";
    } else if (output == "kertas") {
        draw()
        document.getElementById("img1").src="../assets/img/Ken.png";
    } else {
        win()
        scorecounter("win")
        document.getElementById("img1").src="../assets/img/Jan.png";
    }
    document.getElementById("img2").src="../assets/img/Ken.png";
    show()
}

function batu() {
    var output = bot()
    if (output == "gunting") {
        win()
        scorecounter("win")
        document.getElementById("img1").src="../assets/img/Pon.png";
    } else if (output == "kertas") {
        lose()
        scorecounter("lose")
        document.getElementById("img1").src="../assets/img/Ken.png";
    } else {
        draw()
        document.getElementById("img1").src="../assets/img/Jan.png";
    }
    document.getElementById("img2").src="../assets/img/Jan.png";
    show() 
}

function bot() {
    random = Math.floor(Math.random() * 3) + 1;
    if (random == 1) {
        var output = "kertas"
    } else if (random == 2) {
        var output = "batu"
    } else {
        var output = "gunting"
    }
    return output;
}

function scorecounter(state) {
    if ("win" == state) {
        localStorage.score1 = Number(localStorage.score1)+1;
    } else if ("lose" == state) {
        localStorage.score0 = Number(localStorage.score0)+1;
    }
    document.getElementById("score").innerHTML = localStorage.score0 + " - " + localStorage.score1;
}
