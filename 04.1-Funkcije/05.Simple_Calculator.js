function solve( n1, n2, operator){

    let multiply = (x, y) => x * y;
    let divide = (x, y) => x / y;
    let add = (x , y) => x+y;
    let subtract = (x, y) => x - y;


    let result = 0;

    switch (operator){

            case "multiply":
                result = multiply(n1, n2);
                break;
            case "divide":
                result = divide (n1, n2);
                break;
            case "add":
                result = add (n1, n2);
                break;
            case "subtract":
                result = subtract (n1, n2);
                break;
    }

    console.log(result);
}
    solve (5, 10, "multiply" );


    function solve2(n1, n2, operator){

        let cal = (x, y, o) => (o == "multiply") ? x * y : (o == "divide") ? x/y: (o == "add") ? x + y : x - y;

        console.log(cal(n1, n2, operator));
    }
    solve2 ( 5, 10, "multiply");
