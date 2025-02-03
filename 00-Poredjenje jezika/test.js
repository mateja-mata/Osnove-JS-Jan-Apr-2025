let n = 5;
console.log(typeof n);


 n="PERA"; // Deklaracija promenjljive samo jednom !!
console.log(typeof n);//string

n=-8.95;
console.log(typeof n);//number

let p;

console.log(typeof p); // undefined 

p=8; // type of p je number 

console.log(typeof p);

p=null;
console.log(typeof p);//null(prazna vrednost)


let q=null;
console.log(typeof q);//null


// Petlje u JS
let counter=0;

while(counter<=9){
    console.log(counter);
    counter++;
}
// FOR PETLJA u JS

for (let i=0;i<=9;i++){
    console.log(i);
}

//console.log(i);- NE MOZE da se pristupi promenljivoj " i " (jer je definisana samo u samoj petlji)

