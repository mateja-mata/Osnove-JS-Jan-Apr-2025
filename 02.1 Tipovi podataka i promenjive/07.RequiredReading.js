function calculate(numberOfPages, pagesInHour, numberOfDaysMust){
    
    let time=numberOfPages/pagesInHour;
    let days= time/numberOfDaysMust;

    console.log(days);
}
calculate(212, 20, 2);