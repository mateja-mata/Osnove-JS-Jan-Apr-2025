function solve(arr){

    function validatePassword() {
        let validPattern = /^[A-Za-z0-9_]+$/;
        let hasUpper = /[A-Z]/.test(pass);
        let hasLower = /[a-z]/.test(pass);
        let hasDigit = /[0-9]/.test(pass);

        if(pass.length < 8) {
            console.log("Password must be at least 8 characters long!");
        }
        if(!validPattern.test(pass)) {
            console.log("Password must consist only of letters, digits and _!");
        }
        if(!hasUpper) {
            console.log("Password must consist at least one uppercase letter!");
        }
        if(!hasLower) {
            console.log("Password must consist at least one lowercase letter!");
        }
        if(!hasDigit) {
            console.log("Password must consist at least one digit!");
        }
    }
    

    let pass = arr.shift();

    let input = arr.shift();

    while(input !== "Complete"){
        let tokens = input.split(" ");
        
        

        if(tokens[1] === "Upper"){
            let idx = Number(tokens[2]);
            let firstSub = pass.slice(0, idx);
            let upper = pass[idx].toUpperCase();
            let secSub = pass.slice(idx+1);
            pass = firstSub+upper+secSub;
            console.log(pass);
        } else if(tokens[1] === "Lower"){
            let idx = Number(tokens[2]);
            let firstSub = pass.slice(0, idx);
            let upper = pass[idx].toLowerCase();
            let secSub = pass.slice(idx+1);
            pass = firstSub+upper+secSub;
            console.log(pass);
        } else if (tokens[0] === "Insert"){
            let idx = Number(tokens[1]);
            let val = tokens[2];
            if(idx>=0 && idx<=pass.length){
                let firstSub = pass.slice(0, idx);
                let secSub = pass.slice(idx);
                pass = firstSub+val+secSub
                console.log(pass);
            }
        } else if(tokens[0] === "Replace"){
            let char = tokens[1];
            let val = Number(tokens[2])
            let vrednost = char.charCodeAt();
            let totalVrednost = val+vrednost;
            let finalChar = '';
            finalChar = String.fromCharCode(totalVrednost);
            if(pass.includes(char)){
                while(pass.includes(char)){
                    pass= pass.replace(char, finalChar);
                }
                console.log(pass);
            }
          
        } else if(tokens[0] === "Validation"){
            
         validatePassword()
          
        }
       
            
        input = arr.shift();
        }
} solve(['*',
    'Validation',
    'Replace * 10',
    'Insert 0 P',
    'Insert 0 a',
    'Insert 0 s',
    'Insert 0 s',
    'Insert 0 _', 
    'Insert 0 m',
    'Insert 0 e',
    'Complete']
    );