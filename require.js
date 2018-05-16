function require() {
    var det = define(58);
    console.log(det)
};

require();

function define(da) {
    var arr = [1, 5, 9, 4, 7];
    if (da) {
        arr.push(da)
    }
    return arr;
}