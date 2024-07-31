function findMissingNumbers(array, count) {
  let missing = [];
  for (let i = 1; i <= count; i++) {
    if (array.indexOf(i) == -1) {
      missing.push(i);
    }
  }
  return missing;
}


let a = [1, 2, 4, 5,6];
let b =[10,11,13,14]
let count = 6;

let missingNumbers = findMissingNumbers(a, count);
let missingNumbers2 = findMissingNumbers(b, count);
console.log(missingNumbers); 
console.log(missingNumbers2); 

