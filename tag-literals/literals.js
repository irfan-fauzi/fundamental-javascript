const container = document.querySelector(`.container`);
const Mobil = function (merk, warna) {
    this.merk = merk;
    this.warna = warna;
    this.stok = 0;
}

ferari = new Mobil(`ferari`, `merah`);
mercedes = new Mobil(`mercedes`, `siver`);

let el = `<h2>${ferari.merk}</h2>
          <ul>
            <li>${ferari.warna}</li>
            <li>${ferari.stok}</li>
          </ul>`;

container.innerHTML = el;