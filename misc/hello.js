// Ex 1 - Product by addition
console.log("\nEXERCISE 1\n");

let multiplicant = 4;
let multiplier = 5;

let product = 0;

for (let i = 0; i < multiplier; i++) {
  product += multiplicant;
}

console.log(
  "Final product of " + multiplicant + " time " + multiplier + ": " + product
);

// Ex 2 - Sum of numbers from one to x
console.log("\nEXERCISE 2\n");

let stopSum = 10;
let finalSum = 0;

for (let i = 1; i <= stopSum; i++) {
  finalSum += i;
}

console.log("Sum of all numbers between 1 and " + stopSum + " is: " + finalSum);

// Ex 3 - Array element of longest string
console.log("\nEXERCISE 3\n");

let groceryList = ["cherry", "tomato", "raspberry", "apple"];
let indexOfLongestString = 0;
let maxLength = 0;

for (let i = 0; i < groceryList.length; i++) {
  let elementLength = groceryList[i].length;
  if (elementLength > maxLength) {
    indexOfLongestString = i;
    maxLength = elementLength;
  }
}

console.log(groceryList);
console.log(
  "Index of longest string in the array is: " +
    indexOfLongestString +
    " which is " +
    groceryList[indexOfLongestString]
);

let rows = 5;
console.log("For rows = " + rows);

for (let row = 1; row <= rows; row++) {
  let printValue = "";
  for (let column = 0; column < row; column++) {
    printValue += "*";
  }
  console.log(printValue);
}

let originalSting = "This is a string";
console.log("Original: " + originalSting);

let reverseString = "";
for (character of originalSting) {
  reverseString = character + reverseString;
}

console.log(reverseString);

let array = ["arrays", "are", "iterable"];
let characterCount = {};

console.log(array);

for (element of array) {
  for (character of element) {
    if (character in characterCount){
      characterCount[character] += 1;
    } else {
      characterCount[character] = 1
    }
  }
}

console.log(characterCount);