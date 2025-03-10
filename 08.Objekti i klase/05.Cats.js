function solve(arr){

    //Pisemo Klasu
    class Cat{
        //Konstruktor
        constructor(n, a){
            //Pisemo polja
            this.name =n;
            this.age = a;
        }
        //Dodatna metoda
        meow(){
            //Obavezno pisanje this. ince NECE RADITI!!!
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    //Cupamo ime i godine iz niza
    for(let catInfo of arr){
        let tokens = catInfo.split(" ");
        let catName = tokens[0];
        let catAge = tokens[1];
        //Pozivamo clasu
        let cat = new Cat(catName, catAge);
        //Pozivamo METODU
        cat.meow();
    }
}

solve(['Mellow 2', 'Tom 5']);
/*
let c = new Cat("Mellow", 2);
console.log(c);
c.meow();

let d =new Cat("Tom", 5);
d.meow();
*/