// // ARRAY HELPERS 

// // Write an app that will go through a list of numbers and then multiple each number by 2 and put the result in a new array. 

// let numbers = [1,2,3,4,5,6,7,8,9]

// // MAP (ARRAY HELPER)
// // map returns a brand new array without changing the existing array

// let finalArray = numbers.map(function(no) {
//   console.log(no)
//   // You must return something from the map function 
//   // That something becomes part of the brand new array 
//   return no * 2
// })

// console.log(finalArray)
// console.log(numbers)



// let namesLengthArray = names.map(function(name) {
//   return name.length 
// })

// console.log(namesLengthArray)

// // [4, 6, 4, 8]


// /*
// let doubledArray = [] 

// for (let i = 0; i < numbers.length; i++) {
//   doubledArray.push(numbers[i] * 2)
// }

// // NEW ARRAY [1,4,6,8,10,12,14,16,18]

// console.log(doubledArray)
// */

// // FILTER (ARRAY HELPER)

// let someNumbers = [1,2,3,4,5,6,7,8,23,34]

// // We want to create an array with only even numbers 

// // Filter will return either true/false. If filter returns true then that item is added to the final array. If returns false then that item is dicarded (not added to the final array )
// let evenNumbers = someNumbers.filter(function(no) {
//   return no % 2 == 0 // % is mod operator 
// })

// console.log(evenNumbers)


// // FIND (ARRAY HELPER)

// let cars = [
//   {make: 'Honda', model: 'Accord', price: 20000}, 
//   {make: 'Toyota', model: 'Camry', price: 30000}, 
//   {make: 'Tesla', model: 'Model 3', price: 60000}, 
//   {make: 'Honda', model: 'Civic', price: 15000},
// ]

// // Find the car where the make is 'Honda' 
// let result = cars.find(function(car) {
//   return (car.make == 'Honda')
// })

// console.log(result)

// let numbers = [1, 2, 3, 4, 5, 6, 7]
// Array.map(function(no));
// console.log