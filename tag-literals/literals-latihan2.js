/*
    author : irfan fauzi
    date : 09 juni 2020
    masssage : - pembuatan elemen dengan pengulangan 
               - pembuatan atribut class dengan pengulangan


*/

let arr = [];
const angka = function (index) {
  for (let i = 1; i <= index; i++) {
    arr.push(i);
  }
}
// isi jumlah array with run function:
angka(6);
// create elemen with looping :
const el = `${arr.map( el =>
                
              `<div class="box${el}">kotak${el}</div>`  
            
            ).join(``)}`;
// put the new el in class "main"            
const main = document.querySelector('.main');
main.innerHTML = el;

// kesimpulan :

// kita bisa modifikasi elemen yang kita buat dengan js,
// buat elemen dengan JS, modifikasi dengan JS, mantap

// modifikasi class 
const box1 = document.querySelector('.box1');
box1.classList.add('tambah');