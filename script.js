const GRID_SIZE = 960;
const CONTAINER = document.querySelector('#container');

let button = document.querySelector('#button');
button.addEventListener("click", (event) => {
    let userInput = prompt("Enter a number between 1 and 100"); 
    if (userInput >= 1 && userInput <= 100 && userInput != 0) {
        createGrid(userInput);
    } else {
        userInput = prompt("Please try again!");
    }
});

function getRandomRbg () {
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = num >> 8 & 255;
    var b = num & 255;
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
};

function setOpacity (square) {
    let currentOpacity = square.style.opacity;
    if (currentOpacity > 0) {
        square.style.opacity = currentOpacity - 0.1;
        currentOpacity -= 0.1;
    }
}

function setStyle (square, squareSize) {
    square.style.width = squareSize + 'px'
    square.style.height = squareSize + 'px';
    square.style.flex = 'initial';
    square.style.opacity = '1';
    square.style.background = getRandomRbg();
}

function createGrid (userInput) {
    CONTAINER.textContent = '';

    let squares = userInput;
    let squareTotal = squares * squares;
    let squareSize = (GRID_SIZE / squares)

    for (let i = 0; i < squareTotal; i++) {
        let square = document.createElement('div');
        setStyle(square, squareSize);
        square.addEventListener("mouseover", (event) => {
            square.style.background = getRandomRbg();
            setOpacity(square);
        });
        CONTAINER.appendChild(square);
    };
}