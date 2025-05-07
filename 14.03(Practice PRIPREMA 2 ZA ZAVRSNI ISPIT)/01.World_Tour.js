function solve(arr){

    let country = arr.shift();

    let actions = arr.shift();
    while(actions !== "Travel"){
        let tokens = actions.split(':');
        let command = tokens[0];

        if(command === "Add Stop"){
            let idx = Number(tokens[1]);
            let value = tokens[2];
            if(idx >=0 && idx<country.length){
                let firstSub = country.slice(0, idx);
                let secondSub = country.slice(idx);
                country = firstSub +value + secondSub;
                console.log(country);   
            }
        } else if(command === "Remove Stop"){
            let startIdx= Number(tokens[1]);
            let endIdx= Number(tokens[2]);
            if(startIdx>=0 && startIdx<country.length && endIdx>=0 && endIdx<country.length){
                let firstSub = country.slice(0, startIdx);
                let secondSub = country.slice(endIdx+1);
                country = firstSub+secondSub;
                console.log(country);   
            }
        } else if(command === "Switch"){
            let value1 = tokens[1];
            let value2 = tokens[2];
                if(country.includes(value1)){
                    country = country.replace(value1, value2);
                }
                console.log(country);   
        }   
        
        actions = arr.shift();
    }

    console.log(`Ready for world tour! Planned stops: ${country}`);
} solve((["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"])
    )
