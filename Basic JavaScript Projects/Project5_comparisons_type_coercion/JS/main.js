//Utilizing the typeof
document.write(typeof 89);

//Utilizing the type coercion
document.write("\n100" + 50);

//Expression combining a string and a number
Q = "Hi, my favorite number is" + 10    
document.write(Q)

//Displaying an infinity and negative infinity number
document.write(2E555);

//Displaying a negative infinity number
document.write(-3E999);

//Using Boolean logic
document.write(10 > 2);
document.write(10 <= 9);
document.write(10 != 10);
document.write(70 >= 70);

//Performing a math operation using the console.log function
console.log(789 + 10);

//Utilizing the double equal sign to return true or false
document.write((125 + 64) == 200);
document.write(99 == 99);

//Utilizing the triple equal sign to return true or false
x = 500
y = 500
document.write(x === y);

M = 999
N = "Eight"
document.write(M === N);

A = "Six"
B = 6
document.write(A === B);

E = 648
F = 789
document.write(E === F);

//Utilizing the operators AND + OR
document.write(10 > 10 && 65 < 10);
document.write(20 != 19 || 98 <= 24); 

//Utilizing the operator NOT
document.write(!10 > 5);

function not_Function() {
    document.getElementById("Not").innerHTML = !(1 > 12);
}