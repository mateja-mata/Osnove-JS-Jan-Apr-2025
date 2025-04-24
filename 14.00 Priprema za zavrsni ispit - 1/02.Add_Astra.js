function solve(arr){
    let text = arr[0];

    let pattern = /([#|])(?<name>[A-Za-z\s]+)(\1)(?<expdate>[\d]{2}\/[\d]{2}\/[\d]{2})(\1)(?<call>\d{1,4}|10000)(\1)/g;

    let totalCals = 0;

    
    let messeges = [];
    let pointer = pattern.exec(text);
    while(pointer !== null){
        let name = pointer.groups['name'];
        let date = pointer.groups['expdate'];
        let cal = Number(pointer.groups['call']);
        totalCals += cal;

        messeges.push(`Item: ${name}, Best before: ${date}, Nutrition: ${cal}`);

        pointer = pattern.exec(text);
    }
   
    let totalDays = Math.floor(totalCals / 2000);
    console.log(`You have food to last you for: ${totalDays} days!`);
    for(let c of messeges){
        console.log(c);
    }

} solve([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
    ]
    );