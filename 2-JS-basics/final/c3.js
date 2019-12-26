/*****************************
 * CODING CHALLENGE 3
 */

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). 
He likes to tip 
20% of the bill when the bill is less than $50, 
15% when the bill is between $50 and $200, and 
10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀
*/

var bills=[124,48,268];
var tips=[],totals=[];
 
var tipCalculater = function(bills){

    for(item of bills){
        if(item>200){
            tips.push(item*.1)
            totals.push(item*0.1+item)
        }else if (item < 200 && item >50 ) {
            tips.push(item * .15);
            totals.push(item * .15 + item);
        }else{
            tips.push(item * 0.2);
            totals.push(item * .2 + item);

        }
    }

}

tipCalculater(bills);

console.log(bills);
console.log(tips);
console.log(totals);