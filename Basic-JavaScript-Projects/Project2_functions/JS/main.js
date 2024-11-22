function My_First_Function() { //Function for button click.
    var str = "Thanks for clicking the button.", str2 = "Click";
    str2 += "ed"; //Concatenated using += operator.
    document.getElementById("p1").innerHTML = str; //Changes paragraph text.
    document.getElementById("Button_Text").innerHTML = str2; //Changes button text.
}