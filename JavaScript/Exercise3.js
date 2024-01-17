// Write a Factorial of a Number using reduce and for loops.
let arr = []
let n = prompt("Enter No. to find its Factorial:")
if (n==0){
    console.log("Factorial is 1.")
}
else if(n<0){
    console.log("Factorial of Negative Numbers doesn't Exist.")
}
else{
for (let index = 0; index < n; index++) {
    const element = arr[index];
    arr.push(index+1)
    /* OR
    let arr = Array.from(Array(numbers+1).keys())
    console.log(arr.slice(1,))
    */
}
const fact = (a,b)=>{
    return a*b
}
console.log(arr)
let result = arr.reduce(fact)
console.log(`Factorial is ${result}`)
}