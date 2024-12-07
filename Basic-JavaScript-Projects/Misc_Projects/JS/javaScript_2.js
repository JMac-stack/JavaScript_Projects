function validate() {
    let v1 = document.forms["form1"]["fName"].value;
    let v2 = document.forms["form1"]["lName"].value;
    if (v1 == "" || v2 == "") {
        alert("Please enter both First and Last names.");
        return false;
    }
}