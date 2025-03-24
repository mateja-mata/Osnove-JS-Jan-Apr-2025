// Map VS Associative Array
//Map(kljucevi mogu da budu bilo koje vrednosti)
//Associative array (kljucevi su iskljucivo stringovi)

//Map(su iterabilne, moze for -of petlja)
//Associative array (nisu iterabilne, ne moze for-of petlja)



function solve(arr){

    let storage = new Map();

    for(let elem of arr){
        let [item, qty] = elem.split(" ");
        qty = Number(qty);
        // Ako nije pronadjeno
        if(storage.get(item)  === undefined){
            //Setujemo vrednosti
            storage.set(item, qty);
        } else {
            let oldQty = storage.get(item);
            storage.set(item, oldQty + qty);
        }
    }

    

    for(let elem of storage){
        console.log(`${elem[0]} -> ${elem[1]}`);
    }
}solve(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']
    );