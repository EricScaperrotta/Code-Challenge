const findSum = function(array) {
  let sum =0;

for(i = 0; i < array.length; i++){
  sum += array[i]
};
return sum;
};

const findFrequency = function(array) {
  // your code here - don't forget to return an object!
};

const isPalindrome = function(str) {
  // your code here - don't forget to return a boolean!
};

const largestPair = function(array) {
  // your code here - don't forget to return a number!
};

const removeParenth = function(str) {
  // your code here - don't forget to return a string!
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
  } 
};

return sum;//return sum
};

