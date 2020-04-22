// let angka = 4;
// // jika angka sissa bagi 2 = 0 (genap)
// if (angka % 2 == 0) {
//     console.log(`genap`);
// } else {
//     console.log(`ganjil`);
// }

// RUMUS :
// jika (kondisi = true){
//     lakukan aksi
// } 
//

// LATIHAN 
// const jumlahAngkot = 10;
// const beroperasi = 6;
// let noAngkot = 1;

// for (noAngkot; noAngkot <= jumlahAngkot; noAngkot++) {
//     if (noAngkot <= beroperasi) {
//         console.log(`angkot no. ${noAngkot} ok`);
//     } else {
//         console.log(`angkot no. ${noAngkot} tidak ok`);
//     }

// }

// ELSE IF
// let angka = prompt(`input angka ya..`);

// function cekAngka() {
//     if (angka % 2 == 0) {
//         console.log(`genap`);
//     } else if (angka % 2 == 1) {
//         console.log(`ganjil`);
//     } else {
//         console.log(`bukan angka`);
//     }
// }
// cekAngka();

// LATIHAN lagi dong..
// const jumlahAngkot = 10;
// const beroperasi = 6;
// let noAngkot = 1;

// for (noAngkot; noAngkot <= jumlahAngkot; noAngkot++) {
//     if (noAngkot <= beroperasi) {
//         console.log(`angkot no. ${noAngkot} ok`);
//     } else if (noAngkot == 8) {
//         console.log(`angkot no. ${noAngkot} lembur`);
//     } else {
//         console.log(`angkot no. ${noAngkot} tidak ok`);
//     }

// }


// LATIHAN LAGI YES
const jumlahAngkot = 10;
const beroperasi = 6;
let noAngkot = 1;

for (noAngkot; noAngkot <= jumlahAngkot; noAngkot++) {
    // jika 1 <= 6 dan 1 tidak sama dengan 5 maka jalankan
    if (noAngkot <= beroperasi && noAngkot != 3) {
        console.log(`angkot no. ${noAngkot} ok`);
        // noAngkot = 8 atau no angkot = 10 atau no angkot = 5. maka jalankan

    } else if (noAngkot == 8 || noAngkot == 10 || noAngkot == 5 || noAngkot == 3) {
        console.log(`angkot no. ${noAngkot} lembur`);
    } else {
        console.log(`angkot no. ${noAngkot} tidak ok`);
    }

}