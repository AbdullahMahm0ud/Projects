import {PI, getCirc, getArea, getVol} from './index.js';

console.log(PI);
const circ = getCirc(10);
const area = getArea(10);
const vol = getVol(10);

console.log(`${circ.toFixed(2)} cm`);
console.log(`${area.toFixed(2)} cm`);
console.log(`${vol.toFixed(2)} cm`);
