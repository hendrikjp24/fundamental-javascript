// 10. Filter => digunakan untuk memfilter nilai/isi dari sebuah array berdasarkan ketentuan yang ditetapkan. filter akan mengembalikan nilai yang ditemukan kedalam sebuah array.

var arrayAwal = [1,4,5,7,2,45,7,9,5];

arrayAwal.sort((e,i)=>{
    return e-i;
});

console.log("Array Awal : " + arrayAwal.join("  "));

var nilaiFilter = arrayAwal.filter((e)=>{
    return e > 7;
});

console.log("Array dengan nilai > 7 : " + nilaiFilter.join("  ") + "\n\n");

// 11, find => sama seperti filter, tetapi find akan mengembalikan hanya 1 nilai saja yang pertama kali sesuai dengan kondisi yang telah ditentukan.

console.log("Array Awal : " + arrayAwal.join("  "));

var nilaiFind = arrayAwal.find((e)=>{
    return e == 11;
});

console.log("Hasil find = 11 : " + nilaiFind + "\n");

var nilaiFind2 = arrayAwal.find((e)=>{
    return e == 9;
});

console.log("Hasil find = 9 : " + nilaiFind2);