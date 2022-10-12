// latihan membuat objek angkot

function Angkot(sopir, trayek, penumpang, kas){
    this.sopir = sopir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;

    this.penumpangNaik = function(namaPenumpang){
        this.penumpang.push(namaPenumpang);
        return this.penumpang;
    }

    this.penumpangTurun = function(namaPenumpang, bayar){
        if( this.penumpang.length === 0 ){
            alert("Belum ada penumpang yag naik di angkot ini!");
            return;
        }

        var cariNama = this.penumpang.find(function(e){
            return e == namaPenumpang;
        });
        
        if( cariNama == undefined ){
            alert("Tidak ada penumpang dengan nama tersebut!");
            return this.penumpang;
        }
        else{
            for(let i = 0; i < this.penumpang.length; i++){
                if(this.penumpang[i] == namaPenumpang){
                    this.penumpang[i] = undefined;
                    this.kas += bayar;
                    return this.penumpang;
                }
            }
        }
    }

}

var angkot1 = new Angkot("Hendrik Ari", ["Sudirman", "Arifin Ahmad"], [], 0);
