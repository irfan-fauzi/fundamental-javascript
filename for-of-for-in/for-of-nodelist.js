/*
    author : irfan fauzi
    note   : for of pada nodelist
    date   : 22:03 16/06/2020

*/
// buat elemen container ----------------------
const container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);
// -------------------------------------------

// buat elemen ul
const ul = document.createElement('ul');
container.appendChild(ul);
// ----------------------------------------

// buat elemen li sebanyak 3 buah dengan class 
for (let i = 1; i <= 3; i++) {
    const li = document.createElement('li');
    ul.appendChild(li);
    li.classList.add('data')
    li.innerHTML = `elemen ${i}`;
}
// tangkap li => li adalah sebuah elemen NodeList
const li = document.querySelectorAll('.data');
// karena NodeList perilakunya mirim dengan array[]
// maka kita bisa lakukan for of
for (el of li) {
    console.log(el) // maka kita berhasil menangkap setiap elemen dari Nodelist tsb
}
