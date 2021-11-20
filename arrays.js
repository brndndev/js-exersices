let laundryDetergent = []

// console.log(laundryDetergent)

laundryDetergent.push('tide')

console.log(laundryDetergent)

laundryDetergent.push('Gain', 'OxyClean')

console.log(laundryDetergent)

//laundryDetergent.pop()

//console.log(laundryDetergent)

//let lastRemoved = laundryDetergent.pop()

//console.log(lastRemoved)

//"Tide", "Gain", "OxyClean"
// deleting arrays
let saveNum =  laundryDetergent[2] //OxyClean

laundryDetergent[2] = laundryDetergent[1]
// 'Tide', 'Gain', 'Gain'
//save a value before deliting
laundryDetergent[1] = saveNum
// "Tide", "OxyClean", "Gain"
console.log(laundryDetergent)

