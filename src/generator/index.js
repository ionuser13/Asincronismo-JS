function* gen() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}

const g = gen();
console.log(g.next().value)
console.log(g.next().value)
console.log(g.next().value)

function* iterate(arr) {
    for (let item of arr) {
        yield item;
    }
}

const it = iterate(["John", "Oscar", "Ana", "Lucia", "Juan"]);
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)