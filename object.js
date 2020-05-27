// const tambahObj = document.querySelector('.tambah');

// cara 1 object literal, property langsung dibuat didalam 
const mobil = {
    merk: `ferari`,
    jenis: `sport`,
    warna: `agresif red`,
    detail: function () {
        let all = `mobil dengan merk ${this.merk}, jenis ${this.jenis} `;
        return all;
    }
}
// sebenarnya kita bisa membuat properti baru dari luar kedalam obj mobil,
// dengan cara : mobil.nomor = 1234, kode ini akan otomatis menambah properi nomor kedalam obj mobil

// nah, dengan begitu, kita bisa membuat function doong, biar ga berantakan kodenya ...

// cara 2 function declaration 
// parameter untuk mengisi obj mobil
const buatMobil = function (merk, jenis, warna, nomor) {
    // obj kosong
    let mobil = {};
    // isi masing - masing properti dengan parameter yang akan dikirim via arg
    mobil.merk = merk;
    mobil.jenis = jenis;
    mobil.warna = warna;
    mobil.nomor = nomor;
    // kembalikan isi obj yang udah diisi, kelar deh,, praktis kan,
    return mobil;
}

let ferari = buatMobil(`ferari`, `SUV`, `agresif red`, 6523);
let mclaren = buatMobil(`mclaren`, `sport`, `silver space`, 9882);

let text = `saya punya ${ferari.merk} dengan warna ${ferari.warna}`;
let text2 = `punya saya ${ferari.merk} sedangkan dia punya ${mclaren.merk}`;

// cara 3. constructor, khusus dibuat untuk object
// biasaya para developr menggukanan huruf besar dulu
const Motor = function (merk, type, warna, nomor) {
    // ga usah ada obj kosong
    this.merk = merk;
    this.type = type;
    this.warna = warna;
    this.nomor = nomor;
    // tidak usah return, karena ototmatis return
}
// cara buat nya tinggal gini aja, sama kayak lu buat function biasa, cuman nambahin new doang
let motorSijabrig = new Motor(`yamaha`, `r25`, `blue sport`, 8923);
let motorSiDanu = new Motor(`honda`, `CBR 250`, `black glossy`, 9883);
