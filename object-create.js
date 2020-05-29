// 1. tanpa menggunakan object.create
// bisa membuat dua object yang saling terkoneksi 

// control => object backup (child object car)
const control = {
    isiBensin: function (liter) {
        this.energy += liter * 100;
        return this.energy;
    },
    ngebut: function (jam) {
        this.energy -= jam;
        return this.energy;
    }

};

// car => Object utama 
const car = function (brand, type, number) {
    let car = {}
    car.brand = brand;
    car.type = type;
    car.energy = 0;
    // ambil dari object control
    car.isiBensin = control.isiBensin;
    car.ngebut = control.ngebut;
    // --------------------------
    car.number = number;
    return car;
}

const irfan = car("bmw", "serie7", 9342);

// cara 2 menggunakan object.create()

const engine = {
    isiBensin: function (liter) {
        this.energy += liter * 100;
        return this.energy;
    },
    ngebut: function (jam) {
        this.energy -= jam;
        return this.energy;
    }
}
// menggunakan Object.create() => tidak perlu mendaftarkan method baru ke object utama,

const motor = function (brand, type, number) {
    // cukup obj = object.create(childObject) -> akan otomatis terkoneksi
    let motor = Object.create(engine);
    motor.brand = brand;
    motor.type = type;
    motor.number = number;
    motor.energy = 0;
    return motor;
}

const heru = motor("yamaha", "jupiter mx", 8734);