const input = document.getElementById("font-size-control");
const textSize = document.getElementById("text");

input.addEventListener("input", (event) => {
  const fontValue = event.target.value;
  textSize.style.fontSize = `${fontValue}px`;
});
