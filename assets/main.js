function hide() {
    document.getElementById("page1").style.display = 'none';
    document.getElementById("page2").style.display = 'flex';
}

function jan() {
    bot()
}

function ken() {
    bot()
    
}

function pon() {
    bot()
    
}

function bot() {
    Math.floor(Math.random() * 3) + 1;
}