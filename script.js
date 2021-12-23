let rm = Math.ceil(Math.random() * 100);
function checkGuess() {
  let inputValue = document.getElementById("userInput").value;
  let resultElement = document.getElementById("gameResult");
  let str1 = "";
  if (inputValue < rm) {
    str1 = "Too Low! Try Again.";
    resultElement.classList.add("setBackgroundcolorblue");
  } else if (inputValue > rm) {
    str1 = "Too High! Try Again.";
    resultElement.classList.add("setBackgroundcolorblue");
  } else {
    str1 = "Congratulations! You got it right.";
    resultElement.classList.add("setBackgroundcolorgreen");
  }
  resultElement.textContent = str1;
}
