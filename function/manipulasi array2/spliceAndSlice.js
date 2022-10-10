var arr = ['hendrik', 'mia', 'khaira'];
console.log("Array awal : " + arr.join(' - ') + "\n\n");
// 5.Splice => digunakan untuk memasukkan nilai array baru ke dalam baris yang kita tentukan. nilai array yang dimasukkan dapa lebih dari satu

// Rumus
// arr.splice(indexAwal, maudihapus berapa, nilaiArray)
console.log('Array.splice(1,0,"Pertiwi")');
arr.splice(1,0,"Pertiwi");
console.log(arr.join(' - '));

// 6. Slice => digunakan untuk memotong isi dalam array kemudian di masukkan ke dalam array yang baru. tetapi array asalnya masih tetap sama isinya

// rumus
// arr.slice(indexAwal,indexAkhir);
console.log('\n\nArray.slice(1,4)');
var arr2 = arr.slice(1,4);
console.log(arr2.join(' - '));
console.log(arr.join(' - '));

