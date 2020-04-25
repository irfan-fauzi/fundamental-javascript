let noAngkot = 1;
let jmlAngkot = 10;


for (noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
    if (noAngkot <= 6 && noAngkot != 1) {
        console.log(`angkot no ${noAngkot} sedang beroperasi`);
    } else if (noAngkot == 8 || noAngkot == 10 || noAngkot == 1) {
        console.log(`angkot no ${noAngkot} sedang lembur`);
    } else {
        console.log(`angkot no ${noAngkot} sedang tidak beroperasi`);
    }

}

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
// 2
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