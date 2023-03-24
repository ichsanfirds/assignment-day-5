/*
Write a function that takes an array of numbers as an argument and
returns the sum of all the numbers in the array.

Description: You are given an array of numbers. You need to write
a function that takes this array as an argument and returns the sum
of all the numbers in the array.

# Expected result: 15

Complete and fix the existing code:
*/

numbers = [1,2,3,4,5]                           //array numbers

function sumArray(numbers) {                    //membuat function sumArray
  let sum = 0;                                  //membuat variable sum untuk menampung hasil

  for (let i = 0; i < numbers.length; i++) {    //Looping i sebanyak panjang(.length) dari array numbers[1,2,3,4,5] = 5. (i = 0; i < 5; i++). i = 0, 1, 2, 3 ,4
    sum += numbers[i]                           //sum = sum + numbers[i] -> sum = 0 + 1 = 1 -> sum = 1 + 2 = 3 -> sum = 3 + 3 = 6 -> sum = 6 + 4 = 10 -> sum = 10 + 5 = 15 -> end
  }                                             //note: Operator Penugasan  x += y  adalah  x = x + y

  console.log(sum);                             //print sum
  return sum;
}

sumArray(numbers)                               //memanggil/menjalankan function sumArray(numbers)
