function solve(arr){

    let cities = {};
    let action = arr.shift();
    //1.Deo
    while (action !== "Sail"){
       
        let [town, people, gold] = action.split('||');
        people = Number(people);
        gold = Number(gold);
        if(!cities.hasOwnProperty(town)){
            cities[town] = {};
            cities[town].people = people;
            cities[town].gold = gold;
        } else {
            cities[town].people += people;
            cities[town].gold += gold;

        }
        action = arr.shift();
    }
    //2 Deo
    let commands = arr.shift();
    while(commands !== "End"){
        let tokens = commands.split("=>");
        command = tokens[0];
        if(command === "Plunder"){
            let town = tokens[1];
            let people = Number(tokens[2]);
            let gold = Number(tokens[3]);
            console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`)
            cities[town].people-=people;
            cities[town].gold -= gold;
            if(cities[town].people <=0 || cities[town].gold <=0){
                console.log(`${town} has been wiped off the map!`);
                delete cities[town];
            }
        } else if(command === "Prosper"){
            let town = tokens[1];
            let gold = Number(tokens[2]);
            if(gold <0){
                console.log("Gold added cannot be a negative number!" );
            } else {
                cities[town].gold += gold;
                console.log(`${gold} gold added to the city treasury. ${town} now has ${cities[town].gold} gold.`)
            }
        }
        commands = arr.shift();
    }

    let finalCities = Object.keys(cities);
    
    if(finalCities.length > 0){
        console.log(`Ahoy, Captain! There are ${finalCities.length} wealthy settlements to go to:`);
        for(let town of finalCities){    
            console.log(`${town} -> Population: ${cities[town].people} citizens, Gold: ${cities[town].gold} kg`);
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