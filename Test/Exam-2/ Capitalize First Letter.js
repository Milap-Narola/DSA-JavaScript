function capitalizeWords(input) {
    let result = '';
    let capital = true;

    for (let i = 0; i < input.length; i++) {
        let char = input[i];
        
        if (capital && char >= 'a' && char <= 'z') {

            result += String.fromCharCode(char.charCodeAt(0) - 32);
            capital = false;
        } else {
            result += char;
        }


        if (char === ' ') {
            capital = true;
        }
    }

    return result;
}


let input = "the quick brown fox jumps over the lazy dog";
let output = capitalizeWords(input);
console.log(output); 
