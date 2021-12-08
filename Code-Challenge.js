const findSum = function(array) {
  let sum =0;

for(i = 0; i < array.length; i++){
  sum += array[i]
};
return sum;
};

const findFrequency = (arrayOfLetters) => {
  const frequencyObject = {};
  arrayOfLetters.forEach((letter) => {
    if(frequencyObject[letter]){
      frequencyObject[letter] += 1
    } else {
      frequencyObject[letter] = 1
    }
  });
  let highestFrequency;
  let lowestFrequency;
  for(const letter in frequencyObject){
    if(!highestFrequency){
      highestFrequency = letter
    }
    if(!lowestFrequency){
      lowestFrequency = letter
    }
    const currentLetterFrequency = frequencyObject[letter]
    if(currentLetterFrequency > frequencyObject[highestFrequency]){
      highestFrequency = letter
    }
    if(currentLetterFrequency < frequencyObject[lowestFrequency]){
      lowestFrequency = letter
    }
  }
  return {most: highestFrequency, least: lowestFrequency}
};

const isPalindrome = function(str) {
return str === str.split('').reverse().join('');
};

const largestPair = function(array) {
  const arr = array;
  let x = 0;
  let y = 0;
  let z = 0;
  for(let i = 0; i < arr.length;i++){
    x = arr[i];
    y = arr[i + 1];
    if(x * y > z){
     z = x * y;
    };
  };
 return z;
}; 

const removeParenth = (input) => {
  const inputArray=input.split('');
  const indexOfOpening = inputArray.indexOf('(');
  const indexOfClosing = inputArray.indexOf(')');
 
  const numberOfLettersToRemove = indexOfClosing - indexOfOpening + 1
 
  inputArray.splice(indexOfOpening, numberOfLettersToRemove)
 
  return inputArray.join('')
};

const scoreScrabble = function(str) {
  const arrayOfLetters = str.split('');
let sum = 0//keep track of sum
for(i = 0; i < arrayOfLetters.length; i++){
  switch (arrayOfLetters[i]) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
    case 'l':
    case 'n':
    case 'r':
    case 's':
    case 't':
      sum += 1;
      break;
    case 'd':
    case 'g':
      sum += 2;
      break;
    case 'b': 
    case 'c':
    case 'm':
    case 'p':
      sum += 3;
      break;
    case 'f':
    case 'h':
    case 'v':
    case 'w':
    case 'y':
      sum += 4;
      break;
    case 'k':
      sum += 5;
      break;
    case 'j':
    case 'x':
      sum += 8;
      break;
    case 'q':
    case 'z':
      sum += 10;
      break;
  }; 
};

return sum;//return sum
};

