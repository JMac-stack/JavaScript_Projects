// Can vote function check if the value of age is less than 18 and then using the ternary opertaor assigns a string. 
function Vote_Function() {
    var Age, Can_Vote;
    Age = document.getElementById("Age").value;
    Can_Vote = (Age < 18) ? "You are too young":"You are old enough";
    document.getElementById("Vote").innerHTML = Can_Vote + " to Vote.";
}
// Object Constructor.
function Vehicle(Make, Model, Year, Colour) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Colour = Colour;
}
// New instances of the Vehicle class.
var Jack = new Vehicle("Dodge","Viper",2020,"Red");
var Emily = new Vehicle("Jeep","Trail Hawk",2010,"White and Black");
var Erik = new Vehicle("Ford","Pinto",1971,"Mustard");
// Function to dislplay values of object.
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Colour + "-coloured " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

// New and This assignment.
// Using This keyword.
function Pet(Animal,Age) {
    this.Animal_Type = Animal;
    this.Animal_Age = Age;
    this.Alive = true;
}
// Using New keyword.
Dog1 = new Pet("Dog",5);
// Function to display in browser.
function dogFunc() {
    document.getElementById("New_and_This").innerHTML = Dog1.Animal_Age;
}

// Nested Function.
function increaseNum() {
    var Num1 = document.getElementById("Nested_Function").innerHTML;
    function addOne(Num) {
        return (Number(Num) + 1);
    }
    Num2 = addOne(Num1);
    document.getElementById("Nested_Function").innerHTML = Num2;
}