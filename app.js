/* 
1. Define a function  maxOfTwoNumbers  that takes two numbers as arguments and returns the 
largest of them. Use the if-then-else construct available in Javascript. Do some googling to 
figure this out if you forget how conditionals work.
*/

maxOfTwoNumbers = (num1, num2) => {
    if(num1>num2){
        return num1;
    } else {
        return num2;
    };
  }

  console.log(maxOfTwoNumbers(3,7));


  
 // maxOfThree();
  
  /*
  2. Define a function  maxOfThree  that takes three numbers as arguments and returns the largest of them.
  */
  maxOfThree = (num1, num2, num3) => {
   if(num1 > num2 && num3){
       return num1;
   } else if(num2 > num1 && num2){
       return num2;
   }else if(num3 > num1 && num2){
       return num3;
   }else if(num1 === num2 || num3 && num1 >= num2 && num3){
       return num1;
   } else if(num2 === num1 || num3 && num2 >= num1 || num3){
       return num2;
   } else if(num3 === num1 || num2 && num3 >= num1 || num2){
       return num3;
   }
  };
  
  console.log(maxOfThree(7,90,41))
  /*
  3. Write a function  isCharacterAVowel  that takes a character (i.e. a string of length 1) and returns true
   if it is a vowel, false otherwise.
  
  isCharacterAVowel = (letter) => {
      if(letter.length == 1){
        if(letter == a || e || i || o || u){
            console.log(`${letter} is a vowel!`;
        }else{console.log(`${letter} is not a vowel!`);
        }
        }
      }else{
          console.log("Please input one and only one letter");
      }

      isCharacterAVowel(a);*/
    // ADD YOUR CODE HERE

characterVowel = (letter) => {
  let vowels = ["a","e","i","o","u"]
  if(letter.length == 1 && vowels.includes(letter)) {
     return `TRUE! ${letter} is a vowel!`;
  }else{
    return `FALSE! ${letter} is not a vowel!`;
}
};

console.log(characterVowel("a"))



  
  /*
  4. Define a function  sumArray  and a function  multiplyArray  that sums and multiplies (respectively) all 
  the numbers in an array of numbers. For example,  sumArray([1,2,3,4])  should return 10, and 
   multiplyArray([1,2,3,4])  should return 24.
  */
  
    // ADD YOUR CODE HERE



const numbers = [3,6,8,20]

const addNums = () =>{
  let sumOfNumbers = 0
  for(let i = 0; i < numbers.length; i ++){
    sumOfNumbers += numbers[i];
   }
   console.log(sumOfNumbers);
}
addNums(numbers);
  
  /*
  sumArr
  5.Write a function that returns the number of arguments passed to the function when called.
  */
  const checkArgue = () => {
    console.log(arguments.length);
    }
    checkArgue(5, 4, 2, 7);
    
    
    
    
  /*
6. Define a function  reverseString  that computes the reversal of a string. For example, 
reverseString("jag testar") should return the string "ratset gaj".
*/

reverseString = () => {
    // ADD YOUR CODE HERE
  };

reverseString = (input) => {
    let split = input.split("");
    let reverse = split.reverse();
    let final = reverse.join("");
    console.log(final)
  }
  reverseString("Hello");
  
  /*
  7. Write a function  findLongestWord  that takes an array of words and returns the length of the longest one.
  */
 const wordsArray = ["Happy", "suoercalafag", "Birthday", "child"]
findLongestWord = (array) => {
  let longestWord;
  let longestlength= 0;
  for(i=0; i<array.length; i++){
    if(array[i].length > longestlength){
      longestlength = array[i].length;
      longestWord= array[i];
    }
  }
  return longestWord
};
console.log(findLongestWord(wordsArray))
  
  

 
  /*
  8. Write a function  filterLongWords  that takes an array of words and a number  i  and returns the array of 
  words that are longer than i characters long.
  */
  
  myArray = ["hello", "hi", "me", "Joe", "football", "crazy"]

  let longerWords = [];
  
  filterLongWords = (array, number) => {
  for(i=0; i<array.length; i++){
    if(array[i].length > number){
       longerWords += myArray[i] + ",";
    }
      
  }
    let words = longerWords.split(",");
    console.log(words);
  }  
  filterLongWords(myArray, 3);
  

  
  /*Bonus

  Add a method reverseString (from question 6) to the object String so that it is possible to call: 
  "Per Scholas".reverseString().
  Write a function that takes a string as argument and returns an object where:
  the keys are the characters that occur in the string
  the values are the number of occurrences for each letter, regardless of the case
  For example, calling the function with the string "Per Scholas" will return:
  
  {
    a: 1,
    c: 1,
    e: 1,
    h: 1,
    l: 1,
    o: 1,
    p: 1,
    r: 1,
    s: 2,
  }    
  */
  