function solve(obj){

    let allKeys = Object.keys(obj);//
    for(let key of allKeys){
        let value = obj[key];
        console.log(`${key} -> ${value}`);
    }
}

function solve2(obj){
    let keysAndValues = Object.entries(obj);
    for(let [key, value] of keysAndValues){
        console.log(`${key} -> ${value}`);
    }
}

//Za prolazak kroz kljuceve moze da se koristi i FOR IN PETLJA
function solve3(obj){
    for(let key in obj){
        let value = obj[key];
        console.log(`${key} -> ${value}`);
    }
}
solve3({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
}
);