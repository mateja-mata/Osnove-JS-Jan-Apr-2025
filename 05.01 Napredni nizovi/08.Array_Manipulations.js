function solve(arr){

    let numsAsString = arr.shift();//Uzeli smo string
    let numsAsArr = numsAsString.split(" ");//String smo ubacili u niz
    let arrNums = numsAsArr.map(Number); // Ceo niz smo promenili u brojeve

    for( let comand of arr){

        let comandArr = comand.split(' ');//Comand = ["add", 3]
        let comandName = comandArr[0]; // Comand = "add"
        let firstNumber = Number(comandArr[1]); // firstNumber = 3


        switch(comandName){

                case "Add":
                    arrNums.push(firstNumber);
                    break;
                case "Remove":
                    arrNums = arrNums.filter(x => x !=firstNumber);
                    break;
                case "RemoveAt":
                    arrNums.splice(firstNumber, 1)
                    break;
                case "Insert":
                    let secondNumber = Number(comandArr[2]);
                    arrNums.splice(secondNumber, 0, firstNumber);
                    break;
        }

    }

    console.log(arrNums.join(" "));

}  