var arr = [1,2,3,6,8,4,8];

// 8.forEach => digunakan untuk melakukan perulangan pada setiap nilai/isi didalam sebuah array
console.log("Array.forEach()");
arr.forEach((e,i)=>{
    console.log(`Nilai index ke-${i + 1} adalah ${e}`);
});


var dataMahasiswa = ["Hendrik","Mia","Khaira","Pertiwi"];
console.log("\n\n");
dataMahasiswa.forEach((e,i)=>{
    console.log("Mahasiswa ke-" + (i + 1) + " adalah " + e);
});

// 9.Map => digunakan untuk membuat sebuah fungsi untuk setiap isi di dalam array dan mengembalikan nilai tersebut ke dalam array baru

var arrayAwal = [1,2,3,4,5];
console.log("\n\nArray.map()");
console.log("Array Awal : " + arrayAwal.join("  "));

var hasilMap = arrayAwal.map((e)=>{
    return e*2;
});

console.log("Hasil array yang sudah di map x2 : " + hasilMap.join("  "));

// 10. Sort => digunakan untuk megurutkan nilai/isi didalam array secara berurut
var arrayNilaiAwal = [1,5,2,3,9,10,45,23];
console.log("\n\nArray.sort()");
console.log("Acuan Array Awal : " + arrayNilaiAwal.join("  "));
arrayNilaiAwal.sort((e,i)=>{
    return e-i;
});

console.log("Nilai array setelah di sort : " + arrayNilaiAwal.join("  "));


