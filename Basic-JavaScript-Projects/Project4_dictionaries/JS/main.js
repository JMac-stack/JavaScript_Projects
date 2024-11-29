function my_Dictionary() { //Function to output value to paragraph.
    var Car ={ //Dictionary declared and assigned.
        Brand:"Ford",
        Model:"Fiesta",
        Colour:"Black",
        Doors:3
    };
    delete Car.Brand; //Deletes KVP.
    document.getElementById("Dictionary").innerHTML = Car.Brand; //Outputs to paragraph using DOM. Will be undefined as KVP has been deleted.
}