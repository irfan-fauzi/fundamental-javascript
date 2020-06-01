// setiap elemen pada array adalah object 

// main object
const Mobil = function (brand, type) {
    this.brand = brand;
    this.type = type;
    this.energy = 0;
}
// child object
Mobil.prototype.isiBensin = function (liter) {
    this.energy += liter * 100;
    return this.energy;
}
Mobil.prototype.jalan = function (km) {
    this.energy -= km;
    return this.energy;
}

// instansiasi new object 
const irfan = new Mobil("ferari", "suv");