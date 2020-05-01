let ulang = function (param) {
    // kondiis terminasi
    if (param == 10) {
        return
    }
    console.log(param);
    return ulang(param + 1);

}
ulang(1);