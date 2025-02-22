function signCheck(n1, n2, n3){

    let arr = [String(n1), String(n2), String(n3)];

    let result=1; 
    for(let i = 0; i<arr.length;i++){

        result *=arr[i];
        
    }


        if(result>0){
            console.log("Positive");
        } else {
            console.log("Negative");
        }
 

}   signCheck(-5, 1, 1);