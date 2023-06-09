import process from 'node:process';
import MyModule from './module.js';

const myModule = new MyModule();
console.log(myModule.getDescription());