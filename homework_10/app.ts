import { addAvailable } from './available';

@addAvailable(true)
class Test{}


var test = new Test();

console.log(test);