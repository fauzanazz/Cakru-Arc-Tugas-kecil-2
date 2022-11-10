
// Button
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

function show2() {
    document.getElementById("opening").classList = 'animationMW';
}

function show3() {
    document.getElementById("");
    document.getElementById("");
}
// Transition
function Transition1(){ 
    var animationMW = document.getElementById("opening");
    var change = document.getElementById("MainMenu");
    animationMW.addEventListener("animationend", function() {
        change.style.display = "flex";
        animationMW.style.display = "none";
    });
}

// Main button
function newgame() {
    document.getElementById("MainMenu").style.display = 'none';
    document.getElementById("form").style.display = 'flex';
    localStorage.setItem("score0", 0);
    localStorage.setItem("score1", 0);
}

function continues() {
    document.getElementById("MainMenu").style.display = 'none';
    document.getElementById("MainWindow").style.display = 'flex';
}

// Win and lose
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

// If else script
function gunting() {
    var input1 = "kertas"
    var input2 = "batu"
    var output = bot(input1,input2)
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
    var input1 = "batu"
    var input2 = "gunting"
    var output = bot(input1,input2)
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
    var input1 = "gunting"
    var input2 = "kertas"
    var output = bot(input1,input2)
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

// Bot Randomizer
function bot(input1,input2) {
    var cheat = CC()
    var troll = EE()
    if (cheat == true) {
        var output = input1;
        return output;
    } else if (troll == true) {
        var output = input2;
        return output;
    } else {
        random = Math.floor(Math.random() * 3) + 1;
        if (random == 1) {
            var output = "kertas";
        } else if (random == 2) {
            var output = "batu";
        } else {
            var output = "gunting";
        }
        return output;
    }
}


// Local storage untuk menyimpan score dalam browser
function scorecounter(state) {
    if ("win" == state) {
        localStorage.score1 = Number(localStorage.score1)+1;
    } else if ("lose" == state) {
        localStorage.score0 = Number(localStorage.score0)+1;
    }
    document.getElementById("score").innerHTML = localStorage.score0 + " - " + localStorage.score1;
}

// Name input
function entername() {
    var inputname = document.getElementById("name");
    if (inputname == "") {
        alert("Masukkan nama!");
        return;
    } else {
        localStorage.setItem("name", inputname.value);
        var names = localStorage.getItem("name");
        document.getElementById("username").innerHTML = "BOT - " + names;
        document.getElementById("form").style.display = 'none';
        document.getElementById("MainWindow").style.display = 'flex';
    }
}

function MWNamer() {
    var username = localStorage.getItem("name");
    if (username != null) {
        document.getElementById("MWName").innerHTML = "Halo " + username + " !";
        document.getElementById("continue").disabled = false;
    } else {
        document.getElementById("MWName").innerHTML = "Halo!";
        document.getElementById("continue").disabled = true;
        document.getElementById("continue").style.color = 'grey';
        document.getElementById("continue").style.borderColor = 'grey';
    }
}

// Easter Egg & Cheat Code
function CC() {
    var username = localStorage.getItem("name").toLowerCase();
    if (username == "fauzan") {
        var cheat = true;
        document.getElementById("cheat").innerHTML = "CHEAT ON";
        return cheat;
    }
}

function EE() {
    var username = localStorage.getItem("name").toLowerCase();
    if (username == "rafa") {
        var troll = true;
        document.getElementById("cheat").innerHTML = "TROLL ON";
        return troll;
    }
}
