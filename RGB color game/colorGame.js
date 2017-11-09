var colorSet = generateColorSet(6);
var squareSet = document.querySelectorAll(".square");
// set a random color in the colorSet as a goal
var goal = pickAColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");

// show goal rgb color in the title
colorDisplay.textContent = goal.toUpperCase();
for (var i = 0; i < squareSet.length; i++) {
    // initialize squares with different color
    squareSet[i].style.backgroundColor = colorSet[i];
    // add event listeners
    squareSet[i].addEventListener("click", function() {
        var clicked = this.style.backgroundColor;
        if (clicked == goal) {
            // change all the other color
            changeColor(goal);
            // display the message
            messageDisplay.textContent = "Congradulations!"
        } else {
            // set wrong square colot to the body background color
            this.style.backgroundColor =
            window.getComputedStyle(document.body, null).getPropertyValue('background-color');
            // display the message
            messageDisplay.textContent = "Nah, try again"
        }
    })
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
    return colorSet[random];
}