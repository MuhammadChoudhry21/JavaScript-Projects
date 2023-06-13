//Ride height assignment
function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride";
}

//Typing in the last step. coding assignment
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Tarail Hawk", 2019, "White and Black");
var Erik = new Vehicles("Ford", "Pinto", 1971, "Mustard");

function courseFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
        "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
        " manufactured in " + Erik_Vehicle_Year;
}

//Utilizing the new keyword
function Person(lastname, height, age) {
    this.person_lastname = lastname;
    this.person_height = height;
    this.person_age = age;
}

var Bob = new Person("Williams", "6ft", "20");
var Adam = new Person("Jatt", "5.4ft", "25");

function myFunction() {
    document.getElementById("New_and_This").innerHTML =
        "Bob's last name is " + Bob.person_lastname + "and he is" + Bob.person_height + " tall." +
        "Bob's friend is Adam and he is " + Adam.person_height + "tall.";
}

//Creating a nested function
function count_Function() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 99;
        function Plus_one() { Starting_point += 1 };
        Plus_one();
        return Starting_point;
    }
}