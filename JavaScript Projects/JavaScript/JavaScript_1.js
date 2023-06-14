//creating a switch statement
function Fruit_Function() {
    var Fruits_Output;
    var Fruits = document.getElementById("Fruit_Input").value;
    var Fruit_String = " is a great fruit!"
    switch (Fruits) {
        case "Apples":
        Fruits_Output = "Apples" + Fruit_String;
        break;
        case "Oranges":
        Fruits_Output = "Oranges" + Fruit_String;
        break;
        case "Oranges":
        Fruits_Output = "Bananas" + Fruit_String;
        break;
        default:
        Fruits_Output = "Please enter a fruit exactly as written above in the list.";
    }
    document.getElementById("Output").innerHTML = Fruits_Output;
}

//Utilizing the document.getElementsByClassName() method
function classFunction() {
    var textChange = document.getElementsByClassName("text_class");
    textChange[1].innerHTML = "The text has been changed";
}

//Gradient color challenge
var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
//creating gradient
var grd = ctx.createLinearGradient(20, 0, 200, 0);
grd.addColorStop(0, "blue");
grd.addColorStop(1, "white");   
//fill gradient
ctx.fillStyle = grd;
ctx.fillRect(0, 0, 900, 300);