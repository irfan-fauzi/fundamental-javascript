// for(nilai awal; kondisi terminasi; incremen/decrement){
//     aksi
// }
// for (let i = 1; i <= 10; i++) {
//     console.log(`hello world ${i}x `);
// }
// Latihan 2
const jumlahAngkot = 10;
const beroperasi = 8;
let noAngkot = 1;

while (noAngkot <= beroperasi) {
    console.log(`angkot ${noAngkot} ok`);
    noAngkot++;

}
for (noAngkot = beroperasi + 1; noAngkot <= jumlahAngkot; noAngkot++) {
    console.log(`angkot ${noAngkot} tidak ok`);
}
