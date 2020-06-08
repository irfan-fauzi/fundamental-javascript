// template literals
// 1. multi line string
// 2. embedded expression
// 3. HTML Fragment
// 4. expression interpolation
// 5. tagged template

// contoh HTML Fragment
const car = {
    brand: `ferari`,
    color: `red`,
    stok: 890
};

// inisialisasi value object kedalam elemen html :
const elemen = `<div class="container">
                    <h2>${car.brand}</h2>
                    <span>${car.color}</span>
                    <span>${car.stok}</span>
                </div>`;
const main = document.querySelector('.main');
// main.innerHTML = elemen;

// looping

// 1. make array of object ----------------------------------

const cars = [{
        brand: `toyota`,
        color: `red`,
        stok: 98
    },
    {
        brand: `honda`,
        color: `black`,
        stok: 30
    },
    {
        brand: `suzuki`,
        color: `silver`,
        stok: 31
    }
];
const clasEl = `pertamax`;

// buat komponen 
const el = `<div class="${clasEl}">
                ${cars.map( el => `
                <h3>prace list : </h3>
                    <ul>
                        <li>${el.brand}</li>
                        <li>${el.color}</li>
                        <li>${el.stok}</li>
                    </ul>
                
                `).join("")}
            </div>`;
// letakan elemen yang sudah dibuat            
main.innerHTML = el;