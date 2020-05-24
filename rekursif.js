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
console.log(hasil);