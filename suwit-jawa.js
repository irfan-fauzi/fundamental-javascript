// menangkap pilihan player
let tanya = true;
// ketika true jalankan kode dibawah
// sampai confirm = false
while (tanya) {
    let player = prompt(`pilih : gajah, orang, semut`);

    // tangkap pilihan computer
    let comp = Math.random();

    if (comp <= 0.34) {
        comp = `semut`;
    } else if (comp >= 0.34 && comp < 0.67) {
        comp = `orang`;
    } else {
        comp = `gajah`;
    }


    // rules -----------------
    let hasil = ``;
    if (comp == player) {
        hasil = `seri`;
        // jika playr = gajah
    } else if (player == 'gajah') {
        if (comp == 'orang') {
            hasil = `menang`;
        } else {
            hasil = `kalah`;
        }
    } else if (player == `orang`) {
        if (comp == 'gajah') {
            hasil = `kalah`;
        } else {
            hasil = `menang`;
        }
    } else if (player == `semut`) {
        if (comp == 'orang') {
            hasil = `kalah`;
        } else {
            hasil = `menang`;
        }

    } else {
        hasil = `eror`;
    }

    alert(`kamu memilih : ${player}, dan komputer memilih ${comp} \nHasilnya kamu : ${hasil}`);
    tanya = confirm(`lakukan lagi ?`);
}
alert(`terimakasih`);