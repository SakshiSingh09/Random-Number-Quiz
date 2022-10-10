var randomNum =  Math.floor(Math.random()*100)+1;
console.log(randomNum);
var num_of_guesses = 0;
var numList = [];
var msg1 = document.getElementById("guessStatus");
var msg2 = document.getElementById("chances");
var msg3 = document.getElementById("guesslistarray");
document.querySelector("#myBtn").addEventListener("click",function(){
  var inputNum = document.getElementById("formIn").value;
  if(inputNum>0 && inputNum<101){
    num_of_guesses += 1;
    numList.push(inputNum);
    if(randomNum == inputNum){
      msg1.textContent = "Your guess is right. Hurray!!"
      msg2.textContent = num_of_guesses;
      msg3.textContent = "Guesses Number are :" + numList;
    }else if(randomNum > inputNum){
      msg1.textContent = "Your guess is too low!";
      msg2.textContent = num_of_guesses;
      msg3.textContent = "Guesses Number are :" + numList;
    }else if(randomNum < inputNum){
      msg1.textContent = "Your guess is too high!";
      msg2.textContent = num_of_guesses;
      msg3.textContent = "Guesses Number are :" + numList;
    }
    document.getElementById("formIn").value = '';
  }
  else{
    alert("Enter number between 1 and 100");
  }
})
