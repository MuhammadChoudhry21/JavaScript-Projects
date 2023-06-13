//concatenating strings with the concat() method
function concatString() {
    var s1 = "This is ";
    var s2 = "a sentence ";
    var s3 = "concatenated ";
    var s4 = "through js concat method ";
    var entireSentence = s1.concat(s2, s3, s4);
    document.getElementById("Concat_String").innerHTML = entireSentence;
}

//slicing strings using the slice() method
function sliceMethod() {
    var sliceSentence = "My name is Muhammad."
    var sliced_Section = sliceSentence.slice(11, 20);
    document.getElementById("My_Slice").innerHTML = sliced_Section;
}

//returning a number as a string using the toString() method
function toStringFunction() {
    Y = 200;
    document.getElementById("numberToString").innerHTML = Y.toString();
}

//using he toPrecision method to give a length to a number variable
function toPreciseFunction() {
    X = 48941;
    document.getElementById("to_precision").innerHTML = X.toPrecision(4);
}