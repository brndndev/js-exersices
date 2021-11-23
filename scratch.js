/*let message = "Hello World"
function echo(text, count) {
	let i = 0
	while (i < count) {
		console.log(text)
		i++
}

echo(message, 7)*/



let message = "Hello World"
function echo(text, count) {
	let i = 0
    let newCollection = []
	while (i < count) {
		newCollection.push(text)
		i++
}
return newCollection
}

let response = echo(message, 7)
//this is where the response is happening at

console.log(response)


