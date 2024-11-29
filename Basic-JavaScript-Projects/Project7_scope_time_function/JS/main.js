// Global variable.
var x = 1;
//Local variable.
function localVariable() {
    var y = 1;
    return y;
}
// Function with error, console.log debug.
function errorFunction() {
    console.log(x + y);
}
errorFunction();

// Method Assignment.
// Using new Date().getHours() method.
function Hello() {
    var time = new Date().getHours();
    if (time < 12) {
        document.getElementById("Hello").innerHTML = "Good Morning";
    }else {
        document.getElementById("Hello").innerHTML = "Good Afternoon";
    }
}

// If/Else Assignment.
function foodCheck() {
    food1 = document.getElementById("Food").value;
    if (food1 == "Pizza") {
        document.getElementById("Textout").innerHTML = "Correct Answer."
    } else {
        document.getElementById("Textout").innerHTML = "Wrong Answer."
    }
}

// Else If Assignment.
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}