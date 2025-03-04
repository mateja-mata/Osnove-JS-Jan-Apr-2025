function arrayModifier(arr) {
    // Uzimamo početni niz i pretvaramo ga u niz brojeva
    let str = arr.shift();
    let workArr = str.split(' ').map(Number);

    let index = 0;
    let command = arr[index];
    index++;

    while (command !== "end") {
        // Razdvajamo komandu na delove
        let tokens = command.split(' ');
        let action = tokens[0];
        let index1 = Number(tokens[1]);
        let index2 = Number(tokens[2]);

        switch (action) {
            case "swap":
                // Menjamo mesta elementima na indeksima index1 i index2
                if (index1 >= 0 && index1 < workArr.length && index2 >= 0 && index2 < workArr.length) {
                    let temp = workArr[index1];
                    workArr[index1] = workArr[index2];
                    workArr[index2] = temp;
                }
                break;
            case "multiply":
                // Množimo elemente na indeksima index1 i index2 i rezultat smeštamo na index1
                if (index1 >= 0 && index1 < workArr.length && index2 >= 0 && index2 < workArr.length) {
                    workArr[index1] = workArr[index1] * workArr[index2];
                }
                break;
            case "decrease":
                // Smanjujemo sve elemente u nizu za 1
                workArr = workArr.map(x => x - 1);
                break;
        }

        // Ažuriramo command za sledeću iteraciju
        if (index < arr.length) {
            command = arr[index];
            index++;
        } else {
            command = "end"; // Ako nema više komandi, završavamo petlju
        }
    }

    // Prikazujemo konačni rezultat
    console.log(workArr.join(', '));
}

// Primer poziva funkcije
arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
]);