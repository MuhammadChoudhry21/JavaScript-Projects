//Creating a function with 2 string variables and adding- 
//text value upon clicking the button on the web page

function button() {
    var buttonVariable1 = "This is the button text!";
    var buttonVariable2 = "<br>This is the second button text!";
    document.getElementById("Button_Text").innerHTML = buttonVariable1 + buttonVariable2;
}

//So we're assing a concatenated string & displaying the variable value
//upon clicking on the web page
function concatenatedString() {
    var firstSentence = "I like Games, ";
    firstSentence += "do you?";
    document.getElementById("operator").innerHTML = firstSentence;
}