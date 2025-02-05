function echoType (parametar){

    let dataType = typeof parametar;
    console.log(dataType);
    if(dataType == "string" || dataType == "number"){

        console.log(parametar);
    } else {
        console.log(`Parameter is not suitable for printing`);
    }

}
echoType(null);