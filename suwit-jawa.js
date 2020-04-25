// menangkap pilihan player
let player = prompt(`pilih : gajah, orang, semut`);


// menangkap pilihan komputer
// genereate bilangan random 
// Matn() => membangkitkan  bilangan random dari 0 - 1


// rules

// show result

let computer = Math.random();

let pilihanComputer = function (param) {

    let semut = param <= 0.34;
    let orang = param >= 0.34 && param < 0.67;

    if (semut) {
        return param = `semut`;
    } else if (orang) {
        return param = `orang`;
    } else {
        return param = `gajah`;
    }

}

let tarung = function (pilihanComputer, player) {
    let hasil = alert();
    if (pilihanComputer == player) {
        return hasil = `seri`;
        // jika playr = gajah
    } else if (player == 'gajah') {
        if (pilihanComputer == 'orang') {
            return hasil = `komputer = ${pilihanComputer} player win`;
        } else {
            return hasil = `komputer = ${pilihanComputer} player lose `;
        }
    } else if (player == `orang`) {
        if (pilihanComputer == 'gajah') {
            return hasil = `komputer = ${pilihanComputer} player lose`;
        } else {
            return hasil = `komputer = ${pilihanComputer} player win `;
        }
    } else if (player == `semut`) {
        if (pilihanComputer == 'orang') {
            return hasil = `komputer = ${pilihanComputer} player lose`;
        } else {
            return hasil = `komputer = ${pilihanComputer} player win `;
        }

    } else {
        return hasil = `eror`;
    }
}

tarung(pilihanComputer(), player);