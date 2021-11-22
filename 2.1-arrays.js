// Create an array called faveCars. This array should include 3 of your favorite car brands or models
let favoriteCars
favoriteCars = ["BMW", "Mercedes", "Tesla"]

// Display the following output, by accessing elements in your array
// "My third all time favorite car is *insert 3rd item in your array*
console.log("My third all time favorite car is " + favoriteCars[2])
//string concatination
// output = My third all time favorite car is Tesla
// string interpulation
//console.log('My third all time favorite car is ${favoriteCars[2]}')


// "My second all time favorite car is *insert 2nd item in your array*"

console.log("My second all time favorite car is " + favoriteCars[1])


// "My first all time favorite car is *insert 1st item in your array*

console.log("My first all time favorite car is " + favoriteCars[0])

// Whoops, you made a mistake. Replace the 2nd item in your array with the car brand "Rivian"
// alternate way = favoriteCars[1] = "Rivian"

let saveNum

saveNum = "Rivian"

favoriteCars[2] = saveNum

console.log("Whoops, My second all time favorite car ACTUALLY is " + favoriteCars[2])

// Try adding a 4th car to your list. Print your list out after you add it to ensure its there

favoriteCars.push("Mazarati")
console.log(favoriteCars)

// Remove the last element in the array and save the value to a variable called lastPlace. Print this variable to ensure you captured the correct thing. 

let lastPlace = favoriteCars.pop()
console.log(lastPlace)
