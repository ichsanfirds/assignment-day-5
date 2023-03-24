/*
Write a function that takes an array of numbers as an argument and
returns the second smallest number in the array.

Description: You are given an array of numbers. You need to write
a function that takes this array as an argument and returns the
second smallest number in the array.

# Expected result: 2

Complete and fix the existing code:
*/

numbers = [1,2,3,4,5]                             //array numbers

function findSecondSmallestNumber(numbers) {      //membuat function findSecondSmallestNumber
  let secondSmallestNumber = 0;                   //membuat variable secondSmallestNumber untuk menampung hasilnya

  numbers.sort((a, b) => a - b)                   //mengurutkan(sort()) array numbers dari angka yang paling kecil ke angka yang paling besar
  secondSmallestNumber = numbers[1]               //setelah disorting pasti index[1] selalu menjadi nomor yang terkecil ke-2, sedangkan index[0] menjadi nomor paling kecil. 
  //kemudian mendeklarasikan element array numbers[1] menjadi secondSmallestNumber.
  console.log(secondSmallestNumber);              //print secondSmallestNumber
  return secondSmallestNumber;
}

findSecondSmallestNumber(numbers)                 //memanggil/menjalankan function findSecondSmallestNumber(numbers)

                                                    