function phoneBook(arr){
    //Kreiramo prazan niz
    let imenik = {};

    //Iteracija po ulaznom nizu(uzimamo imena i brojeve)
    for(let elem of arr ){
        //elem => 'Tim 0834212554'
        let tokens = elem.split(" ");
        let name = tokens[0];
        let number = tokens[1];
        imenik[name] = number; 
    }

    //Iteracija po asocijativnom nizu
    for(let key in imenik){
                    //Kljuc -> ime niza[kljuc]
        console.log(`${key} -> ${imenik[key]}`);
    }

} phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']
   );