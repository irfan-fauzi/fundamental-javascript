// let ulang = function (param) {
//     // kondiis terminasi
//     if (param == 10) {
//         return
//     }
//     console.log(param);
//     return ulang(param + 1);

// }
// ulang(1);
// let kubusA = 8; // kubus A 8 cm
// let kubusB = 3; // kubus B 3 cm

// // rumus volume masukan dalam function
// let hitungVolume = function (param) {
//     return param * param * param;
// }
// // masukan kubus A kedalam function hitungVolume
// let volumeKubusA = hitungVolume(kubusA);
// // masukan kubus B kedalam function hitungVolume
// let volumeKubusB = hitungVolume(kubusB);
// // jumlahkan kedua volume kubus
// let jmlVolumeDuaKubus = volumeKubusA + volumeKubusB;
// // tampilkan hasilnya
// console.log(jmlVolumeDuaKubus);

// atau cara 2
// let hitungVolume = function (param) {
//     return param * param * param;
// }

// let volumeKubusA = hitungVolume(8);
// let volumeKubusB = hitungVolume(3);

// let jmlVolumeDuaKubus = volumeKubusA + volumeKubusB;

// atau cra 3
// let jmlVolumeDuaKubus = function (kubusA, kubusB) {

//     let volumeKubusA = kubusA * kubusA * kubusA;
//     let volumeKubusB = kubusB * kubusB * kubusB;
//     return volumeKubusA + volumeKubusB;
// }
// // console.log(jmlVolumeDuaKubus(8, 3));
// jmlVolumeDuaKubus(8, 3);


// latihan membuat deret angka versi 1 menggunakan function
// isi misal , baris = 10, kolom = 10

let deretAngka = function (baris, kolom) {
    let stringKosong = ``;
    let barisBaru = `\n`;

    for (let a = 1; a <= baris; a++) { // baris
        for (let b = 1; b <= kolom; b++) { // kolom
            stringKosong += b;
        }
        stringKosong += barisBaru;
    }
    return stringKosong;

}
// ----------------------------

let segitigaAngka = function (jmlAngka) {

    let stringKosong = ``;
    let barisBaru = `\n`;

    for (let a = jmlAngka; a >= 1; a--) { // baris
        for (let b = 1; b <= a; b++) { // kolom
            stringKosong += b;
        }
        stringKosong += barisBaru;
    }
    return stringKosong;
}

// membuat game suwit dengan function

// komputer membuat pilihan dengan random
// --------------------------- INPUT ----------------------------
let comp = Math.random();
let player = `gajah`;
// --------------------------- / INPUT ----------------------------

// --------------------------- PROSES ---------------------------
// memproses pilihan komputer menghasilkan output
let pilihanComputer = function (comp) {
    let hasil = ``;
    if (comp <= 0.34) {
        hasil = `semut`;
    } else if (comp >= 0.34 && comp < 0.67) {
        hasil = `orang`;
    } else {
        hasil = `gajah`;
    }
    return hasil;
}

// --------------------------- PROSES ---------------------------
let pilihanPlayer = function (player, kom) {
    let hasil = ``;
    if (player == kom) {
        hasil = `seri`;
    } else if (player == `gajah`) {
        if (kom == `orang`) {
            hasil = `player menang komputer memilih ${kom}`;
        } else {
            hasil = `player kalah komputer memilih ${kom}`;
        }
    } else if (player == `orang`) {
        if (kom == `gajah`) {
            hasil = `player kalah komputer memilih ${kom}`
        } else {
            hasil = `player menang komputer memilih ${kom}`;
        }
    } else if (player == `semut`) {
        if (kom == `gajah`) {
            hasil = `player menang komputer memilih ${kom}`;
        } else {
            hasil = `player kalah komputer memilih ${kom}`;
        }
    } else { // jika player input karakter selain 3
        hasil = `salah input`;
    }
    return hasil;
}
// -------------------- / PROSES ---------------------------

// --------------------  OUTPUT -----------------------
// fungsi pilihanComputer masukan ke variabel
let pilKomputer = pilihanComputer(comp);
let pilPlayer = pilihanPlayer(player, pilKomputer);












// -------------------  / OUTPUT