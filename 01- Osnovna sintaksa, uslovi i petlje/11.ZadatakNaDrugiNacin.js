function solve(n){

    let sum=0;
    let brojac=0;
    let i= 0;
    while (brojac<=n){
        i++;
        if(i%2 !== 0){

            console.log(i);
            sum+=i;
            brojac++;
        }

       if(brojac==n){
        console.log(`Sum: ${sum}`);
        return;
       }
    }    
}
solve(3);
