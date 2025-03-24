function students(arr){

    let assocArr = {};

    for(let elem of arr){
        let tokens = elem.split(" ");
        let name  = tokens.shift();// Uzimamo ime
        let grades = tokens.map(Number);//Uzimamo ocene i pretvaramo u brojeve
        if(!assocArr.hasOwnProperty(name)){
            assocArr[name] = grades;
        } else {
            //Hvatamo stare ocene
            let oldGrades = assocArr[name];
            // u stare ocene pushujemo nove
            //... AUtomatksi java script prolazi kroz niz i dodaje mu novu vrednost
            oldGrades.push(...grades);
            assocArr[name] = oldGrades;
        }
    }

    let entries = Object.entries(assocArr);
    entries.sort(([keyA, valueA], [keyB, valueB]) => {
        return keyA.localeCompare(keyB);
    });

    for (let [name, grades] of entries){
        let avg = 0;
        for(let grade of grades){
            avg += grade;
        }
        //Delimo sve ocene sa brojem ocena
        avg /= grades.length;

        console.log(`${name}: ${avg.toFixed(2)}`);
    }


} students(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']
    );