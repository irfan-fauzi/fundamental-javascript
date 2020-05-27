// 1. this pada function declaration
// menghasilkan / mengembalikan object global
function deklarasi() {
    return this;
}


// 2. this pada function expression
// menghasilkan / mengembalikan object global
const ekspresi = function () {
    return this;
}


// 3. this pada object literal
// mengembalikan object tersebut/ ybs
const literal = {
    properti1: `haha`,
    properti2: function () {
        return this;
    }
};

// 4. this pada constructor 
// mengembalikan object yang baru dibuat
const Konstruktor = function () {
    this;
}
let kons = new Konstruktor();