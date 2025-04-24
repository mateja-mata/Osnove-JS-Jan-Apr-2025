function solve (arr){

    let message = arr.shift();


    let commad = arr.shift();

    while(commad !== 'Decode'){

        let tokens  = commad.split('|');
        let instuction = tokens[0];

        switch(instuction){

            case "Move":
                let num = Number(tokens[1]);
                let firstSubstring = message.slice(0, num);
                let secondSubsting = message.slice(num);
                message = secondSubsting + firstSubstring;

                break;
            case "Insert":
                let index = Number(tokens[1]);
                let char  = tokens[2];
                let firstSub = message.slice(0, index);
                let secondSub = message.slice(index);
                message = firstSub + char + secondSub;
                break;
            case "ChangeAll":
                let char1 = tokens[1];
                let char2 = tokens[2];

                while(message.includes(char1)){
                    message = message.replace(char1, char2);
                    
                }

                break;

        }
        

        commad = arr.shift();
    }

 console.log(`The decrypted message is: ${message}`);


} solve([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
  ]
  );
