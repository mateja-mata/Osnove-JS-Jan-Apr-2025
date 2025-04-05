function solve(arr){

   let text  = arr[0]; 

    //?<ime> - Imenovanje grupe
    let regexp = /\b(?<day>\d{2})([.\-\/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g;

    let pointer = regexp.exec(text);

    while(pointer !== null){
        //console.log(pointer);
        let day = pointer.groups['day'];
        let month = pointer.groups['month'];
        let year = pointer.groups['year'];

        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
        pointer = regexp.exec(text);
    }

}

solve();