// while
// while (kondisi) {
//     aksi
// }
// selama kondisi = true, maka lakukan akis didalam kurung {}
// jika kita melakukan kode di bawah ini , maka loping nya tidak akan pernah berhenti
// 
// let i = 1;
// // i = 1 , angka 1 selalu lebih besar dari 10
// // maka hasilnya true
// while (i < 10) {
//     // hasilnya : browser akan mencetak ini tanpa berhenti
//     console.log('hello');
// 

// CONTOH 2 pengulangan dihentikan oleh user
// ketika diklik OK = true, ketika diklik cencel = false
// let ulang = true;
// while (ulang) {
//     console.log('hello');
//     ulang = confirm('again');
// }

// CONTOH 2
// rumus
// nilai awal
// while(kondisi terminasi){
//     aksi
//     increment / decrement
// }
// let x = 1;
// while (x < 10) {
//     console.log(x); // angka 1 -  sembilan menurun
//     x++;
// }
// penjelasan :
// nilai awal = 1
// let x = 1;
// cek : apakah 1 lebih kecil daripada 10 ?,
// jika ya = true => jalankan aksi, kemudian 1 akan ditambahkan 1 = 2 (kini x = 2)
// perulangan berlanjut, 
// cek : apakah 2 , lebih kecil dari 10 ?,
// jika ya = true => jalankan aksi, kemudian 2 akan ditambahkan 1 = 3 (kini x = 3)
// aksi terus dijalankan sampai x = 10, 
// cek : apakah 10, lebih kecil dari 10 ?, false => perulangan berhenti;
// while (x < 10) {
//     console.log(x);
//     x++;
// }

// CONTOH LAIN
// mencetak 'hello world 1x' 10 kali
// let x = 1;
// // dalam while(jangan tuliskan langsung kondisi true atau false)
// while (x <= 10) {
//     console.log(`hello world ${x}x`);
//     x++;
// }

// Latihan 
let x = 1;
while (x < 10) {
    console.log(`angkot no. ${x} beroperasi dengan baik`);
    x++;
}
// TABEL PENULUSURAN