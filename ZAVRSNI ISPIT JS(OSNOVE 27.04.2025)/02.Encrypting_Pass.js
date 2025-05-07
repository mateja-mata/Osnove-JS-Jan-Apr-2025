function solve(arr){

    let n = Number(arr.shift());

    let pattern = /^(.+)>(?<sifra>\d+\|[a-z]+\|[A-Z]+\|[^<>]+)<(\1)$/g;

    for(let i = 0;i<n;i++){
        let input = arr.shift();
        let valid = pattern.exec(input);
        pattern.lastIndex = 0; // Resetujemo regex posle svake upotrebe
        if(!valid){
            console.log("Try another password!");
        } else {
            let password = valid.groups['sifra'];
            let validPass = password.split("|").join("");    
            console.log(`Password: ${validPass}`);
        }
    }

} solve((["5",
    "aa>111|mqu|BAU|mqu<aa",
    "()>111!aaa!AAA!^&*<()",
    "o>088|abc|AAA|***<o",
    "asd>asd|asd|ASD|asd<asd",
    "*>088|zzzz|ZzZ|123<*"])
    
    );