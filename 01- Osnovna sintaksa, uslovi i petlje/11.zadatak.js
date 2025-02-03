function solve(n){

    let sum=0;
    let brojac=0;
  
    for(let i=1;i<=100;i++){

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
