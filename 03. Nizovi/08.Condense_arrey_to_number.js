function solve(arr){

    //Petlja se vrti dokle god imamo vise od jednog elementa
    while(arr.length>1){
        let cond = [];
        // Petlja ide do pretposlednjeg elemnta jer poslednji nema naslednika
        for(let i = 0;i<arr.length-1;i++){
            cond.push(arr[i] + arr[i+1]);//Komandom .push ubacujemo u taj niz cond
        
        }

        arr = cond;

    }

    console.log(arr[0]);//arr[0] Zato sto nam je na kraju ostao samo jedan element

}

solve (  );