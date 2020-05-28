let button = document.querySelector('.tambah');
let btnHapus = document.querySelector('.hapus');


button.innerHTML = "tambah penumpang";
let angkot1 = [];

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
let hapusPenumpang = function (penumpang, array) {
    // jika array kosong
    if (array.length == 0) {
        alert('angkot kosong');
        return array;
    } else {
        for (let i = 0; i < array.length; i++) {
            if (array[i] == penumpang) {
                array[i] = undefined;
                alert(`${penumpang} sudah dihapus`);
                return array;
            } else if (i == array.length - 1) {
                alert('nama tsb tidak ada');
                return array;
            }
        }
    }
}



button.addEventListener('click', function () {
    tambahPenumpang(prompt('masukan nama'), angkot1);

});
btnHapus.addEventListener('click', function () {
    hapusPenumpang(prompt('masukan nama yang akan di hapus'), angkot1);
})