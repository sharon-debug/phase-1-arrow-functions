//has a function expression called divide
const divide = (divide) => 2000/100
divide ('divide')

//square arrow function takes one parameter and multiplies it times itself

const X = [2];
const square = (parameter1) => {
    let squares= X.map(x => x ** x);
    return parameter1 * parameter1;
    square;
}
//add arrow function takes two parameters and adds them together
const add = (parameter1, parameter2) => {
    console.log(`Adding ${parameter1}`);
    console.log(`Adding ${parameter2}`);
    return parameter1 + parameter2;
}
add(3,4);