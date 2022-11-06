//EASY

// 1 - Write a function to find the min and max elements in the array.
function findMinAndMaxInArray(arr) {
    if (Array.isArray(arr)) {
        if (arr.length < 2) {
            return 'array is too short'
        } else {
            const sortedArray = arr.sort((a, b) => a - b)
            return 'min ' + sortedArray[0] + ' && max ' + sortedArray[sortedArray.length - 1]
        }
    }

    return 'Only array allowed'
}

// 2 - Write a function to find the sum of the array elements.
// solution 1
function sumArray(arr) {
    if (Array.isArray(arr)) {
        if (arr.length > 0) {
            let sum = 0;
            arr.forEach(el => sum += el)

            return sum
        } else {
            return 'Array have no data to calculate'
        }
    }

    return 'Only array allowed'
}

// solution 2
function sumArray2(arr) {
    if (Array.isArray(arr)) {
        if (arr.length > 0) {
            return arr.reduce((a, b) => a + b)
        } else {
            return 'Array have no data to calculate'
        }
    }

    return 'Only array allowed'

}


// 3 - Write a function to reverse for work with string.
function reverseString(str) {
    if (typeof str === 'string') {
        if (str.length > 1) {
            return str.split('').reverse().join('')
        } else {
            return 'String is too short'
        }
    }

    return 'Only string allowed'
}

// 4 - Write a function to return the index of the input element or -1 if the element is not found.
function indexOfElement(arr, element) {
    if (Array.isArray(arr)) {
        if (arr.length > 0) {
            return arr.indexOf(element)
        } else {
            return 'Array have no data'
        }
    }

    return 'Only array allowed'
}

// 5 - Function accepts an array with digits and return a new array that contains only unique elements from the original array.
// elegant solution
function uniqElementsInArray(arr) {
    if (Array.isArray(arr)) {
        if (arr.length <= 1) {
            return arr
        } else {
            const uniqArr = arr.sort((a, b) => a - b) // sort array for the next changes
            const deleteThisIndex = [] //array for repeating indexes

            uniqArr.forEach((el, index) => {
                if (el === uniqArr[index + 1]) {
                    deleteThisIndex.push(index + 1)
                }
            })
            deleteThisIndex.reverse().forEach(el => uniqArr.splice(el, 1))

            return uniqArr
        }
    }

    return 'Only array allowed'
}

// new Set()
function uniqElementsInArray2(arg) {
    if (Array.isArray(arr)) {
        if (arr.length > 0) {
            return [...new Set(arg)]
        } else {
            return 'array is too short'
        }
    }

    return 'Only array allowed'
}

// filter
function uniqElementsInArray3(arg) {
    if (Array.isArray(arr)) {
        if (arr.length > 0) {
            return arg.sort((a, b) => a - b).filter((el, index) => el !== arg[index + 1])
        } else {
            return 'array is too short'
        }
    }

    return 'Only array allowed'
}


// 6 - Realize function which returns the quantity of odd/even digits in array.
function oddEvenCount(arr) {
    if (Array.isArray(arr)) {
        if (arr.length > 0) {
            let odd = 0
            let even = 0

            arr.forEach(el => el % 2 === 0 ? even++ : odd++)

            return 'count of even: ' + even + ', odd: ' + odd
        } else {
            return 'array is too short'
        }
    }

    return 'Only array allowed'
}

// 7 - Return the index of 'a' in the string or the array of indexes. 
function indexInString(str, el) {
    if (typeof str === 'string' && typeof el === 'string') {
        if (str.length > 0 && el.length > 0) {
            let index;
            let result = []

            while ((index = str.indexOf(el, index + 1)) != -1) {
                result.push(index)
            }

            return result.length === 0 ? 'not match'
                : result.length === 1 ? result[0] : result
        } else {
            return 'String is too short'
        }
    }

    return 'Only strings allowed'
}


//MAINTASKS
// 1 - Write a function to archive a string. 
// Input: aaaadttaggaa 
// Output: a4d1t2a1g2a2
function archiveString(str) {
    let counter = 1
    const archiveString = []

    str.split('').forEach((el, index) => {
        if (el === str[index + 1]) {
            counter++
        } else {
            archiveString.push(el)
            archiveString.push(counter)
            counter = 1
        }
    })
    return archiveString.join('')
}
// 2.1 - Sort received string by the number of the letters. TODO:
// Input: a4d1t2q3 
// Output: d, t, q, a
const string4 = 'a4d1t2q3'

function sortString(str) {
    // a4 d1 t2 q3
    return str.split(/\b[a-zA-Z][1-9]\b/ig)
}

