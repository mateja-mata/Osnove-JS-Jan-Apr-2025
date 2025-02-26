function solve(arr){

    let OddPositions = arr.filter((x, i) => i %2 == 1 );
    let doubleValues = OddPositions.map( x => x * 2);

    let reversed = doubleValues.reverse();

    console.log(reversed.join(' '));


} solve([10, 15, 20, 25]);