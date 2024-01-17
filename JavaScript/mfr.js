let arr = [1,13,5,7,11];
let newarr = []
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    newarr.push(element**2)
    
}
console.log(newarr)
// OR
let newar = arr.map((e)=>{
    return e**2
})
console.log(arr)
const greaterthanseven = (e)=>{
    if(e>7){
        return true
    }
    return false
}
console.log(arr.filter(greaterthanseven))
let arr2 = [1,2,3,4,5,6,7]
const red = (a,b)=>{
    return a*b
}
console.log(arr2.reduce(red)) 
// Takes pair and reduces it taking pairs i.e., 1*2=2 then 2*3=6 then 6*4=24 and so on.
let s = "Bhavya"
console.log(Array.from(s))