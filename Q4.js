/*
Write a function that takes an array of strings as an argument and
returns a new array with the length of each string in the original
array.

Description: You are given an array of strings. You need to write a
function that takes this array as an argument and returns a
new array with the length of each string in the original array.

# Expected result: [5, 5]

Complete and fix the existing code:
*/


words = ["hello", "world"]                      //array words

function getLengthsOfStrings(strings) {         //membuat function getLengthsOfStrings
  let lengths = [];                             //membuat array lengths untuk menampung hasilnya

  for (let i = 0; i < words.length; i++) {      //Looping i sebanyak panjang dari array words["hello", "world"] = 2
    lengths.push(words[i].length)               //panjang element[i] pada array words ["hello", "world"] akan di masukan(push()) kedalam array lengths[]
  }                                             //note: panjang dari element "hello" = 5, "world" = 5
  console.log(lengths);                         //print lengths
  return lengths;
}

getLengthsOfStrings(words)                      //memanggil/menjalankan function getLengthsOfStrings(words) 