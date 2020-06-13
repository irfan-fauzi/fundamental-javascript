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

const arrNilai = [1, 2, 3, 4, 5, 6];
const [a, b, c, d, e, f] = arrNilai;
// function yang menerima argumen nilai a = 1
function kali(a) {
    return a * 2;
}
// kali(a) => a diambil dari array yang telah di destruct
const hasil = kali(a);

// 2. PADA OBJECT 

const obj = {
    name: `john mcClane`,
    job: `police NYPD`,
    id: 1973
};

// destruct object 
const {
    name,
    job,
    id
} = obj;

console.log(name); // name => from obj.name
console.log(job); // job  => from obj.job  
console.log(id); // id   => from obj.id

// very cool syntax !!