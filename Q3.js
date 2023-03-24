/*
rite a function that takes an array of numbers as an argument and
returns a new array with only the even numbers from the original
array.

Description: You are given an array of numbers. You need to writea
function that takes this array as an argument and returns a
new array with only the even numbers from the original array.

# Expected result: [2,4]

Complete and fix the existing code:
*/

numbers = [1,2,3,4,5]                           //array numbers

function filterEvenNumbers(numbers) {           //membuat function filterEvenNumbers
  let evenNumbers = [];                         //penampung evenNumbers

  for (let i = 1; i < numbers.length; i++) {    //Looping i sebanyak panjang dari array numbers[1,2,3,4,5] = 5
    if (numbers[i] % 2 === 0) {                 //Jika element pada array numbers yang hasilnya itu habis dibagi 2 (dibagi 2 hasilnya 0)
        evenNumbers.push(numbers[i])            //maka element pada array numbers yang dibagi 2 yang hasilnya 0 tersebut akan dimasukan(push()) kedalam array evenNumbers.
    }
  }
  console.log(evenNumbers);                     //print evenNumbers
  return evenNumbers;
}

filterEvenNumbers(numbers)                      //memanggil/menjalankan function filterEvenNumbers(numbers) 