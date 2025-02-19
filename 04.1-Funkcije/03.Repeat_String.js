function solve(str, num){

    let result='';

    for(let i=0;i<num;i++){

        result+= str + '';
    }

    return result;
}  

let p=solve('abc', 3);

console.log(p);


console.log(solve("String", 2));