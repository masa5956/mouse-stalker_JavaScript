
const elem = document.querySelector("#greetmsg");
const greet = "いい国作ろう鎌倉幕府";


const word = greet.split("");
let i = 0;
console.log(word[0]);
const intro = setInterval(function () {
  elem.textContent += word[i];

  if (i == word.length - 1) {
    clearInterval(intro);
  }
  i++;
 
}, 500);