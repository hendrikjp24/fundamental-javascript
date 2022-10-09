// rekursif adalah sebuah fungsi yang memanggil dirinya sendiri
// rekursif dapat menggantikan looping, tetapi tidak sebaliknya!
// cth

function tampilAngka(n){
    if(n === 0) return;
    console.log(n)
    tampilAngka(n-1);

}

tampilAngka(5);