// Colour picker function.
function pickColour() {
    let colour = document.getElementById("textIn").value;
    let stringConcat = "You picked the colour ";
    let textOut;
    switch(colour) {
        case "Red":
            textOut = stringConcat.concat("Red.");
        break;
        case "Orange":
            textOut = stringConcat.concat("Orange.");
        break;
        case "Yellow":
            textOut = stringConcat.concat("Yellow.");
        break;
        case "Green":
            textOut = stringConcat.concat("Green.");
        break;
        case "Blue":
            textOut = stringConcat.concat("Blue.");
        break;
        case "Indigo":
            textOut = stringConcat.concat("Indigo.");
        break;
        case "Violet":
            textOut = stringConcat.concat("Violet.");
        break;
        default:
            textOut = "Please enter the colour as is written."
    }
    document.getElementById("textOut").innerHTML = textOut;
}

// Class change function.
function changePFunction() {
    let x = document.getElementsByClassName("p")
    x[0].innerHTML = "This has changed.";
    x[1].innerHTML = "This has also changed.";
}

// Canvas assignment.
const c1 = document.getElementById("c1");
const ctx = c1.getContext("2d");

const grd = ctx.createLinearGradient(100,100,250,0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");

ctx.fillStyle = grd;
ctx.fillRect(0, 0, 500, 250);


ctx.fillStyle = "purple";
ctx.fillRect(50, 50, 400, 150);

ctx.beginPath();
ctx.moveTo(0,0);
ctx.lineTo(500,250);
ctx.stroke();

