console.log("hello world");
let num = prompt("enter the max number : -  ")
// console.log(num);

let random = Math.floor(Math.random()* num + 1);
console.log(random);

let guess = prompt("Enter the guess number : ");

while(true){
    if(guess == "quit"){
        console.log("you quit the game!");
        break    
    }
    if (guess == random ){
        console.log(`you guess ${random} the number : ${guess} you win`);
        break  
    }else if (guess > random ){
        guess = prompt("hint : please enter a smallest number");
    }else{
        guess = prompt("hint : please enter a largest number");
    }
}