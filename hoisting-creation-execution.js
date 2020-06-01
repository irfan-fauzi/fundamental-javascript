// Hal yang dikerjakan javascript ketika menjalankan kode :

// 1. creation phase in Global context : 

// 1. jika ada let / var / const : 
// => js akan mengisi let = undifine
// jika ada function fn() :
// => js akan mengisi fn() dengan isi fn() = belum dijalankan

// 2. pada global context :
// => js otomatis membuat object windows sbg global obj
// => menjadikan keyword "this" sebagai windows

// catatan : jadi sebelum execute kode di bawahnya, js melakukan hal yang di atas dulu
// setelah phase creation dilakukan, baru js menjalankan kodenya, 

// function hello() {
//     const text = `selamat pagi`;

//     function pagi() {
//         return text;
//     }
//     return pagi;
// }
// let sayHello = hello();

// const hallo = function () {
//     const parentFn = `aloha`;
//     return function () {
//         return `hai ${parentFn} nice to meet u `;
//     }
// }

// const sayHalo = hallo();
// untuk menjalankannya 
// sayHalo(`argumen`);

// versi kalau menggunakan argumen

const hallo = function (paramOuter) {
    const varOuter = `variable outer fn`;
    return function (paramInner) {
        const varInner = `variable inner fn`;
        return `ini : ${paramOuter}fn, ini : ${varOuter}, ini : ${paramInner}, ini ${varInner}`;
    }
}

// variable sayHalo = mendefinisikan fungsi hello(sekaligus mengisi argumts untuk parent fn()) 
const sayHalo = hallo(`param outer`);
// variable say = menginisiasi fungsi sayHalo dan mengisi argument child fungsi
const say = sayHalo(`param inner`);

// private method
const tombol = document.querySelector(`.tambah`);


const counter = (function () {
    let nilaiAwal = 0;
    return function () {
        console.log(++nilaiAwal);
    }
})();
nilaiAwal = 100;
// let runCounter = counter();
tombol.addEventListener('click', counter);