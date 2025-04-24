function solve(arr){
    let tour = arr.shift();

    let command = arr.shift();

    while(command !== "Travel"){

        let [action, param1, param2] = command.split(':');

        switch(action){
            case "Add Stop":
                let index = Number(param1);
                let value = param2;
                if(index >=0 && index< tour.length){
                    tour = tour.slice(0, index)+ value + tour.slice(index);
                }
                break;
            case "Remove Stop":
                let index1 = Number(param1);
                let index2 = Number(param2);
                if(index1>=0 && index1<tour.length && index2>=0 && index2<tour.length){
                    tour = tour.slice(0, index1) + tour.slice(index2 + 1);
                }
                break;
            case "Switch":
                let str1 = param1;
                let str2 = param2;

                if(tour.includes(str1)){
                    tour = tour.replace(str1, str2);
                }
                break;
        }
        console.log(tour);
        command = arr.shift();
    }

    console.log(`Ready for world tour! Planned stops: ${tour}`);

} solve((["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"])
    );