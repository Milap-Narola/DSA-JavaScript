/*Example Input and Output:
1. Input: prices = [7, 1, 5, 3, 6, 4] - Output: 5
2. Input: prices = [7, 6, 4, 3, 1] - Output: 0 */


// function maxProfit(prices) {

//     let minPrice = Infinity;
//     let maxProfit = 0;
//     for (let price of prices) {

//         minPrice = Math.min(minPrice, price);
//         maxProfit = Math.max(maxProfit, price - minPrice);
//     }
//     return maxProfit;
// }


const maxProfit = (prices)=> {
    let ans = 0;
    let minProfit = prices[0];
    for (let i of prices) {
        ans = Math.max(ans, i - minProfit);
        minProfit = Math.min(minProfit, i);
    }
    return ans;
};



 let prices1 = [7, 1, 5, 3, 6, 4];
 let prices2 = [7, 6, 4, 3, 1];

 console.log(maxProfit(prices1));
 console.log(maxProfit(prices2));
