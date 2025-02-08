function calculate(band, album, song){

    let result= 0;
    let songDuration = 0;
    let rotation=2.5;
    

    songDuration= (album.length * band.length ) * song.length / 2 ;

    //console.log(album.length);//8
    //console.log(band.length);//13
    //console.log(song.length/2);//4
    

    result = songDuration/rotation;
    console.log(`The plate was rotated ${Math.ceil(result)} times.`);

}

calculate('Rammstein', 'Sehnsucht', 'Engel');