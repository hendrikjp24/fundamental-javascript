// Berikut ini adalah beberapa cara membuat sebuah objek didalam javascript

// 1. Object Literal 

console.log("Membuat Object dengan metode 'Object Litertal'");

var mhs1 = {
    nama : "Hendrik Ari Purna Irawan",
    nim : "2018202007",
    jurusan : "Manajemen Informatika"
};


// 2. Function Declaration
console.log("\n\nMembuat objek dengan menggunakan 'Function Declaration'");

function membuatObjekMahasiswa(nama,nip,jurusan){
    var datamhs = {};
    datamhs.nama = nama;
    datamhs.nim = nip;
    datamhs.jurusan = jurusan;
    return datamhs;

}

var mhs2 = membuatObjekMahasiswa("Pertiwi", "2018202009", "Manajemen Informatika");

// 3. Membuat objek dengan metode function construct
console.log("\n\nMembuat objek dengan menggunakan 'Function Construct'");

function Mahasiswa(nama, nim, jurusan){
    this.nama = nama;
    this.nim = nim;
    this.jurusan = jurusan;

}

var mhs3 = new Mahasiswa("Ari Hidayatullah", "2018202001", "Manajemen Informatika");
var mhs4 = new Mahasiswa("Fathiya AlKhaira", "2018202008", "Manajemen Informatika");