let number = parseInt(prompt("Enter a number!"))
while (!number) {
  number = parseInt(prompt("Enter a valid number!"))
}
//use while loop,and it can keep asking

const targetNum = Math.floor(Math.random() * number) + 1
console.log(targetNum)

let guessNum = parseInt(prompt("Enter Your First Guess!"))
let attempts = 1

while (parseInt(guessNum) != targetNum) {
  if (guessNum == "q") {
    break
  }
  attempts++
  if (guessNum > targetNum) {
    guessNum = prompt("Too High!Enter a new guess!")
  }
  else {
    guessNum = prompt("Too Low!Enter a new guess!")
  }
}
if (guessNum == "q") {
  console.log("OK,You quit.")
} else {
  console.log(`You got it! It took you ${attempts} guesses!`)
}