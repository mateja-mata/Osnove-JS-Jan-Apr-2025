function solve (grade, arr){

    if(pass(grade)){

        printHeader();
        printName(arr);
        formatGrade(grade);
        
    } else {
        console.log(`${arr[0]} ${arr[1]} does not qualify`);
    }


    function pass(grade){
        if(grade>=3){
            return true;
        } else {
            return false;
        }

        // a mozemo i retur grade>=3
    }

    function printHeader(){
        console.log('~~~- {@} -~~~');
        console.log('~- Certificate -~');
        console.log('~~~- ~---~ -~~~');
    }

    function printName(arr){
        console.log(`${arr[0]} ${arr[1]}`);
    }

    function formatGrade(n){

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
} solve( 5.29, ["Pera", "Peric"]);