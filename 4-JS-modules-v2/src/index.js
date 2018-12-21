
console.log("-index.js-");

let greetMod = require('asv-dec-greet')
greetMod.greet('tn');
greetMod.greet('en');
greetMod.greet('es');

//
let lodash = require('lodash')

let arr1 = [1, 2, 3];
let arr2 = [3, 4, 5];

console.log(lodash.difference(arr1, arr2));

//--------------------------------------------

// import primaryItem, { item1, item2 } from './hotel/menu'
// import { item1 as pc, item2 as gc } from './hotel/menu'

import * as items from './hotel/menu'



