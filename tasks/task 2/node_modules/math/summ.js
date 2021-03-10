function summ(n) {
    if (n==1) return 1;
    return n + summ(n-1)
}
module.exports = summ;
//console.log (summ(59));