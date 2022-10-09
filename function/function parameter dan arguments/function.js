// arguments.length itu dipakai untuk menghitung total arguments yang dimasukkan oleh user
function tambah(){
    var jumlah = 0;
    for(let i=0; i < arguments.length; i++){
        jumlah += arguments[i];
    }

    return jumlah
}

console.log(tambah(1,2,3,4,5));