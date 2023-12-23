const prompt = require("prompt-sync")();
const target = Math.round(Math.random()*100);
console.log(target);

let guesses = 0;

while(true){
    const guess = Number(prompt("Guess the number (0-100): "));
    guesses++;
    
    if(guess > target){
     console.log("Your guess is higher than target");
     continue;
    } else if(guess < target) {
     console.log("Your guess is lower than target");
     continue;
    }

    console.log("You guessed the target!");
    break;
}

console.log("You guessed the number in",guesses,"tries!");