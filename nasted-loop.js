// bagaimana menampilkan tanda bintang 5 ( ***** )
// apakah menggunakan conlose.log(`*****`) ?
// lihat cara lebih efektif

// for (let i = 0; i <= 5; i++) {
//     console.log(i); // 0 - 5 menurun
// }

// for (let i = 0; i <= 5; i++) {
//     console.log(`*`); // muncul * 6 kali
// }

// latihan 1
// for (let a = 1; a <= 3; a++) {
//     // selama b = true , maka pengulangan b akan terus berlanjut sampai b = false
//     // jika b = false, maka a ++ baru dijalankan
//     for (let b = 1; b <= 3; b++) {
//         console.log(`${a}a, ${b}b`);
//     }

// }

// latihan 2

for (let a = 1; a <= 3; a++) {
    // selama b = true , maka pengulangan b akan terus berlanjut sampai b = false
    // jika b = false, maka a ++ baru dijalankan
    for (let b = 1; b <= 3; b++) {
        document.write(`${b}`);
    }

    document.write(` <br> `);

}