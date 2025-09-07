// akshay code, first check for the minimum and profit while comparing with every element

var maxProfit = function(prices) {
   let min = prices[0]
   let profit = 0
   for(let i = 1;i<prices.length;i++){
        if(!(prices[i]<min)){
            if(prices[i] - min > profit){
                profit = prices[i] - min
            }
        }else{
            min = prices[i]
        }
   }
   return profit
};

const ans = maxProfit([7,1,5,3,6,4])
// console.log(ans)