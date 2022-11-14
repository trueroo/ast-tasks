//EASY

// 1 - Write a function to find the min and max elements in the array.
//check if arr have empty index - but i think its overcoding
function findMinAndMaxInArray(arr) {
    if (!Array.isArray(arr)) {
        return 'Only arrays allowed'
    } else if (arr.length < 2) {
        return 'Array is too short'
    }

    //filter array to avoid 'undefined' and non number
    const filteredArr = arr.filter(el => typeof el === 'number')

    const sortedArray = filteredArr.sort((a, b) => a - b)

    return 'min ' + sortedArray[0] + ' && max ' + sortedArray[sortedArray.length - 1]
}

// 2 - Write a function to find the sum of the array elements.
// solution 1
function sumArray(arr) {
    if (!Array.isArray(arr)) {
        return 'Only array allowed'
    }
    if (!arr.length) {
        return 'Array have no data to calculate'
    }

    const filteredArr = arr.filter(el => typeof el === 'number')

    let sum = 0;
    filteredArr.forEach(el => sum += el)

    return sum
}

// solution 2
function sumArray2(arr) {
    if (!Array.isArray(arr)) {
        return 'Only array allowed'
    } else if (!arr.length) {
        return 'Array have no data to calculate'
    }
    const filteredArr = arr.filter(el => typeof el === 'number')

    return filteredArr.reduce((a, b) => a + b)
}

// 3 - Write a function to reverse for work with string.
function reverseString(str) {
    if (typeof str !== 'string') {
        return 'Only strings allowed'
    } else if (!str.length) {
        return 'String is too short'
    }

    return str.split('').reverse().join('')
}

// 4 - Write a function to return the index of the input element or -1 if the element is not found.
function indexOfElement(arr, element) {
    if (!Array.isArray(arr)) {
        return 'Only array allowed'
    } else if (!arr.length) {
        return 'Array have no data'
    }

    return arr.indexOf(element)
}

// 5 - Function accepts an array with digits and return a new array that contains only unique elements from the original array.
// elegant solution
function uniqElementsInArray(arr) {
    if (!Array.isArray(arr)) {
        return 'Only arrays allowed'
    } else if (arr.length <= 1) {
        return arr
    } else if (!arr.length) {
        return 'Array is empty'
    }

    const filteredArr = arr.filter(el => typeof el === 'number')

    const uniqArr = filteredArr.sort((a, b) => a - b) // sort array for the next changes
    const deleteThisIndex = [] //array for repeating indexes

    uniqArr.forEach((el, index) => {
        if (el === uniqArr[index + 1]) {
            deleteThisIndex.push(index + 1)
        }
    })
    deleteThisIndex.reverse().forEach(el => uniqArr.splice(el, 1))

    return uniqArr
}

// new Set()
function uniqElementsInArray2(arr) {
    if (!Array.isArray(arr)) {
        return 'Only arrays allowed'
    } else if (arr.length <= 1) {
        return arr
    } else if (!arr.length) {
        return 'Array is empty'
    }

    return [...new Set(arr)]

}

// filter
function uniqElementsInArray3(arr) {
    if (!Array.isArray(arr)) {
        return 'Only arrays allowed'
    } else if (!arr.length) {
        return 'array is too short'
    }

    const filteredArr = arr.filter(el => typeof el === 'number')

    return filteredArr.sort((a, b) => a - b).filter((el, index) => el !== filteredArr[index + 1])
}


// 6 - Realize function which returns the quantity of odd/even digits in array.
function oddEvenCount(arr) {
    if (!Array.isArray(arr)) {
        return 'Only arrays allowed'
    } else if (!arr.length) {
        return 'array is too short'
    }

    const filteredArr = arr.filter(el => typeof el === 'number')
    let odd = 0
    let even = 0

    filteredArr.forEach(el => el % 2 === 0 ? even++ : odd++)

    return 'count of even: ' + even + ', odd: ' + odd
}

