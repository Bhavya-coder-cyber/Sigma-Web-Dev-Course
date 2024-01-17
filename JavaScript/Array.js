console.log("Arrays Tutorial")
let a = [1,2,3,4,5]
console.log(a,typeof a)
let b = ["B","H","A","V","Y","A"]
console.log(b.toString())
console.log(b.join(" and "))
b.push("JAIN")
console.log(b)
b.unshift("HELLO")
console.log(b)
b.pop()
console.log(b)
b.shift()
console.log(b)
delete a[3]  //It deletes the value but still stores it as empty variable.
console.log(a)
console.log(b.concat(a))
console.log(b.splice(2,2))
/* It take out elements from that index.
eg.
b.splice(index, no. of elements)
*/
console.log(b)
b.splice(2,2,111,222)
// Same with adding elements.
console.log(b)
let c = [1,4,5,7,9,34]
console.log(c.slice(2,4))
c.forEach((value,index,c)=>{
    console.log(value,index,c)
})
let obj = {
    a: 1,
    b: 2,
    c: 3
}
for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(element)
    }
}
for (const value of c) {
    console.log(value)
    
}