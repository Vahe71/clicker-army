const replace = document.querySelector('.replace');
const replaceButton = document.querySelector('.replace button');
console.log(replace);
const startGameButton = document.querySelector('.menu .start.button');
const infoMenu = document.querySelector('.information');
const infoButton = document.querySelector('.menu .info.button');
infoButton.onclick = () => infoMenu.style.top = 0;
const infoBack = document.querySelector('.information .back');
infoBack.onclick = () => infoMenu.style.top = '100%';
const display = document.querySelector('.game #display');
const button = document.querySelector('.game #button');
const gameStart = document.querySelector('.gamestart');
const menu = document.querySelector('.menu');
startGameButton.onclick = () => {
    gameStart.style.top = 0;
    menu.style.top = 100 + '%';
};
const goToGame = document.querySelector('.gamestart .goToGame');
const backToMenu = document.querySelector('.gamestart .backtomenu');
backToMenu.onclick = () => {
    gameStart.style.top = '100%';
    menu.style.top = 0;
};
const game = document.querySelector('.game');
const hert = document.querySelector('.game .hert');
const nextPlayer = document.querySelector('.game .nextPlayer');
const inputPlayer1 = document.querySelector('.gamestart .div1 #player1');
const inputPlayer2 = document.querySelector('.gamestart .div2 #player2');
const buttonPlayer1 = document.querySelector('.gamestart .div1 .reg1');
const buttonPlayer2 = document.querySelector('.gamestart .div2 .reg2');
let namePlayer1;
let namePlayer2;
const gameItog = document.querySelector('.gameItog');
const gameItogBack = document.querySelector('.gameItog .background');
const gameItogLeftSolider = document.querySelector('.gameItog .leftSolider');
const gameItogLeftSoliderDisplay = document.querySelector('.gameItog .leftSolider .display');
const gameItogRightSolider = document.querySelector('.gameItog .rightSolider');
const gameItogRightSoliderDisplay = document.querySelector('.gameItog .rightSolider .display');
const gameBack = document.querySelector('.game .back');
gameBack.onclick = () => {
    gameStart.style.top = '0';
    game.style.top = '100%';
};

buttonPlayer1.onclick = () => {
    namePlayer1 = inputPlayer1.value;
    console.log('player1 = ' + namePlayer1);
    if (namePlayer1 == '') {
        buttonPlayer1.style.backgroundColor = 'red';
    } else {
        buttonPlayer1.style.animation = 'button 0.3s linear forwards';
        buttonPlayer1.style.backgroundColor = 'greenyellow';
    }
};
buttonPlayer2.onclick = () => {
    namePlayer2 = inputPlayer2.value;
    console.log('player2 = ' + namePlayer2);
    if (namePlayer2 == '') {
        buttonPlayer2.style.backgroundColor = 'red';
    } else {
        buttonPlayer2.style.animation = 'button 0.3s linear forwards';
        buttonPlayer2.style.backgroundColor = 'greenyellow';
    }
};

goToGame.onclick = () => {
    if (namePlayer1 != '' && namePlayer2 != '' && namePlayer1 != undefined && namePlayer2 != undefined) {
        gameStart.style.top = '100%';
        game.style.top = 0;
    }
    namePlayer1 == '' || namePlayer1 == undefined ? buttonPlayer1.style.backgroundColor = 'red': '';
    namePlayer2 == '' || namePlayer2 == undefined ? buttonPlayer2.style.backgroundColor = 'red' : '';
    players == 0 ? hert.innerHTML = `Հերթը ${namePlayer1}-ինն է` : '';
    console.log('Game Started');
};

// game

let players = 0; // 0 - player1, 1 - player2
let clicksPlayer1 = 0;
let clicksPlayer2 = 0;
let time = 5;
let cur = 0;

