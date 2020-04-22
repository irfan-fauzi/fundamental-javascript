// SWITCH
// rumus :
// switch(ekspresi) {
//     case `nilai 1`:
//         aksi 1
//     [break ;] // break optional, bisa dipakai atau tidak

//     case `nilai 2`:
//         aksi 2
//     [break ;]

//     case `nilai n`:
//         aksi n
//     [break ;]

//     default :
//         aksi default

//     [break ;]
// }

// CONTOH 1
// let angka = parseInt(prompt('masukan angka : '));
// switch (angka) {
//     case 1:
//         alert('lo masukin angka 1');
//         break;
//     case 2:
//         alert('lo masukin angka 2');
//         break;
//     case 3:
//         alert('lo masukin angka 3');
//         break;
//     default:
//         alert('lo masukin karakter yang salah');
//         break;

// }

// CONTOH 2
let food = prompt('input food item : ');
switch (food) {
    case `fruit`:
        alert('its healty food,, good for you bro..');
        break;
    case `burger`:
        alert('hmm.. if you want to diet.. stop eat that');
        break;
    case `salad`:
        alert('its healty food,, good for you bro..');
        break;
    default:
        alert('wrong characters.. fuck off');
        break;

}