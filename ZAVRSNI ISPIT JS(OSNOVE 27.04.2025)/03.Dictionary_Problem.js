function solve(input) {
    // Parse the input
    const [wordsDefsStr, testWordsStr, command] = input;

    // 1. Create the notebook (word to definitions mapping)
    const notebook = {};
    
    // Process all word-definition pairs
    wordsDefsStr.split(' | ').forEach(pair => {
        const [word, definition] = pair.split(': ');
        if (!notebook[word]) {
            notebook[word] = [];
        }
        notebook[word].push(definition);
    });

    // 2. Process the command
    if (command === 'Test') {
        // Get the words to test
        const testWords = testWordsStr.split(' | ');
        
        // Check each test word and print definitions if found
        testWords.forEach(word => {
            if (notebook[word]) {
                console.log(`${word}:`);
                notebook[word].forEach(def => console.log(` -${def}`));
            }
        });
    } 
    else if (command === 'Hand Over') {
        // Print all words in notebook, space-separated
        console.log(Object.keys(notebook).join(' '));
    }
}

// daj mi sva objasnjenja
// Objašnjenje Rešenja za Rečnik Pojmova
// Evo detaljnog objašnjenja svakog dela koda:

// 1. Ulazni Podaci i Inicijalizacija
// javascript
// let [wordsDefsStr, testWordsStr, command] = input;
// input: Niz sa 3 elementa:

// String sa rečima i definicijama (npr. "programmer: opis | developer: opis")

// String sa rečima za testiranje (npr. "programmer | developer")

// Komanda ("Test" ili "Hand Over")

// Destrukturiranje: Razdvajamo ulazne podate u tri varijable

// 2. Kreiranje Rečnika (Notebook-a)
// javascript
// let notebook = {};
// Inicijalizacija praznog objekta koji će čuvati reči i njihove definicije

// 3. Obrada Reči i Definicija
// javascript
// wordsDefsStr.split(' | ').forEach(pair => {
//     let [word, definition] = pair.split(': ');
//     if (!notebook[word]) {
//         notebook[word] = [];
//     }
//     notebook[word].push(definition);
// });
// split(' | '): Deli string na pojedinačne parove reč-definicija

// forEach: Prolazi kroz svaki par

// split(': '): Deli par na reč i definiciju

// Provera: Ako reč ne postoji u rečniku, kreira se novi niz za nju

// Dodavanje: Definicija se dodaje u niz za odgovarajuću reč

// 4. Obrada Komandi
// 4.1 Test Komanda
// javascript
// if (command === 'Test') {
//     let testWords = testWordsStr.split(' | ');
//     testWords.forEach(word => {
//         if (notebook[word]) {
//             console.log(`${word}:`);
//             notebook[word].forEach(def => console.log(` -${def}`));
//         }
//     });
// }
// split(' | '): Deli string sa rečima za testiranje

// Provera: Za svaku reč proverava da li postoji u rečniku

// Ispis: Ako postoji, ispisuje sve njene definicije u traženom formatu

// 4.2 Hand Over Komanda
// javascript
// else if (command === 'Hand Over') {
//     console.log(Object.keys(notebook).join(' '));
// }
// Object.keys(): Dobija niz svih reči iz rečnika

// join(' '): Spaja reči u jedan string, razdvojen razmakom