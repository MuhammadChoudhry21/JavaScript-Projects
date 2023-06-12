//Creating an addition function
function addition_Function() {
    var mathVariable1 = 10 + 10;
    document.getElementById("Math").innerHTML = "10 + 10 = " + mathVariable1;
}

//Creating a subtraction function
function subtraction_Function() {
    var mathVariable2 = 100 - 50;
    document.getElementById("Math_Subtraction").innerHTML = "100 - 50 = " + mathVariable2;
}

//Creating a multiplication function
function multiplication_Function() {
    var mathVariable3 = 6 * 3;
    document.getElementById("Math_Multiplication").innerHTML = "6 x 3 = " + mathVariable3;
}

//Creating a division function
function division_Function() {
    var mathVariable4 = 12 / 4;
    document.getElementById("Math_Division").innerHTML = "12 / 4 = " + mathVariable4;
}

//Creating multiple operations function
function multiple_operations_Function() {
    var mathVariable5 = (5 + 5) * 10 / 2 - 10;
    document.getElementById("Multiple_Operations").innerHTML = "5 plus 5, multiplied by 10, divided by 2, and subtract 10 equals "
    + mathVariable5;
}

//Creating a modulus operator function
function modulus_operator_Function() {
    var mathVariable6 = 12 % 5;
    document.getElementById("Modulus_Operator").innerHTML = "If you divide 12 by 5, you get a remainder of "
    + mathVariable6;
}

//Creating a negation operator function
function negation_operator_Function() {
    var mathVariable7 = 35;
    document.getElementById("Negation_Operation").innerHTML = -mathVariable7;
}

//Creating an increment & decrement syntax
var increment = 99;
increment++;
document.write("This is my increment: " + increment + ".");

var decrement = 100;
decrement--;
document.write("\nThis is my decrement: " + decrement + ".");

//Creating the math.ranodom function
window.alert(Math.random() * 5000)

//Utilizing a math object & a math methods
window.alert(Math.PI)
window.alert(Math.round(9.89))
