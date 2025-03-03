// Sum of From 1 to 10 ?

function sum(n) {

    if(n == 1) {
        return 1;
    }

    return n + sum(n-1);
}

const result = sum(5);
console.log("Result : " + result);
