function solve(n){

    for(let i = 1;i<=n; i++){
        let str = i.toString();//Druga metoda konvertovanja u string(TEMPLATE METODA)
        let sum=0;
        for(let j =0;j<str.length;j++){// Kada smo str konverotvali u strin sad ga vracamo u broj
            sum+=Number(str[j]);
        }
        if(sum == 5 || sum == 7 || sum == 11){
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);
        }
    }
}