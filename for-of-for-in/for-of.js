/*
    author : irfan fauzi
    note   : for of
    date   : 22:03 16/06/2020

*/
// for of dalam js dapat melakukan pengulangan pada : 
/*
    For of dalam js dapat melakukan pengulangan pada iterable Object:

    1.String => memecah setiap karakter pada string
    2.Array
    3.Arguments/nodelist
    4.TypedArray
    5.Map
    6.Set
    7.User-define Iterable

*/
// contoh A pada array
// const arr = [1, 3, 4, "tiga", 5];
// for (const el of arr) {
//     console.log(el); // 1 3 4 "tiga" 5
// }

// -----------------------------------

// contoh pada string
// const str = "irfan fauzi";
// for (el of str) {
//     console.log(el); // i r f a n   f a u z i
// }
// --------------------------------------------------------

// jika kita ingin memanggil elemen dan juga indexnya : 
// kita bisa gunakan method .entries()

// const arr = [1, 3, 4, "tiga", 5];
// for ( const el of arr.entries()) {

//     console.log(el)
//     /* akan muncul array dengan indexnya
//         Array [ 0, 1 ]
//         Array [ 1, 3 ]
//         Array [ 2, 4 ]
//         Array [ 3, "tiga" ]
//         Array [ 4, 5 ]

//     */
// }
// ----------------------------------------------------------

// jika kita ingin memisahkan antara elemen dan juga index :
// const arr = ["satu", "dua", "tiga"];
// // kita bisa lakukan destruc
// for ([i, el] of arr.entries()) {
//     console.log(`this is elemen : ${el}, with index : ${i}`);
//     /*
//         this is elemen : satu, with index : 0 
//         this is elemen : dua, with index : 1 
//         this is elemen : tiga, with index : 2

//     */
// }

// ----------------------------------------------------------

// bisa lakukan operasi matematika 
const number = [2, 4, 5];
const angka = 2;
for (const num of number) {
    // karena kita sudah pecah array nya, maka kita bisa lakukan
    const perkalian = num * angka;
    const penjumlahan = num + angka;
    console.log(`hasil perklian : ${perkalian}, hasil jumlah : ${penjumlahan}`)
}
