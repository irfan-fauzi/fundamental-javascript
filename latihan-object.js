// cara 1. object literal
// const angkot = {
//     penumpang: {},
//     sopir: `kusnadi`,
//     trayek: `majalengka - kadipaten`,
//     kas: 0,
//     penumpangNaik: function (namaPenumpang) {
//         this.penumpang.nama = namaPenumpang;
//         this.kas += 5000;
//         return this.penumpang;
//     }
// }

// cara 2. Object contructor

const Angkot = function (sopir, trayek) {
    this.sopir = sopir;
    this.penumpang = [];
    this.trayek = trayek;
    this.kas = 0;
    this.penumpangNaik = function (penumpang) {
        this.penumpang.push(penumpang);
        return this.penumpang;
    }
    this.penumpangTurun = function (penumpang) {
        this.penumpang.forEach(function (el, index, object) {
            if (el === penumpang) {
                object.splice(index, 1);
            }
        });
        return this.penumpang;
    }


}
let angkot1 = new Angkot(`udin`, `majalengka - kadipaten`);
let angkot2 = new Angkot(`supardi`, `majalengka - kadipaten`);