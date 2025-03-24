function solve (arr){

    let adressBook = {};

    for(let elem of arr){
        let [name, adress] = elem.split(":");
        adressBook[name] = adress;

    }

    let entries= Object.entries(adressBook);
    //Vrsimo sortiranje
    entries.sort(([keyA, valueA], [keyB, valueB]) =>{
        // Vrati 
        return keyA.localeCompare(keyB);

    });

    for(let [name, adres] of entries){
        console.log(`${name} -> ${adres}`);
    }

} solve(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']
   );