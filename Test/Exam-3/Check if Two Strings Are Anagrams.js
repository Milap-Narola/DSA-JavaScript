/* Example Input and Output:
1. Input: str1 = 'listen', str2 = 'silent' - Output: True
2. Input: str1 = 'apple', str2 = 'pale' - Output: False */


const anagrams = (str3, str4) => {

    let sorted1 = str3.split('').sort().join('');
    let sorted2 = str4.split('').sort().join('');
    if (sorted1!== sorted2) {

        return false;
    }
    else {
        return true;
    }

    
    
}
let str1 = 'listen'
let str2 = 'silent'
let str3 = 'apple'
let str4 = 'pale'

console.log(anagrams(str3, str4));



// const maxProfit = (str1, str2, str3, str4) => {
//     let sort1 = str1.split("").sort();
//     let sort2 = str2.split("").sort();
//     for (let i = 0; i < sort1.length; i++) {
//         for (let j = 0; j < sort2.length; j++) {

//             if (sort1[i] == sort2[i]) {
//                 // console.log(sort1[i],sort2[i]);
//                 return true;
//             }
//             else {
//                 return false;
//             }
//         }


//     }
// }


// console.log(maxProfit(str1, str2,str3))

