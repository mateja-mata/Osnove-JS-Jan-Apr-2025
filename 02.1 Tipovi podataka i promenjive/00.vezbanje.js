//console.log(y);// refence error : Cannot acces "y" before initialization(let ne radi hoisting)
console.log(z);// promenljiva z postoji ovde jer var radi hoisting
// (Gde god se nalazi promenljiva deklaracija se pomera na pocetak funcije ili programa)


let y= 5;
var z = 8;

function testFunkcija(){
    console.log(x);// undefined (deklarisana je promenjiva ali nije dodeljena vrednost)
    if( 5 === 5){
        var x =  2  
    }
    var x; // NIje greska,moze vise puta da se deklarise zbog hoistingovanja
    console.log(x); // 2 (promenjiva je deklarisana i dodeljena joj je vrednost)
}

testFunkcija(5);
//console.log(x); // GRESKA! (oblast vazenja za var je unutar funkcije)

function drugTestFunkcija(){
    //console.log(x);// OVO NE MOZE (let moze samo unutar bloka da se pristupa)
    if(5 === 5){
        //console.log(x); // OVE NE MOZE LET NE RADI HOISTING
        let x = 2;
        console.log(x);// Ovo MOZE
    }
    //console.log(x);// OVO NE MOZE (let moze samo unutar bloka da se pristupa)
    let x = 6;// OVO ovde je nova promenjljiva(nema veze sa x iz predhodnog bloka)
    console.log(x);
    for( let x=1; x<=5; x++){
        console.log(x);
    }
}
drugTestFunkcija();

console.log(y);
console.log(z);