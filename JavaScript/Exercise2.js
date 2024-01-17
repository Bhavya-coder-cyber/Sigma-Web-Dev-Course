/* Create a business name by combining list of adjectives and shop name and another word.
Adjectives:
Crazy
Amazing
Fire

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub
*/
let rname = prompt("Enter Name of the shop")
let bname, dname, fname
rand1= Math.random()
if (rand1 < 0.33){
    bname = " Crazy"
}
else if (rand1 < 0.66 && rand1 >= 0.33){
    bname = " Amazing"
}
else if (rand1 >= 0.66){
    bname = " Fire"
}

rand2= Math.random()
if (rand2 < 0.33){
    dname = " Engine"
}
else if (rand2 < 0.66 && rand2 >= 0.33){
    dname = " Foods"
}
else if (rand2 >= 0.66){
    dname = " Garments"
}

rand3= Math.random()
if (rand3 < 0.33){
    fname = " Bros"
}
else if (rand3 < 0.66 && rand3 >= 0.33){
    fname = " Limited"
}
else if (rand3 >= 0.66){
    fname = " Hub"
}

newname = rname.concat(bname, dname, fname)
console.log("Name of the shop is: " +newname)