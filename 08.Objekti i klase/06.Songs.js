function solve(arr){

    //PISEMO KLASU
    class Song {
        //Pisemo KONSTUKTORA
        constructor(tl, n, t){
        this.typeList = tl;
        this.name = n;
        this.time = t;
        }

        print(){
            console.log(this.name);
        }

    }

    //Uzimamo komande iz niza
    let n = Number(arr.shift());
    let filter = arr.pop();
    //Citamo elemnte iz niza
    for(let i=1;i<=n;i++){
        let songInfo=arr.shift();
        let tokens= songInfo.split("_");
        let typeList =tokens[0];
        let name =tokens[1];
        let time =tokens[2];
        //Postavljamo promenljivu preko koje dodajem vrednost u klasu
        let song = new Song(typeList, name, time);
        //Ako ispunjava uslov iz zadatka
        if(filter == typeList || filter == "all"){
            song.print();
        }
    }
} solve([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
    );
