const container = document.querySelector('.container');
const teks = document.querySelector('.teks');
// pecah menjadi tiap tiap huruf
const pecahanTeks = [...teks.textContent];
// tambahkan span di setiap huruf
const span = pecahanTeks.map(el => `<span class = "sp">${el}</span>`).join('');
teks.innerHTML = span;
