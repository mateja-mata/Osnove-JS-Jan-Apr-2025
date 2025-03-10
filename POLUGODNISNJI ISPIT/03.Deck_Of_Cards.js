function cards(arr){
    //(["Ace of Diamonds, Queen of Hearts, King of Clubs", "3", "Add, King of Diamonds", "Insert, 2, Jack of Spades", "Remove, Ace of Diamonds"])
     //Uzimamo radni niz
    let workingArr=arr.shift().split(", ");
    //Uzimamo N broj-tj broj koliko ce se puta ponoviti petlja
    let n = Number(arr.shift());
    
    //Kreiramo For petlju
    for(let i=1;i<=n;i++){
        let linijaKomandi=arr.shift();
        let komande=linijaKomandi.split(", ");
        let komanda = komande[0];
        let vrednost ="";
        if(komanda == "Insert" || komanda == "Remove At"){
            vrednost = Number(komande[1]);
        } else {
            vrednost = komande[1];
        }
        let nazivKarte = komande[2];
        
        if(komanda == "Add"){
            if(!workingArr.includes(vrednost)){
                workingArr.push(vrednost);
                console.log("Card successfully added");
            } else {
                console.log("Card is already in the deck");
            }
        } else if(komanda == "Remove"){
             if(workingArr.includes(vrednost)){
                    let index=workingArr.indexOf(vrednost);
                    workingArr.splice(index, 1);
                    console.log("Card successfully removed");
            } else {
                    console.log("Card not found");
            }
        } else if(komanda=="Remove At"){
            if(vrednost>=0 && vrednost < workingArr.length){
                workingArr.splice(vrednost, 1);
                console.log("Card successfully removed");
            } else {
                console.log("Index out of range");
            }
        } else if(komanda == "Insert"){
            if(vrednost>=0 && vrednost<workingArr.length){
                if(!workingArr.includes(nazivKarte)){
                    workingArr.splice(vrednost, 0, nazivKarte);
                    console.log("Card successfully added")
                } else {
                    console.log("Card is already added");
                }
            } else {
                console.log("Index out of range");
            }
        }
    }
    console.log(workingArr.join(", "));

} cards((["Jack of Spades, Ace of Clubs, Jack of Clubs",
    "2",
    "Insert, -1, Queen of Spades",
    "Remove At, 1"])
    
    )