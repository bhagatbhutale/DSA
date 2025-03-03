function sumDigit(n) {

    if( n < 10) return n;
    return (n % 10) + sumDigit(Math.floor(n / 10));
}
console.log(sumDigit(456));
