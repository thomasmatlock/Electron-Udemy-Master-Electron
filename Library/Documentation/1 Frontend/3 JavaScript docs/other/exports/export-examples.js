// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export
// Syntax
// There are two types of exports:
// Named Exports (Zero or more exports per module)
// Default Exports (One per module)

// Exporting individual features
export let name1, name2, …, nameN; // also var, const
export let name1 = …,
    name2 = …,
    …, nameN; // also var, const
export function functionName() {... }
export class ClassName {... }

// Export list
export { name1, name2, …, nameN };

// Renaming exports
export { variable1 as name1, variable2 as name2, …, nameN };

// Exporting destructured assignments with renaming
export const { name1, name2: bar } = o;

// Default exports
export default expression;
export default function(…) {…} // also class, function*
export default function name1(…) {…} // also class, function*
export { name1 as default, … };

// Aggregating modules
export * from…; // does not set the default export
export * as name1 from…; // Draft ECMAScript® 2O21
export { name1, name2, …, nameN }
from…;
export { import1 as name1, import2 as name2, …, nameN }
from…;
export { default }
from…;

// Description
// There are two different types of export, named and default. You can have multiple named exports per module but only one default export. Each type corresponds to one of the above syntax:
// Named exports:

// export features declared earlier
export { myFunction, myVariable };

// export individual features (can export var, let,
// const, function, class)
export let myVariable = Math.sqrt(2);
export function myFunction() {... };

// Default exports:
// export feature declared earlier as default
export { myFunction as default };

// export individual features as default
export default function() {... }
export default class {.. }