// 2 - Write a function to unarchive the string. TODO:
// Input: b3c4г2h6 
// Output: bbbccccrrhhhhhh
const string5 = 'b3c4r2h6'

function unarchiveString(str) {
}

// 2.1 Find the letter with max number of repeating in the string. TODO:
const string6 = 'sdfjwreicipbwqiqwbaksjhfjkewhflwkjasdjfqopwiefj'

function maxRepeatingLetter(str) {
}

// 3 - Write a function to check if the 1st input string is a substring of the 2nd input string.
// Input: 'sun', 'The sun is shining on the sunflowers', Return: true
function checkSubstring(strToFind, str) {
    return str.includes(strToFind)
}

//3.1 Optimize to return the array of indexes if the substring was found several times. TODO:
// Input: 'sun', 'The sun is shining on the sunflowers' 
// Return: [4, 26]
function checkSubstrings(strToFind, str) {
}
// 4 - Write a function to calculate the number of words in the text. //modify to not count spaces!
function countWordsInSentence(str) {
    return str.replace(/\s+/g, ' ').split(' ').length
}

// 4.1 - To modify the function to calculate the number of the defined input word.
function countWordsInSentence2(str, word) {
    return str.split(word).length - 1
}

// 5 - Write a function to return the number of vowels in the input string.
function countVowels(str) {
    return str.match(/[aeiou]/ig).length
}

// 5.1 - What vowel was found min times. TODO:
function minRepeatingVowels(str) {
}

// 6 - Write a function to return the number of consonants in the input string.
function countConsonants(str) {
    return str.match(/[^aeiou]/ig).length
}

// 6.1 - What consonant was found max times. TODO:
function maxRepeatingConsonant(arg) {
}

// 7 - Write a function to define if the input year is a leap year, in case it is predefined that 2020 is a leap year.
function leapYear(year) {
    return year % 4 === 0
}

// 7.1 - Write a second function to define the number of days in the month by month and year. For the 2nd task, it is assumed that constant mapping (as object) will be used for all months except Feb. //dont understand what they want. 
function numOfDaysInMonth(year, month) {
    const february = 'february'
    const evenMonths = ['april', 'june', 'august', 'october', 'december']
    const oddMonths = ['january', 'march', 'may', 'july', 'september', 'november']

    if (typeof year !== 'number') {
        return 'Year must contain only digit(s)'
    } else if (typeof month !== 'string') {
        return 'Month must contain only letters'
    }

    if (year % 4 === 0 && month.toLowerCase() === february) {
        return '29 days in ' + february
    } else if (year % 4 !== 0 && month.toLowerCase() === february) {
        return '28 days in ' + february
    } else if (evenMonths.indexOf(month.toLowerCase()) !== -1) {
        return '30 days in ' + month.toLowerCase()
    } else if (oddMonths.indexOf(month.toLowerCase()) !== -1) {
        return '31 days in ' + month.toLowerCase()
    } else {
        return 'Wrong input month'
    }
    //TODO: first letter must be uppercase
}

// 8 - Write a function to check if the input array is a correct Fibonacci sequence.
function checkFibonacciSequence(arr) {
    if (arr.length < 3) {
        return 'Need more data'
    }

    for (i = 2; i < arr.length; i++) {
        if ((arr[i - 1] + arr[i - 2]) !== arr[i])
            return 'Sequence is not correct'
    }
    return 'Sequence is correct'
}

// 8.1 -  If it is not a correct Fibonacci sequence, the function should return the index where the sequence is interrupted.
function checkFibonacciSequence2(arr) {
    if (arr.length < 3) {
        return 'Need more data'
    }

    for (i = 2; i < arr.length; i++) {
        if ((arr[i - 1] + arr[i - 2]) !== arr[i])
            return `Sequence is not correct. Wrong index is ${i}`
    }
    return 'Sequence is correct'
}

// 9 - Write a functiom to calculate factorial.
//solution 1
function factorial(num) {
    let result = 1

    if (num === 0) {
        return result;
    }
    if (num < 0) {
        return 'Only non-negative numbers'
    }

    for (num; num > 0; num--) {
        result *= num
    }
    return result
}

//solution 2 recursion
function factorial2(num) {
    if (num < 0) {
        return 'Only non-negative numbers'
    }
    if (num === 0) {
        return 1;
    }

    return num * factorial2(num - 1);
}

// 9.1 - Write a functiom to check if the input parametr is a factorial of any number. 
//TODO: how to make with recursion
function checkFactorial(num, limit) {
    if (num < 0) {
        return 'error'
    } else if (num === 0) {
        return '0'
    }
    let result = 1

    for (let i = 1; i < limit; i++) {
        if (num === result) {
            return i - 1
        }
        result *= i
    }
    return 'none'
}

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

