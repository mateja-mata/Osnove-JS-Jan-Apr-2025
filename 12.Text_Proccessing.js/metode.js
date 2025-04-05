let str = "SoftUniRSSoft";

// Za pristum karakterima, postoje 3 nacina
// 1) preko operatora []
// 2) preko metode .charAt()
// 3) preko metode .at() (od verzije ES2022)

console.log(str[-2]);        //undefined
console.log(str.charAt(-2)); // ""
console.log(str.at(-2));     // "R"

//4) Metoda charCodeAt(idx);//Vraca kod karaktera sa indexom idx - ZAPRAVO VRACA KOD IZ ASCII TABELE
console.log(str.charCodeAt(2)); //102 - "f"
console.log(str.charCodeAt(-2)); //NaN 



//METODA concat(str); Za konkatenaciju stringova (concat() isto sto i +, znaci ne menja operande)
let str2 = " Osnove JS";
let str3 = str.concat(str2);//SoftUniRS Osnove JS
console.log(str, str2, str3);//SoftUniRS  Osnove JS SoftUniRS Osnove JS




//Metoda indexOf(str): VRACA INDEKS PRVOG pojavljivanje str, ili -1 ako str ne postoji (vraca broj);
console.log(str.indexOf("SoftUni")); //0

//kako proveriti da li se neki string sadrzi drugi?
if(str.indexOf("RS") !== -1){
    console.log(`String "${str}" sadrzi rec "RS" `);
    //String "SoftUniRS" sadrzi rec "RS" 
}



//METODA lastIndexOf(str): VRACA indeks POSLEDNJEG POJAVLJIVANJA str, ili -1 ako str ne postoji(vraca broj)
console.log(str.lastIndexOf("f"));//11




//Metoda includes(str): OVA METODA PROVERA da li se str nalazi kao podstring datog stringa(Vraca TRUE/FALSE)
console.log(str.includes("RS")); //TRUE
console.log(str.includes("Softuni")); //FALSE


//Za ekstrakciju podstringova, postoje 3 metode :
//1 - slice(startIndex, endIndex = null)
//2 - substring(startIndex, endIndex = null)
//3 - substr(startIndex, length) - (DEPRECATED!) - ODBACENA METODA

// Metoda slice() : Izvlaci podsting (od indeksta startIndex don indeksa endIndex, ne uklucujuci endIndex) i vraca podstring
// Parametri mogu da budu negativne vrednosti - SA DESNA NA LEVA
// str = "SoftUniRSSoft"
let str4 = str.slice(4, 7); // "Uni"
console.log(str4);
console.log(str.slice(7)); //"RSSoft"
console.log(str.slice(-6)); //"RSSoft"
console.log(str.slice(-6, -4)); //"RS"




//Metoda substring() : Isto kao i slice(), samo negativne vrednosti parametara tretira kao 0
console.log(str.substring(4, 7));// "Uni"
console.log(str.substring(-6)); //SoftUniRSSoft



//Metoda substr(): Isto kao i slice(), samo je drugi parametar duzina podstringa
//DEPRICATED!!! (ne preporucuje se za koriscenje)
console.log(str.substr(4, 3));// Isto kao i str.slice(4, 7) vraca ("Uni")



//Metoda replace(serach, replace): Menja prvo pojavljivanje search podstring u replace
//Ne menja originalni string, nego vraca promenjeni string
let str5 = "U okviru SoftUni-a ucimo JavaScript i Java programske jezike";
let str6 = str5.replace("Java", "Python");
console.log(str5);//U okviru SoftUni-a ucimo JavaScript i Java programske jezike
console.log(str6);//U okviru SoftUni-a ucimo PythonScript i Java programske jezike


//Metoda replaceAll(search, replace): MENJA SVa pojavljivanje search podstringa u replace
//Ne menja originalni string nego vraca promenjeni string
//NAPOMENA!!!! :
//Nece raditi na svim verzijama, dostupna samo u novoj verziji
let str7 = str5.replaceAll("Java", "Python");
console.log(str5);//U okviru SoftUni-a ucimo JavaScript i Java programske jezike
console.log(str7);//U okviru SoftUni-a ucimo PythonScript i Python programske jezike



//Metoda split(delimiter) : Konvertuje string u niz podstingova razdvojenih delimiterom




//Metoda repeat(num) : Vraca string ponovljen num puta
console.log("SoftUni".repeat(3));//SoftUniSoftUniSoftUni



//Metoda trim(); Krati visak razmaka sa pocetka i kraja stringa
//Metoda trimStart(): Isto samo sa pocetka
//Metoda trimEnd(); Isto samo sa kraja
console.log("    Soft Uni      RS  ".trim());// Soft Uni      RS


//Metoda startsWith(str): Provera da li string POCINJE sa str (Vraca bool)
//Metoda endsWith(str): Provera da li se string ZAVRSAVA sa str (Vraca bool)
console.log("SoftUniRs".startsWith("Soft"));//true



//Metoda padStart(length, str): DODAJE str na POCETAK sve dok duzina rezultujuceg stringa ne postane length
//Metoda padEnd(length, str): Dodaje str na KRAJ sve dok duzina rezultujuceg stringa ne postane length
console.log("Mart".padStart(10, "*"));//******Mart
console.log("April".padEnd(10, "_"));//April_____




