/**
 * If the function f1 calls another function f2 and f2 calls f1 then it is indirect recursion (or mutual recursion).
 */

let money = 100;
let apple = 0;

// Function F1 - check the amount and calls buyMore apples
function buyApple(x) {
    if (x > 0) {
        console.log("i have", x, "Rs and i have bought ", apple);
        buyMore(x);
    } else {
        console.log("Broke");
    }
}

//Function F2 - buys apples and deducts amount
function buyMore(x) {
    x -= 10;
    apple++;
    buyApple(x)
}

buyApple(money)
