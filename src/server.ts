import { ValidParenthesis } from './AlgoMania/ValidParenthesis';
import { FlippingBits } from './HackerRank/FlippingBits';

const parenthesisValidation = new ValidParenthesis();
const flippingBits = new FlippingBits();

console.log("Validating value = ", "{{}}, is valid = ", parenthesisValidation.validateParenthesis("{{}}"));
console.log("Validating value = ", "{(}}, is valid = ", parenthesisValidation.validateParenthesis("{(}}"));

console.log("Inverting bits of ", 1, ", inverted bits = ", flippingBits.flippingBits(1));