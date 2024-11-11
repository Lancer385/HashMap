import { HashMap } from "./hash-map.mjs";
import { HashSet } from "./hash-set.mjs";

const test = new HashMap();
const test2 = new HashSet();

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


test2.set('apple')
test2.set('banana')
test2.set('carrot')
test2.set('dog')
test2.set('elephant')
test2.set('frog')
test2.set('grape')
test2.set('hat')
test2.set('ice cream')
test2.set('jacket')
test2.set('kite')
test2.set('lion')
test2.set('act')


console.log(test2.has('apple')); // red
console.log(test2.has('banana')); // yellow
console.log(test2.has('carrot')); // orange
console.log(test2.has('dog')); // brown
console.log(test2.has('elephant')); // gray
console.log(test2.has('frog')); // green
console.log(test2.has('grape')); // purple
console.log(test2.has('hat')); // black
console.log(test2.has('ice cream')); // white
console.log(test2.has('jacket')); // blue
console.log(test2.has('kite')); // pink
console.log(test2.has('lion')); // golden
console.log(test2.has('act')); // who

test2.remove('act')

console.log(test2.keys())