function solve(arr1, arr2){

    for(let i = 0;i<arr1.length;i++){
        //Svaki elemnt 1 niza je konvertovan u broj
        arr1[i]=Number(arr1[i]);
    }
    
    for(let i = 0;i<arr2.length;i++){
        //Svaki elemnt 2 niza je konvertovan u broj
        arr2[i]=Number(arr2[i]);
    }

    let sum = 0;
    let diffIndex= undefined ; //NIJE DEFINISANO ZA SADA (NIJE NADJENA RAZLIKA)

    for(let i = 0; i<arr1.length;i++){

        if(arr1[i]== arr2[i]){
            sum+=arr1[i];
        } else {
            
            diffIndex = i;//Mesto de je razlika
            break; //Prekida izvrsenje petlje 
        }
    }
    if(diffIndex === undefined)// I po tipu i vrednosti
    {
        console.log(`Arrays are identical. Sum: ${sum}`);
    } else {

        console.log(`Arrays are not identical. Found difference at ${diffIndex} index`);
    }


}   
solve( ['1'], ['10'] );