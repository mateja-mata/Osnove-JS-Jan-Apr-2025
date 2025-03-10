function cooking(arr){
    //([50, 2 ,1.0,0.10,10.0])

    let budzet = Number(arr.shift());
    //Broj studenata
    let studenti = Number(arr.shift());

    //Uzimamo cene
    let brasno = Number(arr.shift());
    let jednoJaje = Number(arr.shift());
    let jedanKompletPosudja = Number(arr);

   let potrebnoPosudja = Math.ceil(studenti * 1.2);
   
   let potrebnoPaketaBrasna= studenti - Math.floor(studenti/5); 

   //Izracunavamo totalnu cenu
   let total = 
    (potrebnoPaketaBrasna * brasno) + 
    (studenti * 10 * jednoJaje) + 
    (potrebnoPosudja * jedanKompletPosudja);

   //Proveravamo da li imamo dovoljno
   
   if(total<= budzet){
    console.log(`Items purchased for ${total.toFixed(2)}$.`)
   } else {
    let potrebnoNovca = (total - budzet).toFixed(2);
    console.log(`${potrebnoNovca}$ more needed.`);
   }

} cooking(([50,
    2,
    1.0,
    0.10,
    10.0])
    );