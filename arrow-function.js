// 1. function expression
// const panggilNama = function (nama) {
//     return nama;
// }

// 2 function arrow (tanda panah sebagai pengganti keyword function)
// gaya penulisan 1.

// const panggilNama = (nama) => {
//     return nama
// };

// gaya penulisan 2.
// jika paramaternya 1 (param), maka tidak perlu pakai (), 

// const panggilNama = nama => {
//     return nama
// };

// gaya penulisan 3.
// jika hasil functionnya hanya return aja, keyword return tidak perlu ditulis

// const panggilNama = nama => nama;

// jika fn yang dibuat tanpa parameter
// const panggilNama = () => `irfan fauzi`;

// ---------------------------------------------------
// contoh pada real case
// 1. gaya penulisan tradisional

// const arrayMobil = [`toyota`, `ferrari`, `mclaren`];
// const petakan = arrayMobil.map(function (el) {
//     return el.length;
// });
// 2. gaya penulisan arrow function
// const arrayMobil = [`toyota`, `ferrari`, `mclaren`];
// const petakan = arrayMobil.map(el => el.length);

// Bonus !!, function map() akan mengembalikan array, 
// jika ingin mengembalikan objeck :

// const arrayMobil = [`toyota`, `ferrari`, `mclaren`];
// const petakan = arrayMobil.map(el => ({
//     el: el,
//     jumlahHuruf: el.length
// }));
// // untuk menampilkan pada table : console.table()
// console.table(petakan)

