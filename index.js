//Write a function that takes two numbers and returns the larger of the two numbers.

function largerOfTwo(num1, num2){
    if(num1 > num2){
   return num1 //return will end the function
    }
    return num2
}

//write a function that takes an array of numbers and returns the largest number

exampleArray = [4, 8, 3, 10];


function findLargest(arr){
    let largestSoFar = arr[0]  // We need to remember what the largest number we've seen is
    for(let i = 0; io < arr.length; i++){ // Loop to let us look at each number
        if (arr[i]> largestSoFar){ // If the number we're looking at is larger 
            largestSoFar = arr[i] // Start keeping track of that number instead
        }

    }
}