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