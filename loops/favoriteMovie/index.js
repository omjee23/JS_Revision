console.log("hello world!");
const favoriteMovie = "avatar";
let guessName = prompt("Guess the My favorite movie name:- ")
while(guessName != favoriteMovie && guessName != "quit"){
    guessName = prompt("wrong guess please guess again: ")

}
if (guessName == favoriteMovie){
    console.log("Congratulations you guess! ");
}else{
    console.log("you quit! ");
    
}
