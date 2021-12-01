import {choice, remove} from './helpers';
import fruits from './foods';

let list = fruits
let f = choice(list);
console.log(`I'd like one ${f}, please`);
console.log(`Here you go: ${f}`);
list = remove(list, f);
console.log("Delicious! May I have another?");
console.log(`I'm sorry, we're all out. We have ${list.length} left.`);
