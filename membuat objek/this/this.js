// mempelajari tentang this

// 1. this pada function declaration

function halo(){
    console.log(this);
    console.log("Halo");

}

halo();

// this pada function deklarasi akan mengembalikan object global

// 2. Object Literal

var obj = {};
obj.halo = function(){
    console.log("\n\nIni Object Literal");
    console.log(this);
}

obj.halo();

// Mengembalikan object yang bersangkutan

// 3. function construct
function Halo(){
    console.log("\n\nIni merupakan function construct");
    console.log(this);
}

new Halo();
// mengembalikan object yang baru saja dibuat