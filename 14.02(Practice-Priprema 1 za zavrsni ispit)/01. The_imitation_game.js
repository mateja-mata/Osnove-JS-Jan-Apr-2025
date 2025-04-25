function solve(arr){

    let message = arr.shift();
  
    let command =arr.shift();
    while(command !== "Decode"){
        let tokens = command.split('|');
        let action = tokens[0];
         
        if(action === "Move"){
            let n = Number(tokens[1]);
            let moved = message.slice(0, n);
            message=message.slice(n)
            message=message.concat(moved);
        } else if(action === "Insert"){
            let index = Number(tokens[1]);
            let value = tokens[2];
            let firstSub = message.slice(0, index);
            let secondSub = message.slice(index);
            message = firstSub+value+secondSub;
        } else if(action = "ChangeAll"){
            let val1 = tokens[1];
            let val2 = tokens[2];

            while(message.includes(val1)){
                message= message.replace(val1, val2);
            }
        }

        command =arr.shift();
    }

    console.log(`The decrypted message is: ${message}`);

} solve([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
  ]
  )