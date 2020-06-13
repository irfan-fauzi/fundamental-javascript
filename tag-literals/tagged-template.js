/*
    author : irfan fauzi
    date : 09 juni 2020
    masssage : - pembuatan tagged template 
               - mmbuat function string literals


*/

// 1. version 1.0

// const data = {
//     name: `irfan fauzi`,
//     age: 90
// }
// // buat function
// const show = function () {
//     return `data function`;
// }
// // jika show() tidak memiliki parameter/argmnt maka :
// // show`argumen` => argumen disini akan diabaikan
// const el = show `halo my name is ${data.name}, umur saya ${data.age}`;
// // el = "data function" 

// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// 2. version 2.0

// const data = {
//     name: `irfan fauzi`,
//     age: 90
// }
// // buat function
// const show = function (param) {
//     return param;
// }
// // jika show(param){ return param}  :
// // param disini diisi dengan array string
// const el = show `halo my name is ${data.name}, umur saya ${data.age}`;
// el = ["halo my name is","umur saya", "(string kosong)"] 

// 3. version 3.0

// const data = {
//     name: `irfan fauzi`,
//     age: 90
// }
// function show() disini, punya dua parameter,
// show("string yang dikirim melalui argumen", expression1, expression2, dst... ){
//              
// }
// const show = function (string, param1, param2) {
//     return `${string},${param1}, ${param2} `;
// }

// const el = show `halo my name is ${data.name}, umur saya ${data.age}`;

// el = "halo my name is ,, umur saya ,,irfan fauzi, 90 "

// -----------------------------------------------------------

// version Rest - Parameter

// const data = {
//     name: `irfan fauzi`,
//     age: 90
// }

// const name = `irfan`;
// const age = 90;
// buat function = rangkai array
/*
    array str = ["halloMyNameIs", "umurSaya", "tahun"]
    array values = ["data.name", "data.age"]

    // siapkan wadah
    let wadahStr = ``
    for(let i = 0; i < str.length; i++){
        wadah str += str[i]
        for( let j = 0; j < value.lenghth; j++ ){
            wadahStr += value[j]
        }
    }


*/
// const name = `irfan`;
// const age = 90;

// const show = function (str, ...value) {
//     let container = ``;
//     str.map(function (el, index) {
//         container += `${el}${value[index] || ''}`
//     }).join("-");

//     return container;

//     // pakai 

// }
// // jika show(param){ return param}  :
// // param disini diisi dengan array string
// const el = show `halo my name is ${name}, umur saya ${age} tahun`;
// el = ["halo my name is", "umur saya", "(string kosong)"]

// use array.reduce()

// const data = {
//     name: `john mclane`,
//     job: `police`
// };


// function myFunc(str, ...value) {
//     return str.reduce((result, currentV, i) => `${result}${currentV}${value[i] || '' }`, '');
// }

// const el = myFunc `nama saya : ${data.name}, usia saya :${data.job} tahun `;

// highligt css / html
const data = {
    name: `john mclane`,
    job: `polisi`,
    age: 80
};


function myFunc(str, ...value) {
    return str.reduce((result, currentV, i) => `${result}${currentV}<span class="mark">${value[i] || '' }</span>`, '');
}

const el = myFunc `nama saya : ${data.name}, pekerjaan saya : ${data.job} lalu lintas, usia saya ${data.age} `;
const main = document.querySelector('.main');
const mark = main.getElementsByClassName(`mark`);
main.innerHTML = el;
for (let i = 0; i < mark.length; i++) {
    mark[i].classList.add('tandai');
}