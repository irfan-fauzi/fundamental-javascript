/*
    author : irfan fauzi
    note   : for in
    date   : 22:03 17/06/2020

*/
// for in digunakan untuk melooping object
// const obj = {
//     id: 9234,
//     name: "irfan fauzi",
//     job: "police",
// };

// for (el in obj) {
//     console.log(obj[el]) // muncul value dari masing - masing property obj
//}

const obj = {
    id: 0231,
    name: "irfan fauzi",
    poin: {
        math: 73,
        oop: 80
    }
};
function printObj({ id, name, poin: { math, oop } }) {
    return `id ${id} name : ${name}, math poin : ${math}, oop poin : ${oop} `;
}
const show = printObj(obj);
console.log(show); // "id 153 name : irfan fauzi, math poin : 73, oop poin : 80 "

