const input = document.getElementById("validation-input");

input.addEventListener("blur", () => {
  const inputValue = input.value;
  const expectedLength = Number(input.dataset.length, 10);

  if (inputValue.length === expectedLength && !isNaN(inputValue)) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
});
