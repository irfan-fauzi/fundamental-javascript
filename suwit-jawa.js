// menangkap pilihan player
let player = prompt(`pilih : gajah, orang, semut`);


let comp = Math.random();


if (comp <= 0.34) {
    comp = `semut`;
} else if (comp >= 0.34 && comp < 0.67) {
    comp = `orang`;
} else {
    comp = `gajah`;
}



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
        hasil = `you lose`;
    } else {
        hasil = `player lose `;
    }
} else if (player == `semut`) {
    if (comp == 'orang') {
        hasil = `you lose`;
    } else {
        hasil = `you win `;
    }

} else {
    hasil = `eror`;
}

alert(`kami memilih : ${player}, dan komputer memilih ${comp} \nHasilnya kamu : ${hasil}`);