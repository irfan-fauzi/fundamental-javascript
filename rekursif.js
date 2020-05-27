function tampilAngka(param) {
    // base case
    if (param == 1) {
        return;
    }
    console.log(param);
    return tampilAngka(param - 1);
}

// faktorial
// 5! = 5 x 4 x 3 x 2 x 1
function faktorial(param) {
    if (param == 0) {
        return 1;
    }
    return param * faktorial(param - 1);

}
// 
let hasil = faktorial(5);
// console.log(hasil);


let beli = [];
let uang = 100000;

function lakukanbeli(uang, beli) {
    // let harga = 0;
    // let barang = "";
    if (!beli.includes("minyak")) {
        uang -= 25000;
        beli.push("minyak");
    } else if (!beli.includes("gula")) {
        uang -= 15000;
        beli.push("gula");
    } else if (!beli.includes("telur")) {
        uang -= 27000;
        beli.push("telur");
    } else {
        return uang;
    }
    return lakukanbeli(uang, beli);




}

let sisaUang = lakukanbeli(uang, beli);
console.log(sisaUang);