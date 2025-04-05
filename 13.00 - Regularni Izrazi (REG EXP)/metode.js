// Metoda regexp.test(string) : Odreduje da li postoji poklapanje po regexp-u(true\false):
let text = "Today is 2025-04-02"
let regexp = /\d{4}-\d{2}-\d{2}/g;
let result = regexp.test(text);
console.log(result);//true

//Metoda string.match(regexp): Vraca NIZ STRINGOVA sa kojima ima poklapanja
let text2 = 'Peter: 123 Mark: 456';
let regexp2 = /([A-Z][a-z]+): (\d+)/g;
let result2 = text2.match(regexp2);
console.log(result2);//[ 'Peter: 123', 'Mark: 456' ] - Takodje mozemo iteritati po ovom nizu
//Ispis svih nizova sa kojima imamo poklapanja
for(let x of result2){
    console.log(x);
    // Peter: 123
    // Mark: 456
}
//Nedostatak match metode je da ne moze da izdvoji podizraze


//Metoda regexp.exec(string): VRaca niz na koji ukazuje pointer, i pointer podesava na sledeci string
//Kao match metoda, samo ne vraca sve stringove odjednom nego jedan po jedan
// I moze da vrati pojedinacne podizraze
let text3 = 'Peter: 123 Mark: 456';
let regexp3 = /([A-Z][a-z]+): (\d+)/g;
// let s1 = regexp3.exec(text3);
// console.log(s1);
// s1 = regexp3.exec(text3);
// console.log(s1);
// //Vraca nam:
// // 'Peter: 123',
// //   'Peter',
// //   '123',
let s1  = regexp3.exec(text3);
while(s1 !== null){
    let strinKojiTrazimo = s1[0];
    let prvaGrupa = s1[1];
    let drugGrupa = s1[2];
    console.log(`String: ${strinKojiTrazimo}, Grupa1; ${prvaGrupa}, Grupa2: ${drugGrupa}`);
    s1= regexp3.exec(text3)// Ovo je OBAVEZNO!!!
    //Ispis ove WHILE PETLJE:
    // String: Peter: 123, Grupa1; Peter, Grupa2: 123
    // String: Mark: 456, Grupa1; Mark, Grupa2: 456
}


//METODA string.replace(regexp, stringReplacement): menja sva poklapanja sa stringReplacement
let text4 = 'Peter: 123 Mark: 456';
let regexp4 = /\d{3}/g;
let result4 = text4.replace(regexp4, '999');
console.log(result4);//Peter: 999 Mark: 999



//METODA string.split(regexp); KONVERTUJE niz u string, a separator je dat sa regexp
// let text = '1 2 3 4';
// let regexp = /\s+/g;
// let result = text.split(regexp);
// console.log(result) // ['1', '2', '3', '4'];

