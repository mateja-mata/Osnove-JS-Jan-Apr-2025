//Obicna funkcija(Imenovana funkcija)

function increment(x){
    return x+1;
}

//Poziv imenovane funkcije:
increment(5);


//ANONIMNA FUNKCIJA (Neimenovana funkcija)

let inc=function(x){
    return x+1;
}
//Poziv anonimne funkcije ide preko promenljive

inc(5);


//ARROW FUNKCIJA:
//Skraceni zapis ANONIMNE FUNKCIJE koja vraca neku vrednost
//let inc2= (x) => x+1;
// Ako ARROW FUNKCIJA PRIHVATA 1 Parametar, TADA CAK NI ZAGRADE NE MORA DA SE PISU !!
let inc2 = x => x+1;