function nestedLoop(n) {
    if( n === 0) return;

    for(let i = 0; i < n; i++) {
        console.log(i);
        nestedLoop(n-1)
        
    }
}
console.log(nestedLoop(2))