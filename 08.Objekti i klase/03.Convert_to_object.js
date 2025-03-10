function solve(text){
    let obj = JSON.parse(text);

    for(let key in obj){
        let value = obj[key];
        console.log(`${key}: ${value}`);
    }
} solve('{"name": "George", "age": 40, "town": "Sofia"}');