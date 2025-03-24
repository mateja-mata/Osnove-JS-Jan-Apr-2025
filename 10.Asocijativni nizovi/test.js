

//Nacin 1
let visine = {};// Za asosicativni niz koristimo {};

visine["pera"] = 189;
visine["milena"] = 167;
visine["laza"] = 178;

//console.log(visine);
//{ pera: 189, milena: 167, laza: 178 }

//Nacin 2
let visine2 ={
    "pera" :189,
    "laza" : 167,
    "milena" : 172
};
//console.log(visine2);
//{ pera: 189, laza: 167, milena: 172 }

//Kako da iteriramo kroz sve elemente asocijativnog niza??
//Za iteraciju kroz sve lemente asocijativnog niza postoje 2 nacina:
//1. FOR-IN PETLJA -> Prolazi kroz sve kljuceve elemenata:
for(let key in visine){
    //Kljuc plus razmak plus vrednost kljuca
    console.log(key + " " + visine[key]);
}

//2.Da se asocijativni niz konvertuje u obican uz pomoc Object.entries() metode
let entries = Object.entries(visine);
//console.log(entries); [ 'pera', 189 ], [ 'milena', 167 ], [ 'laza', 178 ] ]
for(let x of entries){
    let key = x[0];
    let value = x[1];
    console.log(`${key} -> ${value}`);
    
}
// Isto to samo drugi nacin:
for(let [key, value] of entries){
    console.log(`${key} -> ${value}`);
}

