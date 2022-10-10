function sum(a, b){
    return a + b
}
function calc(a, b, callback) {//doesn't need to be called 'callback', it's a convenction
    return callback(a, b);
}
console.log(calc(5, -2, sum))
//settimeout
function greeting(name) {
    console.log(`Good night ${name}`)
}
setTimeout(greeting, 3000, "John")