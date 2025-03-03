function printReverse(str) {
    if(str.length === 0) return;

    console.log(str[str.length - 1]);
    printReverse(str.slice(0, -1));
    
}
console.log(printReverse("hello"));
