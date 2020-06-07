// dalam constructor obj
const Mobil = function (merk, jumlahUnit) {
    this.merk = merk;
    this.jumlahUnit = jumlahUnit;
    this.detail = function () {
        return `mobil ini merk : ${this.merk}, dengan nomor : ${this.jumlahUnit} `;
    }

    // contoh : jumlah mobil berkurang setiap 5 detik. menggunakan setIntval
    // hati - hati, dalam function declaration (this = window)
    // kalau kodenya begini :
    // ini akan error : karena dalam fn declaration this = windows 
    //
    //     setInterval(function () {
    //         console.log(this.jumlahUnit++);
    //     }, 500);
    // }

    // SOLUSI !!!, arrow function solusinya, 
    // karena dalam arrow function, this = akan mencari ke parent scope

    setInterval(() => {
        return this.jumlahUnit++;
    }, 1000);
}

const ferari = new Mobil(`ferari`, 0)
const lamborghini = new Mobil(`lamborghini`, 0);


























// const cek = function (param) {
//     this.nama = param;
//     this.sayhalo = function () {
//         return `ini ada this : ${this}`;
//     }
// }
// const cek1 = new cek(`irfan`);
// const cek2 = new cek(`fauzi`);