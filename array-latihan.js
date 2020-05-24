let button = document.querySelector('button');
let hasil = document.querySelector('.hasil');


button.innerHTML = "tambah penumpang";
let angkot1 = ['satu', undefined, 'dua'];

// tambah data
let tambahPenumpang = function (penumpang, array) {
    if (array.length == 0) {
        array.push(penumpang);
        return array;
    } else {
        for (let i = 0; i < array.length; i++) {
            if (array[i] == undefined) {
                array[i] = penumpang;
                return array;
            } else if (i == array.length - 1 && array[i] != penumpang) {
                array.push(penumpang);
                return array;
            } else if (array[i] == penumpang) {
                alert('nama sama');
                return false;
            }
        }
    }

}






button.addEventListener('click', function () {
    tambahPenumpang(prompt('masukan nama'), angkot1);

});