function solve (arr){

    //1) Kreiramo asocijativni niz gde su kljucevi gradovi, a vrednosti objekti sa populacijom i zlatom
    let cities = {};
    let command =arr.shift();
    while(command !== "Sail"){
        let [name, population, gold] = command.split('||');
        population = Number(population);
        gold = Number(gold);
        if(!cities.hasOwnProperty(name)){
            cities[name] = {};
            cities[name].population = population;
            cities[name].gold = gold;
        }else {
            cities[name].population += population;
            cities[name].gold += gold;
        }

        command = arr.shift();
    }
    //2) Posle Sail komande citaju se komande PLUNDER ili PROSPER sve do END KOMANDE
    command = arr.shift();
    while(command !== "End"){
        let tokens = command.split("=>");
        let event = tokens[0];
        let town = tokens[1];
        if(event === "Plunder"){
            let people = Number(tokens[2]);
            let taken = Number(tokens[3]);
            console.log(`${town} plundered! ${taken} gold stolen, ${people} citizens killed.`);
            cities[town].population -= people;
            cities[town].gold -= taken;
            if(cities[town].population <=0 || cities[town].gold <=0){
                console.log(`${town} has been wiped off the map!`);
                delete cities[town];
            }
        } else if(event === "Prosper"){
            let gold = Number(tokens[2]);
            if(gold <0){
                console.log(`Gold added cannot be a negative number!`)
            } else {
                cities[town].gold += gold;
                console.log(`${gold} gold added to the city treasury. ${town} now has ${cities[town].gold} gold.`);
            }
        } 
        
        command= arr.shift();
    }

    //3) ISPIS
    let remainingCities = Object.keys(cities);

    if(remainingCities.length>0){
        console.log(`Ahoy, Captain! There are ${remainingCities.length} wealthy settlements to go to:`);
        for(let town of remainingCities){
            console.log(`${town} -> Population: ${cities[town].population} citizens, Gold: ${cities[town].gold} kg`);
        }
    } else {
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
    }
   

} solve((["Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"])
    );