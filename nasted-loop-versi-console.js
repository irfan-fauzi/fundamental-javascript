let stringKosong = ``;
let barisBaru = `\n`;
// secara default , console log akan menampilkan hasil atas - bawah
// mencetak angka ke samping
// for (let a = 0; a <= vertikal; a++) {
//     stringKosong += a;
// }
// console.log(stringKosong);



// mencetak angka 1 - 10 sebanyak 10 baris
// for (let a = 1; a <= vertikal; a++) {
//     for (let b = 1; b <= 10; b++) {
//         stringKosong += b;
//     }
//     stringKosong += barisBaru;
// }
// console.log(stringKosong);

// latihan 1 segitiga siku siku , miring ke kanan, mulai dari 1


// for (let a = 10; a >= 1; a--) {
//     for (let b = 1; b <= a; b++) {
//         stringKosong += b;
//     }
//     stringKosong += barisBaru;
// }
// console.log(stringKosong);


// segitiga siku miring kiri
for (let a = 1; a <= 10; a++) {
    for (let b = 1; b <= a; b++) {
        stringKosong += b;
    }
    stringKosong += barisBaru;
}
console.log(stringKosong);