import {add, subtract, addAll} from './CalculatorModule';
import {printline} from './Utility';

let resultAdd: number = add(5,7);
printline(resultAdd);

let resultSubtract: number = subtract(5,7);
printline(resultSubtract);

let addAllResult = addAll(5,6,7);
printline(addAllResult);