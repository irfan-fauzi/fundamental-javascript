function jumlahkanAngka() {
    let hasil = 0;
    // karena pada function pasti terdapat arguments[]
    // kita bisa panggil langsung
    for (const el of arguments) {
        hasil += el;
    }
    return hasil;
}
const jml = jumlahkanAngka(1, 2, 3);