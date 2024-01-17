let num = prompt("Enter the no. to find its factorial:")
let i,result=1
if (num==0){
    console.log("Factorial is 1.")
}
else if(num<0){
    console.log("Factorial of Negative Numbers doesn't Exist.")
}
else{
for (let i = 1; i <= num; i++) {
    result*=i  
}
console.log(`Factorial is ${result}.`)
}