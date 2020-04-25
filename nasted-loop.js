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

// for (let a = 1; a <= 3; a++) {
//     // selama b = true , maka pengulangan b akan terus berlanjut sampai b = false
//     // jika b = false, maka a ++ baru dijalankan
//     for (let b = 1; b <= 3; b++) {
//         document.write(`${b}`);
//     }

//     document.write(` <br> `);

// }

// latihan 3
// for (let a = 1; a <= 5; a++) {

//     for (let b = 1; b <= a; b++) {
//         document.write(`${b}b`);
//     }

//     document.write(`<br>`);

// }

// latihan 4
// jika kita menulis variable let b diluar {} maka b tidak dapat di akses

for (let a = 1; a <= 5; a++) {

    for (let b = 1; b <= a; b++) {
        document.write(`${b}b`);
    }
    for (let c = a; c <= 5; c++) {
        document.write(`${c}c`);
    }

    document.write(`<br>`);

}
document.write(`<br>`);
for (let a = 1; a <= 5; a++) {

    for (let b = 1; b <= a; b++) {
        document.write(`${b}b`);
    }
    // for (let c = a; c <= 5; c++) {
    //     document.write(`${c}c`);
    // }

    document.write(`<br>`);

}
document.write(`<br>`)

for (let a = 6; a >= 1; a--) {
    for (let b = a; b >= 1; b--) {
        document.write(b)
    }
    document.write(`<br>`);
}
document.write(`<br>`);

for (let a = 5; a >= 1; a--) {
    for (let b = a; b >= 1; b--) {
        document.write(`_`);
    }
    for (let c = a; c <= 5; c++) {
        document.write(`c`);
    }
    document.write(`<br>`);
}

document.write(`<br>`);

for (let a = 5; a >= 1; a--) {
    for (let b = a; b >= 1; b--) {
        document.write(`_`);
    }
    for (let c = a; c <= 5; c++) {
        document.write(`c`);
    }
    for (let d = a; d <= 5; d++) {
        document.write(`d`);
    }
    for (let e = a; e >= 1; e--) {
        document.write(`_`);
    }

    document.write(`<br>`);
}

document.write(`<br>`);

for (let a = 1; a <= 10; a++) {
    for (let b = a; b <= 10; b++) {
        document.write(`${b}`);
    }
    document.write(`<br>`);
}