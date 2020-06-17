/*
    author : irfan fauzi
    note   : destruction assigment
    date   : 22:03 13/06/2020

*/
// 1. PADA ARRAY []

// memisahkan array menjadi variable setiap elemennya
// const arr = [1, "beruang", 3];
// const [a, b, c] = arr;
// // a = 1, b = 2, c = 3
// console.log(a); // menampilkan nilai  : 1
// console.log(b); // menampilkan string : beruang 
// console.log(c); // menampilkan nilai  : 3

// implementasi / contoh kasus : 

// const arrNilai = [1, 2, 3, 4, 5, 6];
// const [a, b, c, d, e, f] = arrNilai;
// // function yang menerima argumen nilai a = 1
// function kali(a) {
//     return a * 2;
// }
// // kali(a) => a diambil dari array yang telah di destruct
// const hasil = kali(a);

// 2. PADA OBJECT 

// const obj = { name: `john mcClane`, job: `police NYPD`, id: 1973 };
// // destruct object 
// const { name, job, id } = obj;
// console.log(name); // name => from obj.name
// console.log(job); // job  => from obj.job  
// console.log(id); // id   => from obj.id

// very cool syntax !!

// menukar posisi

// let a = 1;
// let b = 2;

// console.log(a);
// console.log(b);
// // tukar posisi
// [a, b] = [b, a];
// console.log(a);
// console.log(b);
//-----------------------------------------------------
// FUNCTION

// function arr() {
//     return ["satu", "dua"];
// }
// const [a,b] = arr();

// -----------------------------------------------------
// cara baru membuat array 
// const [a, b, c] = [1, 2, "tiga"];

// menggunakan rest parameter --------------------------------:

// a. REST PARAMETR ARRAY

// const [a, ...args] = [1, 2, "tiga", "empat"];
// args = akan menjadi array yang berisi nilai [2,3, "tiga", "empat"]

// b. ASSIGMENT TANPA DEKLARASI OBJECT

// ({ id, nama } = { id: 09283, nama: "irfan fauzi" });
// id otomatis menjadi variable yang memiliki nilai = 09283
// nama otomatis menjadi variable yang memiliki nilai = "irfan fauzi"

// C. ASSIGMENT KE VARIABLE BARU
// buat object
// const obj = { nama: "john mcClane", usia: 87 };
// // inisialisasi ke variable baru
// const { nama: n, usia: u } = obj;
// console.log(n) // "john mcClane"
// console.log(u) // 87

// MEMBUAT DEFAULT VALUE
// contoh kasus : kita ingin nama variable tertentu tidak bisa di ubah
// const mahasiswa1 = { nama: "john petrucci", jurusan: "teknik kimia" };
// // contoh : kita ingin nama univ tetap sama
// const { nama, jurusan, univ = "universitas gundah gulana" } = mahasiswa1;
// console.log(nama); // "john petrucci"
// console.log(jurusan); // "teknik kimia"
// console.log(univ); // "universitas gundah gulana"

// MENGGABUNGKAN  =>  ASSIGN KE VAR BARU + DEFAULT VALUE

// const mahasiswa1 = { namaLengkap: "john petrucci", jurusanKuliah: "teknik kimia" };

// const { namaLengkap: nama, jurusanKuliah: jurusan, universitas: univ = "universitas gundah gulana" } = mahasiswa1;
// console.log(nama); // "john petrucci"
// console.log(jurusan); // "teknik kimia"
// console.log(univ); // "universitas gundah gulana"

// REST PARAMETER OBJECT

// const obj = {
//     name: "irfan fauzi",
//     age: 89,
//     email: "irfan@fauzi.yahoo.com"
// };
// const { name, ...value } = obj;
// console.log(name); // "irfan fauzi"
// console.log(value); // Object{ age : 89, email: "irfan@fauzi.com"}

// MENGAMBIL FIELD PADA OBJECT, SETELAH DIKIRIM SEBAGAI PARAMETER FUNCTION

const obj = {
    id: 12,
    name: "irfan fauzi",
    age: 89,
    email: "irfan@fauzi.yahoo.com"
};

// buat function yang menangkap parameter obj
function getId({ id }) {
    return id;
}
console.log(getId(obj)); // 12



