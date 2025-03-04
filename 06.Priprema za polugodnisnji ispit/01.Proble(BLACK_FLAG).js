function pirate(arr){
    // (["5",
    //     "40",
    //     "100"])

    //Uzimamo broj dana
    //shift nam vraca STRING
    let days= Number(arr.shift());
    //Uzimamo dnevni prihod
    let dailyPlunder = Number(arr.shift());
    // Uzimamo target
    let targetPlunder = Number(arr.shift());
    
    //Kreiramo varijablu za sumu
    let total =0; 

    //prolazimo kroz dane
    for(let i = 1;i<=days;i++){
        //Svaki dan skupe 40
        total+=dailyPlunder;

        //Provera da li je svaki 3 dan
        if(i %3 ==0){
            total += dailyPlunder * 0.50;
        }

        //Provera da li je 5 dan
        if(i%5 == 0){
            total -= total * 0.30;
        }

    }

        //Stampanje 

        if(total >=  targetPlunder){
            console.log(`Ahoy! ${total.toFixed(2)} plunder gained.`);
        } else {
            let procent = total / targetPlunder * 100;
            console.log(`Collected only ${procent.toFixed(2)}% of the plunder.`)
        }



} pirate ((["5",
    "40",
    "100"])
    );