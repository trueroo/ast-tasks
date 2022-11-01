//EASY
// 1 - Write a function to find the min and max elements in the array.
const arr1 = [9, 2, 40, 800, 1, 20]; // min 1, max 800

function findMinAndMaxInArray(arr1) {
    function sortingArray(a, b) {
        return a - b;
    }
    const sortedArray = arr1.sort(sortingArray)

    return 'min ' + sortedArray[0] + ' && max ' + sortedArray[sortedArray.length - 1]
}

// 2 - Write a function to find the sum of the array elements.
const arr2 = [5, 50, 55, 105, 15, 70] //sum 300

// solution 1
function sumArray(arr2) {
    let sum = 0;
    arr2.forEach(el => {
        sum += el
    });
    return sum
}

// solution 2 (I know about method reduce, but need to google syntax)
function sumArray2(arr2) {
    return arr2.reduce((a, b) => a + b)
}

// 3 - Write a function to reverse for work with string.
const string1 = 'qwerty'

function reverseString(string1) {
    return string1.split('').reverse().join('')
}

// 4 - Write a function to return the index of the input element or -1 if the element is not found.
const arr3 = [1, 2, '3', 'qwerty', undefined, 'null', null, 'undefined', true, false]

function indexOfElement(element) {
    return arr3.indexOf(element)
}

// TODO: 5 - Function accepts an array with digits and return a new array that contains only unique elements from the original array.
const arr4 = [3, 4, 3, 4, 3, 3, 4, 4, 6, 7, 8, 8, 8, 8] // [3, 4, 6, 7, 8]

function uniqElementsInArray(arr4) {

    return arr4
}

// 6 - Realize function which returns the quantity of odd/even digits in array.
const arr5 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

function oddEvenCount(arr5) {
    let odd = 0
    let even = 0

    arr5.forEach(el => el % 2 === 0 ? even++ : odd++)

    return 'count of even: ' + even + ', odd: ' + odd
}

// 7 - Return the index of 'a' in the string or the array of indexes. 
const string2 = 'qwertypop'

function indexInString(arg) {
    let index = -1;
    let result = []
    while ((index = string2.indexOf(arg, index + 1)) != -1) {
        result.push(index)
    }
    return result.length === 0 ? 'not match'
        : result.length === 1 ? result[0] : result
}


//MAINTASKS
// 1 - Write a function to archive a string. 
// Input: aaaadttaggaa 
// Output:a4d1t2q3a2

// 2.1 - Sort received string by the number of the letters. 
// Input: a4d1t2q3 
// Output: d, t, q, a

// 2 - Write a function to unarchive the string. 
// Input: b3c4г2h6 
// Output: bbbccccrrhhhhhh

// 2.1 Find the letter with max number of repeating in the string.

// 3 - Write a function to check if the 1st input string is a substring of the 2nd input string.
// Input: 'sun', 'The sun is shining on the sunflowers', Return: true

//3.1 Optimize to return the array of indexes if the substring was found several times. 
// Input: 'sun', 'The sun is shining on the sunflowers' 
// Return: [4, 26]

// 4 - Write a function to calculate the number of words in the text.

// 4.1 - To modify the function to calculate the number of the defined input word.

// 5 - Write a function to return the number of vowels in the input string.

// 5.1 - What vowel was found min times.

// 6 - Write a function to return the number of consonants in the input string.

// 6.1 - What consonant was found max times.

// 7 - Write a function to define if the input year is a leap year, in case it is predefined that 2020 is a leap year.

// 7.1 - Write a second function to define the number of days in the month by month and year. For the 2nd task, it is assumed that constant mapping (as object) will be used for all months except Feb.

// 8 - Write a function to check if the input array is a correct Fibonacci sequence.

// 8.1 -  If it is not a correct Fibonacci sequence, the function should return the index where the sequence is interrupted.

// 9 - Write a functiom to calculate factorial.

// 9.1 - Write a functiom to check if the input parametr is a factorial of any number.

// 10 - Write a functiom to remova all 'a' from the string and return array of indexes, where the 'a' was.

// 10.1 - Write a functiom to insert the 'a' back by the index array.

// 11 - Write a functiom to remove all '0' from the numeric array. Input: [1, 0, 0, 5, 8, 0, 7, 0] / Output [1, 5, 8, 7].

// 11.1 - To odify the function to remove '0' from the numeric where '0' is. Example: [10, 11, 200, 5, 30] => [1, 11, 2, 5, 3].

// 12 - Write a functiom to split an input string by space in an array.

// 12.1 Return the index of the max length string in the array.

// 13 - Write a functiom to check if the input numeric parameter is a prime number.

// 13.1 - Write a functiom to get a sequence of prime numbers to 100.

// 14 - To split array to array of arrays where every element of input array is the array element of the output array.
// Input: [1, 2, 0, 3, 4, 5, 0, 8, 2]
// Output: [ [1], [2], [0], [3], [4], [5], [0], [8], [2]]

// 14.1 - To split by the input number:
// Input: [1, 2, 0, 3, 4, 5, 0, 8, 2]
// Output: [
//    [1, 2],
//    [3, 4, 5],
//    [8, 2]
//  ]

// 15 - Write a function for string transliteration: 
// foo("a string", "abcdefghi". "1234567890") => "1 str9n8" 
// foo("a string", "abcdefghij", "ABCDEFGHIJ") => "A strinG"

