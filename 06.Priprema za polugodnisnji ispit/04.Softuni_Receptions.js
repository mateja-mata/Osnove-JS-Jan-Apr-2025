function reception(arr){
    // ['5','6','4','20']

    //Uzimamo broj studenata
    let numberOfStudens = Number(arr.pop());

    //['5','6','4',]
    let firstGroup=Number(arr.shift());//5
    let secondGroup = Number(arr.shift());//6
    let thirdGroup = Number(arr.shift());

    //Koliko je ukupno studenata usluzeno za 1 sata na sva 3 saltera
    let studentsInOneHour = firstGroup + secondGroup + thirdGroup

    //Reduce metoda za domaci!!!!!!!!

    let hoursNeeded = 0;

    while(numberOfStudens > 0){
        hoursNeeded ++;
        //oduzimamo od broja studenata onoliko koliko obradimo za jedan sat
        numberOfStudens -=studentsInOneHour;

        if(hoursNeeded %4 == 0){
            //cetvrti sat
            //ne usluzujemo studente
            hoursNeeded++;
        }

    }

    console.log(`Time needed: ${hoursNeeded}h.`)


} reception (['5','6','4','20']);