//The function name describes the operator that it uses, as required by the assignments.
function Addition() {
    var simple_math = 10 + 9;
    document.getElementById("Math0").innerHTML = `10 + 9 = ${simple_math}`; //Changes the content of the paragraph element using a template string.
}
function Subtraction() {
    var simple_math = 10 - 9;
    document.getElementById("Math1").innerHTML = `10 - 9 = ${simple_math}`;
}
function Multiplication() {
    var simple_math = 2 * 4;
    document.getElementById("Math2").innerHTML = `2 * 4 = ${simple_math}`;
}
function Division() {
    var simple_math = 10 / 2;
    document.getElementById("Math3").innerHTML = `10 / 2 = ${simple_math}`;
}
function MultiOp() {
    var simple_math = (10 + 2) / 2 * 6 - 26;
    document.getElementById("Math4").innerHTML = `(10 + 2) / 2 * 6 - 26 = ${simple_math}`;
}
function Modulus() {
    var simple_math = 20 % 3;
    document.getElementById("Math5").innerHTML = `The remainder of 20 % 3 is ${simple_math}`;
}
function Negation() {
    var simple_math = 10;
    document.getElementById("Math6").innerHTML = `When the nagation operator is used on 10 it becomes ${-simple_math}`;
}
function Increment() {
    var simple_math = 1;
    simple_math++;
    document.getElementById("Math7").innerHTML = `With the Increment operator 1 becomes ${simple_math}`;
}
function Decrement() {
    var simple_math = 100;
    simple_math--;
    document.getElementById("Math8").innerHTML = `With the decrement operator 100 becomes ${simple_math}`;
}
function Random() {
    var simple_math = Math.random();
    document.getElementById("Math9").innerHTML = `Here is a random number: ${simple_math}`;
}