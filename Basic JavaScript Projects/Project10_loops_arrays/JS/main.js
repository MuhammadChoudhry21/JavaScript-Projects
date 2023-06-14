//executing a while loop count
function Call_Loop() {
    var number_Digit = "";
    var Y = 1;
    while (Y < 11) {
        number_Digit += "<br>" + Y;
        Y++;
    }
    document.getElementById("Loop").innerHTML = number_Digit;
}

//executing a for loop
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Fluete"];
var Content = "";
var X;
function for_Loop() {
    for (X = 0; X < Instruments.length; X++) {
    Content += Instruments[X] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

//Utilizing a function with document.getelementbyid method to display a value of an array
function colors_array() {
    var my_Colors = [];
    Color_One[0] = "blue";
    Color_Two[1] = "red";
    Color_Three[2] = "green";
    document.getElementById("my_Array").innerHTML = "My favorite colors are " +
        my_Colors[0] + " and " + my_Colors[1] + ".";    
}

//const keyword assignment
function constant_Function() {
    const Car_Object = { type: "Toyota", color: "Blue", Year: "2016" };
    Car_Object.color = "Black";
    document.getElementById("Constant").innerHTML = "My car is " + Car_Object.type + " of the year " + Car_Object.Year +
        " and it's color is " + Car_Object.color;
}

//utilizing the let keyword
var M = 25;
document.write(M)

{
    let M = 35;
    document.write(M);
}

document.write(M);

//creating an object using let keyword
let plane = {
    make: "Boeing",
    year: "2021",
    color: "white",
    method_function: function () {
        return "I flew on a " + this.year + " " + this.color + " " + this.make + " last week!";
    }
};
document.getElementById("Let_Object").innerHTML = plane.method_function();