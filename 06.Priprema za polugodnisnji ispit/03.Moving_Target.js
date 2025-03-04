function shooting(arr){
    // (["52 74 23 44 96 110",
    //     "Shoot 5 10",
    //     "Shoot 1 80",
    //     "Strike 2 1",
    //     "Add 22 3",
    //     "End"])

    let arrTargets =arr.shift().split(" ").map(Number);

    let index = 0;
    let command = arr[index];
    index ++ ;

    while(command !== "End"){

        //"Shoot 5 10" -> ["Shoot", "5", "10"]
        let tokens= command.split(' ');
        let commands = tokens[0];
        //Pretvaramo u brojeve
        let param1 = Number(tokens[1]);
        let param2 = Number(tokens[2]);

        switch(commands){
            case "Shoot":
                //Upucamo vrednost
                //uklanjamo metu ako je vrednost 0
                //Provera da li je indeks u granicama niza
                if(param1 >= 0 && param1 <= arrTargets.length -1 ){
                    arrTargets[param1] -=param2;
                }

                if(arrTargets[param1] <= 0){
                    arrTargets.splice(param1, 1);
                }
                break;
            case "Add":
                //Provera da li indeks postoji
                if(param1 >= 0 && param1 <= arrTargets.length - 1){
                //zamena elementa
                arrTargets.splice(param1, 0, param2);
                } else {
                    console.log("Invalid placement!");
                }
                break;
            case "Strike":
                //Strike 2 2 
                let  start = param1- param2;
                let end = param2 * 2 + 1;//Broj elemenata za uklanjanje

                if(start >= 0 && start + end <=arrTargets.length){
                    arrTargets.splice(start, end);
                } else {
                    console.log("Strike missed!");
                }
                break;

        }
            if(index < arr.length){
                command = arr[index];
                index++;
            } else {
                //Ako nema komandi, automtski postavljamo na end da bi zavrsili petlju
                command = "End"
            }                    
    }
            console.log(arrTargets.join('|'))

} shooting((["1 2 3 4 5",
    "Strike 0 1",
    "End"])
    
    );