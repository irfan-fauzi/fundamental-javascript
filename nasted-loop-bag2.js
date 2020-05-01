// let noAngkot = 1;
// let jmlAngkot = 10;


// for (noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
//     if (noAngkot <= 6 && noAngkot != 1) {
//         console.log(`angkot no ${noAngkot} sedang beroperasi`);
//     } else if (noAngkot == 8 || noAngkot == 10 || noAngkot == 1) {
//         console.log(`angkot no ${noAngkot} sedang lembur`);
//     } else {
//         console.log(`angkot no ${noAngkot} sedang tidak beroperasi`);
//     }

// }

// segitiga 1
for (let a = 1; a <= 10; a++) {
    for (b = 1; b <= a; b++) {
        document.write(b);
    }
    document.write(`<br>`)
}
document.write(`<br>`);

// segitiga 2
for (let a = 1; a <= 10; a++) {
    for (let b = a; b <= 10; b++) {
        document.write(b);
    }
    document.write(`<br>`);
}
document.write(`<br>`);

// segitiga 2 versi 2
for (let a = 10; a >= 1; a--) {
    for (let b = 1; b <= a; b++) {
        document.write(b);
    }
    document.write(`<br>`);
}
document.write(`<br>`)


// segitiga 3 <piramida
for (let a = 1; a <= 10; a++) {
    for (let b = a; b <= 10; b++) {
        document.write(`*`);
    }
    for (let c = 1; c <= a; c++) {
        document.write(c);
    }
    for (let d = 1; d <= a - 1; d++) {
        document.write(d);
    }
    for (let e = a; e <= 10; e++) {
        document.write(`*`);
    }


    document.write(`<br>`);
}
document.write(`<br>`);

// segitiga 4 piramida 
for (let a = 1; a <= 10; a++) {
    for (let b = a; b <= 10; b++) {
        document.write(`*`);
    }
    for (let c = 1; c <= a; c++) {
        document.write(`${c}`);
    }
    for (let d = 1; d <= a - 1; d++) {
        document.write(d);
    }
    for (let e = a; e <= 10; e++) {
        document.write(`*`);
    }
    document.write(`<br>`);
}
for (a = 1; a <= 10; a++) {
    for (b = 1; b <= a; b++) {
        document.write(`*`);
    }
    for (c = a; c <= 10; c++) {
        document.write(c);
    }
    for (d = a; d <= 10 - 1; d++) {
        document.write(d);
    }
    for (e = 1; e <= a; e++) {
        document.write(`*`);
    }
    document.write(`<br>`);
}
document.write(`<br>`);

// papan catur versi hardcore
for (let i = 1; i <= 5; i++) {
    for (let b = 1; b <= 20; b++) {
        if (b % 2 == 0) {
            document.write(`*`);
        } else {
            document.write(`#`);
        }
    }
    document.write(`<br>`);
    for (let b = 1; b <= 20; b++) {
        if (b % 2 == 1) {
            document.write(`*`);
        } else {
            document.write(`#`);
        }
    }
    document.write(`<br>`);

}
document.write(`<br>`);
// versi 2

let pagar = `#`;
let bintang = "*";
let vertikal = 15;
let horizontal = 10;

for (let a = 1; a <= vertikal; a++) { // buat vertikal
    for (let b = 1; b <= horizontal; b++) { // horizontal
        // jika ganjil
        if (a % 2 == 1) {

            if (b % 2 == 0) {
                document.write(pagar);
            } else {
                document.write(bintang);
            }
        } else {
            if (b % 2 == 0) {
                document.write(bintang);
            } else {
                document.write(pagar)
            }
        }
    }
    document.write(`<br>`);

}