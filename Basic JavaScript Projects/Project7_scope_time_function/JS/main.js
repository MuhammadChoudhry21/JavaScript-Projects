//Writing a function with a local variable and then writing a
//function for a global variable to get an error 
X = 50 + 50;
function myMultiply() {
    document.write(X);  
}
 
//Now for the local variable function error
function localFunction() {
    console.log(X + 10);  
}

//Writing an if method with date().gethours()
function get_Datez() {
    if (new Date().getHours() < 20) {
        document.getElementById("Greetingz").innerHTML = "Hey how are you today";
    }
}

//writing my own if statement
function myOwnIf() {
    X = 10
    if (X > 5) {
        document.getElementById("My_If").innerHTML = "X is greater than 5.";
    }
}

//creating an if and else statement
function function_Age() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "Youre old enough to vote";
    }
    else {
        Vote = "Youre not old enough to vote";
    }
    document.getElementById("Whats your Age?").innerHTML = Value;
}

//creating else if statement
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time"
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}
