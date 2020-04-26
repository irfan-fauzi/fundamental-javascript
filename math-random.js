// Math.random() adalah cara untuk mendapatkan bilangan acak dari 0 sampai 0.99 (bilangan pecahan / double)
// console.log(Math.random());

// contoh berikut angka randomnya dari 0 sampai 0.2999 / atau 3
document.write(Math.random() * 3);
document.write(`<br>`);
// cara untuk membulatkan nilai double menjaid integer
// 1. floor() / lantai
// membulatkan kebawah dengan fungsi Math.floor(Math.random())
// kode di bawah artinya :
// membangkitkan bilangan acak dari 0 - 11
document.write(Math.floor(Math.random() * 11));
document.write(`<br>`);
// 2. ceil() / langit -langit
document.write(Math.ceil(Math.random() * 10));


// Bonus : ParseInt()
// untuk mengubah input yang dimasukan menjadi Integer
// secara default : semua input = string. dengan menggunakan parseInt , maka nilai angka yang dimasukan menjadi Integer
// contoh :
let hasil = parseInt(prompt(`secara default : semua input = string`));
alert(hasil);