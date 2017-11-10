var sqaureNum = 6;
var colorSet = generateColorSet(sqaureNum);
var squareSet = document.querySelectorAll(".square");
// set a random color in the colorSet as a goal
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var goal = pickAColor();
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

// switch between easy and hard mode
easyBtn.addEventListener("click", function() {
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    // genrete new colors
    sqaureNum = 3;
    colorSet = generateColorSet(sqaureNum);
    // pick a new goal
    goal = pickAColor();
    for (var i = 0; i < squareSet.length; i++) {
        // make the extra squares disappear
        if (i >= colorSet.length) {
            squareSet[i].style.display = "none";
        } else {
            squareSet[i].style.backgroundColor = colorSet[i];
        }
    }
})

hardBtn.addEventListener("click", function() {
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    // genrete new colors
    sqaureNum = 6;
    colorSet = generateColorSet(sqaureNum);
    // pick a new goal
    goal = pickAColor();
    for (var i = 0; i < squareSet.length; i++) {
        // make the extra squares disappear
        squareSet[i].style.backgroundColor = colorSet[i];
        if (i >= 3) {
            squareSet[i].style.display = "block";
        }
    }
})

// generate new colors when clicking reset
resetButton.addEventListener("click", function() {
    // generate new colors
    colorSet = generateColorSet(sqaureNum);
    // pick a new goal
    goal = pickAColor();
    // change colors of squares
    for (var i = 0; i < squareSet.length; i++) {
        squareSet[i].style.backgroundColor = colorSet[i];
    }
    // reset h1 color to background color
    h1.style.backgroundColor = "deepskyblue";
    // reset messageDisplay disappear
    messageDisplay.textContent = "";
    // reset button text from PLAY AGAIN TO NEW COLORS
    resetButton.textContent = "NEW COLORS";
})

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
    var n = colorSet.length;
    generateColorSet(n);
    var newGoal = pickAColor();
    return newGoal;
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

