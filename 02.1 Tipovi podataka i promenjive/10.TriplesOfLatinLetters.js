function solve(n){
    n = Number(n);
    for(let i=0;i<n;i++){
        let first = String.fromCharCode(i+97);
        for(let j=0; j<n;j++){
            let second = String.fromCharCode(j+97);
            for(let k=0;k<n;k++){
                let third = String.fromCharCode(k+97);
                console.log(`${first}${second}${third}`);
            }
        }
    }
}

solve("3");