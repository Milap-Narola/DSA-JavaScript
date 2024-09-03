const longestPalindrome = (s) => {
    if (s.length < 1) return "";

    let start = 0;
    let end = 0;

    for (let i = 0; i < s.length; i++) {
        let len1 = isPalindrome(s, i, i); 
        let len2 = isPalindrome(s, i, i + 1); 

        let len = Math.max(len1, len2);

        if (len > end - start) {
            if (len1 > len2) {
                start = i - Math.floor((len1 - 1) / 2);
                end = i + Math.floor((len1 - 1) / 2);
            } else {
                start = i - Math.floor((len2 - 2) / 2);
                end = i + Math.floor(len2 / 2);
            }
        }
    }

    return s.slice(start, end + 1);
};

const isPalindrome = (s, left, right) => {
    let l = left, r = right;
    while (l >= 0 && r < s.length && s[l] === s[r]) {
        l--;
        r++;
    }
    return r - l - 1;
};

let s = "ababd";
console.log(longestPalindrome(s)); 