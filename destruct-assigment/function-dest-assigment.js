/*
    author : irfan fauzi
    note   : function destruction assigment
    date   : 22:03 15/06/2020
    note   : distructuring berpengaruh pada function
*/
// bagaimana impelementasikan destructuring langsung pada function :
// lihat perbedaanya :

// A.  tanpa destructuring ----------------------------------

// function jumlahKali(numberA, numberB) {
//     // function ini mengembalikan array yang berisi dua elemen

//     return [numberA + numberB, numberA * numberB];
// }

// // jika ingin mengambil elemen masing masih operasi, misal, saya ingin memisahkan hasil kali dan jumlah menjadi nilai yang terpisah
// // karena return dari function adalah array, maka kita bisa panggil index dari masing masing elemen seperti ini :

// const jumlah = jumlahKali(2, 4)[0];
// const kali = jumlahKali(2, 4)[1];
// console.log(jumlah); // 6
// console.log(kali); // 8

// ------------------------------------------------------------

// B. Menggunakan Destructuring => return value pada function
// function jumlahKali(numberA, numberB) {
//     return [numberA + numberB, numberA * numberB];
// }

// const [jumlah, kali] = jumlahKali(2, 4);
// console.log(jumlah); // 6
// console.log(kali); // 8 

// ------------------------------------------------------------


// Bagaimana jika return valuenya ada banyak , misal dalam kasus di atas kita tambah operasi matematiknya atau lebih kompleks
// kita bisa gunakan Object 
// function kalkulasi(numA, numB) {
//     return {
//         tambah: numA + numB,
//         kali: numA * numB,
//         bagi: numA / numB,
//         kurang: numA - numB
//     };
// }
// const { tambah, kali, bagi, kurang } = kalkulasi(4, 2);
// Catatan Tambahan : sebenarnya bisa juga tetap menggunakan Array[] hanya saja urutannya harus benar, tidak boleh sembarang

// DESTRUCTURING PADA ARGUMEN

// A. cara umum
const obj = {
    id: 0231,
    name: "irfan fauzi",
    age: 87
};
function printObj(obj) {
    return `my name is : ${obj.name}, i'm ${obj.age} years old`;
}
console.log(printObj(obj)) // my name is : irfan fauzi, i'm 87 years old

// B. cara baru 












