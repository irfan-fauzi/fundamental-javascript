// membuat game suwit dengan function

// komputer membuat pilihan dengan random
// --------------------------- INPUT ----------------------------


let comp = Math.random();

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
            hasil = `player MENANG komputer memilih ${kom}`;
        } else {
            hasil = `player KALAH komputer memilih ${kom}`;
        }
    } else if (player == `orang`) {
        if (kom == `gajah`) {
            hasil = `player KALAH komputer memilih ${kom}`
        } else {
            hasil = `player MENANG komputer memilih ${kom}`;
        }
    } else if (player == `semut`) {
        if (kom == `gajah`) {
            hasil = `player MENANG komputer memilih ${kom}`;
        } else {
            hasil = `player KALAH komputer memilih ${kom}`;
        }
    } else { // jika player input karakter selain 3
        hasil = `salah input`;
    }
    return alert(hasil);
}
// -------------------- / PROSES ---------------------------


for (let a = true; a; a = confirm(`lakukan lagi`)) {
    let player = prompt('isi');
    let pilKom = pilihanComputer(comp);
    let pilPlay = pilihanPlayer(player, pilKom);
    pilPlay;

}