var sqaureNum = 6;
var colorSet = generateColorSet(sqaureNum);
var squareSet = document.querySelectorAll(".square");
// set a random color in the colorSet as a goal
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var goal = pickAColor();
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeBtn = document.querySelectorAll(".mode");

// change game mode
for (var i = 0; i < modeBtn.length; i++) {
    modeBtn[i].addEventListener("click", function(){
        // remove class from all mode buttons
        for (var j = 0; j < modeBtn.length; j++) {
            modeBtn[j].classList.remove("selected");
        }
        // add to the current one
        this.classList.add("selected");
        if (this.textContent == "EASY") {
            sqaureNum = 3;
        } else {
            sqaureNum = 6;
        }
        resetGame();
    });
}

// generate new colors when clicking reset
resetButton.addEventListener("click", resetGame);

// show goal rgb color in the title
for (var i = 0; i < squareSet.length; i++) {
    // initialize squares with different color
    squareSet[i].style.backgroundColor = colorSet[i];
    // add event listeners
    squareSet[i].addEventListener("click", function() {
        var clicked = this.style.backgroundColor;
        if (clicked == goal) {
            // change all the other color
            changeColor(goal);
            // change h1 background
            h1.style.backgroundColor = goal;
            // display the message
            messageDisplay.textContent = "Congradulations!"
            resetButton.textContent = "PLAY AGAIN";
        } else {
            // set wrong square colot to the body background color
            this.style.backgroundColor =
            window.getComputedStyle(document.body, null).getPropertyValue('background-color');
            // display the message
            messageDisplay.textContent = "Nah, try again"
        }
    })
}

function resetGame() {
    // generate new colors
    colorSet = generateColorSet(sqaureNum);
    // pick a new goal
    goal = pickAColor();
    // change colors of squares
    for (var i = 0; i < squareSet.length; i++) {
        if (colorSet[i]) {
            squareSet[i].style.display = "block";
            squareSet[i].style.backgroundColor = colorSet[i];
        } else {
            squareSet[i].style.display = "none";
        }
    }
    // reset h1 color to background color
    h1.style.backgroundColor = "deepskyblue";
    // reset messageDisplay disappear
    messageDisplay.textContent = "";
    // reset button text from PLAY AGAIN TO NEW COLORS
    resetButton.textContent = "NEW COLORS";
}

function changeColor(color) {
    // interate all color in the color set
    for (var i = 0; i < colorSet.length; i++) {
        squareSet[i].style.backgroundColor = color;
    }
}

function generateColorSet(n) {
    set = []
    // generate a set with n random number
    for (var j = 0; j < n; j++) {
        // generate a random rgb number
        var randColor = "rgb("
        for (var i = 0; i < 3; i++) {
            var random = Math.floor(Math.random() * 256);
            if (i != 2) {
                randColor = randColor + random + ", ";
            } else {
                randColor = randColor + random;
            }
        }
        randColor += ")"
        set.push(randColor);
    }
    return set;
}

function pickAColor() {
    // pick a random color from colorSet
    var random = Math.floor(Math.random() * colorSet.length);
    // display color;
    colorDisplay.textContent = colorSet[random].toUpperCase();
    return colorSet[random];
}

