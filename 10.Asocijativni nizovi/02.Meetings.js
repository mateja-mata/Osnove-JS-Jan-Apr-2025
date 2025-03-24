function solve(arr){

    let meeting = {};

    for(let elem of arr){
        let [day, name] = elem.split(" ");
        if(meeting.hasOwnProperty(day)){
            console.log(`Conflict on ${day}!`);
        } else {
            meeting[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }
    //1 Nacin
    // for(let key in meeting){
    //     console.log(`${key} -> ${meeting[key]}`);
    // }
    // 2 Nacin
    let entries = Object.entries(meeting);
        for(let [day, name] of entries){
            console.log(`${day} -> ${name}`);
        }
    

} solve(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']
   );