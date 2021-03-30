/* Functional Programming */

/* Array of integers */
const arr = [1,2,3,4,5,6,7,8,9,10,20,40];  // array

// Q - a Sum of odd number
const sumOfOdd = (acc,curr) => {
  if((curr & 0x01) === 1){
    acc = acc + curr;
  }
  return acc;
} 
console.log("Sum of odd number : ",arr.reduce(sumOfOdd,0));


// Q - b Sum of nums at odd indices
const sumOfOddIndices = (acc,curr,index) => {
  if((index & 0x01) === 1){
    acc = acc + curr;
  }
  return acc;
} 
console.log("Sum of nums at odd indices : ",arr.reduce(sumOfOddIndices));


// Q - c Biggest num in array
const biggestInArray = (a, b) => a>b ? a : b;
console.log("Biggest num in array : ",arr.reduce(biggestInArray))

// Q - d Numbers divisible by 10
const numDivBy10 = num => num%10 === 0;
console.log("Numbers divisible by 10 : ",arr.filter(numDivBy10))

//Q - e  Odd inc by 1 , Even dec by 1
const oddinEvendec = num => (num & 0x01) === 1 ? num+1 : num-1; 
console.log("Final Array ",arr.map(oddinEvendec))

// Q - f Sum of Odd, Sum of Even
const sumOfOddEven = (acc, curr) => ((curr & 0x01) === 1 ? {...acc, odd: acc.odd+curr } : {...acc, even: acc.even+curr })
console.log("Finl obj ",arr.reduce(sumOfOddEven,{odd: 0 , even: 0}))




// Array of Strings Questions


//Q - b
const strArray = ['eye' , 'yr' , 'hmm' , 'ola'];
const stringWithVowels = (str) => str.match(/[aeiou]/gi);
console.log('String with vowels are : -' , strArray.filter(stringWithVowels))

// Q - c
const strings = ["ayush","sharma","nikhil","mehta"];
const stringAsKeyLengthAsValue = (acc , curr) => ({...acc , [curr] : curr.length})
console.log('object is :- ' , strings.reduce(stringAsKeyLengthAsValue));


/* Currying */
// const yourName = name1 => name1;
const tanaySays = says => name1 => console.log(`Tanay says ${says} to ${name1}`)

const tanay = tanaySays("Well done")
const ayush = tanay("Ayush")

console.log(ayush)


// The ONE HomeWork
const increment = num => num + 1;
const square = num => num * num;

function compose(...functions) {
  return num => functions.reduce((argument, currFunc) => currFunc(argument), num);
}

console.log(compose(increment, square)(2));