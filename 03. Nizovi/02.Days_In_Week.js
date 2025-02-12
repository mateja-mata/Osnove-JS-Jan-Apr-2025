function solve(day){

    let days =  ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday",  "Saturday", "Sunday"]; 

        if(day>=1 && day<=7){
            let cuurentDay = days[day - 1];
            console.log(cuurentDay);
        } else {
            console.log('Invalid day!');
        }
}

solve(6);

