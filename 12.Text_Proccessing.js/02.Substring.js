function solve(str, n1, count){

    let resultStr = str.substring(n1, n1 + count);
    console.log(resultStr);


} solve('ASentence', 1, 8);


//BONUS: "RUCNO", bez koriscenja ugradjene funkcije

function solve2(str, startIndex, count){

    let result = "";
    for(let i=0; i<count; i++){
        result += str[startIndex + i]
    }

    console.log(result);
} solve2 ('ASentence', 1, 8)