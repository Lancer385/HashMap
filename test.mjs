import { HashMap } from "./hash-map.mjs";

const test = new HashMap();


test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')
test.set('act', 'who')

console.log(test.get('apple')); // red
console.log(test.get('banana')); // yellow
console.log(test.get('carrot')); // orange
console.log(test.get('dog')); // brown
console.log(test.get('elephant')); // gray
console.log(test.get('frog')); // green
console.log(test.get('grape')); // purple
console.log(test.get('hat')); // black
console.log(test.get('ice cream')); // white
console.log(test.get('jacket')); // blue
console.log(test.get('kite')); // pink
console.log(test.get('lion')); // golden
console.log(test.get('act')); // who

test.set('moon', 'silver')

test.remove('moon')
console.log(test.entries())

