'use strict'

function plus(a, b) {
    return a + b;
}
function minus(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function devide(a, b) {
    return a / b;
}

try {
    console.log(plus(5, 5));
    console.log(minus(5, 5));
    console.log(multiply(5, 5));
    console.log(devide(5, a));
}
catch (err) {
    console.log("error occured")
}