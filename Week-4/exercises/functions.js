// Create a function that returns the sum of 2 numbers


function add(x) {
    return function(y) {
        return x + y
    }
}
console.log(add(3)(7))

//No need to assign variables when passing in data

// Create a function that returns the difference of 2 numbers

function subtract(x) {
    return function(y) {
        return x - y
    }
}
console.log(subtract(7)(2))




// Create a function that returns the product of 2 numbers


function math(x, y) {
    let sum = x * y
    return sum
}
console.log(math(7, 2))




// Create a function that returns the quotient of 2 numbers
