/*
Write a function that takes an array of numbers as an argument
and returns a new array with the same numbers in reverse order.

Description: You are given an array of numbers. You need to
write a function that takes this array as an argument and returns
a new array with the same numbers in reverse order.

# Expected result: [5,4,3,2,1]

Complete and fix the existing code:
*/

numbers = [1,2,3,4,5]                                   //array numbers

function reverseArray(numbers) {                        //membuat function reverseArray    
  let reversedNumbers = [];                             //membuat array reversedNumbers untuk menampung hasilnya

  for (let i = numbers.length - 1; i >= 0; i--) {       //Reverse looping (i = 5 - 1 = 4) 
    reversedNumbers.push(numbers[i])                    //element numbers yang ke i (4,3,2,1,0) dimasukan (push()) kedalam array reversedNumbers
  }
  console.log(reversedNumbers);                         //print reversedNumbers
  return reversedNumbers;
}

reverseArray(numbers)                                   //memanggil/menjalankan function reverseArray(numbers)