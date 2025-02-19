function grade(n){

    if(n<3){
        console.log("Fail (2)");
    } else if(n>=3 && n<3.50){
        console.log(`Poor (${n.toFixed(2)})`);
    } else if(n>=3.50 && n<4.50){
        console.log(`Good (${n.toFixed(2)})`);
    } else if(n>=4.50 && n<5.50){
        console.log(`Very good (${n.toFixed(2)})`);
    } else if(n>=5.50){
        console.log(`Excellent (${n.toFixed(2)})`);   
    }

}
grade(4.50);