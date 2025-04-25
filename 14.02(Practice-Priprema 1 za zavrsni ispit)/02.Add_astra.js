function solve(arr){

    let str = arr.shift();
    let pattern =  /([#|])(?<name>[A-Za-z\s]+)(\1)(?<expdate>[\d]{2}\/[\d]{2}\/[\d]{2})(\1)(?<call>\d{1,4}|10000)(\1)/g;

    let totalCals = 0;

    let pointer = pattern.exec(str);
    let messeges = [];
    while(pointer !== null){
        let item = pointer.groups['name'];
        let date = pointer.groups['expdate'];
        let calls = Number(pointer.groups['call']);
        totalCals += calls;
        messeges.push(`Item: ${item}, Best before: ${date}, Nutrition: ${calls}`);

        pointer = pattern.exec(str);
    }

    let days = Math.floor(totalCals / 2000);
    console.log(`You have food to last you for: ${days} days!`);
    //Ovo je jako bitno !!!!
    for(let c of messeges){
        console.log(c);
    }
} solve([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
    ]
    );