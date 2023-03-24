/*
Write a function that takes an array of strings as an argument
and returns a new array with only the strings that start with
the letter "a".

Description: You are given an array of strings. You need to write
a function that takes this array as an argument and returns
a new array with only the strings that start with the letter "a".

# Expected result: ["apple", "avocado"]

Complete and fix the existing code:
*/

words = ["apple", "banana", "avocado"]              //array words

function filterStringsStartingWithA(strings) {      //membuat function filterStringsStartingWithA
  let filteredStrings = [];                         //membuat array filteredStrings untuk menampung hasilnya

  for (let i = 0; i < words.length; i++) {          //Looping i sebanyak panjang(.length) dari array words["apple", "banana", "avocado"] = 3. (i = 0; i < 3; i++)
    if (words[i].charAt(0) === "a") {               //Jika element pada array words["apple", "banana", "avocado"] memiliki string pada kata ke-0/pertama nya(charAt(0)) "a"
      filteredStrings.push(words[i])                //maka element tersebut akan dimasukan(push()) ke dalam filteredStrings
    }
  }
  console.log(filteredStrings)                      //print filteredStrings
  return filteredStrings;
}

filterStringsStartingWithA(words)                   //memanggil/menjalankan function filterStringsStartingWithA(words)