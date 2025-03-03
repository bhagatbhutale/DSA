function rSum(n, i = 0, t = 0) {
    if( i >= n.length) return t;
    return rSum(n, i + 1, t + n[i]);
}

console.log(rSum([1, 2, 3, 4, 5]));
