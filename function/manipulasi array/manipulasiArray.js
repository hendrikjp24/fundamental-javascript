var arr = ['Dody', 'Ari', 'Pertiwi'];

console.log(arr);

// 1. array.length
console.log("Array.length");

for(let i = 0; i < arr.length; i++){
    console.log("Mahasiswa ke-" + (i+1) + " adalah " + arr[i]);
}

// 2. join => digunakan untuk merubah array menjadi sebuah string
console.log("\n\n\nArray.join( - )");
console.log(arr.join(' - '));

// 3. push => digunkaan untuk menambahkan nilai ke dalam array pada barisan terakhir. dapat dimasukkan lebih dari 1 niali
console.log("\n\n\nArray.push()");
arr.push('Hendrik', 'Khaira');
console.log(arr.join(' - '));

// 4 pop => digunakan untuk menghapus isi dari array pada barisan terakhir. hanya dapat menghapus satu persatu saja
console.log("\n\n\nArray.pop()");
arr.pop();
arr.pop();
arr.pop();
console.log(arr.join('- '));

// 5. unshift => digunakan untuk menambahkan isi dari array tetapi pada awal baris array
console.log('\n\n\narray.unshift("Hendrik","Khaira")');
arr.unshift("Hendrik", "Khaira");
console.log(arr.join(' - '));

// 6. shift => digunakan untuk menghapus isi array pada awal baris
console.log('\n\n\narr.shift()');
arr.shift();
console.log(arr.join(' - '));
