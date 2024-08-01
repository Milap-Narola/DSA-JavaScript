<<<<<<< HEAD

function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

=======
function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

>>>>>>> 22f2d13fceddb237500ccd79446cb2c68b953dab
let originalString = "hello";
let reversedString = reverseString(originalString);
console.log(reversedString);
