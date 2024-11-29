// concat() method.
function func1() {
    var string1 = "This ";
    var string2 = "is a ";
    var string3 = "string";
    var sentence = string1.concat(string2,string3);
    document.getElementById("Concat").innerHTML = sentence;
}

// slice() method.
function func2() {
    var Full = "This is the full string.";
    var Part = Full.slice(12,16);
    document.getElementById("Slice").innerHTML = Part;
}

// toUpperCase() method.
function func3() {
    var Full = "This is the full string.";
    var Upper = Full.toUpperCase();
    document.getElementById("Touppercase").innerHTML = Upper;
}

// search() method.
function func4() {
    var Full = "This is the full string.";
    var Position = Full.search("full");
    document.getElementById("Search").innerHTML = Position;
}

// tostring() method.
function func5() {
    var Num = 1;
    var NumString = Num.toString();
    document.getElementById("Tostring").innerHTML = NumString;
}

//toPrecision() method.
function func6() {
    var Num = 11111.11111;
    var NumPre = Num.toPrecision(6);
    document.getElementById("Toprecision").innerHTML = NumPre;
}

// toFixed() method.
function func7() {
    var Num = 5.11677;
    var NumString = Num.toFixed(2);
    document.getElementById("Tofixed").innerHTML = NumString;
}

// valueOf() method.
function func8() {
    var string1 = "String";
    var string2 = string1.valueOf();
    document.getElementById("Valueof").innerHTML = string2;
}