let timeBool = false;
let set = setInterval(() => {
    if (timeBool && players == cur) {
        time--;
        display.innerText = time;
        if (time == 0) {
            timeBool = false;
            nextPlayer.style.display = "block";
            button.style.pointerEvents = 'none';
            if (next == 1) {
                nextPlayer.style.display = "none";
            }
            setTimeout(() => {
                if (players == 1 && time == 0) {
                    gameItog.style.zIndex = 10;
                    gameItogBack.style.opacity = '0.7';
                    gameItogLeftSolider.style.left = '15%';
                    gameItogRightSolider.style.right = '15%';
                    button.style.bottom = '-100%';
                    hert.style.top = '-100%';
                    display.style.top = '-100%';
                    gameItogLeftSoliderDisplay.innerText = namePlayer1 + ' ' + clicksPlayer1 + ' clicks';
                    gameItogRightSoliderDisplay.innerText = namePlayer2 + ' ' + clicksPlayer2 + ' clicks';
                    setTimeout(() => {
                        gameItogLeftSoliderDisplay.style.opacity = '1';
                        gameItogRightSoliderDisplay.style.opacity = '1';
                    }, 2500);
                    setTimeout(() => {
                        if (clicksPlayer1 > clicksPlayer2) {
                            gameItogRightSolider.style.opacity = 0;
                            gameItogLeftSoliderDisplay.innerText = namePlayer1 + ' ' + clicksPlayer1 + ' clicks' + ' ՀԱՂԹԱՆԱԿ!';
                            gameItogLeftSoliderDisplay.style.color = 'greenyellow';
                            gameItogRightSoliderDisplay.style.color = 'red';
                        } else if (clicksPlayer2 > clicksPlayer1) {
                            gameItogLeftSolider.style.opacity = 0;
                            gameItogRightSoliderDisplay.innerText = namePlayer2 + ' ' + clicksPlayer2 + ' clicks' + ' ՀԱՂԹԱՆԱԿ!';
                            gameItogRightSoliderDisplay.style.color = 'greenyellow';
                            gameItogLeftSoliderDisplay.style.color = 'red';
                        } else if (clicksPlayer1 == clicksPlayer2) {
                            gameItogLeftSoliderDisplay.innerText = namePlayer1 + ' ոչ ոքի';
                            gameItogRightSoliderDisplay.innerText = namePlayer2 + ' ոչ ոքի';
                            gameItogLeftSoliderDisplay.style.color = 'red';
                            gameItogRightSoliderDisplay.style.color = 'red';
                        }
                        setTimeout(() => {
                            replace.style.bottom = '20px';
                        }, 3000);
                    }, 5000);
                }
            }, 500);
        }
    }
}, 1000);

button.onclick = () => {
    if (players == 0) {
        clicksPlayer1++;
       console.log(namePlayer1 + ' ' + clicksPlayer1 + ' clicks');
    } else if (players == 1) {
        clicksPlayer2++;
        console.log(namePlayer2 + ' ' + clicksPlayer2 + ' clicks');
    }
    
    timeBool = true;
};


let next = 0;
nextPlayer.onclick = () => {
    nextPlayer.style.display = "none";
    hert.innerHTML = `Հերթը ${namePlayer2}-ինն է`;
    players = 1;
    // counterSpan.textContent = clicksPlayer2;
    time = 5;
    display.innerText = time;
    cur = 1;
    button.style.pointerEvents = 'auto';
    next = 1;
};

replaceButton.onclick = () => {
    players = 0;
    next = 0;
    hert.innerText = `Հերթը ${namePlayer1}-ինն է`;
    time = 5;
    display.innerText = time;
    cur = 0;
    clicksPlayer1 = 0;
    clicksPlayer2 = 0;
    replace.style.bottom = '-100px';
    gameItogBack.style.opacity = 0;
    gameItogLeftSolider.style.left = '-500px';
    gameItogRightSolider.style.right = '-500px';
    gameItog.style.zIndex = '-3';
    button.style.bottom = '50%';
    hert.style.top = '3%';
    display.style.top = '25%';
    button.style.pointerEvents = 'auto';
    gameItogRightSolider.style.opacity = 1;
    gameItogLeftSolider.style.opacity = 1;
    gameItogLeftSoliderDisplay.style.opacity = 0;
    gameItogLeftSoliderDisplay.style.color = '#fff';
    gameItogRightSoliderDisplay.style.opacity = 0;
    gameItogRightSoliderDisplay.style.color = '#fff';
}
























