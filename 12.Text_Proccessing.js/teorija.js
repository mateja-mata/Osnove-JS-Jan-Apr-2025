//Definisanje STRINGOVA
let str1 = "John's address";//John's address
let str2 = 'John\'s address';//John's address

let x = 5;
let str3 = "Value of x is ${x}";//Value of x is ${x}
let str4 = `Value of x is ${x}`;//Value of x is 5

console.log(str1);
console.log(str2);
console.log(str3);
console.log(str4);

//KONKATENACIJA STRINGOVA
console.log(str3 + " " + x);//Value of x is ${x} 5


//Konverzija stringa u broj
let str5 = "56";
let num1 = Number(str5, typeof str5);
console.log(num1);//56 number

//Konverzija broj u string
//let str6 = `${num1}`;
let str6 = num1 + "";//56 string
console.log(str6, typeof str6);//56 string

//VAZNA NAPOMENA
//STRINGOVI SU IMMUTABLE(READ-ONLY)
console.log(str1[2])//h
console.log(str1[-2]);//undefined
console.log(str1[100]);//undefined
str1[2] = 'p'; //OVO MOZEMO DA KAZEMO ALI SE NISTA NE MENJA
console.log(str1);//STRINGOVI NISU NIZOVI!!!!!!


