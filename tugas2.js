let nama = "Ghossan Ammar Santos";
let ttl = new Date(1999, 6, 15);
let kelamin = "L";
let fakultas = 8;
let jurusan = 12;
let tahunMasuk = 2018;


function tanggalLahir(){
    return (`${ttl.getDate()}${ttl.getMonth()}${ttl.getFullYear()}`);
}

function bp(){
    return (tahunMasuk.toString().substring(2));
}

function jKelamin(){
    if(kelamin == "L")
        return(`1`);
    
    else if(kelamin == "W")
        return (`2`);
    
    else {
        return (`Harap Isi Data dengan Benar , W = untuk Wanita , L = Pria`);
    }
 }

function kodeFakultas(){
    if(fakultas < 10 ){
    return(`0${fakultas}`);
}
    else {
        return(`${fakultas}`);
    }
}

function kodeJurusan(){
    if(jurusan < 10 ){
    return(`0${jurusan}`);
}
    else {
        return(`${jurusan}`);
    }
}

function angkaRandom(){
    let angkaacak = Math.floor(Math.random()*10) ;
   return (angkaacak);

}

function CreateNIM()
{
    console.log (`${bp()}${jKelamin()}${kodeFakultas()}${kodeJurusan()}${tanggalLahir()}${angkaRandom()}`);
}




CreateNIM();