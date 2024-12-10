function alertNum(listNum) { //Argument will be the html element, using keyword "this".
    dataAttribute = listNum.getAttribute("data-Num"); //gets the string from the data attribute.
    alert("This is number " + dataAttribute + "!")
}