function min(m) {
let array = new Array;
for (let i = 0; i < m; i++) {
    array[i] = (Math.floor(Math.random()*199) - 99);
}
let min = Math.min.apply(null, array);
console.log(array);
console.log(min);
}
module.exports = min;
//min(8);