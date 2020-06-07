// implementasi
// tangkap el box
const box = document.querySelector(`.box`);

// tambah class css bila di klik
box.addEventListener(`click`, function () {
    this.classList.toggle('zoom');
    // disini harus oakai arrow function (=>)
    setTimeout(() => {
        // supaya "this" mengacu kepada elemen "box"
        this.classList.toggle('addColor');
    }, 1000);
});