// 7 - Return the index of 'a' in the string or the array of indexes. 
function indexInString(str, el) {
    if (typeof str !== 'string' || typeof el !== 'string') {
        return 'Only strings allowed'
    } else if (!str.length || !el.length) {
        return 'String is too short'
    }

    let index;
    let result = []

    while ((index = str.indexOf(el, index + 1)) !== -1) {
        result.push(index)
    }

    return result.length === 0 ? 'not match'
        : result.length === 1 ? result[0] : result
}



//MAINTASKS
// 1 - Write a function to archive a string. 
// Input: aaaadttaggaa 
// Output: a4d1t2a1g2a2
function archiveString(str) {
    if (typeof str !== 'string') {
        return 'Only strings allowed'
    } else if (!str.length) {
        return 'String is too short'
    }

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
// 2.1 - Sort received string by the number of the letters.
// Input: a4d1t2q3 
// Output: d, t, q, a
function sortString(str) {
    if (typeof str !== 'string') {
        return 'Only strings allowed'
    } else if (!str.length) {
        return 'String is too short'
    }

    //separate by group letter+digit(-s) and sorting
    const array = str.match(/(\w)(\d+)/g).sort((a, b) => b.slice(1) - a.slice(1))
    const resultArr = []
    array.forEach(el => resultArr.push(el[0]))

    return resultArr
}

// 2 - Write a function to unarchive the string.
// Input: b3c4r2h6 
// Output: bbbccccrrhhhhhh
function unarchiveString(str) {
    if (typeof str !== 'string') {
        return 'Only strings allowed'
    } else if (!str.length) {
        return 'String is too short'
    }

    const resultArr = []
    const array = str.match(/(\w)(\d+)/g)
    array.forEach(el => {
        const letter = el[0]
        let counter = parseInt(el.slice(1))
        while (counter > 0) {
            resultArr.push(letter)
            counter--
        }
    })

    return resultArr.join('')
}

// 2.1 Find the letter with max number of repeating in the string.
// TODO:  if two or more letters - return them all
function maxRepeatingLetter(str) {
    if (typeof str !== 'string') {
        return 'Only strings allowed'
    } else if (!str.length) {
        return 'String is too short'
    }

    const uniqSymbolsArr = [...new Set(str)]
    const uniqSymbolCounterObject = {}
    uniqSymbolsArr.forEach(el => uniqSymbolCounterObject[el] = 0) //create object for further operations

    //count all symbols
    str.split('').forEach(el => {
        if (el in uniqSymbolCounterObject) {
            uniqSymbolCounterObject[el]++
        }
    })

    let resultArr = Object.keys(uniqSymbolCounterObject).map((key) => [key, uniqSymbolCounterObject[key]]);
    resultArr = resultArr.sort((a, b) => b[1] - a[1])

    return 'Letter "' + resultArr[0][0] + '" is repeating ' + resultArr[0][1] + ' time(-s).'
}

// 3 - Write a function to check if the 1st input string is a substring of the 2nd input string.
// Input: 'sun', 'The sun is shining on the sunflowers', Return: true
function checkSubstring(strToFind, str) {
    if (typeof str !== 'string' || typeof strToFind !== 'string') {
        return 'Only strings allowed'
    } else if (!str.length || !strToFind.length) {
        return 'String is too short'
    }

    return str.includes(strToFind)
}

//3.1 Optimize to return the array of indexes if the substring was found several times. 
// Input: 'sun', 'The sun is shining on the sunflowers' 
// Return: [4, 26]
function checkSubstrings(strToFind, str, caseSensetive = false) {
    if (typeof strToFind !== 'string' || typeof str !== 'string') {
        return 'Only strings allowed'
    } else if (!strToFind.length) {
        return 'Nothing to search'
    } else if (!str.length) {
        return 'Can\'t search in nowhere'
    } else if (typeof caseSensetive !== 'boolean') {
        return 'caseSensetive must be boolean argument'
    }

    const arrOfIndexes = []
    let index
    let startIndex = 0

    if (!caseSensetive) {
        strToFind = strToFind.toLowerCase()
        str = str.toLowerCase()
    }

    while ((index = str.indexOf(strToFind, startIndex)) !== -1) {
        arrOfIndexes.push(index)
        startIndex = index + 1
    }

    return arrOfIndexes
}

// 4 - Write a function to calculate the number of words in the text.
function countWordsInSentence(str) {
    if (typeof str !== 'string') {
        return 'Only strings allowed'
    } else if (!str.length) {
        return 'String is too short'
    }

    return str.replace(/\s+/g, ' ').split(' ').length
}

// 4.1 - To modify the function to calculate the number of the defined input word.
function countWordsInSentence2(str, word) {
    if (typeof str !== 'string' || typeof word !== 'string') {
        return 'Only strings allowed'
    } else if (!str.length || !word.length) {
        return 'String is too short'
    }

    return str.split(word).length - 1
}

// 5 - Write a function to return the number of vowels in the input string.
function countVowels(str) {
    if (typeof str !== 'string') {
        return 'Only strings allowed'
    } else if (!str.length) {
        return 'String is too short'
    }

    return str.match(/[aeiou]/ig).length
}

// 5.1 - What vowel was found min times.
//TODO:if two or more vowels the same qty
function minRepeatingVowels(str) {
    if (typeof str !== 'string') {
        return 'Only strings allowed'
    } else if (!str.length) {
        return 'String is too short'
    }

    const arrWithVowels = str.match(/[aeiou]/ig)
    const objForCount = {}

    arrWithVowels.forEach(el => {
        objForCount[el] = 0
    })

    arrWithVowels.forEach(el => {
        if (el in objForCount) {
            objForCount[el]++
        }
    })

    const resultArr = []
    for (let letter in objForCount) {
        resultArr.push([letter, objForCount[letter]])
    }

    resultArr.sort((a, b) => a[1] - b[1])

    return `"${resultArr[0][0]}" repeat ${resultArr[0][1]} times`
}

// 6 - Write a function to return the number of consonants in the input string.
function countConsonants(str) {
    if (typeof str !== 'string') {
        return 'Only strings allowed'
    } else if (!str.length) {
        return 'String is too short'
    }

    return str.match(/[^aeiou]/ig).length
}

// 6.1 - What consonant was found max times.
//TODO:if two or more vowels the same qty
function maxRepeatingConsonant(str) {
    if (typeof str !== 'string') {
        return 'Only strings allowed'
    } else if (!str.length) {
        return 'String is too short'
    }

    const arrWithVowels = str.match(/[^aeiou]/ig)
    const objForCount = {}

    arrWithVowels.forEach(el => {
        objForCount[el] = 0
    })

    arrWithVowels.forEach(el => {
        if (el in objForCount) {
            objForCount[el]++
        }
    })

    const resultArr = []
    for (let letter in objForCount) {
        resultArr.push([letter, objForCount[letter]])
    }

    resultArr.sort((a, b) => b[1] - a[1])

    return `"${resultArr[0][0]}" repeat ${resultArr[0][1]} times`

}

// 7 - Write a function to define if the input year is a leap year, in case it is predefined that 2020 is a leap year.
function leapYear(year) {
    if (typeof year !== 'number') {
        return 'Year must contain only digit(s)'
    } else if (year < 1) {
        'Nothing existed until 1 year from the birth of Christ'
    }

    return year % 4 === 0
}

// 7.1 - Write a second function to define the number of days in the month by month and year. For the 2nd task, it is assumed that constant mapping (as object) will be used for all months except Feb. //dont understand what they want. 
function numOfDaysInMonth(year, month) {
    if (typeof year !== 'number') {
        return 'Year must contain only digit(s)'
    } else if (typeof month !== 'string') {
        return 'Month must contain only letters'
    } else if (year < 1) {
        'Nothing existed until 1 year from the birth of Christ'
    }

    const february = 'february'
    const evenMonths = ['april', 'june', 'august', 'october', 'december']
    const oddMonths = ['january', 'march', 'may', 'july', 'september', 'november']

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
    //TODO: first letter must be uppercase but who cares
}

// 8 - Write a function to check if the input array is a correct Fibonacci sequence.
function checkFibonacciSequence(arr) {
    if (!Array.isArray(arr)) {
        return 'Only arrays allowed'
    } else if (arr.length < 3) {
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
    if (!Array.isArray(arr)) {
        return 'Only arrays allowed'
    } else if (arr.length < 3) {
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
    if (typeof num !== 'number' || num < 0) {
        return 'Only non-negative numbers'
    } else if (num === 0) {
        return 1;
    }

    let result = 1

    for (num; num > 0; num--) {
        result *= num
    }

    return result
}

//solution 2 recursion
function factorial2(num) {
    if (typeof num !== 'number' || num < 0) {
        return 'Only non-negative numbers'
    } else if (num === 0) {
        return 1;
    }

    return num * factorial2(num - 1);
}

// 9.1 - Write a functiom to check if the input parametr is a factorial of any number. 
//TODO: how to make with recursion?
function checkFactorial(num, limit) {
    if (typeof num !== 'number' || num < 0) {
        return 'Only non-negative numbers'
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

function removeSubstring(strToRemove, str, caseSensetive = false) {
    if (typeof strToRemove !== 'string' || typeof str !== 'string') {
        return 'Only strings allowed'
    } else if (!strToRemove.length || !str.length) {
        return 'Need more data'
    } else if (typeof caseSensetive !== 'boolean') {
        return 'caseSensetive must be true or false'
    } else if (str.toLowerCase().indexOf(strToRemove.toLowerCase()) === -1) {
        return `No "${strToRemove}" here`
    }

    const arrOfIndexes = []
    let index
    let startIndex = 0

    if (!caseSensetive) {
        strToRemove = strToRemove.toLowerCase()
        str = str.toLowerCase()
    }

    while ((index = str.indexOf(strToRemove, startIndex)) !== -1) {
        arrOfIndexes.push(index)
        startIndex = index + 1
    }

    let newString = str.split('')
    arrOfIndexes.reverse().forEach(el => {
        newString.splice(el, strToRemove.length)
    })
    stringForTask10 = newString.join('')

    return arrOfIndexes.reverse()
}

// 10.1 - Write a functiom to insert the 'a' back by the index array.

function returnSubstring(strToReturn, strWhereToReturn, arrOfIndexes) {
    if (typeof strToReturn !== 'string' || typeof strWhereToReturn !== 'string') {
        return 'Only strings allowed'
    } else if (!strToReturn.length || !strWhereToReturn.length) {
        return 'Need more data'
    } else if (!Array.isArray(arrOfIndexes)) {
        return 'Only arrays allowed'
    }

    const arrWithRepairedWord = strWhereToReturn.split('')

    arrOfIndexes.sort((a, b) => a - b).forEach(el => {
        arrWithRepairedWord.splice(el, 0, strToReturn)
    })

    return arrWithRepairedWord.join('')
}

//11 - Write a functiom to remove all '0' from the numeric array. Input: [1, 0, 0, 5, 8, 0, 7, 0] / Output [1, 5, 8, 7].

//solution 1
function removeSmthgFromArr(arr, remove) {
    if (!Array.isArray(arr)) {
        return 'Only arrays allowed'
    }

    for (let i = arr.length; i >= 0; i--) {
        if (arr[i] === remove) {
            arr.splice(i, 1)
        }
    }
    return arr
}

// solution 2
function removeSmthgFromArr2(arr, remove) {
    if (!Array.isArray(arr)) {
        return 'Only arrays allowed'
    }

    return arr.filter(el => el !== remove)
}


// 11.1 - To modify the function to remove '0' from the numeric where '0' is. Example: [10, 11, 200, 5, 30] => [1, 11, 2, 5, 3].
function removeSmthgFromArrKey(arr, remove) {
    if (!Array.isArray(arr)) {
        return 'Only arrays allowed'
    }

    const midArr = []
    const fixedArr = []
    const finalArr = []

    arr.forEach(el => {
        midArr.push(el.toString())
    })

    midArr.forEach(el => {
        for (let i = 0; i < el.length; i++) {
            if (el[i] !== remove && el[i].length >= 1) {
                fixedArr.push(el[i])
                finalArr.push(fixedArr.join(''))
            }
            fixedArr.splice(0, fixedArr.length)
        }
    })


    return finalArr
}

// 12 - Write a functiom to split an input string by space in an array.
function strToArr(str) {
    if (typeof str !== 'string') {
        return 'Only strings allowed'
    } else if (!str.length) {
        return 'String is too short'
    }

    return str.join('')
}

// 12.1 Return the index of the max length string in the array.
function maxLength(arr) {
    if (!Array.isArray(arr)) {
        return 'Only arrays allowed'
    }

    //filter array to avoid 'undefined' and non number
    const filteredArr = arr.filter(el => typeof el === 'number')

    return filteredArr.sort((a, b) => b - a)[0]
}

// 13 - Write a functiom to check if the input numeric parameter is a prime number.
// num < 0 - alert
function primeOrNot(num) {
    if (typeof num !== 'number' || num < 1) {
        return 'Only non-negative numbers allowed and bigger than zero'
    } if (num === 1 || num === 2) {
        return "Prime"
    } if (num % 2 === 0) {
        return 'Not Prime'
    }

    for (let i = 3; i < num; i += 2) {
        if (num % i === 0) {
            return 'Not prime'
        }
    }

    return 'Prime'
}


// 13.1 - Write a functiom to get a sequence of prime numbers to 100.
function sequenceOfPromeNumbers(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number' || num1 < 1 || num2 < 1) {
        return 'Only non-negative numbers'
    }

    const result = []
    var primeNumber;

    for (var i = num1; i < num2; i++) {
        primeNumber = 1;
        for (var j = 2; j < i; j++) {
            if (i % j === 0) {
                primeNumber++;
            }
        }
        if (primeNumber === 1) {
            result.push(i)
        }
    }
    return result;
}


// 14 - To split array to array of arrays where every element of input array is the array element of the output array.
// Input: [1, 2, 0, 3, 4, 5, 0, 8, 2]
// Output: [ [1], [2], [0], [3], [4], [5], [0], [8], [2]]
function splitArrToSubArr(arr) {
    if (!Array.isArray(arr)) {
        return 'Only arrays allowed'
    } else if (arr.length < 1) {
        return 'Array is too short'
    }

    let newArr = []
    const result = []
    arr.forEach(el => {
        newArr.push(el)
        result.push(newArr)
        newArr = []
    })

    return result
}

// 14.1 - To split by the input number:
// Input: [1, 2, 0, 3, 4, 5, 0, 8, 2]
// Output: [
//    [1, 2],
//    [3, 4, 5],
//    [8, 2]
//  ]
function splitArrBySmthng(arr, separator) {

    if (!Array.isArray(arr)) {
        return 'Only arrays allowed'
    } else if (arr.length < 3) {
        return 'Array is too short'
    }

    let newArr = []
    const result = []

    arr.forEach(el => {
        if (el === separator) {
            if (newArr.length !== 0) {
                result.push(newArr)
            }
            newArr = []
        } else {
            newArr.push(el)
        }
    })
    if (newArr.length) {
        result.push(newArr)
    }

    return result
}

// 15 - Write a function for string transliteration: 
// transliterationStr("a string", "abcdefghij", "1234567890") => "1 str9n8" 
// transliterationStr("a string", "abcdefghij", "ABCDEFGHIJ") => "A strinG"
function transliterationStr(str, example, mask) {
    if (typeof str !== 'string' || typeof example !== 'string' || mask !== 'string') {
        return 'Only strings allowed'
    }

    const strArr = str.split('')
    const exampleArr = example.split('')
    const maskArr = mask.split('')
    const resultArr = []

    strArr.forEach(el => {
        if (exampleArr.indexOf(el) !== -1) {
            index = exampleArr.indexOf(el)
            resultArr.push(maskArr[index])
        } else {
            resultArr.push(el)
        }
    })
    return resultArr
}

