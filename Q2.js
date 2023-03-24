/*
Write a function that takes an array of numbers as an argument and
returns the largest number in the array.

Description: You are given an array of numbers. You need to write a
function that takes this array as an argument and returns
the largest number in the array.

# Expected result: 5

Complete and fix the existing code:
*/

numbers = [1,2,3,4,5]                           //array numbers

function findLargestNumber(numbers) {           //membuat function findLargestNumber
  let largestNumber = numbers[0];               //menampung largestNumber untuk sementara

  for(let i = 0; i < numbers.length; i++) {     //Looping i sebanyak panjang(.length) dari array numbers[1,2,3,4,5] = 5. (i = 0; i < 5; i++)
    if(numbers[i] > largestNumber) {            //jika element pada numbers lebih besar dari pada largestNumber
      largestNumber = numbers[i];               //maka largestNumber menampung element numbers yang lebih besar tersebut
    }                                           //kemudian di loop lagi sampai mencari nomor yang paling besar pada array numbers
  }
  console.log(largestNumber);                   //print largestNumber
  return largestNumber;
}

findLargestNumber(numbers)                      //memanggil/menjalankan function findLargestNumber(numbers)