function delivery(arr){

    // (["10@10@10@2",
    //     "Jump 1",
    //     "Jump 2",
    //     "Love!"])

    //(["10@10@10@2"] -> [10, 10 , ...]
    let houses = arr.shift().split('@').map(Number);

    //ostatak niza
    let command =arr.shift();// "jump 1";

    let currentPosition = 0; //On krece od prve kucice

    while(command !== "Love!"){

        //jump 1
        let tokens = command.split(' '); // ["jump", 1];
        let action = tokens[0];
        let jump = Number(tokens[1]);


        //Menjamo mu poziciju
        currentPosition+= jump;
        //provera da li smo u opsegu niza

        if(currentPosition >= houses.length){
            currentPosition =0;//Vracamo ga na prvi element
        } 

        if(houses[currentPosition] === 0){
                console.log(`Place ${currentPosition} already had Valentine's day.`);
        } else {
            houses[currentPosition] -= 2;

            if(houses[currentPosition] === 0){
                console.log(`Place ${currentPosition} has Valentine's day.`);
            }    

        }
        
        command = arr.shift();//Citamo narednu komandu


    }

    console.log(`Cupid's last position was ${currentPosition}.`);

    let resultArr= [];
    let resultFlag = true;

    for(house of houses){

        if(house !== 0){
            resultArr.push(house);//Smestamu kucu koja nema dan zaljuvljenih
            resultFlag = false;
        }
    }

    if (resultFlag){
        console.log("Mission was successful.");
    }  else {
        console.log(`Cupid has failed ${resultArr.length} places.`)
    }


        
} delivery ( (["4@2@4@2",
    "Jump 1",
    "Jump 2",
    "Jump 1",
    "Jump 2",
    "Jump 2",
    "Jump 2",
    "Love!"])
    );