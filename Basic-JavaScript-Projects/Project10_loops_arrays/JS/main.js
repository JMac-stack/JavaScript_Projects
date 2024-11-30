// While loop gets html element then concatenates an incremented counter and a line break each iteration.
var counter = 0;
function Call_Loop() {
    while (counter < 10) {
        string = document.getElementById("Loop").innerHTML;
        counter ++;
        document.getElementById("Loop").innerHTML = string + counter + "<br>";
        console.log(string.length) // String length property.
    }
}

//For Loop.
var instruments = ["Triangle","Drum","Guitar","Maraca"];
var content = "";
var x = 0;
console.log(instruments[x]);
function For_Loop() {
    for (x = 0; x < instruments.length; x++) {
        content += instruments[x] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = content;
}

// Array function.
function array_Function() {
    let colours = []; // Using let keyword.
    colours[0] = "red";
    colours[1] = "blue";
    colours[2] = "green";
    colours[3] = "purple";
    document.getElementById("Array").innerHTML = colours[3];
}

// Constant function.
const Car = {colour:"Blue",brand:"Ford",wheels:4};
function constant_Function() {
    Car.brand = "Lexus"; // Changed property value.
    Car.doors = 5; // Add property with a value.
    document.getElementById("constant").innerHTML = Car.colour + "<br>" + Car.brand + "<br>" + Car.doors;
}

// Return Statement
function replaceFunction() {
    document.getElementById("return").innerHTML = returnFunction();
    function returnFunction() {
        return "This string has been returned";
    }
}

// Object Assignment.
let dog = {
    name:"Milo",
    breed:"Pug",
    age:3,
    legs:4,
    description: function() {
        return "Milo is a " + this.age + " year old " + this.breed + "."
    }
}
function objectFunction() {
    document.getElementById("object").innerHTML = dog.description();
}

// Break and Continue Assignment.
let nums = [1,2,3,4,5,6,7,8,9,10]
function breakAndContinueFunction() {
    let string = ""
    for (i=0;i<nums.length;i++) {
        x = nums[i]
        console.log(x);
        if (x == 5) {continue;} // Continue statement skips number 5.
        if (x == 8) {break;} // Break Statement stops before 8.
        string += nums[i];
    }
    document.getElementById("breakAndContinue").innerHTML = string;
}