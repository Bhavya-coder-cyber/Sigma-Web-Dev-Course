/* Create a faulty calculator using JavaScript
This Faulty calculator does following:
1. It takes two numbers as input from the user.
2. It performs wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **

It performs wrong operation 50% of the times.
*/
console.log("Welcome to faulty calculator");

function calculator_faulty(x,y,operator) {
    if (Math.random() < 0.5) {
        if(operator == '+'){
            console.log(x - y);
        }
        else if(operator == '-'){
            console.log(x / y);
        }
        else if(operator == '*'){
            console.log(x + y);
        }
        else if(operator == '/'){
            console.log(x ** y);
        }
        else{
            console.log("Invalid operator");
        }
    }
    else{
        if(operator == '+'){
            console.log(x + y);
        }
        else if(operator == '-'){
            console.log(x - y);
        }
        else if(operator == '*'){
            console.log(x * y);
        }
        else if(operator == '/'){
            console.log(x / y);
        }
        else{
            console.log("Invalid operator");
        }
    }
}
let x = prompt("Enter first no.")
let y = prompt("Enter Second no.")
let operation = prompt("Enter Operation")
calculator_faulty(x,y,operation);