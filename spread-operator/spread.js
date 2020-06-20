/*
    author : irfan fauzi
    note   : spread operator
    date   : 22:03 19/06/2020

*/
// SPREAD OPARETOR 
// => MEMECAH (EXPAND / UNPACK) ITEREBLE MENJADI SINGLE ELEMEN :

/*
    ITEREBLE OBJECT :
    1.STRING
    2.ARRRAY
    3.ARGUMENTS / NODELIST
    4.TYPEDARRAY
    5.MAP
    6.SET
    7.USER DEFINE ITEREBLE

*/
// contoh
// const striker = ["salah", "firmino", "mane"];

// // jika kita tambahkan tiga titik (...) maka akan memcah setiap elemen array

// console.log(...striker); // salah firmino mane
// // jika kita tmbahkan index maka akan memecah setiap huruf pada elemen string array

// console.log(...striker[0]); // s  a  l  a  h
// --------------------------------------------------------------------------------------------

// kapan spread operator ini digunakan ?, atau untuk apa menggunkan ini : 

// 1. bisa untuk menggabungkan dua atau lebih array menjadi satu array utuh

// contoh :
// const striker = ["salah", "firmino", "mane"];
// const defender = ["van dijk", "alexandre-arnold", "robertson"];
// const keeper = ["alison", "adrian"];
// // gabungkan
// const squad = [...striker, ...keeper, ...defender]; // squad = [semua isi array]
// console.log(squad); //"salah", "firmino", "mane", "alison", "adrian", "van dijk", "alexandre-arnold", "robertson"

// dengan menggunakan cara ini, kita menjadi lebih fleksibel, contohnya jika kita ingin menambahkan elemen baru :
// const striker = ["salah", "firmino", "mane"];
// const defender = ["van dijk", "alexandre-arnold", "robertson"];
// const keeper = ["alison", "adrian"];
// // bisa langung menambah isi array secara langsung 
// const squad = [...striker, "henderson", ...keeper, ...defender];

// 2. untuk melakukan copy nilai pada array :

// contoh : 
// const striker = ["salah", "firmino", "mane"];
// // dengan ini ,kita copy array striker menjadi array yang baru dibuat 
// const newStriker = [...striker];
// newStriker.push("minamino");
// console.log(striker) // "salah", "firmino", "mane"
// console.log(newStriker) // "salah", "firmino", "mane", "minamino"

const container = document.querySelector('.container');
const ul = document.createElement('ul');
container.appendChild(ul);

for (let i = 1; i <= 3; i++) {
    const li = document.createElement('li');
    ul.appendChild(li);
    li.classList.add(`list`);
}
const list = document.querySelectorAll('.list');
const [a, b, c] = list;
a.textContent = "mosalah";
b.textContent = "firmino";
c.textContent = "sadio mane";


// ubah isi dari nodelist jadi array
const arrayList = [...list].map(el => el.textContent);


