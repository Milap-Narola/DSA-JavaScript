function isPrime(num) {
    
    let i =2; 
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) {
            return false; 
      }
      i += 6;
    }
    if (num <= 1) return false; 
  

    if (num === 2 || num === 3) {
      return true; 
    }
  

    if (num % 2 === 0 || num % 3 === 0) {
      return false; 
    }
  
    return true;
  }
  
  function primesN(n) {
    const primes = [];
    for (let i = 2; i <= n; i++) {
      if (isPrime(i)) {
        primes.push(i); 
      }
    }
    return primes;
  }

console.log(primesN(10)); 
console.log(primesN(20));