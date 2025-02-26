//Poslednji bit nekog broja
let n=124;
let mask=1;
let lasBit=n &mask;

console.log(lasBit);

//p-ti bit nekog broja

let p=5;
let pBit=(n >> p) & 1;
console.log(pBit);

//Postavi p-ti bit nekog broja na 0
mask = ~(1<<p);
let newNumberP0= n & mask;


//Postavi p-ti bit nekog broja na 1
mask = (1<<p);
let newNumberP1= n | mask;

//Postavi p-ti bit nekog boja na b ( gde je b = 0 ili 1)

let b = 1;
let newNumberPB= n & ~(1<< p) | (b << p);


