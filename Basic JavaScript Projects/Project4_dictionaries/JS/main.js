//Creating a function of the Dictionary. The object here is a Sword
function shusui_Function() {
    var Shusui = {
        Edgeness: "Sharp",
        Color: "Black",
        Grade: "Ryo Wazamono",
        Age: 800,
        Weight: "2.6lb"
    };
    delete Shusui.Age
    document.getElementById("Dictionary").innerHTML = Shusui.Age;
}