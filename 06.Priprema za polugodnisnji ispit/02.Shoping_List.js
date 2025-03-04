function groceryList(arr){
    // (["Tomatoes!Potatoes!Bread",
    //     "Unnecessary Milk",
    //     "Urgent Tomatoes",
    //     "Go Shopping!"])

    //1.Korak
    //"Tomatoes!Potatoes!Bread => ["Tomatos", "Potatos", ...]
    let itemList = arr.shift().split('!');

    //inputArr = [ "Unnecessary Milk","Urgent Tomatoes","Go Shopping!"]
    //2.Korak uzimamo komande 
    let commandLine = arr.shift();// "Unnecesery Milk"
    
    //3.Korak 
    // Petlja dok ne dodje do ...
    while(commandLine != "Go Shopping!"){

        let tokens = commandLine.split(' '); // ["Unnecesery", "Milk"]
        let command = tokens[0];// Uzimamo naziv komande
        let param1 = tokens[1];//Milk
        let param2 = tokens[2];

        if(command == "Urgent"){
            //dodajem namernicu na pocetak liste
            //moramo proveriti da li je vec ima

            let item = param1;
            if(!itemList.includes(item)){
                itemList.unshift(item);
            }
        } else if(command == "Unnecessary"){
            let item = param1;
            if(itemList.includes(item)){
                //Ako postoji onda ga ukloni
                // uklanjamo ga splice metodom
                //Moramo izracunati startIndex
                let index = itemList.indexOf(item);
                itemList.splice(index, 1);
            }
        } else if(command == "Correct"){
            let oldItem = param1;
            let newItem = param2;

            //Menjamo stari sa novim
            if(itemList.includes(oldItem)){
                //To radimo splice metodom(start, deleteCount, novaVrednost)
                let index = itemList.indexOf(oldItem);
                itemList.splice(index, 1 , newItem); // Menjamo dva elementa na nekom indexu
            }
        } else if(command == "Rearrange"){
            //izbaci element iz lise
            //dodaj ga na kraj
            let item = param1;
            if(itemList.includes(item)){
                //Uklanjamo ga iz liste
                let index = itemList.indexOf(item);
                itemList.splice(index, 1);
                //Stavljamo ga na kraj liste
                itemList.push(item);
            }
        }

        commandLine = arr.shift();// citamo sledecu komandu

    }
        
        //ispis konzole
        console.log(`${itemList.join(", ")}`);

        

}  groceryList((["Tomatoes!Potatoes!Bread",
    "Unnecessary Milk",
    "Urgent Tomatoes",
    "Go Shopping!"])
    );