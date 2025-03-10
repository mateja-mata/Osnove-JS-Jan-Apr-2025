function prijatelji(arr){
    //(["Mike, John, Eddie, William", "Blacklist Maya", "Error 1", "Change 4 George", "Report"])

    let listaPrijatelja=arr.shift().split(", ");
    let listaKomandi = arr.shift();
    let crnaLista = [];
    let listaIzgubljenih=[];

    //Pravimo petlju koja vrti dok ne dodjemo do komande Report
    while(listaKomandi != "Report"){
        let linijaKomandi = listaKomandi.split(" ");
        let naredba = linijaKomandi[0];
        let vrednost = "";
        if(naredba == "Blacklist"){
             vrednost = linijaKomandi[1];
        } else {
            vrednost = Number(linijaKomandi[1]);
        }
        let imeKojeUbacujemo = linijaKomandi[2];

        if(naredba == "Blacklist"){
                //Menjamo mu ime
                //U slucaju da ga ima na listi
                if(listaPrijatelja.includes(vrednost)){
                let index = listaPrijatelja.indexOf(vrednost);
                listaPrijatelja.splice(index, 1, "Blacklisted");
                console.log(`${vrednost} was blacklisted.`);
                crnaLista.push(vrednost);
                //U slucaju da ga nema stampamo poruku
                } else {
                    console.log(`${vrednost} was not found.`)
                }
            } else if(naredba == "Error"){
                if(vrednost>=0 && vrednost<listaPrijatelja.length){
                    let ime = listaPrijatelja[vrednost];
                    if(!crnaLista.includes(ime) || !listaIzgubljenih.includes(ime)){
                    if(ime !=="Lost" && ime !=="Blacklisted"){
                        listaIzgubljenih.push(ime);
                        listaPrijatelja.splice(vrednost, 1, "Lost");
                        console.log(`${ime} was lost due to an error.`);
                     }
                  }
                } 
            } else if(naredba == "Change"){
                if(vrednost >= 0 && vrednost<listaPrijatelja.length){
                    let staroIme=listaPrijatelja[vrednost];
                    listaPrijatelja.splice(vrednost, 1, imeKojeUbacujemo);
                    console.log(`${staroIme} changed his username to ${imeKojeUbacujemo}.`);
                }
            }
            listaKomandi=arr.shift();
        }

        console.log(`Blacklisted names: ${crnaLista.length}`);
        console.log(`Lost names: ${listaIzgubljenih.length}`);
        console.log(listaPrijatelja.join(" "));
    
    }
 prijatelji ((["Mike, John, Eddie",
    "Blacklist Mike",
    "Error 0",
    "Report"])
    
    );