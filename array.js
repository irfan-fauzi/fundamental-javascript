// let slim = [`satu`, 0, false, 7, 'sajj', [0, 1, 2, 3], 'salatri'];

// let nama = [`ayah`, `ibu`, `kakak`, `adik`];

// nama.forEach(function (el, no) {
//     console.log(`nama : ${el} nomor : ${no + 1}`);
// });

// let tombol = document.createElement('button');
// tombol.innerText = 'satu';
// document.body.appendChild(tombol);


// let arr = [];

// let tambah = function (arrKosong) {
//     arrKosong.push(`saru`, `dua`, `tifa`, `sa`);
//     document.write(arr);
// }
// let add = tambah(arr);



// tombol.addEventListener(`click`, add);

// let tombol = document.querySelector(`button`);
// // 1.foreach

// let angka = [1, 2, 3, 4, 5, 6, 7];
// let show = function (arr) {

//     arr.forEach(function (el) {
//         console.log(el);
//     });
// }
// let tampil = show(angka);
// tombol.addEventListener(`click`, function () {
//     show(angka);
// });

// 2.map

let angka = [1, 9, 2, 3, 4, 5, 6, 10, 7];
let show = angka.map(function (el) {
    return el * 2;
});
// console.log(show.join(``));



// map menghasilkan array yang lain,  dalam kasus di atas, array angka masih ada, dan array show terbentuk dari array angka yang di tambah 2

// 3.Sort
// untuk mengurutkan array
let sortir = angka.sort(function (a, z) {
    return a - z;
});
// method sort() juga bisa digunakan untuk huruf alpabet

let huruf = [`deni`, `cahyadi`, `b`, `a`];
let urutkanHuruf = huruf.sort();

// 4.filter 
const kalimat = [`asus`, `acer`, `apple`, `lenovo`, `hp`];
let petakan = kalimat.map(function (el) {
    return el
});
let cariasus = petakan.filter(function (el) {
    return el == 'apple';
});

let filterAngka = angka.filter(function (el) {
    // filter angka genap saja
    return el % 2 == 0;
});